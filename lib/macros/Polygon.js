"use strict";

exports.__esModule = true;
exports.default = exports.Polygon = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Polygon$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[POLYGON]\"\n}";
/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var Polygon = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Polygon, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  function Polygon(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var polygon = new google.maps.Polygon();
    (0, _MapChildHelper.construct)(Polygon.propTypes, updaterMap, _this.props, polygon);
    polygon.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.POLYGON] = polygon, _this$state);
    return _this;
  }

  var _proto = Polygon.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.POLYGON], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.POLYGON], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var polygon = this.state[_constants.POLYGON];

    if (polygon) {
      polygon.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return Polygon;
}(_react.default.PureComponent);

exports.Polygon = Polygon;
Polygon.propTypes = {
  __jscodeshiftPlaceholder__: null
};
Polygon.contextTypes = (_Polygon$contextTypes = {}, _Polygon$contextTypes[_constants.MAP] = _propTypes.default.object, _Polygon$contextTypes);
var _default = Polygon;
exports.default = _default;
var eventMap = {};
var updaterMap = {};