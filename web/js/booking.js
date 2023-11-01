const cityTextBox = document.getElementById("city");
const citySearchResults = document.getElementById("search-results");
let addressList = [];
let selectedAddress = {};
let distance = 0;

let sCoords = {
    latitude: selectedAddress.lat,
    longitude: selectedAddress.lon,
};

let dCoords = {
  latitude: -37.840935,
  longitude:  144.946457,
};




function searchLocations(text) {
  fetch(
    "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
      text +
      "&format=json&apiKey=e510a82d6fcd4b4882e8399e5675d2bb"
  )
    .then((response) => response.json())
    .then((result) => {
      addressList = [];
      citySearchResults.innerHTML = "";
      if (result.results != undefined || result.results != null) {
        result.results.forEach((element) => {
          const address = {
            lat: element.lat,
            lon: element.lon,
            formatted: element.formatted,
            city: element.city,
            country: element.country,
          };
          loadCityResult(address);
          addressList.push(address);
        });
        console.log(addressList);
      }
    })
    .catch((error) => console.log("error", error));
}

cityTextBox.addEventListener("input", function () {
  if (cityTextBox.value != "") {
    searchLocations(cityTextBox.value);
  }
});
cityTextBox.addEventListener("search", function () {
  if (cityTextBox.value == "") {
    citySearchResults.classList.add("d-none");
  }
});

function loadCityResult(address) {
  const li = document.createElement("li");
  const citySpan = document.createElement("splan");
  const formattedSpan = document.createElement("span");

  citySearchResults.classList.remove("d-none");
  citySpan.classList.add("fw-bold");
  citySpan.classList.add("me-2");
  li.classList.add("list-group-item");
  li.classList.add("user-select");

  citySpan.innerText =
    address.city == undefined ? address.country : address.city;
  formattedSpan.innerText = address.formatted;

  li.setAttribute("data-address", JSON.stringify(address));
  li.addEventListener("click", function (e) {
    e.stopPropagation();
    selectedAddress = JSON.parse(e.currentTarget.dataset.address);
    sCoords = {
        latitude: selectedAddress.lat,
        longitude: selectedAddress.lon,
    };
    distance = calcDistance(sCoords, dCoords);
    console.log(distance , "Km")
    cityTextBox.value = selectedAddress.formatted;
    citySearchResults.innerHTML = "";
    citySearchResults.classList.add("d-none");
  });

  li.appendChild(citySpan);
  li.appendChild(formattedSpan);
  citySearchResults.appendChild(li);
}

// Convert from degrees to radians
function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return radians;
}

// Function takes two objects, that contain coordinates to a starting and destination location.
function calcDistance(startCoords, destCoords) {
    debugger
  let startingLat = degreesToRadians(startCoords.latitude);
  let startingLong = degreesToRadians(startCoords.longitude);
  let destinationLat = degreesToRadians(destCoords.latitude);
  let destinationLong = degreesToRadians(destCoords.longitude);

  // Radius of the Earth in kilometers
  let radius = 6571;

  // Haversine equation
  let distanceInKilometers =
    Math.acos(
      Math.sin(startingLat) * Math.sin(destinationLat) +
        Math.cos(startingLat) *
          Math.cos(destinationLat) *
          Math.cos(startingLong - destinationLong)
    ) * radius;
  return distanceInKilometers;
}


