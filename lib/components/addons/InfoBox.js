"use strict";

exports.__esModule = true;
exports.default = exports.InfoBox = void 0;

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _InfoBox$contextTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `InfoBox`
 *
 * @see http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
 */
var InfoBox = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(InfoBox, _React$PureComponent);

  function InfoBox() {
    var _this$state;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = (_this$state = {}, _this$state[_constants.INFO_BOX] = null, _this$state);
    return _this;
  }

  var _proto = InfoBox.prototype;

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoBox
   */
  _proto.componentWillMount = function componentWillMount() {
    var _this$setState;

    if (!_canUseDom.default || this.state[_constants.INFO_BOX]) {
      return;
    }

    var _require = require(
    /* "google-maps-infobox" uses "google" as a global variable. Since we don't
    * have "google" on the server, we can not use it in server-side rendering.
    * As a result, we import "google-maps-infobox" here to prevent an error on
    * a isomorphic server.
    */
    "google-maps-infobox"),
        GoogleMapsInfobox = _require.InfoBox;

    var infoBox = new GoogleMapsInfobox();
    (0, _MapChildHelper.construct)(InfoBox.propTypes, updaterMap, this.props, infoBox);
    infoBox.setMap(this.context[_constants.MAP]);
    this.setState((_this$setState = {}, _this$setState[_constants.INFO_BOX] = infoBox, _this$setState));
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.INFO_BOX], eventMap);
    var content = document.createElement("div");

    _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), content);

    this.state[_constants.INFO_BOX].setContent(content);

    open(this.state[_constants.INFO_BOX], this.context[_constants.ANCHOR]);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.INFO_BOX], eventMap, updaterMap, prevProps);

    if (this.props.children !== prevProps.children) {
      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.state[_constants.INFO_BOX].getContent());
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var infoBox = this.state[_constants.INFO_BOX];

    if (infoBox) {
      if (infoBox.getContent()) {
        _reactDom.default.unmountComponentAtNode(infoBox.getContent());
      }

      infoBox.setMap(null);
    }
  };

  _proto.render = function render() {
    return false;
  }
  /**
   *
   * @type LatLng
   */
  ;

  _proto.getPosition = function getPosition() {
    return this.state[_constants.INFO_BOX].getPosition();
  }
  /**
   *
   * @type boolean
   */
  ;

  _proto.getVisible = function getVisible() {
    return this.state[_constants.INFO_BOX].getVisible();
  }
  /**
   *
   * @type number
   */
  ;

  _proto.getZIndex = function getZIndex() {
    return this.state[_constants.INFO_BOX].getZIndex();
  };

  return InfoBox;
}(_react.default.PureComponent);

exports.InfoBox = InfoBox;
InfoBox.propTypes = {
  /**
   * @type InfoBoxOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type InfoBoxOptions
   */
  options: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

  /**
   * function
   */
  onCloseClick: _propTypes.default.func,

  /**
   * function
   */
  onDomReady: _propTypes.default.func,

  /**
   * function
   */
  onContentChanged: _propTypes.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes.default.func
};
InfoBox.contextTypes = (_InfoBox$contextTypes = {}, _InfoBox$contextTypes[_constants.MAP] = _propTypes.default.object, _InfoBox$contextTypes[_constants.ANCHOR] = _propTypes.default.object, _InfoBox$contextTypes);
var _default = InfoBox;
exports.default = _default;

var open = function open(infoBox, anchor) {
  if (anchor) {
    infoBox.open(infoBox.getMap(), anchor);
  } else if (infoBox.getPosition()) {
    infoBox.open(infoBox.getMap());
  } else {
    (0, _invariant.default)(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>.");
  }
};

var eventMap = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};