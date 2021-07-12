"use strict";

exports.__esModule = true;
exports.default = exports.OverlayView = exports.__jscodeshiftPlaceholder__ = void 0;

var _delay2 = _interopRequireDefault(require("lodash/delay"));

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _bind2 = _interopRequireDefault(require("lodash/bind"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _OverlayViewHelper = require("../utils/OverlayViewHelper");

var _constants = require("../constants");

var _OverlayView$contextT;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": { \n  },\n  \"getInstanceFromComponent\": \"this.state[OVERLAY_VIEW]\"\n}";
/**
 * A wrapper around `google.maps.OverlayView`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var OverlayView = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(OverlayView, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  function OverlayView(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var overlayView = new google.maps.OverlayView(); // You must implement three methods: onAdd(), draw(), and onRemove().

    overlayView.onAdd = (0, _bind2.default)(_this.onAdd, _assertThisInitialized(_this));
    overlayView.draw = (0, _bind2.default)(_this.draw, _assertThisInitialized(_this));
    overlayView.onRemove = (0, _bind2.default)(_this.onRemove, _assertThisInitialized(_this));
    _this.onPositionElement = (0, _bind2.default)(_this.onPositionElement, _assertThisInitialized(_this)); // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.

    overlayView.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.OVERLAY_VIEW] = overlayView, _this$state);
    return _this;
  }

  var _proto = OverlayView.prototype;

  _proto.onAdd = function onAdd() {
    this.containerElement = document.createElement("div");
    this.containerElement.style.position = "absolute";
  };

  _proto.draw = function draw() {
    var mapPaneName = this.props.mapPaneName;
    (0, _invariant.default)(!!mapPaneName, "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s", mapPaneName); // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes

    var mapPanes = this.state[_constants.OVERLAY_VIEW].getPanes();

    mapPanes[mapPaneName].appendChild(this.containerElement);

    _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.containerElement, this.onPositionElement);
  };

  _proto.onPositionElement = function onPositionElement() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
    var mapCanvasProjection = this.state[_constants.OVERLAY_VIEW].getProjection();

    var offset = _extends({
      x: 0,
      y: 0
    }, (0, _OverlayViewHelper.getOffsetOverride)(this.containerElement, this.props));

    var layoutStyles = (0, _OverlayViewHelper.getLayoutStyles)(mapCanvasProjection, offset, this.props);
    (0, _assign2.default)(this.containerElement.style, layoutStyles);
  };

  _proto.onRemove = function onRemove() {
    this.containerElement.parentNode.removeChild(this.containerElement);

    _reactDom.default.unmountComponentAtNode(this.containerElement);

    this.containerElement = null;
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.OVERLAY_VIEW], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.OVERLAY_VIEW], eventMap, updaterMap, prevProps);
    (0, _delay2.default)(this.state[_constants.OVERLAY_VIEW].draw);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var overlayView = this.state[_constants.OVERLAY_VIEW];

    if (overlayView) {
      overlayView.setMap(null); // You must implement three methods: onAdd(), draw(), and onRemove().

      overlayView.onAdd = null;
      overlayView.draw = null;
      overlayView.onRemove = null;
    }
  };

  _proto.render = function render() {
    return false;
  };

  return OverlayView;
}(_react.default.PureComponent);

exports.OverlayView = OverlayView;
OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: _propTypes.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: _propTypes.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: _propTypes.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: _propTypes.default.node.isRequired,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: _propTypes.default.func
};
OverlayView.contextTypes = (_OverlayView$contextT = {}, _OverlayView$contextT[_constants.MAP] = _propTypes.default.object, _OverlayView$contextT[_constants.ANCHOR] = _propTypes.default.object, _OverlayView$contextT);
var _default = OverlayView;
exports.default = _default;
var eventMap = {};
var updaterMap = {};