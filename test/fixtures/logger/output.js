import Logger from "core/functions/logger";

// VERBOSE
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

function* generatorV() {
  Logger.logV(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorV",
      line: 9,
    },
    "hello",
    "app"
  );
  var x = 2;
}

class VClass {
  testMethod() {
    Logger.logV(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod",
        line: 15,
      },
      "hello",
      "app"
    );
  }
} // INFO

function somethingI() {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingI",
      line: 22,
    },
    "groupId",
    "hello"
  );
  var x = 2;
}

function* generatorI() {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorI",
      line: 27,
    },
    "groupId",
    "hello"
  );
  var x = 2;
}

class IClass {
  testMethod() {
    Logger.logI(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod",
        line: 33,
      },
      "groupId",
      "hello"
    );
    var x = 2;
  }
} // WARNING

function somethingW() {
  Logger.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingW",
      line: 41,
    },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
}

function* generatorW() {
  Logger.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorW",
      line: 46,
    },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
}

class WClass {
  testMethod() {
    Logger.logW(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod",
        line: 52,
      },
      "groupId",
      "hello",
      ["capability"]
    );
    var x = 2;
  }
} // ERROR

function somethingE() {
  Logger.logE(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingE",
      line: 60,
    },
    "hello",
    "app"
  );
  var x = 2;
}

function* generatorE() {
  Logger.logE(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorE",
      line: 65,
    },
    "hello",
    "app"
  );
  var x = 2;
}

class EClass {
  testMethod() {
    Logger.logE(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod",
        line: 71,
      },
      "hello",
      "app"
    );
    var x = 2;
  }
} // IGNORES

function shouldBeIgnoredI() {
  Logger.logV(
    {
      file: "FILE",
      func: "FUNCTIO_NAME",
      line: 1,
    },
    "Test message"
  );
  Logger.logI(
    {
      file: "FILE",
      func: "FUNCTIO_NAME",
      line: 1,
    },
    {
      message: "Test message",
    }
  );
  Logger.logW(
    {
      file: "FILE",
      func: "FUNCTIO_NAME",
      line: 1,
    },
    {
      message: "Test message",
    },
    "app"
  );
  Logger.logE(
    {
      file: "FILE",
      func: "FUNCTIO_NAME",
      line: 1,
    },
    "Test message",
    "app",
    ["testCapability1", "testCapability2", "testCapability3"]
  );
}
