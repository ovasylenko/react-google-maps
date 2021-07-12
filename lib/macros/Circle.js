"use strict";

exports.__esModule = true;
exports.default = exports.Circle = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Circle$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[CIRCLE]\"\n}";
/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var Circle = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Circle, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  function Circle(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var circle = new google.maps.Circle();
    (0, _MapChildHelper.construct)(Circle.propTypes, updaterMap, _this.props, circle);
    circle.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.CIRCLE] = circle, _this$state);
    return _this;
  }

  var _proto = Circle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.CIRCLE], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.CIRCLE], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var circle = this.state[_constants.CIRCLE];

    if (circle) {
      circle.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return Circle;
}(_react.default.PureComponent);

exports.Circle = Circle;
Circle.propTypes = {
  __jscodeshiftPlaceholder__: null
};
Circle.contextTypes = (_Circle$contextTypes = {}, _Circle$contextTypes[_constants.MAP] = _propTypes.default.object, _Circle$contextTypes);
var _default = Circle;
exports.default = _default;
var eventMap = {};
var updaterMap = {};