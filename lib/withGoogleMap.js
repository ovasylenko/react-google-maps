"use strict";

exports.__esModule = true;
exports.withGoogleMap = withGoogleMap;
exports.default = void 0;

var _bind2 = _interopRequireDefault(require("lodash/bind"));

var _warning = _interopRequireDefault(require("warning"));

var _invariant = _interopRequireDefault(require("invariant"));

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("./constants");

var _excluded = ["containerElement", "mapElement"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function withGoogleMap(BaseComponent) {
  var _Container$childConte;

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
        map: null
      };
      _this.handleComponentMount = (0, _bind2.default)(_this.handleComponentMount, _assertThisInitialized(_this));
      return _this;
    }

    var _proto = Container.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[_constants.MAP] = this.state.map, _ref;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this$props = this.props,
          containerElement = _this$props.containerElement,
          mapElement = _this$props.mapElement;
      (0, _invariant.default)(!!containerElement && !!mapElement, "Required props containerElement or mapElement is missing. You need to provide both of them.\n The `google.maps.Map` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized.");
    };

    _proto.handleComponentMount = function handleComponentMount(node) {
      if (this.state.map || node === null) {
        return;
      }

      (0, _warning.default)("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168"); // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

      var map = new google.maps.Map(node);
      this.setState({
        map: map
      });
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          containerElement = _this$props2.containerElement,
          mapElement = _this$props2.mapElement,
          restProps = _objectWithoutPropertiesLoose(_this$props2, _excluded);

      var map = this.state.map;

      if (map) {
        return /*#__PURE__*/_react.default.cloneElement(containerElement, {}, /*#__PURE__*/_react.default.cloneElement(mapElement, {
          ref: this.handleComponentMount
        }), /*#__PURE__*/_react.default.createElement("div", null, factory(restProps)));
      } else {
        return /*#__PURE__*/_react.default.cloneElement(containerElement, {}, /*#__PURE__*/_react.default.cloneElement(mapElement, {
          ref: this.handleComponentMount
        }), /*#__PURE__*/_react.default.createElement("div", null));
      }
    };

    return Container;
  }(_react.default.PureComponent);

  Container.displayName = "withGoogleMap(" + (0, _recompose.getDisplayName)(BaseComponent) + ")";
  Container.propTypes = {
    containerElement: _propTypes.default.node.isRequired,
    mapElement: _propTypes.default.node.isRequired
  };
  Container.childContextTypes = (_Container$childConte = {}, _Container$childConte[_constants.MAP] = _propTypes.default.object, _Container$childConte);
  return Container;
}

var _default = withGoogleMap;
exports.default = _default;