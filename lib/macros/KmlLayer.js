"use strict";

exports.__esModule = true;
exports.default = exports.KmlLayer = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _KmlLayer$contextType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDefaultViewportChanged\": \"defaultviewport_changed\"\n  },\n  \"getInstanceFromComponent\": \"this.state[KML_LAYER]\"\n}";
/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

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
  };

  return KmlLayer;
}(_react.default.PureComponent);

exports.KmlLayer = KmlLayer;
KmlLayer.propTypes = {
  __jscodeshiftPlaceholder__: null
};
KmlLayer.contextTypes = (_KmlLayer$contextType = {}, _KmlLayer$contextType[_constants.MAP] = _propTypes.default.object, _KmlLayer$contextType);
var _default = KmlLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {};