"use strict";

exports.__esModule = true;
exports.default = exports.DirectionsRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _DirectionsRenderer$c;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
var DirectionsRenderer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(DirectionsRenderer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  function DirectionsRenderer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var directionsRenderer = new google.maps.DirectionsRenderer();
    (0, _MapChildHelper.construct)(DirectionsRenderer.propTypes, updaterMap, _this.props, directionsRenderer);
    directionsRenderer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.DIRECTIONS_RENDERER] = directionsRenderer, _this$state);
    return _this;
  }

  var _proto = DirectionsRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.DIRECTIONS_RENDERER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.DIRECTIONS_RENDERER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var directionsRenderer = this.state[_constants.DIRECTIONS_RENDERER];

    if (directionsRenderer) {
      directionsRenderer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  }
  /**
   * Returns the renderer's current set of directions.
   * @type DirectionsResult
   * @public
   */
  ;

  _proto.getDirections = function getDirections() {
    return this.state[_constants.DIRECTIONS_RENDERER].getDirections();
  }
  /**
   * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
   * @type Node<div>DirectionsResult
   * @public
   */
  ;

  _proto.getPanel = function getPanel() {
    return this.state[_constants.DIRECTIONS_RENDERER].getPanel();
  }
  /**
   * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
   * @type numberDirectionsRenderer
   * @public
   */
  ;

  _proto.getRouteIndex = function getRouteIndex() {
    return this.state[_constants.DIRECTIONS_RENDERER].getRouteIndex();
  };

  return DirectionsRenderer;
}(_react.default.PureComponent);

exports.DirectionsRenderer = DirectionsRenderer;
DirectionsRenderer.propTypes = {
  /**
   * @type DirectionsResult
   */
  defaultDirections: _propTypes.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type Node
   */
  defaultPanel: _propTypes.default.any,

  /**
   * @type number
   */
  defaultRouteIndex: _propTypes.default.number,

  /**
   * @type DirectionsResult
   */
  directions: _propTypes.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  options: _propTypes.default.any,

  /**
   * @type Node
   */
  panel: _propTypes.default.any,

  /**
   * @type number
   */
  routeIndex: _propTypes.default.number,

  /**
   * function
   */
  onDirectionsChanged: _propTypes.default.func
};
DirectionsRenderer.contextTypes = (_DirectionsRenderer$c = {}, _DirectionsRenderer$c[_constants.MAP] = _propTypes.default.object, _DirectionsRenderer$c);
var _default = DirectionsRenderer;
exports.default = _default;
var eventMap = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel);
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex);
  }
};