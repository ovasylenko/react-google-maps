"use strict";

exports.__esModule = true;
exports.default = exports.BicyclingLayer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _BicyclingLayer$conte;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.BicyclingLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
 */
var BicyclingLayer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(BicyclingLayer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
   */
  function BicyclingLayer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var bicyclingLayer = new google.maps.BicyclingLayer();
    (0, _MapChildHelper.construct)(BicyclingLayer.propTypes, updaterMap, _this.props, bicyclingLayer);
    bicyclingLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.BICYCLING_LAYER] = bicyclingLayer, _this$state);
    return _this;
  }

  var _proto = BicyclingLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.BICYCLING_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.BICYCLING_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var bicyclingLayer = this.state[_constants.BICYCLING_LAYER];

    if (bicyclingLayer) {
      bicyclingLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return BicyclingLayer;
}(_react.default.PureComponent);

exports.BicyclingLayer = BicyclingLayer;
BicyclingLayer.propTypes = {};
BicyclingLayer.contextTypes = (_BicyclingLayer$conte = {}, _BicyclingLayer$conte[_constants.MAP] = _propTypes.default.object, _BicyclingLayer$conte);
var _default = BicyclingLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {};