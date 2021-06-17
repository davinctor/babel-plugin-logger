"use strict";

var getFunctionName = path => {
  var functionParent = path.getFunctionParent().node;

  switch (functionParent.type) {
    case "ClassMethod":
      {
        return functionParent.key.name;
      }

    case "FunctionDeclaration":
      {
        return functionParent.id.name;
      }

    default:
      {
        throw new Error("Unsupported: ".concat(functionParent.type, " parent"));
      }
  }
};

var getImportPathOrCrash = options => {
  var importPath = options.opts.importPath;

  if (!importPath) {
    throw new Error("importPath property should be provided. For instance: 'core/logger'.");
  }

  return importPath;
};

var getLoggerFunctionNamesOrCrash = options => {
  var functionNames = options.opts.functionsNames;

  if (!functionNames) {
    throw new Error("functionNames property should be provided. For instance, ['logI', 'logW'].");
  }

  return functionNames;
};

var getDefaultGroupNameOrCrash = options => {
  var defaultGroupName = options.opts.defaultGroupName;

  if (!defaultGroupName) {
    throw new Error("defaultGroupName property should be provided. For instance, 'app'");
  }

  return defaultGroupName;
};

module.exports = function (_ref) {
  var {
    types: t
  } = _ref;
  return {
    name: "babel-plugin-logger",
    visitor: {
      Program(path, options) {
        var importPath = getImportPathOrCrash(options);
        var isClassImplementation = options.opts.isClass;
        var identifier = t.identifier(isClassImplementation ? "Logger" : " * as Logger");
        var importDefaultSpecifier = t.importDefaultSpecifier(identifier);
        var importDeclaration = t.importDeclaration([importDefaultSpecifier], t.stringLiteral(importPath));
        path.unshiftContainer("body", importDeclaration);
      },

      CallExpression(path, options) {
        getImportPathOrCrash(options);
        var functionsNames = getLoggerFunctionNamesOrCrash(options);
        var defaultGroup = getDefaultGroupNameOrCrash(options);
        var callee = path.node.callee; // ignore not target functions

        if (!functionsNames.includes(callee.name)) {
          return;
        }

        var relativePath = "";
        var cwd = process.cwd && process.cwd();
        var filePath = this.file.opts.filename || "";

        if (filePath.charAt(0) !== "/") {
          relativePath = filePath;
        } else if (filePath) {
          relativePath = filePath.substring(cwd.length + 1);
        }

        var functionName = getFunctionName(path);
        var line = callee.loc.start.line;
        var calleeArguments = path.node.arguments;
        var from = t.objectExpression([t.objectProperty(t.stringLiteral("file"), t.stringLiteral(relativePath)), t.objectProperty(t.stringLiteral("func"), t.stringLiteral(functionName)), t.objectProperty(t.stringLiteral("line"), t.numericLiteral(line))]);

        switch (calleeArguments.length) {
          // only message
          case 1:
            {
              path.replaceWith(t.callExpression(t.memberExpression(t.identifier("Logger"), t.identifier(callee.name)), [from, calleeArguments[0], t.stringLiteral(defaultGroup)]));
              break;
            }
          // message, group

          case 2: // message, group, capabilities

          case 3:
            {
              path.replaceWith(t.callExpression(t.memberExpression(t.identifier("Logger"), t.identifier(callee.name)), [from, ...calleeArguments]));
              break;
            }

          default:
            {
              // Unsupported arguments number
              path.remove();
              break;
            }
        }
      }

    }
  };
};