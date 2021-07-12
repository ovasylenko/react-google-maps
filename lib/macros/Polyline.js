"use strict";

exports.__esModule = true;
exports.default = exports.Polyline = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Polyline$contextType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[POLYLINE]\"\n}";
/**
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var Polyline = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Polyline, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  function Polyline(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var polyline = new google.maps.Polyline();
    (0, _MapChildHelper.construct)(Polyline.propTypes, updaterMap, _this.props, polyline);
    polyline.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.POLYLINE] = polyline, _this$state);
    return _this;
  }

  var _proto = Polyline.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.POLYLINE], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.POLYLINE], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var polyline = this.state[_constants.POLYLINE];

    if (polyline) {
      polyline.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return Polyline;
}(_react.default.PureComponent);

exports.Polyline = Polyline;
Polyline.propTypes = {
  __jscodeshiftPlaceholder__: null
};
Polyline.contextTypes = (_Polyline$contextType = {}, _Polyline$contextType[_constants.MAP] = _propTypes.default.object, _Polyline$contextType);
var _default = Polyline;
exports.default = _default;
var eventMap = {};
var updaterMap = {};