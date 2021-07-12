"use strict";

exports.__esModule = true;
exports.default = exports.StandaloneSearchBox = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `google.maps.places.SearchBox` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
var SearchBox = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(SearchBox, _React$PureComponent);

  function SearchBox() {
    var _this$state;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = (_this$state = {}, _this$state[_constants.SEARCH_BOX] = null, _this$state);
    return _this;
  }

  var _proto = SearchBox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$setState;

    (0, _invariant.default)(google.maps.places, "Did you include \"libraries=places\" in the URL?");

    var element = _reactDom.default.findDOMNode(this);
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */


    var searchBox = new google.maps.places.SearchBox(element.querySelector("input") || element);
    (0, _MapChildHelper.construct)(SearchBox.propTypes, updaterMap, this.props, searchBox);
    (0, _MapChildHelper.componentDidMount)(this, searchBox, eventMap);
    this.setState((_this$setState = {}, _this$setState[_constants.SEARCH_BOX] = searchBox, _this$setState));
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.SEARCH_BOX], eventMap, updaterMap, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
  };

  _proto.render = function render() {
    return _react.default.Children.only(this.props.children);
  }
  /**
   * Returns the bounds to which query predictions are biased.
   * @type LatLngBounds
   * @public
   */
  ;

  _proto.getBounds = function getBounds() {
    return this.state[_constants.SEARCH_BOX].getBounds();
  }
  /**
   * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
   * @type Array<PlaceResult>nullplaces_changed
   * @public
   */
  ;

  _proto.getPlaces = function getPlaces() {
    return this.state[_constants.SEARCH_BOX].getPlaces();
  };

  return SearchBox;
}(_react.default.PureComponent);

SearchBox.displayName = "StandaloneSearchBox";
SearchBox.propTypes = {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes.default.any,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes.default.any,

  /**
   * function
   */
  onPlacesChanged: _propTypes.default.func
};
var StandaloneSearchBox = SearchBox;
exports.StandaloneSearchBox = StandaloneSearchBox;
var _default = StandaloneSearchBox;
exports.default = _default;
var eventMap = {
  onPlacesChanged: "places_changed"
};
var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};