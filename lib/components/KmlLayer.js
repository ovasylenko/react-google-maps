"use strict";

exports.__esModule = true;
exports.default = exports.KmlLayer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _KmlLayer$contextType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
var KmlLayer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(KmlLayer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  function KmlLayer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var kmlLayer = new google.maps.KmlLayer();
    (0, _MapChildHelper.construct)(KmlLayer.propTypes, updaterMap, _this.props, kmlLayer);
    kmlLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.KML_LAYER] = kmlLayer, _this$state);
    return _this;
  }

  var _proto = KmlLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.KML_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.KML_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var kmlLayer = this.state[_constants.KML_LAYER];

    if (kmlLayer) {
      kmlLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  }
  /**
   * Get the default viewport for the layer being displayed.
   * @type LatLngBounds
   * @public
   */
  ;

  _proto.getDefaultViewport = function getDefaultViewport() {
    return this.state[_constants.KML_LAYER].getDefaultViewport();
  }
  /**
   * Get the metadata associated with this layer, as specified in the layer markup.
   * @type KmlLayerMetadata
   * @public
   */
  ;

  _proto.getMetadata = function getMetadata() {
    return this.state[_constants.KML_LAYER].getMetadata();
  }
  /**
   * Get the status of the layer, set once the requested document has loaded.
   * @type KmlLayerStatus
   * @public
   */
  ;

  _proto.getStatus = function getStatus() {
    return this.state[_constants.KML_LAYER].getStatus();
  }
  /**
   * Gets the URL of the KML file being displayed.
   * @type string
   * @public
   */
  ;

  _proto.getUrl = function getUrl() {
    return this.state[_constants.KML_LAYER].getUrl();
  }
  /**
   * Gets the z-index of the KML Layer.
   * @type number
   * @public
   */
  ;

  _proto.getZIndex = function getZIndex() {
    return this.state[_constants.KML_LAYER].getZIndex();
  };

  return KmlLayer;
}(_react.default.PureComponent);

exports.KmlLayer = KmlLayer;
KmlLayer.propTypes = {
  /**
   * @type KmlLayerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type string
   */
  defaultUrl: _propTypes.default.string,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type KmlLayerOptions
   */
  options: _propTypes.default.any,

  /**
   * @type string
   */
  url: _propTypes.default.string,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

  /**
   * function
   */
  onDefaultViewportChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onStatusChanged: _propTypes.default.func
};
KmlLayer.contextTypes = (_KmlLayer$contextType = {}, _KmlLayer$contextType[_constants.MAP] = _propTypes.default.object, _KmlLayer$contextType);
var _default = KmlLayer;
exports.default = _default;
var eventMap = {
  onDefaultViewportChanged: "defaultviewport_changed",
  onClick: "click",
  onStatusChanged: "status_changed"
};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  url: function url(instance, _url) {
    instance.setUrl(_url);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};