const cityTextBox = document.getElementById("city");
const citySearchResults = document.getElementById("search-results");
let addressList = [];
let selectedAddress = {};
let distance = 0;
let packageName = "";
let pachageCat = "";
let selectedDate = "";

let sCoords = {
  latitude: selectedAddress.lat,
  longitude: selectedAddress.lon,
};

let dCoords = {
  latitude: -37.840935,
  longitude: 144.946457,
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
    console.log(distance, "Km");
    cityTextBox.value = selectedAddress.formatted;
    citySearchResults.innerHTML = "";
    citySearchResults.classList.add("d-none");
    if (distance > 20) {
      showDistanceExceedPopup();
    } else {
      pachageCat = distance > 10 ? "plus" : "general";
      calculateValue(pachageCat);
    }
    
  

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
  let startingLat = degreesToRadians(startCoords.latitude);
  let startingLong = degreesToRadians(startCoords.longitude);
  let destinationLat = degreesToRadians(destCoords.latitude);
  let destinationLong = degreesToRadians(destCoords.longitude);

  // Radius of the Earth in kilometers
  let radius = 6371;

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

//enable custom datepicker 

flatpickr("input[type=datetime-local]" , {
  minDate: "today",
});

function validateCheckoutV2() {
  var isValid = pachageCat !== "";

  if (isValid) {
    showPopupWithDelay();
  } else {
    // Validation failed
    alert("Validation failed! Please select a location & Date to continue.");
  }
}

function showPopupWithDelay() {
  myPopup.classList.add("show");
  setTimeout(myFunction, 2000);
}

myButton.addEventListener("click", validateCheckoutV2);

closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});

function calculateValue(status) {
  // Get the element by its ID
  var priceElement = document.getElementById('price');

  // Extract the text content and remove the dollar sign
  var priceText = 140;

  // Parse the string to a floating-point number
  var priceValue = parseFloat(priceText);

  // Perform calculations (e.g., double the value)
  var result = 0
  if (status == true){
    result = priceValue + 50;
  }else{
    result = priceValue;
  }


  // Display the result (you can modify this based on your requirements)
  //alert('The calculated value is: $' + result.toFixed(2));
  priceElement.textContent = '$' +result.toFixed(2);
}


function addTicketWidget(ref) {

var widgetContainer = document.getElementById('widget-container');
var scriptElement = document.createElement('script');
var url = 'https://www.tickettailor.com/all-tickets/malindu/?ref=' +  selectedDate + '&srch=' + ref;

scriptElement.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
scriptElement.setAttribute('data-url', url);
scriptElement.setAttribute('data-type', 'inline');
scriptElement.setAttribute('data-inline-minimal', 'false');
scriptElement.setAttribute('data-inline-show-logo', 'true');
scriptElement.setAttribute('data-inline-bg-fill', 'true');
scriptElement.setAttribute('data-inline-inherit-ref-from-url-param', 'special');
scriptElement.setAttribute('data-inline-ref', 'website_widget');

widgetContainer.appendChild(scriptElement);
}

// Call the function to add the widget when the page loads
// window.onload = addTicketWidget;


getDate()
function getDate(){
  document.getElementById('schedule-date').addEventListener('change', function() {
    // Get the selected date
    selectedDate = this.value; 
  });
}

function myFunction() {
console.log("Function executed after 2 seconds");
addTicketWidget(pachageCat);

// Add your code here
document.getElementById('loader').style.display = 'none';
}


function showDistanceExceedPopup() {
 
  alert("Pick-up location entered is outside our standard radius. Please contact booking team for support.");

  var cityTxtField = document.getElementById('city');
    
  cityTxtField.value = '';
}
