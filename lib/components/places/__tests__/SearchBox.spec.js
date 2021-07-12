"use strict";

describe("addons/SearchBox module", function () {
  var _require = require("../SearchBox"),
      __esModule = _require.__esModule,
      DefaultExport = _require.default,
      NamedExport = _require.SearchBox;

  it("should be an ES module", function () {
    expect(__esModule).toBe(true);
  });
  it("should be default exported", function () {
    expect(DefaultExport).toBeDefined();
  });
  it("should be named exported", function () {
    expect(NamedExport).toBeDefined();
  });
});