// VERBOSE

function somethingV() {
  logV("hello");
  var x = 2;
}

const somethingArrowV = () => {
  logV("hello");
  var x = 2;
};

function* generatorV() {
  logV("hello");
  var x = 2;
}

class VClass {
  testMethod() {
    logV("hello");
  }

  testMethod2 = async () => {
    logV("hello2");
    var x = 2;
  };

  testMethod3 = function () {
    logV("hello2");
    var x = 2;
  };

  async testMethod4() {
    logV("hello3");
    var x = 2;
  }
}

// INFO

function somethingI() {
  logI("groupId", "hello");
  var x = 2;
}

const somethingArrowI = () => {
  logI("groupId", "hello");
  var x = 2;
};

function* generatorI() {
  logI("groupId", "hello");
  var x = 2;
}

class IClass {
  testMethod() {
    logI("groupId", "hello");
    var x = 2;
  }

  testMethod2 = async () => {
    logI("groupId", "hello");
  };

  async testMethod3() {
    logI("groupId", "hello");
  }
}

// WARNING

function somethingW() {
  logW("groupId", "hello", ["capability"]);
  var x = 2;
}

const somethingArrowW = () => {
  logW("groupId", "hello", ["capability"]);
  var x = 2;
};

function* generatorW() {
  logW("groupId", "hello", ["capability"]);
  var x = 2;
}

class WClass {
  testMethod() {
    logW("groupId", "hello", ["capability"]);
    var x = 2;
  }

  testMethod2 = async () => {
    logW("groupId", "hello", ["capability"]);
    var x = 2;
  };

  async testMethod3() {
    logW("groupId", "hello", ["capability"]);
    var x = 2;
  }
}

// ERROR

function somethingE() {
  logE("hello");
  var x = 2;
}

const somethingArrowE = () => {
  logE("hello");
  var x = 2;
};

function* generatorE() {
  logE("hello");
  var x = 2;
}

class EClass {
  testMethod() {
    logE("hello");
    var x = 2;
  }

  testMethod2 = async () => {
    logE("hello");
    var x = 2;
  };

  async testMethod3() {
    logE("hello");
    var x = 2;
  }
}

// IGNORES

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
