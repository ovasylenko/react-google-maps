"use strict";

exports.__esModule = true;
exports.default = exports.Circle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Circle$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
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
  }
  /**
   * Gets the `LatLngBounds` of this Circle.
   * @type LatLngBoundsLatLngBounds
   * @public
   */
  ;

  _proto.getBounds = function getBounds() {
    return this.state[_constants.CIRCLE].getBounds();
  }
  /**
   * Returns the center of this circle.
   * @type LatLng
   * @public
   */
  ;

  _proto.getCenter = function getCenter() {
    return this.state[_constants.CIRCLE].getCenter();
  }
  /**
   * Returns whether this circle can be dragged by the user.
   * @type boolean
   * @public
   */
  ;

  _proto.getDraggable = function getDraggable() {
    return this.state[_constants.CIRCLE].getDraggable();
  }
  /**
   * Returns whether this circle can be edited by the user.
   * @type boolean
   * @public
   */
  ;

  _proto.getEditable = function getEditable() {
    return this.state[_constants.CIRCLE].getEditable();
  }
  /**
   * Returns the radius of this circle (in meters).
   * @type number
   * @public
   */
  ;

  _proto.getRadius = function getRadius() {
    return this.state[_constants.CIRCLE].getRadius();
  }
  /**
   * Returns whether this circle is visible on the map.
   * @type boolean
   * @public
   */
  ;

  _proto.getVisible = function getVisible() {
    return this.state[_constants.CIRCLE].getVisible();
  };

  return Circle;
}(_react.default.PureComponent);

exports.Circle = Circle;
Circle.propTypes = {
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes.default.bool,

  /**
   * @type CircleOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type number
   */
  defaultRadius: _propTypes.default.number,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes.default.any,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes.default.bool,

  /**
   * @type CircleOptions
   */
  options: _propTypes.default.any,

  /**
   * @type number
   */
  radius: _propTypes.default.number,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes.default.func,

  /**
   * function
   */
  onDragStart: _propTypes.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes.default.func,

  /**
   * function
   */
  onRightClick: _propTypes.default.func,

  /**
   * function
   */
  onCenterChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func,

  /**
   * function
   */
  onRadiusChanged: _propTypes.default.func
};
Circle.contextTypes = (_Circle$contextTypes = {}, _Circle$contextTypes[_constants.MAP] = _propTypes.default.object, _Circle$contextTypes);
var _default = Circle;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onRadiusChanged: "radius_changed"
};
var updaterMap = {
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};