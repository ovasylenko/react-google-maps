"use strict";

exports.__esModule = true;
exports.default = exports.StreetViewPanorama = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _StreetViewPanorama$c, _StreetViewPanorama$c2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
var StreetViewPanorama = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(StreetViewPanorama, _React$PureComponent);

  function StreetViewPanorama(props, context) {
    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _invariant.default)(!!_this.context[_constants.MAP], "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?");
    (0, _MapChildHelper.construct)(StreetViewPanorama.propTypes, updaterMap, _this.props, _this.context[_constants.MAP].getStreetView());
    return _this;
  }

  var _proto = StreetViewPanorama.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[_constants.MAP] = this.context[_constants.MAP].getStreetView(), _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.context[_constants.MAP].getStreetView(), eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.context[_constants.MAP].getStreetView(), eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);

    var streetViewPanorama = this.context[_constants.MAP].getStreetView();

    if (streetViewPanorama) {
      streetViewPanorama.setVisible(false);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  }
  /**
   * Returns the set of navigation links for the Street View panorama.
   * @type Array<StreetViewLink>
   * @public
   */
  ;

  _proto.getLinks = function getLinks() {
    return this.context[_constants.MAP].getLinks();
  }
  /**
   * Returns the StreetViewLocation of the current panorama.
   * @type StreetViewLocation
   * @public
   */
  ;

  _proto.getLocation = function getLocation() {
    return this.context[_constants.MAP].getLocation();
  }
  /**
   * Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.
   * @type boolean
   * @public
   */
  ;

  _proto.getMotionTracking = function getMotionTracking() {
    return this.context[_constants.MAP].getMotionTracking();
  }
  /**
   * Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.
   * @type string
   * @public
   */
  ;

  _proto.getPano = function getPano() {
    return this.context[_constants.MAP].getPano();
  }
  /**
   * Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the `pano_changed` event.
   * @type StreetViewPovpano_changed
   * @public
   */
  ;

  _proto.getPhotographerPov = function getPhotographerPov() {
    return this.context[_constants.MAP].getPhotographerPov();
  }
  /**
   * Returns the current `LatLng` position for the Street View panorama.
   * @type LatLngLatLng
   * @public
   */
  ;

  _proto.getPosition = function getPosition() {
    return this.context[_constants.MAP].getPosition();
  }
  /**
   * Returns the current point of view for the Street View panorama.
   * @type StreetViewPov
   * @public
   */
  ;

  _proto.getPov = function getPov() {
    return this.context[_constants.MAP].getPov();
  }
  /**
   * Returns the status of the panorama on completion of the `setPosition()` or `setPano()` request.
   * @type StreetViewStatussetPosition()setPano()
   * @public
   */
  ;

  _proto.getStatus = function getStatus() {
    return this.context[_constants.MAP].getStatus();
  }
  /**
   * Returns `true` if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
   * @type booleantrue
   * @public
   */
  ;

  _proto.getVisible = function getVisible() {
    return this.context[_constants.MAP].getVisible();
  }
  /**
   * Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
   * @type number
   * @public
   */
  ;

  _proto.getZoom = function getZoom() {
    return this.context[_constants.MAP].getZoom();
  };

  return StreetViewPanorama;
}(_react.default.PureComponent);

exports.StreetViewPanorama = StreetViewPanorama;
StreetViewPanorama.propTypes = {
  /**
   * @type Array<StreetViewLink>
   */
  defaultLinks: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultMotionTracking: _propTypes.default.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type string
   */
  defaultPano: _propTypes.default.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type StreetViewPov
   */
  defaultPov: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultZoom: _propTypes.default.number,

  /**
   * @type Array<StreetViewLink>
   */
  links: _propTypes.default.any,

  /**
   * @type boolean
   */
  motionTracking: _propTypes.default.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  options: _propTypes.default.any,

  /**
   * @type string
   */
  pano: _propTypes.default.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes.default.any,

  /**
   * @type StreetViewPov
   */
  pov: _propTypes.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * @type number
   */
  zoom: _propTypes.default.number,

  /**
   * function
   */
  onCloseClick: _propTypes.default.func,

  /**
   * function
   */
  onPanoChanged: _propTypes.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes.default.func,

  /**
   * function
   */
  onPovChanged: _propTypes.default.func,

  /**
   * function
   */
  onResize: _propTypes.default.func,

  /**
   * function
   */
  onStatusChanged: _propTypes.default.func,

  /**
   * function
   */
  onVisibleChanged: _propTypes.default.func,

  /**
   * function
   */
  onZoomChanged: _propTypes.default.func
};
StreetViewPanorama.contextTypes = (_StreetViewPanorama$c = {}, _StreetViewPanorama$c[_constants.MAP] = _propTypes.default.object, _StreetViewPanorama$c);
StreetViewPanorama.childContextTypes = (_StreetViewPanorama$c2 = {}, _StreetViewPanorama$c2[_constants.MAP] = _propTypes.default.object, _StreetViewPanorama$c2);
var _default = StreetViewPanorama;
exports.default = _default;
var eventMap = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap = {
  links: function links(instance, _links) {
    instance.setLinks(_links);
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};