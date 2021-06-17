const pluginTester = require("babel-plugin-tester").default;

const plugin = require("../src");

const path = require("path");

pluginTester({
  plugin,
  pluginOptions: {
    importPath: "core/functions/logger",
    functionsNames: ["logV", "logI", "logW", "logE"],
    defaultGroupName: "app",
    isClass: true,
    exclude: [],
  },
  fixtures: path.join(__dirname, "fixtures"),
});
