"use strict";

describe("react-google-maps module (index.js)", function () {
  var _require = require("../"),
      __esModule = _require.__esModule,
      DefaultExport = _require.default,
      withScriptjs = _require.withScriptjs,
      withGoogleMap = _require.withGoogleMap,
      GoogleMap = _require.GoogleMap,
      Circle = _require.Circle,
      Marker = _require.Marker,
      Polyline = _require.Polyline,
      Polygon = _require.Polygon,
      Rectangle = _require.Rectangle,
      InfoWindow = _require.InfoWindow,
      OverlayView = _require.OverlayView,
      DirectionsRenderer = _require.DirectionsRenderer,
      FusionTablesLayer = _require.FusionTablesLayer,
      KmlLayer = _require.KmlLayer,
      TrafficLayer = _require.TrafficLayer,
      BicyclingLayer = _require.BicyclingLayer,
      StreetViewPanorama = _require.StreetViewPanorama;

  it("should be an ES module", function () {
    expect(__esModule).toBe(true);
  });
  it("should have no default exported", function () {
    expect(DefaultExport).toBeUndefined();
  });
  it("should have name exports for basic components", function () {
    expect(withScriptjs).toBeDefined();
    expect(withGoogleMap).toBeDefined();
    expect(GoogleMap).toBeDefined();
    expect(Circle).toBeDefined();
    expect(Marker).toBeDefined();
    expect(Polyline).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(Rectangle).toBeDefined();
    expect(InfoWindow).toBeDefined();
    expect(OverlayView).toBeDefined();
    expect(DirectionsRenderer).toBeDefined();
    expect(FusionTablesLayer).toBeDefined();
    expect(KmlLayer).toBeDefined();
    expect(TrafficLayer).toBeDefined();
    expect(BicyclingLayer).toBeDefined();
    expect(StreetViewPanorama).toBeDefined();
  });
});