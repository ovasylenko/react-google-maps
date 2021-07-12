"use strict";

exports.__esModule = true;
exports.default = exports.FusionTablesLayer = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _FusionTablesLayer$co;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n  },\n  \"getInstanceFromComponent\": \"this.state[FUSION_TABLES_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.FusionTablesLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var FusionTablesLayer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(FusionTablesLayer, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
   */
  function FusionTablesLayer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var fusionTablesLayer = new google.maps.FusionTablesLayer();
    (0, _MapChildHelper.construct)(FusionTablesLayer.propTypes, updaterMap, _this.props, fusionTablesLayer);
    fusionTablesLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.FUSION_TABLES_LAYER] = fusionTablesLayer, _this$state);
    return _this;
  }

  var _proto = FusionTablesLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.FUSION_TABLES_LAYER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.FUSION_TABLES_LAYER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var fusionTablesLayer = this.state[_constants.FUSION_TABLES_LAYER];

    if (fusionTablesLayer) {
      fusionTablesLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return FusionTablesLayer;
}(_react.default.PureComponent);

exports.FusionTablesLayer = FusionTablesLayer;
FusionTablesLayer.propTypes = {
  __jscodeshiftPlaceholder__: null
};
FusionTablesLayer.contextTypes = (_FusionTablesLayer$co = {}, _FusionTablesLayer$co[_constants.MAP] = _propTypes.default.object, _FusionTablesLayer$co);
var _default = FusionTablesLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {};