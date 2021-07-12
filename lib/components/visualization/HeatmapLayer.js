"use strict";

exports.__esModule = true;
exports.default = exports.HeatmapLayer = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _HeatmapLayer$context;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.visualization.HeatmapLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
var HeatmapLayer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(HeatmapLayer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  function HeatmapLayer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _invariant.default)(google.maps.visualization, "Did you include \"libraries=visualization\" in the URL?");
    var heatmapLayer = new google.maps.visualization.HeatmapLayer();
    (0, _MapChildHelper.construct)(HeatmapLayer.propTypes, updaterMap, _this.props, heatmapLayer);
    heatmapLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.HEATMAP_LAYER] = heatmapLayer, _this$state);
    return _this;
  }

  var _proto = HeatmapLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.HEATMAP_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.HEATMAP_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var heatmapLayer = this.state[_constants.HEATMAP_LAYER];

    if (heatmapLayer) {
      heatmapLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  }
  /**
   * Returns the data points currently displayed by this heatmap.
   * @type MVCArray<LatLng|WeightedLocation>
   * @public
   */
  ;

  _proto.getData = function getData() {
    return this.state[_constants.HEATMAP_LAYER].getData();
  };

  return HeatmapLayer;
}(_react.default.PureComponent);

exports.HeatmapLayer = HeatmapLayer;
HeatmapLayer.propTypes = {
  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  defaultData: _propTypes.default.any,

  /**
   * @type HeatmapLayerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  data: _propTypes.default.any,

  /**
   * @type HeatmapLayerOptions
   */
  options: _propTypes.default.any
};
HeatmapLayer.contextTypes = (_HeatmapLayer$context = {}, _HeatmapLayer$context[_constants.MAP] = _propTypes.default.object, _HeatmapLayer$context);
var _default = HeatmapLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {
  data: function data(instance, _data) {
    instance.setData(_data);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};