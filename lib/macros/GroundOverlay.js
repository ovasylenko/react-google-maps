"use strict";

exports.__esModule = true;
exports.default = exports.GroundOverlay = exports.__jscodeshiftPlaceholder__ = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _GroundOverlay$contex;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[GROUND_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.GroundOverlay`
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var GroundOverlay = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(GroundOverlay, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  function GroundOverlay(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _warning.default)(!props.url || !props.bounds, "\nFor GroundOveray, url and bounds are passed in to constructor and are immutable\n after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (\n See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)\n Hence, use the corresponding two props provided by `react-google-maps`.\n They're prefixed with _default_ (defaultUrl, defaultBounds).\n\n In some cases, you'll need the GroundOverlay component to reflect the changes\n of url and bounds. You can leverage the React's key property to remount the\n component. Typically, just `key={url}` would serve your need.\n See https://github.com/tomchentw/react-google-maps/issues/655\n");
    var groundOverlay = new google.maps.GroundOverlay(props.defaultUrl || props.url, props.defaultBounds || props.bounds);
    (0, _MapChildHelper.construct)(GroundOverlay.propTypes, updaterMap, _this.props, groundOverlay);
    groundOverlay.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.GROUND_LAYER] = groundOverlay, _this$state);
    return _this;
  }

  var _proto = GroundOverlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.GROUND_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.GROUND_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var _GroundOverlay = this.state[_constants.GROUND_LAYER];

    if (_GroundOverlay) {
      _GroundOverlay.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return GroundOverlay;
}(_react.default.PureComponent);

exports.GroundOverlay = GroundOverlay;
GroundOverlay.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * @type string
   */
  defaultUrl: _propTypes.default.string
  /* v10.0.0 .isRequired */
  ,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   */
  defaultBounds: _propTypes.default.object
  /* v10.0.0 .isRequired */
  ,

  /**
   * @type string
   * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
   */
  url: _propTypes.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
   */
  bounds: _propTypes.default.object
};
GroundOverlay.contextTypes = (_GroundOverlay$contex = {}, _GroundOverlay$contex[_constants.MAP] = _propTypes.default.object, _GroundOverlay$contex);
var _default = GroundOverlay;
exports.default = _default;
var eventMap = {};
var updaterMap = {};