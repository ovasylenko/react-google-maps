"use strict";

exports.__esModule = true;
exports.default = exports.InfoWindow = exports.__jscodeshiftPlaceholder__ = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _InfoWindow$contextTy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"prohibitedPropNames\": [\n    \"content\"\n  ],\n  \"eventMapOverrides\": {\n    \"onCloseClick\": \"closeclick\",\n    \"onDomReady\": \"domready\"\n  },\n  \"getInstanceFromComponent\": \"this.state[INFO_WINDOW]\"\n}";
/**
 * A wrapper around `google.maps.InfoWindow`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var InfoWindow = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(InfoWindow, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  function InfoWindow(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var infoWindow = new google.maps.InfoWindow();
    (0, _MapChildHelper.construct)(InfoWindow.propTypes, updaterMap, _this.props, infoWindow);
    infoWindow.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.INFO_WINDOW] = infoWindow, _this$state);
    return _this;
  }

  var _proto = InfoWindow.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (!_canUseDom.default || this.containerElement) {
      return;
    }

    if (_react.default.version.match(/^16/)) {
      this.containerElement = document.createElement("div");
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.INFO_WINDOW], eventMap);

    if (_react.default.version.match(/^16/)) {
      this.state[_constants.INFO_WINDOW].setContent(this.containerElement);

      open(this.state[_constants.INFO_WINDOW], this.context[_constants.ANCHOR]);
      return;
    }

    var content = document.createElement("div");

    _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), content);

    this.state[_constants.INFO_WINDOW].setContent(content);

    open(this.state[_constants.INFO_WINDOW], this.context[_constants.ANCHOR]);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.INFO_WINDOW], eventMap, updaterMap, prevProps);

    if (_react.default.version.match(/^16/)) {
      return;
    }

    if (this.props.children !== prevProps.children) {
      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.state[_constants.INFO_WINDOW].getContent());
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var infoWindow = this.state[_constants.INFO_WINDOW];

    if (infoWindow) {
      if (!_react.default.version.match(/^16/) && infoWindow.getContent()) {
        _reactDom.default.unmountComponentAtNode(infoWindow.getContent());
      }

      infoWindow.setMap(null);
    }
  };

  _proto.render = function render() {
    if (_react.default.version.match(/^16/)) {
      return /*#__PURE__*/_reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.containerElement);
    }

    return false;
  };

  return InfoWindow;
}(_react.default.PureComponent);

exports.InfoWindow = InfoWindow;
InfoWindow.propTypes = {
  __jscodeshiftPlaceholder__: null
};
InfoWindow.contextTypes = (_InfoWindow$contextTy = {}, _InfoWindow$contextTy[_constants.MAP] = _propTypes.default.object, _InfoWindow$contextTy[_constants.ANCHOR] = _propTypes.default.object, _InfoWindow$contextTy);
var _default = InfoWindow;
exports.default = _default;

var open = function open(infoWindow, anchor) {
  if (anchor) {
    infoWindow.open(infoWindow.getMap(), anchor);
  } else if (infoWindow.getPosition()) {
    infoWindow.open(infoWindow.getMap());
  } else {
    (0, _invariant.default)(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
  }
};

var eventMap = {};
var updaterMap = {};