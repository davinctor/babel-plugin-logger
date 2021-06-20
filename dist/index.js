var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var getFunctionName=function getFunctionName(path){var functionParent=path.getFunctionParent();switch(functionParent.type){case"ClassMethod":{return functionParent.node.key.name;}case"FunctionDeclaration":{return functionParent.node.id.name;}case"FunctionExpression":case"ArrowFunctionExpression":{var _functionParent$node,_functionParent$node$,_functionParent$paren,_functionParent$conta;if(functionParent.parent.type==="AssignmentExpression"){return functionParent.container.left.property.name;}var name=(_functionParent$node=functionParent.node)==null?void 0:(_functionParent$node$=_functionParent$node.id)==null?void 0:_functionParent$node$.name;if(name!=null&&name.includes("$")){return getFunctionName(functionParent.parentPath);}return name||((_functionParent$paren=functionParent.parent.key)==null?void 0:_functionParent$paren.name)||((_functionParent$conta=functionParent.container.id)==null?void 0:_functionParent$conta.name);}default:{throw new Error("Unsupported: "+functionParent.type+" parent");}}};var getImportPathOrCrash=function getImportPathOrCrash(options){var importPath=options.opts.importPath;if(!importPath){throw new Error("importPath property should be provided. For instance: 'core/logger'.");}return importPath;};var getLoggerFunctionNamesOrCrash=function getLoggerFunctionNamesOrCrash(options){var functionNames=options.opts.functionsNames;if(!functionNames){throw new Error("functionNames property should be provided. For instance, ['logI', 'logW'].");}return functionNames;};var getDefaultGroupNameOrCrash=function getDefaultGroupNameOrCrash(options){var defaultGroupName=options.opts.defaultGroupName;if(!defaultGroupName){throw new Error("defaultGroupName property should be provided. For instance, 'app'");}return defaultGroupName;};var getFileName=function getFileName(plugin){return plugin.file.opts.filename||"";};var getExcludePatterns=function getExcludePatterns(options){return options.opts.exclude||[];};var shouldFileBeIgnored=function shouldFileBeIgnored(plugin,options){var filePath=getFileName(plugin);return getExcludePatterns(options).find(function(pattern){return new RegExp(pattern).test(filePath);});};module.exports=function(_ref){var t=_ref.types;return{name:"babel-plugin-logger",visitor:{Program:function Program(path,options){if(shouldFileBeIgnored(this,options)){return;}var importPath=getImportPathOrCrash(options);var isClassImplementation=options.opts.isClass;var identifier=t.identifier(isClassImplementation?"Logger":" * as Logger");var importDefaultSpecifier=t.importDefaultSpecifier(identifier);var importDeclaration=t.importDeclaration([importDefaultSpecifier],t.stringLiteral(importPath));path.unshiftContainer("body",importDeclaration);},CallExpression:function CallExpression(path,options){if(shouldFileBeIgnored(this,options)){return;}var filePath=getFileName(this);getImportPathOrCrash(options);var functionsNames=getLoggerFunctionNamesOrCrash(options);var defaultGroup=getDefaultGroupNameOrCrash(options);var callee=path.node.callee;if(!functionsNames.includes(callee.name)){return;}var relativePath="";var cwd=process.cwd&&process.cwd();if(filePath.charAt(0)!=="/"){relativePath=filePath;}else if(filePath){relativePath=filePath.substring(cwd.length+1);}var functionName=getFunctionName(path);var line=callee.loc.start.line;var calleeArguments=path.node.arguments;var from=t.objectExpression([t.objectProperty(t.stringLiteral("file"),t.stringLiteral(relativePath)),t.objectProperty(t.stringLiteral("func"),t.stringLiteral(functionName)),t.objectProperty(t.stringLiteral("line"),t.numericLiteral(line))]);switch(calleeArguments.length){case 1:{path.replaceWith(t.callExpression(t.memberExpression(t.identifier("Logger"),t.identifier(callee.name)),[from,calleeArguments[0],t.stringLiteral(defaultGroup)]));break;}case 2:case 3:{path.replaceWith(t.callExpression(t.memberExpression(t.identifier("Logger"),t.identifier(callee.name)),[from].concat((0,_toConsumableArray2.default)(calleeArguments))));break;}default:{path.remove();break;}}}}};};