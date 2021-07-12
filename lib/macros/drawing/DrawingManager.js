"use strict";

exports.__esModule = true;
exports.default = exports.DrawingManager = exports.__jscodeshiftPlaceholder__ = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _DrawingManager$conte;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n    \"onCircleComplete\": \"circlecomplete\",\n    \"onMarkerComplete\": \"markercomplete\",\n    \"onOverlayComplete\": \"overlaycomplete\",\n    \"onPolygonComplete\": \"polygoncomplete\",\n    \"onPolylineComplete\": \"polylinecomplete\",\n    \"onRectangleComplete\": \"rectanglecomplete\"\n  },\n  \"getInstanceFromComponent\": \"this.state[DRAWING_MANAGER]\"\n}";
/**
 * A wrapper around `google.maps.drawing.DrawingManager`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var DrawingManager = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(DrawingManager, _React$PureComponent);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
   */
  function DrawingManager(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    (0, _invariant.default)(google.maps.drawing, "Did you include \"libraries=drawing\" in the URL?");
    var drawingManager = new google.maps.drawing.DrawingManager();
    (0, _MapChildHelper.construct)(DrawingManager.propTypes, updaterMap, _this.props, drawingManager);
    drawingManager.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.DRAWING_MANAGER] = drawingManager, _this$state);
    return _this;
  }

  var _proto = DrawingManager.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.DRAWING_MANAGER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.DRAWING_MANAGER], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var drawingManager = this.state[_constants.DRAWING_MANAGER];

    if (drawingManager) {
      drawingManager.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return DrawingManager;
}(_react.default.PureComponent);

exports.DrawingManager = DrawingManager;
DrawingManager.propTypes = {
  __jscodeshiftPlaceholder__: null
};
DrawingManager.contextTypes = (_DrawingManager$conte = {}, _DrawingManager$conte[_constants.MAP] = _propTypes.default.object, _DrawingManager$conte);
var _default = DrawingManager;
exports.default = _default;
var eventMap = {};
var updaterMap = {};