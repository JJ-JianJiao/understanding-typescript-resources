declare var ol: any;

const form = document.querySelector("form")!;
// const addressInput = document.getElementById("address")! as HTMLInputElement;

// const GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";

// declare var google: any;

// type GoogleGeocodingResponse = {
//   results: { geometry: { location: { lat: number; lng: number } } }[];
//   status: "OK" | "ZERO_RESULTS";
// };

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones
  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16,
    }),
  });
}

form.addEventListener("submit", searchAddressHandler);
