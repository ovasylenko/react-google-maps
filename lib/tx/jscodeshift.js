"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _glob = _interopRequireDefault(require("glob"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _jscodeshift = _interopRequireDefault(require("jscodeshift"));

var _MapChild = _interopRequireDefault(require("./MapChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var relativeToCwd = function relativeToCwd(it) {
  return _path.default.relative(process.cwd(), it);
};

_glob.default.sync("**/*.jsx", {
  cwd: _path.default.resolve(__dirname, "../macros/"),
  ignore: "*.spec.jsx"
}) // .slice(0, 1)
.map(function (it) {
  var filename = _path.default.resolve(__dirname, "../macros/", it);

  var nextFilename = _path.default.resolve(__dirname, "../components/", it);

  console.log("Generating " + relativeToCwd(nextFilename) + " from " + relativeToCwd(filename));

  var source = _fs.default.readFileSync(filename, "utf8");

  var output = (0, _MapChild.default)({
    source: source
  }, {
    jscodeshift: _jscodeshift.default
  });

  _mkdirp.default.sync(_path.default.dirname(nextFilename));

  _fs.default.writeFileSync(nextFilename, output);
});