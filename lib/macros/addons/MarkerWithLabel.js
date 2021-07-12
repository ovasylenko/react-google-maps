"use strict";

exports.__esModule = true;
exports.default = exports.MarkerWithLabel = exports.__jscodeshiftPlaceholder__ = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _markerwithlabel = _interopRequireDefault(require("markerwithlabel"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _MarkerWithLabel$cont;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"KlassNameOverrride\": \"Marker\",\n  \"eventMapOverrides\": {\n    \"onDblClick\": \"dblclick\",\n    \"onDragEnd\": \"dragend\",\n    \"onDragStart\": \"dragstart\",\n    \"onMouseDown\": \"mousedown\",\n    \"onMouseOut\": \"mouseout\",\n    \"onMouseOver\": \"mouseover\",\n    \"onMouseUp\": \"mouseup\",\n    \"onRightClick\": \"rightclick\"\n  },\n  \"getInstanceFromComponent\": \"this.state[MARKER_WITH_LABEL]\"\n}";
/**
 * A wrapper around `MarkerWithLabel`
 *
 * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

var MarkerWithLabel = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(MarkerWithLabel, _React$PureComponent);

  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  function MarkerWithLabel(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var NativeMarkerWithLabel = (0, _markerwithlabel.default)(google.maps);
    var markerWithLabel = new NativeMarkerWithLabel();
    (0, _MapChildHelper.construct)(MarkerWithLabel.propTypes, updaterMap, _this.props, markerWithLabel);
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER];

    if (markerClusterer) {
      markerClusterer.addMarker(markerWithLabel, !!_this.props.noRedraw);
    } else {
      markerWithLabel.setMap(_this.context[_constants.MAP]);
    }

    _this.state = (_this$state = {}, _this$state[_constants.MARKER_WITH_LABEL] = markerWithLabel, _this$state);
    return _this;
  }

  var _proto = MarkerWithLabel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.MARKER_WITH_LABEL], eventMap);
    var container = document.createElement("div");

    _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), container);

    this.state[_constants.MARKER_WITH_LABEL].set("labelContent", container);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.MARKER_WITH_LABEL], eventMap, updaterMap, prevProps);

    if (this.props.children !== prevProps.children) {
      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.state[_constants.MARKER_WITH_LABEL].get("labelContent"));
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var markerWithLabel = this.state[_constants.MARKER_WITH_LABEL];

    if (markerWithLabel) {
      var markerClusterer = this.context[_constants.MARKER_CLUSTERER];

      if (markerClusterer) {
        markerClusterer.removeMarker(markerWithLabel, !!this.props.noRedraw);
      }

      if (markerWithLabel.get("labelContent")) {
        _reactDom.default.unmountComponentAtNode(markerWithLabel.get("labelContent"));
      }

      markerWithLabel.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  };

  return MarkerWithLabel;
}(_react.default.PureComponent);

exports.MarkerWithLabel = MarkerWithLabel;
MarkerWithLabel.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * It will be `MarkerWithLabel#labelContent`.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  children: _propTypes.default.node,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: _propTypes.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: _propTypes.default.string,

  /**
   * For `MarkerWithLabel`. This is for native JS style object, so you may
   * expect some React shorthands for inline styles not working here.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: _propTypes.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: _propTypes.default.bool,

  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes.default.bool
};
MarkerWithLabel.defaultProps = {
  labelVisible: true
};
MarkerWithLabel.contextTypes = (_MarkerWithLabel$cont = {}, _MarkerWithLabel$cont[_constants.MAP] = _propTypes.default.object, _MarkerWithLabel$cont[_constants.MARKER_CLUSTERER] = _propTypes.default.object, _MarkerWithLabel$cont);
var _default = MarkerWithLabel;
exports.default = _default;
var eventMap = {};
var updaterMap = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: function labelAnchor(instance, _labelAnchor) {
    instance.set("labelAnchor", _labelAnchor);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: function labelClass(instance, _labelClass) {
    instance.set("labelClass", _labelClass);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: function labelStyle(instance, _labelStyle) {
    instance.set("labelStyle", _labelStyle);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: function labelVisible(instance, _labelVisible) {
    instance.set("labelVisible", _labelVisible);
  }
};