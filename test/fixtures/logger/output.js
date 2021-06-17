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
    var x = 2;
  };
  testMethod3 = function () {
    Logger.logV(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod3",
        line: 24,
      },
      "hello2",
      "app"
    );
    var x = 2;
  };

  async testMethod4() {
    Logger.logV(
      {
        file: "test/fixtures/logger/code.js",
        func: "testMethod4",
        line: 29,
      },
      "hello3",
      "app"
    );
    var x = 2;
  }
} // INFO

function somethingI() {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingI",
      line: 37,
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
      line: 42,
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
        line: 48,
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
        line: 53,
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
        line: 57,
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
      line: 64,
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
      line: 69,
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
        line: 75,
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
        line: 80,
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
        line: 85,
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
      line: 93,
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
      line: 98,
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
        line: 104,
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
        line: 109,
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
        line: 114,
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
