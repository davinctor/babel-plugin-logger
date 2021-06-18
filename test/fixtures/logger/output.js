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

const somethingArrowV = () => {
  Logger.logV(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowV",
      line: 9,
    },
    "hello",
    "app"
  );
  var x = 2;
};

function* generatorV() {
  Logger.logV(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorV",
      line: 14,
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
        line: 20,
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
        line: 24,
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
        line: 29,
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
        line: 34,
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
      line: 42,
    },
    "groupId",
    "hello"
  );
  var x = 2;
}

const somethingArrowI = () => {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowI",
      line: 47,
    },
    "groupId",
    "hello"
  );
  var x = 2;
};

function* generatorI() {
  Logger.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorI",
      line: 52,
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
        line: 58,
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
        line: 63,
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
        line: 67,
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
      line: 74,
    },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
}

const somethingArrowW = () => {
  Logger.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowW",
      line: 79,
    },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
};

function* generatorW() {
  Logger.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorW",
      line: 84,
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
        line: 90,
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
        line: 95,
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
        line: 100,
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
      line: 108,
    },
    "hello",
    "app"
  );
  var x = 2;
}

const somethingArrowE = () => {
  Logger.logE(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowE",
      line: 113,
    },
    "hello",
    "app"
  );
  var x = 2;
};

function* generatorE() {
  Logger.logE(
    {
      file: "test/fixtures/logger/code.js",
      func: "generatorE",
      line: 118,
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
        line: 124,
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
        line: 129,
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
        line: 134,
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
