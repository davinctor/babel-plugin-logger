# babel-plugin-logger
The babel plugin replaces custom log functions with custom logger invocations.  
The first argument would be provided with a code location description. You don't need anymore to write imports and hardcode function names or line numbers.  
Comes in handy for ReactNative applications when it's not possible to retrieve code information in runtime.  

## How to install
npm: `npm i -D davinctor/babel-plugin-logger#main`  
yarn: `yarn add 'babel-plugin-logger@https://github.com/davinctor/babel-plugin-logger#head=main'`

## How to use it?
The plugin transforms invocation from:
```
function somethingV() {
  logV("hello");
  var x = 2;
}
```
to (the output would be)
```
function somethingV() {
  Logger.logV(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingV",
      line: 4,
    },
    "hello",
    "app"
  );
  var x = 2;
}
```
This sample requires babel plugin to have the proper configuration. It should have `functionsNames` plugin configuration property, in this case it should be `functionNames: ['logV']` at least.

## Configuration
Sample of plugin configuration:
```
{
  plugins: [
    [
      'logger',
      {
        importPath: "core/logger",
        functionsNames: ["logV", "logI", "logW", "logE"],
        defaultGroupName: "app",
        excluded: ["node_modules"]
      },
    ]
  ]
}
```

### Plugin options
- `importPath` - the custom logger implementation file path (could be relative) (**required**)
- `functionNames` - the custom logger implementation methods (**required**)
- `defaultGroupName` - the logger default group name when is not provided (**required**)
- `isClass` - helps plugin to understand how to import log functions. Default value is `false`.
- `exclude` - the list of patterns for file should be excluded from traversing (transforming) process

## Running the tests
`yarn test` or `npm run test`

