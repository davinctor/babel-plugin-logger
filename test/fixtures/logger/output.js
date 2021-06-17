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

  testMethod2 = async () => {
    Logger.logV(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod2",
        line: 19,
      },
      "hello2",
      "app"
    );
  };

  async testMethod3() {
    Logger.logV(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod3",
        line: 23,
      },
      "hello3",
      "app"
    );
  }
} // INFO

function somethingI() {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingI",
      line: 30,
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
      line: 35,
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
        line: 41,
      },
      "groupId",
      "hello"
    );
    var x = 2;
  }

  testMethod2 = async () => {
    Logger.logI(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod2",
        line: 46,
      },
      "groupId",
      "hello"
    );
  };

  async testMethod3() {
    Logger.logI(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod3",
        line: 50,
      },
      "groupId",
      "hello"
    );
  }
} // WARNING

function somethingW() {
  Logger.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingW",
      line: 57,
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
      line: 62,
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
        line: 68,
      },
      "groupId",
      "hello",
      ["capability"]
    );
    var x = 2;
  }

  testMethod2 = async () => {
    Logger.logW(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod2",
        line: 73,
      },
      "groupId",
      "hello",
      ["capability"]
    );
    var x = 2;
  };

  async testMethod3() {
    Logger.logW(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod3",
        line: 78,
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
      line: 86,
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
      line: 91,
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
        line: 97,
      },
      "hello",
      "app"
    );
    var x = 2;
  }

  testMethod2 = async () => {
    Logger.logE(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod2",
        line: 102,
      },
      "hello",
      "app"
    );
    var x = 2;
  };

  async testMethod3() {
    Logger.logE(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod3",
        line: 107,
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
      func: "FUNCTION_NAME",
      line: 1,
    },
    "Test message"
  );
  Logger.logI(
    {
      file: "FILE",
      func: "FUNCTION_NAME",
      line: 1,
    },
    {
      message: "Test message",
    }
  );
  Logger.logW(
    {
      file: "FILE",
      func: "FUNCTION_NAME",
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
      func: "FUNCTION_NAME",
      line: 1,
    },
    "Test message",
    "app",
    ["testCapability1", "testCapability2", "testCapability3"]
  );
}
