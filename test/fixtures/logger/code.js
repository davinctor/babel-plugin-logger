// VERBOSE

function somethingV() {
  logV("hello");
  var x = 2;
}

function* generatorV() {
  logV("hello");
  var x = 2;
}

class VClass {
  testMethod() {
    logV("hello");
  }
}

// INFO

function somethingI() {
  logI("groupId", "hello");
  var x = 2;
}

function* generatorI() {
  logI("groupId", "hello");
  var x = 2;
}

class IClass {
  testMethod() {
    logI("groupId", "hello");
    var x = 2;
  }
}

// WARNING

function somethingW() {
  logW("groupId", "hello", ["capability"]);
  var x = 2;
}

function* generatorW() {
  logW("groupId", "hello", ["capability"]);
  var x = 2;
}

class WClass {
  testMethod() {
    logW("groupId", "hello", ["capability"]);
    var x = 2;
  }
}

// ERROR

function somethingE() {
  logE("hello");
  var x = 2;
}

function* generatorE() {
  logE("hello");
  var x = 2;
}

class EClass {
  testMethod() {
    logE("hello");
    var x = 2;
  }
}

// IGNORES

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
