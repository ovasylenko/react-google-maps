"use strict";

exports.__esModule = true;
exports.default = exports.SearchBox = exports.__jscodeshiftPlaceholder__ = void 0;

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _SearchBox$contextTyp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __jscodeshiftPlaceholder__ = "{\n  \"eventMapOverrides\": {\n  },\n  \"getInstanceFromComponent\": \"this.state[SEARCH_BOX]\"\n}";
/**
 * A wrapper around `google.maps.places.SearchBox` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */

exports.__jscodeshiftPlaceholder__ = __jscodeshiftPlaceholder__;

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

  _proto.componentWillMount = function componentWillMount() {
    if (!_canUseDom.default || this.containerElement) {
      return;
    }

    (0, _invariant.default)(google.maps.places, "Did you include \"libraries=places\" in the URL?");
    this.containerElement = document.createElement("div");
    this.handleRenderChildToContainerElement();

    if (_react.default.version.match(/^16/)) {
      return;
    }

    this.handleInitializeSearchBox();
  };

  _proto.componentDidMount = function componentDidMount() {
    var searchBox = this.state[_constants.SEARCH_BOX];

    if (_react.default.version.match(/^16/)) {
      searchBox = this.handleInitializeSearchBox();
    }

    (0, _MapChildHelper.componentDidMount)(this, searchBox, eventMap);
    this.handleMountAtControlPosition();
  };

  _proto.componentWillUpdate = function componentWillUpdate(nextProp) {
    if (this.props.controlPosition !== nextProp.controlPosition) {
      this.handleUnmountAtControlPosition();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.SEARCH_BOX], eventMap, updaterMap, prevProps);

    if (this.props.children !== prevProps.children) {
      this.handleRenderChildToContainerElement();
    }

    if (this.props.controlPosition !== prevProps.controlPosition) {
      this.handleMountAtControlPosition();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    this.handleUnmountAtControlPosition();

    if (_react.default.version.match(/^16/)) {
      return;
    }

    if (this.containerElement) {
      _reactDom.default.unmountComponentAtNode(this.containerElement);

      this.containerElement = null;
    }
  };

  _proto.handleInitializeSearchBox = function handleInitializeSearchBox() {
    var _this$setState;

    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    var searchBox = new google.maps.places.SearchBox(this.containerElement.querySelector('input'));
    (0, _MapChildHelper.construct)(SearchBox.propTypes, updaterMap, this.props, searchBox);
    this.setState((_this$setState = {}, _this$setState[_constants.SEARCH_BOX] = searchBox, _this$setState));
    return searchBox;
  };

  _proto.handleRenderChildToContainerElement = function handleRenderChildToContainerElement() {
    if (_react.default.version.match(/^16/)) {
      return;
    }

    _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.containerElement);
  };

  _proto.handleMountAtControlPosition = function handleMountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      this.mountControlIndex = -1 + this.context[_constants.MAP].controls[this.props.controlPosition].push(this.containerElement.firstChild);
    }
  };

  _proto.handleUnmountAtControlPosition = function handleUnmountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      var child = this.context[_constants.MAP].controls[this.props.controlPosition].removeAt(this.mountControlIndex);

      if (child !== undefined) {
        this.containerElement.appendChild(child);
      }
    }
  };

  _proto.render = function render() {
    if (_react.default.version.match(/^16/)) {
      return /*#__PURE__*/_reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.containerElement);
    }

    return false;
  };

  return SearchBox;
}(_react.default.PureComponent);

exports.SearchBox = SearchBox;
SearchBox.propTypes = {
  __jscodeshiftPlaceholder__: null,

  /**
   * Where to put `<SearchBox>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: _propTypes.default.number
};
SearchBox.contextTypes = (_SearchBox$contextTyp = {}, _SearchBox$contextTyp[_constants.MAP] = _propTypes.default.object, _SearchBox$contextTyp);
var _default = SearchBox;
exports.default = _default;
var isValidControlPosition = _isNumber2.default;
var eventMap = {};
var updaterMap = {};