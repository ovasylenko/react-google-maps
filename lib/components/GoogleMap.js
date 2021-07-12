"use strict";

exports.__esModule = true;
exports.default = exports.GoogleMap = exports.Map = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Map$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
var Map = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Map, _React$PureComponent);

  var _proto = Map.prototype;

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  _proto.fitBounds = function fitBounds() {
    var _this$context$MAP;

    return (_this$context$MAP = this.context[_constants.MAP]).fitBounds.apply(_this$context$MAP, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  ;

  _proto.panBy = function panBy() {
    var _this$context$MAP2;

    return (_this$context$MAP2 = this.context[_constants.MAP]).panBy.apply(_this$context$MAP2, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  ;

  _proto.panTo = function panTo() {
    var _this$context$MAP3;

    return (_this$context$MAP3 = this.context[_constants.MAP]).panTo.apply(_this$context$MAP3, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  ;

  _proto.panToBounds = function panToBounds() {
    var _this$context$MAP4;

    return (_this$context$MAP4 = this.context[_constants.MAP]).panToBounds.apply(_this$context$MAP4, arguments);
  }
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  ;

  function Map(props, context) {
    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _invariant.default)(!!_this.context[_constants.MAP], "Did you wrap <GoogleMap> component with withGoogleMap() HOC?");
    (0, _MapChildHelper.construct)(GoogleMap.propTypes, updaterMap, _this.props, _this.context[_constants.MAP]);
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.context[_constants.MAP], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.context[_constants.MAP], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  }
  /**
   * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
   * @type LatLngBoundsnullundefined
   * @public
   */
  ;

  _proto.getBounds = function getBounds() {
    return this.context[_constants.MAP].getBounds();
  }
  /**
   * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
   * @type LatLngLatLngLatLng
   * @public
   */
  ;

  _proto.getCenter = function getCenter() {
    return this.context[_constants.MAP].getCenter();
  }
  /**
   * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
   * @type boolean
   * @public
   */
  ;

  _proto.getClickableIcons = function getClickableIcons() {
    return this.context[_constants.MAP].getClickableIcons();
  }
  /**
   *
   * @type Element
   * @public
   */
  ;

  _proto.getDiv = function getDiv() {
    return this.context[_constants.MAP].getDiv();
  }
  /**
   * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
   * @type number
   * @public
   */
  ;

  _proto.getHeading = function getHeading() {
    return this.context[_constants.MAP].getHeading();
  }
  /**
   *
   * @type MapTypeId|string
   * @public
   */
  ;

  _proto.getMapTypeId = function getMapTypeId() {
    return this.context[_constants.MAP].getMapTypeId();
  }
  /**
   * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
   * @type ProjectionProjectionprojection_changed
   * @public
   */
  ;

  _proto.getProjection = function getProjection() {
    return this.context[_constants.MAP].getProjection();
  }
  /**
   * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
   * @type StreetViewPanoramaStreetViewPanoramasetStreetView()streetViewControl
   * @public
   */
  ;

  _proto.getStreetView = function getStreetView() {
    return this.context[_constants.MAP].getStreetView();
  }
  /**
   * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
   * @type number045satellitehybridsetTiltsetTilt
   * @public
   */
  ;

  _proto.getTilt = function getTilt() {
    return this.context[_constants.MAP].getTilt();
  }
  /**
   *
   * @type number
   * @public
   */
  ;

  _proto.getZoom = function getZoom() {
    return this.context[_constants.MAP].getZoom();
  };

  return Map;
}(_react.default.PureComponent);

exports.Map = Map;
Map.displayName = "GoogleMap";
Map.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.any)),

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultClickableIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultHeading: _propTypes.default.number,

  /**
   * @type MapTypeId|string
   */
  defaultMapTypeId: _propTypes.default.any,

  /**
   * @type MapOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type StreetViewPanorama
   */
  defaultStreetView: _propTypes.default.any,

  /**
   * @type number
   */
  defaultTilt: _propTypes.default.number,

  /**
   * @type number
   */
  defaultZoom: _propTypes.default.number,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes.default.any,

  /**
   * @type boolean
   */
  clickableIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  heading: _propTypes.default.number,

  /**
   * @type MapTypeId|string
   */
  mapTypeId: _propTypes.default.any,

  /**
   * @type MapOptions
   */
  options: _propTypes.default.any,

  /**
   * @type StreetViewPanorama
   */
  streetView: _propTypes.default.any,

  /**
   * @type number
   */
  tilt: _propTypes.default.number,

  /**
   * @type number
   */
  zoom: _propTypes.default.number,

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
  onMapTypeIdChanged: _propTypes.default.func,

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
  onRightClick: _propTypes.default.func,

  /**
   * function
   */
  onTilesLoaded: _propTypes.default.func,

  /**
   * function
   */
  onBoundsChanged: _propTypes.default.func,

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
  onHeadingChanged: _propTypes.default.func,

  /**
   * function
   */
  onIdle: _propTypes.default.func,

  /**
   * function
   */
  onProjectionChanged: _propTypes.default.func,

  /**
   * function
   */
  onResize: _propTypes.default.func,

  /**
   * function
   */
  onTiltChanged: _propTypes.default.func,

  /**
   * function
   */
  onZoomChanged: _propTypes.default.func
};
Map.contextTypes = (_Map$contextTypes = {}, _Map$contextTypes[_constants.MAP] = _propTypes.default.object, _Map$contextTypes);
var GoogleMap = Map;
exports.GoogleMap = GoogleMap;
var _default = Map;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap = {
  extraMapTypes: function extraMapTypes(instance, extra) {
    extra.forEach(function (it) {
      var _instance$mapTypes;

      return (_instance$mapTypes = instance.mapTypes).set.apply(_instance$mapTypes, it);
    });
  },
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  clickableIcons: function clickableIcons(instance, _clickableIcons) {
    instance.setClickableIcons(_clickableIcons);
  },
  heading: function heading(instance, _heading) {
    instance.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(instance, _mapTypeId) {
    instance.setMapTypeId(_mapTypeId);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  streetView: function streetView(instance, _streetView) {
    instance.setStreetView(_streetView);
  },
  tilt: function tilt(instance, _tilt) {
    instance.setTilt(_tilt);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};