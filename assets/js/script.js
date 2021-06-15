var APIKey = "ebc561a4f7b5280398d199954c0c6462";
var userCity = "";

// var lat = 39.9523
// var lon = -75.1638
var submitButton = document.getElementsByClassName("btn");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + APIKey;

console.log(userCity);

function checkWeather(params) {


  fetch(queryURL)
    .then((res) => res.json()
      .then((data) => {
        // console.log(data);
        // console.log(data.coord.lat);
        // console.log(data.coord.lon);

        var cityLat = data.coord.lat
        var cityLon = data.coord.lon

        var uvURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + APIKey;

        fetch(uvURL)
          .then((res) => res.json()
            .then((data) => {
              console.log(data);
              // write jquery here with dynamic elements.
              console.log(data.current.temp);
              console.log(data.current.uvi);
              console.log(data.current.wind_speed);
              console.log(data.current.humidity);

              console.log(data.lat);
              console.log(data.lon);
            }))
      }))
}










submitButton.addEventListener('submit');

// for (let i = 0; i < daily.length; i++) {

// }
// submitButton.addEventListener('submit', get);
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, 
// an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index


// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view futur e weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, 
//  the temperature, the wind speed, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city