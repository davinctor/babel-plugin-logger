const getFunctionName = (path) => {
  const functionParent = path.getFunctionParent().node;
  switch (functionParent.type) {
    case "ClassMethod": {
      return functionParent.key.name;
    }
    case "FunctionDeclaration": {
      return functionParent.id.name;
    }
    default: {
      throw new Error(`Unsupported: ${functionParent.type} parent`);
    }
  }
};

const getImportPathOrCrash = (options) => {
  const importPath = options.opts.importPath;
  if (!importPath) {
    throw new Error(
      "importPath property should be provided. For instance: 'core/logger'."
    );
  }
  return importPath;
};

const getLoggerFunctionNamesOrCrash = (options) => {
  const functionNames = options.opts.functionsNames;
  if (!functionNames) {
    throw new Error(
      "functionNames property should be provided. For instance, ['logI', 'logW']."
    );
  }
  return functionNames;
};

const getDefaultGroupNameOrCrash = (options) => {
  const defaultGroupName = options.opts.defaultGroupName;
  if (!defaultGroupName) {
    throw new Error(
      "defaultGroupName property should be provided. For instance, 'app'"
    );
  }
  return defaultGroupName;
};

const getFileName = (plugin) => plugin.file.opts.filename || "";

const getExcludePatterns = (options) => options.opts.exclude || [];

const shouldFileBeIgnored = (plugin, options) => {
  const filePath = getFileName(plugin);
  return getExcludePatterns(options).find((pattern) =>
    new RegExp(pattern).test(filePath)
  );
};

module.exports = function ({ types: t }) {
  return {
    name: "babel-plugin-logger",
    visitor: {
      Program(path, options) {
        if (shouldFileBeIgnored(this, options)) {
          return;
        }

        const importPath = getImportPathOrCrash(options);
        const isClassImplementation = options.opts.isClass;
        const identifier = t.identifier(
          isClassImplementation ? "Logger" : " * as Logger"
        );
        const importDefaultSpecifier = t.importDefaultSpecifier(identifier);
        const importDeclaration = t.importDeclaration(
          [importDefaultSpecifier],
          t.stringLiteral(importPath)
        );
        path.unshiftContainer("body", importDeclaration);
      },
      CallExpression(path, options) {
        if (shouldFileBeIgnored(this, options)) {
          return;
        }

        const filePath = getFileName(this);

        getImportPathOrCrash(options);
        const functionsNames = getLoggerFunctionNamesOrCrash(options);
        const defaultGroup = getDefaultGroupNameOrCrash(options);

        const callee = path.node.callee;

        // ignore not target functions
        if (!functionsNames.includes(callee.name)) {
          return;
        }

        let relativePath = "";
        const cwd = process.cwd && process.cwd();

        if (filePath.charAt(0) !== "/") {
          relativePath = filePath;
        } else if (filePath) {
          relativePath = filePath.substring(cwd.length + 1);
        }

        const functionName = getFunctionName(path);
        const line = callee.loc.start.line;
        const calleeArguments = path.node.arguments;

        const from = t.objectExpression([
          t.objectProperty(
            t.stringLiteral("file"),
            t.stringLiteral(relativePath)
          ),
          t.objectProperty(
            t.stringLiteral("func"),
            t.stringLiteral(functionName)
          ),
          t.objectProperty(t.stringLiteral("line"), t.numericLiteral(line)),
        ]);

        switch (calleeArguments.length) {
          // only message
          case 1: {
            path.replaceWith(
              t.callExpression(
                t.memberExpression(
                  t.identifier("Logger"),
                  t.identifier(callee.name)
                ),
                [from, calleeArguments[0], t.stringLiteral(defaultGroup)]
              )
            );
            break;
          }
          // message, group
          case 2:
          // message, group, capabilities
          case 3: {
            path.replaceWith(
              t.callExpression(
                t.memberExpression(
                  t.identifier("Logger"),
                  t.identifier(callee.name)
                ),
                [from, ...calleeArguments]
              )
            );
            break;
          }
          default: {
            // Unsupported arguments number
            path.remove();
            break;
          }
        }
      },
    },
  };
};
