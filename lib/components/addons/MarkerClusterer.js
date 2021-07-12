"use strict";

exports.__esModule = true;
exports.default = exports.MarkerClusterer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _markerClustererPlus = _interopRequireDefault(require("marker-clusterer-plus"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _MarkerClusterer$cont, _MarkerClusterer$chil;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper around `MarkerClusterer`
 *
 * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
 */
var MarkerClusterer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(MarkerClusterer, _React$PureComponent);

  /*
   * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
   */
  function MarkerClusterer(props, context) {
    var _this$state;

    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;
    var markerClusterer = new _markerClustererPlus.default();
    (0, _MapChildHelper.construct)(MarkerClusterer.propTypes, updaterMap, _this.props, markerClusterer);
    markerClusterer.setMap(_this.context[_constants.MAP]);
    _this.state = (_this$state = {}, _this$state[_constants.MARKER_CLUSTERER] = markerClusterer, _this$state);
    return _this;
  }

  var _proto = MarkerClusterer.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    var markerClusterer = this.state[_constants.MARKER_CLUSTERER];
    return _ref = {}, _ref[_constants.ANCHOR] = markerClusterer, _ref[_constants.MARKER_CLUSTERER] = markerClusterer, _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.MARKER_CLUSTERER], eventMap);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.MARKER_CLUSTERER], eventMap, updaterMap, prevProps);

    this.state[_constants.MARKER_CLUSTERER].repaint();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _MapChildHelper.componentWillUnmount)(this);
    var markerClusterer = this.state[_constants.MARKER_CLUSTERER];

    if (markerClusterer) {
      markerClusterer.setMap(null);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("div", null, children);
  };

  return MarkerClusterer;
}(_react.default.PureComponent);

exports.MarkerClusterer = MarkerClusterer;
MarkerClusterer.propTypes = {
  /**
   * @type boolean
   */
  defaultAverageCenter: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultBatchSizeIE: _propTypes.default.number,

  /**
   * @type number
   */
  defaultBatchSize: _propTypes.default.number,

  /**
   * @type function
   */
  defaultCalculator: _propTypes.default.func,

  /**
   * @type string
   */
  defaultClusterClass: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultEnableRetinaIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultGridSize: _propTypes.default.number,

  /**
   * @type boolean
   */
  defaultIgnoreHidden: _propTypes.default.bool,

  /**
   * @type string
   */
  defaultImageExtension: _propTypes.default.string,

  /**
   * @type string
   */
  defaultImagePath: _propTypes.default.string,

  /**
   * @type Array
   */
  defaultImageSizes: _propTypes.default.array,

  /**
   * @type number
   */
  defaultMaxZoom: _propTypes.default.number,

  /**
   * @type number
   */
  defaultMinimumClusterSize: _propTypes.default.number,

  /**
   * @type Array
   */
  defaultStyles: _propTypes.default.array,

  /**
   * @type string
   */
  defaultTitle: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultZoomOnClick: _propTypes.default.bool,

  /**
   * @type boolean
   */
  averageCenter: _propTypes.default.bool,

  /**
   * @type number
   */
  batchSizeIE: _propTypes.default.number,

  /**
   * @type number
   */
  batchSize: _propTypes.default.number,

  /**
   * @type function
   */
  calculator: _propTypes.default.func,

  /**
   * @type string
   */
  clusterClass: _propTypes.default.string,

  /**
   * @type boolean
   */
  enableRetinaIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  gridSize: _propTypes.default.number,

  /**
   * @type boolean
   */
  ignoreHidden: _propTypes.default.bool,

  /**
   * @type string
   */
  imageExtension: _propTypes.default.string,

  /**
   * @type string
   */
  imagePath: _propTypes.default.string,

  /**
   * @type Array
   */
  imageSizes: _propTypes.default.array,

  /**
   * @type number
   */
  maxZoom: _propTypes.default.number,

  /**
   * @type number
   */
  minimumClusterSize: _propTypes.default.number,

  /**
   * @type Array
   */
  styles: _propTypes.default.array,

  /**
   * @type string
   */
  title: _propTypes.default.string,

  /**
   * @type boolean
   */
  zoomOnClick: _propTypes.default.bool,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onClusteringBegin: _propTypes.default.func,

  /**
   * function
   */
  onClusteringEnd: _propTypes.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes.default.func
};
MarkerClusterer.contextTypes = (_MarkerClusterer$cont = {}, _MarkerClusterer$cont[_constants.MAP] = _propTypes.default.object, _MarkerClusterer$cont);
MarkerClusterer.childContextTypes = (_MarkerClusterer$chil = {}, _MarkerClusterer$chil[_constants.ANCHOR] = _propTypes.default.object, _MarkerClusterer$chil[_constants.MARKER_CLUSTERER] = _propTypes.default.object, _MarkerClusterer$chil);
var _default = MarkerClusterer;
exports.default = _default;
var eventMap = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE);
  },
  batchSize: function batchSize(instance, _batchSize) {
    instance.setBatchSize(_batchSize);
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator);
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass);
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(instance, _minimumClusterSize) {
    instance.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick);
  }
};