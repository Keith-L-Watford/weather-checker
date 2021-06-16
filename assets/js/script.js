var APIKey = "ebc561a4f7b5280398d199954c0c6462";
var userCity = "Philadelphia"

// document.querySelector("#search").value.trim;
console.log(userCity);
var city = ""
var today = moment().format('MM-DD-YYYY');
// var lat = 39.9523
// var lon = -75.1638
var submitButton = document.getElementsByClassName("btn");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + APIKey;



// function getWeather(event) {
//   event.preventDefault();

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
            // console.log(data.current.temp);
            // console.log(data.current.uvi);
            // console.log(data.current.wind_speed);
            // console.log(data.current.humidity);

            // console.log(data.lat);
            // console.log(data.lon);

            var tempKelvin = data.current.temp
            var tempFahrenheit = Math.floor((tempKelvin - 273.15) * (9 / 5) + 32)
            var uviNum = data.current.uvi
            var windNum = data.current.wind_speed
            var humidityNum = data.current.humidity

            // console.log(tempFahrenheit);

            var citySearchedEl = document.querySelector("#city-searched");
            var tempEl = document.querySelector("#city-temp");
            var uviEl = document.querySelector("#city-uvi");
            var windEl = document.querySelector("#city-wind");
            var humidityEl = document.querySelector("#city-humidity");

            citySearchedEl.textContent = userCity + " (" + today + ")"
            tempEl.textContent = "Temp: " + tempFahrenheit + "°";
            windEl.textContent = "Wind: " + windNum + " MPH"
            humidityEl.textContent = "Humidity: " + humidityNum + "%"
            uviEl.textContent = "UV Index: " + uviNum;

            // 
            // 

            var todayPlusOne = moment().add(1, 'days').format('MM-DD-YYYY')
            var tempKelvinOne = data.daily[1].temp.day
            var tempFahrenheitOne = Math.floor((tempKelvinOne - 273.15) * (9 / 5) + 32)
            var uviNumOne = data.daily[1].uvi
            var windNumOne = data.daily[1].wind_speed
            var humidityNumOne = data.daily[1].humidity

            console.log(todayPlusOne);
            console.log(tempFahrenheitOne);
            console.log(uviNumOne);
            console.log(windNumOne);
            console.log(humidityNumOne);

            var dateElOne = document.querySelector("#today-1");
            var tempElOne = document.querySelector("#city-temp-1");
            var uviElOne = document.querySelector("#city-uvi-1");
            var windElOne = document.querySelector("#city-wind-1");
            var humidityElOne = document.querySelector("#city-humidity-1");

            dateElOne.textContent = "(" + todayPlusOne + ")"
            tempElOne.textContent = "Temp: " + tempFahrenheitOne + "°";
            windElOne.textContent = "Wind: " + windNumOne + " MPH"
            humidityElOne.textContent = "Humidity: " + humidityNumOne + "%"
            uviElOne.textContent = "UV Index: " + uviNumOne;




            // console.log(data.daily.1.temp);

          }))
    }))
// }








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