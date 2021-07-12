"use strict";

exports.__esModule = true;
exports.default = exports.TrafficLayer = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _TrafficLayer$context;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n  },\n  \"getInstanceFromComponent\": \"this.state[TRAFFIC_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.TrafficLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var TrafficLayer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(TrafficLayer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
   */
  function TrafficLayer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var trafficLayer = new google.maps.TrafficLayer();
    (0, _MapChildHelper.construct)(TrafficLayer.propTypes, updaterMap, _this.props, trafficLayer);
    trafficLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.TRAFFIC_LAYER] = trafficLayer, _this$state);
    return _this;
  }

  var _proto = TrafficLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.TRAFFIC_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.TRAFFIC_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var trafficLayer = this.state[_constants.TRAFFIC_LAYER];

    if (trafficLayer) {
      trafficLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return TrafficLayer;
}(_react.default.PureComponent);

exports.TrafficLayer = TrafficLayer;
TrafficLayer.propTypes = {
  __jscodeshiftPlaceholder__: null
};
TrafficLayer.contextTypes = (_TrafficLayer$context = {}, _TrafficLayer$context[_constants.MAP] = _propTypes.default.object, _TrafficLayer$context);
var _default = TrafficLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {};