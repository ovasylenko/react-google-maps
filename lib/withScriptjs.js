"use strict";

exports.__esModule = true;
exports.withScriptjs = withScriptjs;
exports.default = void 0;

var _bind2 = _interopRequireDefault(require("lodash/bind"));

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["loadingElement", "googleMapURL"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LOADING_STATE_NONE = "NONE";
var LOADING_STATE_BEGIN = "BEGIN";
var LOADING_STATE_LOADED = "LOADED";

function withScriptjs(BaseComponent) {
  var factory = /*#__PURE__*/_react.default.createFactory(BaseComponent);

  var Container = /*#__PURE__*/function (_React$PureComponent) {
    _inheritsLoose(Container, _React$PureComponent);

    function Container() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
      _this.state = {
        loadingState: LOADING_STATE_NONE
      };
      _this.isUnmounted = false;
      _this.handleLoaded = (0, _bind2.default)(_this.handleLoaded, _assertThisInitialized(_this));
      return _this;
    }

    var _proto = Container.prototype;

    _proto.handleLoaded = function handleLoaded() {
      if (this.isUnmounted) {
        return;
      }

      this.setState({
        loadingState: LOADING_STATE_LOADED
      });
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this$props = this.props,
          loadingElement = _this$props.loadingElement,
          googleMapURL = _this$props.googleMapURL;
      (0, _invariant.default)(!!loadingElement && !!googleMapURL, "Required props loadingElement or googleMapURL is missing. You need to provide both of them.");
    };

    _proto.componentDidMount = function componentDidMount() {
      var loadingState = this.state.loadingState;

      if (loadingState !== LOADING_STATE_NONE || !_canUseDom.default) {
        return;
      }

      this.setState({
        loadingState: LOADING_STATE_BEGIN
      }); // Don't load scriptjs as a dependency since we do not want this module be used on server side.
      // eslint-disable-next-line global-require

      var scriptjs = require("scriptjs");

      var googleMapURL = this.props.googleMapURL;
      scriptjs(googleMapURL, this.handleLoaded);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.isUnmounted = true;
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          loadingElement = _this$props2.loadingElement,
          googleMapURL = _this$props2.googleMapURL,
          restProps = _objectWithoutPropertiesLoose(_this$props2, _excluded);

      var loadingState = this.state.loadingState;

      if (loadingState === LOADING_STATE_LOADED) {
        return factory(restProps);
      } else {
        return loadingElement;
      }
    };

    return Container;
  }(_react.default.PureComponent);

  Container.displayName = "withScriptjs(" + (0, _recompose.getDisplayName)(BaseComponent) + ")";
  Container.propTypes = {
    loadingElement: _propTypes.default.node.isRequired,
    googleMapURL: _propTypes.default.string.isRequired
  };
  return Container;
}

var _default = withScriptjs;
exports.default = _default;