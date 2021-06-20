var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
var _logger = _interopRequireDefault2(require("core/functions/logger"));
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);
var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);
var _regenerator = _interopRequireDefault(
  require("@babel/runtime/regenerator")
);
var _marked = _regenerator.default.mark(generatorV),
  _marked2 = _regenerator.default.mark(generatorI),
  _marked3 = _regenerator.default.mark(generatorW),
  _marked4 = _regenerator.default.mark(generatorE);
function somethingV() {
  _logger.default.logV(
    { file: "test/fixtures/logger/code.js", func: "somethingV", line: 16 },
    "hello",
    "app"
  );
  var x = 2;
}
var somethingArrowV = function somethingArrowV() {
  _logger.default.logV(
    { file: "test/fixtures/logger/code.js", func: "somethingArrowV", line: 20 },
    "hello",
    "app"
  );
  var x = 2;
};
function generatorV() {
  var x;
  return _regenerator.default.wrap(function generatorV$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _logger.default.logV(
            {
              file: "test/fixtures/logger/code.js",
              func: "generatorV",
              line: 29,
            },
            "hello",
            "app"
          );
          x = 2;
        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
var VClass = (function () {
  function VClass() {
    (0, _classCallCheck2.default)(this, VClass);
    this.testMethod2 = function _callee() {
      var x;
      return _regenerator.default.async(
        function _callee$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _logger.default.logV(
                  {
                    file: "test/fixtures/logger/code.js",
                    func: "testMethod2",
                    line: 48,
                  },
                  "hello2",
                  "app"
                );
                x = 2;
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        },
        null,
        null,
        null,
        Promise
      );
    };
    this.testMethod3 = function () {
      _logger.default.logV(
        { file: "test/fixtures/logger/code.js", func: "testMethod3", line: 63 },
        "hello2",
        "app"
      );
      var x = 2;
    };
  }
  (0, _createClass2.default)(VClass, [
    {
      key: "testMethod",
      value: function testMethod() {
        _logger.default.logV(
          {
            file: "test/fixtures/logger/code.js",
            func: "testMethod",
            line: 71,
          },
          "hello",
          "app"
        );
      },
    },
    {
      key: "testMethod4",
      value: function testMethod4() {
        var x;
        return _regenerator.default.async(
          function testMethod4$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _logger.default.logV(
                    {
                      file: "test/fixtures/logger/code.js",
                      func: "testMethod4",
                      line: 83,
                    },
                    "hello3",
                    "app"
                  );
                  x = 2;
                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
  ]);
  return VClass;
})();
function somethingI() {
  _logger.default.logI(
    { file: "test/fixtures/logger/code.js", func: "somethingI", line: 102 },
    "groupId",
    "hello"
  );
  var x = 2;
}
var somethingArrowI = function somethingArrowI() {
  _logger.default.logI(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowI",
      line: 106,
    },
    "groupId",
    "hello"
  );
  var x = 2;
};
function generatorI() {
  var x;
  return _regenerator.default.wrap(function generatorI$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          _logger.default.logI(
            {
              file: "test/fixtures/logger/code.js",
              func: "generatorI",
              line: 115,
            },
            "groupId",
            "hello"
          );
          x = 2;
        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}
var IClass = (function () {
  function IClass() {
    (0, _classCallCheck2.default)(this, IClass);
    this.testMethod2 = function _callee2() {
      return _regenerator.default.async(
        function _callee2$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _logger.default.logI(
                  {
                    file: "test/fixtures/logger/code.js",
                    func: "testMethod2",
                    line: 133,
                  },
                  "groupId",
                  "hello"
                );
              case 1:
              case "end":
                return _context5.stop();
            }
          }
        },
        null,
        null,
        null,
        Promise
      );
    };
  }
  (0, _createClass2.default)(IClass, [
    {
      key: "testMethod",
      value: function testMethod() {
        _logger.default.logI(
          {
            file: "test/fixtures/logger/code.js",
            func: "testMethod",
            line: 151,
          },
          "groupId",
          "hello"
        );
        var x = 2;
      },
    },
    {
      key: "testMethod3",
      value: function testMethod3() {
        return _regenerator.default.async(
          function testMethod3$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  _logger.default.logI(
                    {
                      file: "test/fixtures/logger/code.js",
                      func: "testMethod3",
                      line: 163,
                    },
                    "groupId",
                    "hello"
                  );
                case 1:
                case "end":
                  return _context6.stop();
              }
            }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
  ]);
  return IClass;
})();
function somethingW() {
  _logger.default.logW(
    { file: "test/fixtures/logger/code.js", func: "somethingW", line: 181 },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
}
var somethingArrowW = function somethingArrowW() {
  _logger.default.logW(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowW",
      line: 185,
    },
    "groupId",
    "hello",
    ["capability"]
  );
  var x = 2;
};
function generatorW() {
  var x;
  return _regenerator.default.wrap(function generatorW$(_context7) {
    while (1) {
      switch ((_context7.prev = _context7.next)) {
        case 0:
          _logger.default.logW(
            {
              file: "test/fixtures/logger/code.js",
              func: "generatorW",
              line: 194,
            },
            "groupId",
            "hello",
            ["capability"]
          );
          x = 2;
        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked3);
}
var WClass = (function () {
  function WClass() {
    (0, _classCallCheck2.default)(this, WClass);
    this.testMethod2 = function _callee3() {
      var x;
      return _regenerator.default.async(
        function _callee3$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                _logger.default.logW(
                  {
                    file: "test/fixtures/logger/code.js",
                    func: "testMethod2",
                    line: 213,
                  },
                  "groupId",
                  "hello",
                  ["capability"]
                );
                x = 2;
              case 2:
              case "end":
                return _context8.stop();
            }
          }
        },
        null,
        null,
        null,
        Promise
      );
    };
  }
  (0, _createClass2.default)(WClass, [
    {
      key: "testMethod",
      value: function testMethod() {
        _logger.default.logW(
          {
            file: "test/fixtures/logger/code.js",
            func: "testMethod",
            line: 232,
          },
          "groupId",
          "hello",
          ["capability"]
        );
        var x = 2;
      },
    },
    {
      key: "testMethod3",
      value: function testMethod3() {
        var x;
        return _regenerator.default.async(
          function testMethod3$(_context9) {
            while (1) {
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  _logger.default.logW(
                    {
                      file: "test/fixtures/logger/code.js",
                      func: "testMethod3",
                      line: 245,
                    },
                    "groupId",
                    "hello",
                    ["capability"]
                  );
                  x = 2;
                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
  ]);
  return WClass;
})();
function somethingE() {
  _logger.default.logE(
    { file: "test/fixtures/logger/code.js", func: "somethingE", line: 264 },
    "hello",
    "app"
  );
  var x = 2;
}
var somethingArrowE = function somethingArrowE() {
  _logger.default.logE(
    {
      file: "test/fixtures/logger/code.js",
      func: "somethingArrowE",
      line: 268,
    },
    "hello",
    "app"
  );
  var x = 2;
};
function generatorE() {
  var x;
  return _regenerator.default.wrap(function generatorE$(_context10) {
    while (1) {
      switch ((_context10.prev = _context10.next)) {
        case 0:
          _logger.default.logE(
            {
              file: "test/fixtures/logger/code.js",
              func: "generatorE",
              line: 277,
            },
            "hello",
            "app"
          );
          x = 2;
        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked4);
}
var EClass = (function () {
  function EClass() {
    (0, _classCallCheck2.default)(this, EClass);
    this.testMethod2 = function _callee4() {
      var x;
      return _regenerator.default.async(
        function _callee4$(_context11) {
          while (1) {
            switch ((_context11.prev = _context11.next)) {
              case 0:
                _logger.default.logE(
                  {
                    file: "test/fixtures/logger/code.js",
                    func: "testMethod2",
                    line: 296,
                  },
                  "hello",
                  "app"
                );
                x = 2;
              case 2:
              case "end":
                return _context11.stop();
            }
          }
        },
        null,
        null,
        null,
        Promise
      );
    };
  }
  (0, _createClass2.default)(EClass, [
    {
      key: "testMethod",
      value: function testMethod() {
        _logger.default.logE(
          {
            file: "test/fixtures/logger/code.js",
            func: "testMethod",
            line: 315,
          },
          "hello",
          "app"
        );
        var x = 2;
      },
    },
    {
      key: "testMethod3",
      value: function testMethod3() {
        var x;
        return _regenerator.default.async(
          function testMethod3$(_context12) {
            while (1) {
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  _logger.default.logE(
                    {
                      file: "test/fixtures/logger/code.js",
                      func: "testMethod3",
                      line: 328,
                    },
                    "hello",
                    "app"
                  );
                  x = 2;
                case 2:
                case "end":
                  return _context12.stop();
              }
            }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
  ]);
  return EClass;
})();
function shouldBeIgnoredI() {
  _logger.default.logV(
    { file: "FILE", func: "FUNCTION_NAME", line: 1 },
    "Test message"
  );
  _logger.default.logI(
    { file: "FILE", func: "FUNCTION_NAME", line: 1 },
    { message: "Test message" }
  );
  _logger.default.logW(
    { file: "FILE", func: "FUNCTION_NAME", line: 1 },
    { message: "Test message" },
    "app"
  );
  _logger.default.logE(
    { file: "FILE", func: "FUNCTION_NAME", line: 1 },
    "Test message",
    "app",
    ["testCapability1", "testCapability2", "testCapability3"]
  );
}
