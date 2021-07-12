"use strict";

exports.__esModule = true;
exports.construct = construct;
exports.componentDidMount = componentDidMount;
exports.componentDidUpdate = componentDidUpdate;
exports.componentWillUnmount = componentWillUnmount;

var _bind2 = _interopRequireDefault(require("lodash/bind"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _reduce3 = _interopRequireDefault(require("lodash/reduce"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _lowerFirst2 = _interopRequireDefault(require("lodash/lowerFirst"));

var _has2 = _interopRequireDefault(require("lodash/has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rdcUncontrolledAndControlledProps(acc, value, key) {
  if ((0, _has2.default)(acc.prevProps, key)) {
    var match = key.match(/^default(\S+)/);

    if (match) {
      var unprefixedKey = (0, _lowerFirst2.default)(match[1]);

      if (!(0, _has2.default)(acc.nextProps, unprefixedKey)) {
        acc.nextProps[unprefixedKey] = acc.prevProps[key];
      }
    } else {
      acc.nextProps[key] = acc.prevProps[key];
    }
  }

  return acc;
}

function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  (0, _forEach2.default)(updaterMap, function (fn, key) {
    var nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      fn(instance, nextValue);
    }
  });
}

function construct(propTypes, updaterMap, prevProps, instance) {
  var _reduce2 = (0, _reduce3.default)(propTypes, rdcUncontrolledAndControlledProps, {
    nextProps: {},
    prevProps: prevProps
  }),
      nextProps = _reduce2.nextProps;

  applyUpdaterToNextProps(updaterMap, {
    /* empty prevProps for construct */
  }, nextProps, instance);
}

function componentDidMount(component, instance, eventMap) {
  registerEvents(component, instance, eventMap);
}

function componentDidUpdate(component, instance, eventMap, updaterMap, prevProps) {
  component.unregisterAllEvents();
  applyUpdaterToNextProps(updaterMap, prevProps, component.props, instance);
  registerEvents(component, instance, eventMap);
}

function componentWillUnmount(component) {
  component.unregisterAllEvents();
}

function registerEvents(component, instance, eventMap) {
  var registeredList = (0, _reduce3.default)(eventMap, function (acc, googleEventName, onEventName) {
    if ((0, _isFunction2.default)(component.props[onEventName])) {
      acc.push(google.maps.event.addListener(instance, googleEventName, component.props[onEventName]));
    }

    return acc;
  }, []);
  component.unregisterAllEvents = (0, _bind2.default)(_forEach2.default, null, registeredList, unregisterEvent);
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}