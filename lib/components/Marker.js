"use strict";

exports.__esModule = true;
exports.default = exports.Marker = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Marker$contextTypes, _Marker$childContextT;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
var Marker = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Marker, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  function Marker(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var marker = new google.maps.Marker();
    (0, _MapChildHelper.construct)(Marker.propTypes, updaterMap, _this.props, marker);
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER];

    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!_this.props.noRedraw);
    } else {
      marker.setMap(_this.context[_constants.MAP]);
    }

    _this.state = (_this$state = {}, _this$state[_constants.MARKER] = marker, _this$state);
    return _this;
  }

  var _proto = Marker.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[_constants.ANCHOR] = this.context[_constants.ANCHOR] || this.state[_constants.MARKER], _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.MARKER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.MARKER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var marker = this.state[_constants.MARKER];

    if (marker) {
      var markerClusterer = this.context[_constants.MARKER_CLUSTERER];

      if (markerClusterer) {
        markerClusterer.removeMarker(marker, !!this.props.noRedraw);
      }

      marker.setMap(null);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  }
  /**
   *
   * @type Animation
   * @public
   */
  ;

  _proto.getAnimation = function getAnimation() {
    return this.state[_constants.MARKER].getAnimation();
  }
  /**
   *
   * @type boolean
   * @public
   */
  ;

  _proto.getClickable = function getClickable() {
    return this.state[_constants.MARKER].getClickable();
  }
  /**
   *
   * @type string
   * @public
   */
  ;

  _proto.getCursor = function getCursor() {
    return this.state[_constants.MARKER].getCursor();
  }
  /**
   *
   * @type boolean
   * @public
   */
  ;

  _proto.getDraggable = function getDraggable() {
    return this.state[_constants.MARKER].getDraggable();
  }
  /**
   *
   * @type string|Icon|Symbol
   * @public
   */
  ;

  _proto.getIcon = function getIcon() {
    return this.state[_constants.MARKER].getIcon();
  }
  /**
   *
   * @type MarkerLabel
   * @public
   */
  ;

  _proto.getLabel = function getLabel() {
    return this.state[_constants.MARKER].getLabel();
  }
  /**
   *
   * @type number
   * @public
   */
  ;

  _proto.getOpacity = function getOpacity() {
    return this.state[_constants.MARKER].getOpacity();
  }
  /**
   *
   * @type MarkerPlace
   * @public
   */
  ;

  _proto.getPlace = function getPlace() {
    return this.state[_constants.MARKER].getPlace();
  }
  /**
   *
   * @type LatLng
   * @public
   */
  ;

  _proto.getPosition = function getPosition() {
    return this.state[_constants.MARKER].getPosition();
  }
  /**
   *
   * @type MarkerShape
   * @public
   */
  ;

  _proto.getShape = function getShape() {
    return this.state[_constants.MARKER].getShape();
  }
  /**
   *
   * @type string
   * @public
   */
  ;

  _proto.getTitle = function getTitle() {
    return this.state[_constants.MARKER].getTitle();
  }
  /**
   *
   * @type boolean
   * @public
   */
  ;

  _proto.getVisible = function getVisible() {
    return this.state[_constants.MARKER].getVisible();
  }
  /**
   *
   * @type number
   * @public
   */
  ;

  _proto.getZIndex = function getZIndex() {
    return this.state[_constants.MARKER].getZIndex();
  };

  return Marker;
}(_react.default.PureComponent);

exports.Marker = Marker;
Marker.propTypes = {
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes.default.bool,

  /**
   * @type Animation
   */
  defaultAnimation: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultClickable: _propTypes.default.bool,

  /**
   * @type string
   */
  defaultCursor: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: _propTypes.default.any,

  /**
   * @type string|MarkerLabel
   */
  defaultLabel: _propTypes.default.any,

  /**
   * @type number
   */
  defaultOpacity: _propTypes.default.number,

  /**
   * @type MarkerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type MarkerPlace
   */
  defaultPlace: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type MarkerShape
   */
  defaultShape: _propTypes.default.any,

  /**
   * @type string
   */
  defaultTitle: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type Animation
   */
  animation: _propTypes.default.any,

  /**
   * @type boolean
   */
  clickable: _propTypes.default.bool,

  /**
   * @type string
   */
  cursor: _propTypes.default.string,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type string|Icon|Symbol
   */
  icon: _propTypes.default.any,

  /**
   * @type string|MarkerLabel
   */
  label: _propTypes.default.any,

  /**
   * @type number
   */
  opacity: _propTypes.default.number,

  /**
   * @type MarkerOptions
   */
  options: _propTypes.default.any,

  /**
   * @type MarkerPlace
   */
  place: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes.default.any,

  /**
   * @type MarkerShape
   */
  shape: _propTypes.default.any,

  /**
   * @type string
   */
  title: _propTypes.default.string,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

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
  onAnimationChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onClickableChanged: _propTypes.default.func,

  /**
   * function
   */
  onCursorChanged: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func,

  /**
   * function
   */
  onDraggableChanged: _propTypes.default.func,

  /**
   * function
   */
  onFlatChanged: _propTypes.default.func,

  /**
   * function
   */
  onIconChanged: _propTypes.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes.default.func,

  /**
   * function
   */
  onShapeChanged: _propTypes.default.func,

  /**
   * function
   */
  onTitleChanged: _propTypes.default.func,

  /**
   * function
   */
  onVisibleChanged: _propTypes.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes.default.func
};
Marker.contextTypes = (_Marker$contextTypes = {}, _Marker$contextTypes[_constants.MAP] = _propTypes.default.object, _Marker$contextTypes[_constants.MARKER_CLUSTERER] = _propTypes.default.object, _Marker$contextTypes);
Marker.childContextTypes = (_Marker$childContextT = {}, _Marker$childContextT[_constants.ANCHOR] = _propTypes.default.object, _Marker$childContextT);
var _default = Marker;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation);
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable);
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon);
  },
  label: function label(instance, _label) {
    instance.setLabel(_label);
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  place: function place(instance, _place) {
    instance.setPlace(_place);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};