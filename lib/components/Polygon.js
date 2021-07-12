"use strict";

exports.__esModule = true;
exports.default = exports.Polygon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Polygon$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
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
  }
  /**
   * Returns whether this shape can be dragged by the user.
   * @type boolean
   * @public
   */
  ;

  _proto.getDraggable = function getDraggable() {
    return this.state[_constants.POLYGON].getDraggable();
  }
  /**
   * Returns whether this shape can be edited by the user.
   * @type boolean
   * @public
   */
  ;

  _proto.getEditable = function getEditable() {
    return this.state[_constants.POLYGON].getEditable();
  }
  /**
   * Retrieves the first path.
   * @type MVCArray<LatLng>
   * @public
   */
  ;

  _proto.getPath = function getPath() {
    return this.state[_constants.POLYGON].getPath();
  }
  /**
   * Retrieves the paths for this polygon.
   * @type MVCArray<MVCArray<LatLng>>
   * @public
   */
  ;

  _proto.getPaths = function getPaths() {
    return this.state[_constants.POLYGON].getPaths();
  }
  /**
   * Returns whether this poly is visible on the map.
   * @type boolean
   * @public
   */
  ;

  _proto.getVisible = function getVisible() {
    return this.state[_constants.POLYGON].getVisible();
  };

  return Polygon;
}(_react.default.PureComponent);

exports.Polygon = Polygon;
Polygon.propTypes = {
  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes.default.bool,

  /**
   * @type PolygonOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: _propTypes.default.any,

  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  defaultPaths: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes.default.bool,

  /**
   * @type PolygonOptions
   */
  options: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: _propTypes.default.any,

  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  paths: _propTypes.default.any,

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
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func
};
Polygon.contextTypes = (_Polygon$contextTypes = {}, _Polygon$contextTypes[_constants.MAP] = _propTypes.default.object, _Polygon$contextTypes);
var _default = Polygon;
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
  onClick: "click",
  onDrag: "drag"
};
var updaterMap = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};