"use strict";

exports.__esModule = true;
exports.default = transformer;

var _capitalize2 = _interopRequireDefault(require("lodash/capitalize"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _lowerFirst2 = _interopRequireDefault(require("lodash/lowerFirst"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _values2 = _interopRequireDefault(require("lodash/values"));

var _path = _interopRequireDefault(require("path"));

var _child_process = require("child_process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function maybeTypeToPropType(maybeType) {
  switch (maybeType) {
    case "boolean":
      return "bool";

    case "number":
      return maybeType;

    case "string":
      return maybeType;

    default:
      return "any";
  }
}

function transformer(file, api) {
  var j = api.jscodeshift;
  var wrap = j(file.source);
  var exportConfig = wrap.find(j.ExportNamedDeclaration).at(0);
  var configString = exportConfig.find(j.TemplateElement).get().node.value.raw;

  var _JSON$parse = JSON.parse(configString),
      _JSON$parse$prohibite = _JSON$parse.prohibitedPropNames,
      prohibitedPropNames = _JSON$parse$prohibite === void 0 ? [] : _JSON$parse$prohibite,
      KlassNameOverrride = _JSON$parse.KlassNameOverrride,
      eventMapOverrides = _JSON$parse.eventMapOverrides,
      getInstanceFromComponent = _JSON$parse.getInstanceFromComponent;

  exportConfig.remove();
  var eventNamesOverrides = (0, _values2.default)(eventMapOverrides);
  var KlassName = KlassNameOverrride || wrap.find(j.ClassDeclaration).at(0).get().node.id.name;
  var result = (0, _child_process.execSync)("./node_modules/.bin/babel-node " + _path.default.resolve(__dirname, "./ClassDefinition.js") + " \"" + KlassName + "\"", {
    encoding: "utf-8"
  });

  var _JSON$parse2 = JSON.parse(result),
      constructor = _JSON$parse2.constructor,
      methods = _JSON$parse2.methods,
      events = _JSON$parse2.events;

  var methodAsProps = methods.filter(function (_ref) {
    var name = _ref.name;
    var matchResult = name.match(/^set(\S+)/);
    return name !== "setMap" && matchResult && !(0, _includes2.default)(prohibitedPropNames, (0, _lowerFirst2.default)(matchResult[1]));
  });
  var publicMethods = methods.filter(function (_ref2) {
    var name = _ref2.name;
    var matchResult = name.match(/^get(\S+)/);
    return !name.match(/Map$/) && matchResult && !(0, _includes2.default)(prohibitedPropNames, (0, _lowerFirst2.default)(matchResult[1]));
  });
  wrap.find(j.Program).forEach(function (path) {
    j(path).replaceWith(_extends({}, path.node.__clone(), {
      body: [_extends({}, path.node.body[0], {
        comments: [j.commentBlock(AUTO_GENERATED_HEADER, true)].concat(path.node.body[0].comments || [])
      })].concat(path.node.body.slice(1))
    }));
  });
  wrap.find(j.ClassBody).forEach(function (path) {
    j(path).replaceWith(Object.assign(path.node.__clone(), {
      body: [].concat(path.node.body, txClassMethods())
    }));
  });
  wrap.find(j.ObjectExpression).forEach(function (path) {
    if ((0, _get2.default)(path, "parentPath.node.key.name") === "propTypes") {
      j(path).replaceWith(Object.assign(path.node.__clone(), {
        properties: [].concat(path.node.properties.filter(function (_ref3) {
          var name = _ref3.key.name;
          return name !== "__jscodeshiftPlaceholder__";
        }), txPropTypes())
      }));
    } else if ((0, _get2.default)(path, "parentPath.node.id.name") === "eventMap") {
      j(path).replaceWith(Object.assign(path.node.__clone(), {
        properties: [].concat(path.node.properties, eventMap())
      }));
    } else if ((0, _get2.default)(path, "parentPath.node.id.name") === "updaterMap") {
      j(path).replaceWith(Object.assign(path.node.__clone(), {
        properties: [].concat(path.node.properties, updaterMap())
      }));
    }
  });
  return wrap.toSource();

  function txPropTypes() {
    return [].concat(methodAsProps.map(function (_ref4) {
      var name = _ref4.name,
          args = _ref4.args,
          desc = _ref4.desc;

      var _name$match = name.match(/^set(\S+)/),
          prop = _name$match[1];

      var _args$match = args.match(/\S+:(\S+)/),
          maybeType = _args$match[1];

      return Object.assign(j.objectProperty(j.identifier("default" + prop), j.identifier("PropTypes." + maybeTypeToPropType(maybeType))), {
        comments: [j.commentBlock("*\n * @type " + maybeType + "\n ", true)]
      });
    }), methodAsProps.map(function (_ref5) {
      var name = _ref5.name,
          args = _ref5.args,
          desc = _ref5.desc;

      var _name$match2 = name.match(/^set(\S+)/),
          prop = _name$match2[1];

      var _args$match2 = args.match(/\S+:(\S+)/),
          maybeType = _args$match2[1];

      return Object.assign(j.objectProperty(j.identifier((0, _lowerFirst2.default)(prop)), j.identifier("PropTypes." + maybeTypeToPropType(maybeType))), {
        comments: [j.commentBlock("*\n * @type " + maybeType + "\n ", true)]
      });
    }), (0, _map2.default)(eventMapOverrides, function (eventName, callbackName) {
      return Object.assign(j.objectProperty(j.identifier(callbackName), j.identifier("PropTypes.func")), {
        comments: [j.commentBlock("*\n * function\n ", true)]
      });
    }), events.filter(function (_ref6) {
      var name = _ref6.name;
      return !(0, _includes2.default)(eventNamesOverrides, name);
    }).map(function (_ref7) {
      var name = _ref7.name;
      return Object.assign(j.objectProperty(j.identifier((0, _camelCase2.default)("on" + (0, _capitalize2.default)(name))), j.identifier("PropTypes.func")), {
        comments: [j.commentBlock("*\n * function\n ", true)]
      });
    }));
  }

  function txClassMethods() {
    return [].concat(publicMethods.map(function (_ref8) {
      var name = _ref8.name,
          returns = _ref8.returns,
          returnsDesc = _ref8.returnsDesc;
      return Object.assign(j.classMethod("method", j.identifier(name), [], j.blockStatement([j.returnStatement(j.callExpression(j.identifier(getInstanceFromComponent + "." + name), []))])), {
        comments: [j.commentBlock("*\n * " + returnsDesc + "\n * @type " + returns + "\n * @public \n ", true)]
      });
    }));
  }

  function eventMap() {
    return [].concat((0, _map2.default)(eventMapOverrides, function (eventName, callbackName) {
      return j.objectProperty(j.identifier(callbackName), j.stringLiteral(eventName));
    }), events.filter(function (_ref9) {
      var name = _ref9.name;
      return !(0, _includes2.default)(eventNamesOverrides, name);
    }).map(function (_ref10) {
      var name = _ref10.name;
      return j.objectProperty(j.identifier((0, _camelCase2.default)("on" + (0, _capitalize2.default)(name))), j.stringLiteral(name));
    }));
  }

  function updaterMap() {
    return [].concat(methodAsProps.map(function (_ref11) {
      var name = _ref11.name,
          args = _ref11.args,
          desc = _ref11.desc;

      var _name$match3 = name.match(/^set(\S+)/),
          prop = _name$match3[1];

      return j.objectMethod("method", j.identifier((0, _lowerFirst2.default)(prop)), [j.identifier("instance"), j.identifier((0, _lowerFirst2.default)(prop))], j.blockStatement([j.expressionStatement(j.callExpression(j.identifier("instance." + name), [j.identifier((0, _lowerFirst2.default)(prop))]))]));
    }));
  }
}

var AUTO_GENERATED_HEADER = "\n * -----------------------------------------------------------------------------\n * This file is auto-generated from the corresponding file at `src/macros/`.\n * Please **DO NOT** edit this file directly when creating PRs.\n * -----------------------------------------------------------------------------\n ";