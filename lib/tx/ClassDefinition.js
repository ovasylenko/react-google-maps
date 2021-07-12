"use strict";

var _url = require("url");

var _toMarkdown = _interopRequireDefault(require("to-markdown"));

var _makeFetchHappen = _interopRequireDefault(require("make-fetch-happen"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = _makeFetchHappen.default.defaults({
  cacheManager: ".cache/" // path where cache will be written (and read)

});

var KlassName = process.argv[2];
fetch("https://developers.google.com/maps/documentation/javascript/3.exp/reference").then(function (it) {
  return it.text();
}).then(function (it) {
  return _cheerio.default.load(it);
}).then(function ($) {
  var $content = $("#" + KlassName).parent();
  return contentToJS(KlassName, $, $content);
}).then(function (it) {
  return process.stdout.write(JSON.stringify(it));
}).catch(function (error) {
  console.error(error);
  process.exit(1);
});

function contentToJS(KlassName, $, $content) {
  var constructor = $content.find("#" + KlassName).next().find("code").text();
  var $constructorTable = $content.find("[summary=\"class " + KlassName + " - Constructor\"]");

  var _$constructorTable$fi = $constructorTable.find("tr > td > code").text().match(/\S+\((.*)\)/),
      constructorArgs = _$constructorTable$fi[1];

  var $methodsTable = $content.find("[summary=\"class " + KlassName + " - Methods\"]");
  var methods = $methodsTable.find("tbody > tr").map(function (i, tr) {
    var $tr = $(tr);

    var _$tr$find$text$replac = $tr.find("td:first-child").text().replace("\n", "").match(/(\S+)\((.*)\)/),
        name = _$tr$find$text$replac[1],
        args = _$tr$find$text$replac[2];

    var returnsDesc = (0, _toMarkdown.default)($tr.find("td:nth-child(2) > div.desc").html());
    return {
      name: name,
      args: args,
      returns: $tr.find("td:nth-child(2) > div > code").text(),
      returnsDesc: returnsDesc
    };
  }).get();
  var $eventsTable = $content.find("[summary=\"class " + KlassName + " - Events\"]");
  var events = $eventsTable.find("tbody > tr").map(function (i, tr) {
    var $tr = $(tr);
    var name = $tr.find("td:first-child").text();
    return {
      name: name,
      args: $tr.find("td:nth-child(2) > div > code").text(),
      returnsDesc: $tr.find("td:nth-child(2) > div.desc").text()
    };
  }).get();
  return {
    constructor: {
      name: constructor,
      args: constructorArgs
    },
    methods: methods,
    events: events
  };
}