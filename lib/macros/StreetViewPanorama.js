"use strict";

exports.__esModule = true;
exports.default = exports.StreetViewPanorama = exports.__jscodeshiftPlaceholder__ = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _StreetViewPanorama$c, _StreetViewPanorama$c2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onCloseClick\": \"closeclick\"\n  },\n  \"getInstanceFromComponent\": \"this.context[MAP]\"\n}";
/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

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
  };

  return StreetViewPanorama;
}(_react.default.PureComponent);

exports.StreetViewPanorama = StreetViewPanorama;
StreetViewPanorama.propTypes = {
  __jscodeshiftPlaceholder__: null
};
StreetViewPanorama.contextTypes = (_StreetViewPanorama$c = {}, _StreetViewPanorama$c[_constants.MAP] = _propTypes.default.object, _StreetViewPanorama$c);
StreetViewPanorama.childContextTypes = (_StreetViewPanorama$c2 = {}, _StreetViewPanorama$c2[_constants.MAP] = _propTypes.default.object, _StreetViewPanorama$c2);
var _default = StreetViewPanorama;
exports.default = _default;
var eventMap = {};
var updaterMap = {};