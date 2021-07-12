"use strict";

exports.__esModule = true;
exports.default = exports.GoogleMap = exports.Map = exports.__jscodeshiftPlaceholder__ = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _Map$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMapTypeIdChanged\": \"maptypeid_changed\",\n    \"onMouseMove\": \"mousemove\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onRightClick\": \"rightclick\",\n    \"onTilesLoaded\": \"tilesloaded\"\n  },\n  \"getInstanceFromComponent\": \"this.context[MAP]\"\n}";
/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var Map = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Map, _React$PureComponent);

  var _proto = Map.prototype;

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  _proto.fitBounds = function fitBounds() {
    var _this$context$MAP;

    return (_this$context$MAP = this.context[_constants.MAP]).fitBounds.apply(_this$context$MAP, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  ;

  _proto.panBy = function panBy() {
    var _this$context$MAP2;

    return (_this$context$MAP2 = this.context[_constants.MAP]).panBy.apply(_this$context$MAP2, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  ;

  _proto.panTo = function panTo() {
    var _this$context$MAP3;

    return (_this$context$MAP3 = this.context[_constants.MAP]).panTo.apply(_this$context$MAP3, arguments);
  }
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public 
   */
  ;

  _proto.panToBounds = function panToBounds() {
    var _this$context$MAP4;

    return (_this$context$MAP4 = this.context[_constants.MAP]).panToBounds.apply(_this$context$MAP4, arguments);
  }
  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  ;

  function Map(props, context) {
    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _invariant.default)(!!_this.context[_constants.MAP], "Did you wrap <GoogleMap> component with withGoogleMap() HOC?");
    (0, _MapChildHelper.construct)(GoogleMap.propTypes, updaterMap, _this.props, _this.context[_constants.MAP]);
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.context[_constants.MAP], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.context[_constants.MAP], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  };

  return Map;
}(_react.default.PureComponent);

exports.Map = Map;
Map.displayName = "GoogleMap";
Map.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.any))
};
Map.contextTypes = (_Map$contextTypes = {}, _Map$contextTypes[_constants.MAP] = _propTypes.default.object, _Map$contextTypes);
var GoogleMap = Map;
exports.GoogleMap = GoogleMap;
var _default = Map;
exports.default = _default;
var eventMap = {};
var updaterMap = {
  extraMapTypes: function extraMapTypes(instance, extra) {
    extra.forEach(function (it) {
      var _instance$mapTypes;

      return (_instance$mapTypes = instance.mapTypes).set.apply(_instance$mapTypes, it);
    });
  }
};