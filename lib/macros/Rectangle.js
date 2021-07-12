"use strict";

exports.__esModule = true;
exports.default = exports.Rectangle = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Rectangle$contextTyp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[RECTANGLE]\"\n}";
/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var Rectangle = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Rectangle, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  function Rectangle(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var rectangle = new google.maps.Rectangle();
    (0, _MapChildHelper.construct)(Rectangle.propTypes, updaterMap, _this.props, rectangle);
    rectangle.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.RECTANGLE] = rectangle, _this$state);
    return _this;
  }

  var _proto = Rectangle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.RECTANGLE], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.RECTANGLE], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var rectangle = this.state[_constants.RECTANGLE];

    if (rectangle) {
      rectangle.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return Rectangle;
}(_react.default.PureComponent);

exports.Rectangle = Rectangle;
Rectangle.propTypes = {
  __jscodeshiftPlaceholder__: null
};
Rectangle.contextTypes = (_Rectangle$contextTyp = {}, _Rectangle$contextTyp[_constants.MAP] = _propTypes.default.object, _Rectangle$contextTyp);
var _default = Rectangle;
exports.default = _default;
var eventMap = {};
var updaterMap = {};