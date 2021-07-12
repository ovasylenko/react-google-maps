"use strict";

exports.__esModule = true;
exports.default = exports.Marker = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Marker$contextTypes, _Marker$childContextT;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[MARKER]\"\n}";
/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

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
  };

  return Marker;
}(_react.default.PureComponent);

exports.Marker = Marker;
Marker.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes.default.bool
};
Marker.contextTypes = (_Marker$contextTypes = {}, _Marker$contextTypes[_constants.MAP] = _propTypes.default.object, _Marker$contextTypes[_constants.MARKER_CLUSTERER] = _propTypes.default.object, _Marker$contextTypes);
Marker.childContextTypes = (_Marker$childContextT = {}, _Marker$childContextT[_constants.ANCHOR] = _propTypes.default.object, _Marker$childContextT);
var _default = Marker;
exports.default = _default;
var eventMap = {};
var updaterMap = {};