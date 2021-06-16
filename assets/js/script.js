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

            // 
            // 

            var todayPlusTwo = moment().add(2, 'days').format('MM-DD-YYYY')
            var tempKelvinTwo = data.daily[2].temp.day
            var tempFahrenheitTwo = Math.floor((tempKelvinTwo - 273.15) * (9 / 5) + 32)
            var uviNumTwo = data.daily[2].uvi
            var windNumTwo = data.daily[2].wind_speed
            var humidityNumTwo = data.daily[2].humidity

            console.log(todayPlusTwo);
            console.log(tempFahrenheitTwo);
            console.log(uviNumTwo);
            console.log(windNumTwo);
            console.log(humidityNumTwo);

            var dateElTwo = document.querySelector("#today-2");
            var tempElTwo = document.querySelector("#city-temp-2");
            var uviElTwo = document.querySelector("#city-uvi-2");
            var windElTwo = document.querySelector("#city-wind-2");
            var humidityElTwo = document.querySelector("#city-humidity-2");

            dateElTwo.textContent = "(" + todayPlusTwo + ")"
            tempElTwo.textContent = "Temp: " + tempFahrenheitTwo + "°";
            windElTwo.textContent = "Wind: " + windNumTwo + " MPH"
            humidityElTwo.textContent = "Humidity: " + humidityNumTwo + "%"
            uviElTwo.textContent = "UV Index: " + uviNumTwo;

            // 
            // 

            var todayPlusThree = moment().add(3, 'days').format('MM-DD-YYYY')
            var tempKelvinThree = data.daily[3].temp.day
            var tempFahrenheitThree = Math.floor((tempKelvinThree - 273.15) * (9 / 5) + 32)
            var uviNumThree = data.daily[3].uvi
            var windNumThree = data.daily[3].wind_speed
            var humidityNumThree = data.daily[3].humidity

            console.log(todayPlusThree);
            console.log(tempFahrenheitThree);
            console.log(uviNumThree);
            console.log(windNumThree);
            console.log(humidityNumThree);

            var dateElThree = document.querySelector("#today-3");
            var tempElThree = document.querySelector("#city-temp-3");
            var uviElThree = document.querySelector("#city-uvi-3");
            var windElThree = document.querySelector("#city-wind-3");
            var humidityElThree = document.querySelector("#city-humidity-3");

            dateElThree.textContent = "(" + todayPlusThree + ")"
            tempElThree.textContent = "Temp: " + tempFahrenheitThree + "°";
            windElThree.textContent = "Wind: " + windNumThree + " MPH"
            humidityElThree.textContent = "Humidity: " + humidityNumThree + "%"
            uviElThree.textContent = "UV Index: " + uviNumThree;

            // 
            // 

            var todayPlusFour = moment().add(4, 'days').format('MM-DD-YYYY')
            var tempKelvinFour = data.daily[4].temp.day
            var tempFahrenheitFour = Math.floor((tempKelvinFour - 273.15) * (9 / 5) + 32)
            var uviNumFour = data.daily[4].uvi
            var windNumFour = data.daily[4].wind_speed
            var humidityNumFour = data.daily[4].humidity

            console.log(todayPlusFour);
            console.log(tempFahrenheitFour);
            console.log(uviNumFour);
            console.log(windNumFour);
            console.log(humidityNumFour);

            var dateElFour = document.querySelector("#today-4");
            var tempElFour = document.querySelector("#city-temp-4");
            var uviElFour = document.querySelector("#city-uvi-4");
            var windElFour = document.querySelector("#city-wind-4");
            var humidityElFour = document.querySelector("#city-humidity-4");

            dateElFour.textContent = "(" + todayPlusFour + ")"
            tempElFour.textContent = "Temp: " + tempFahrenheitFour + "°";
            windElFour.textContent = "Wind: " + windNumFour + " MPH"
            humidityElFour.textContent = "Humidity: " + humidityNumFour + "%"
            uviElFour.textContent = "UV Index: " + uviNumFour;

            // 
            // 

            var todayPlusFive = moment().add(5, 'days').format('MM-DD-YYYY')
            var tempKelvinFive = data.daily[5].temp.day
            var tempFahrenheitFive = Math.floor((tempKelvinFive - 273.15) * (9 / 5) + 32)
            var uviNumFive = data.daily[5].uvi
            var windNumFive = data.daily[5].wind_speed
            var humidityNumFive = data.daily[5].humidity

            console.log(todayPlusFive);
            console.log(tempFahrenheitFive);
            console.log(uviNumFive);
            console.log(windNumFive);
            console.log(humidityNumFive);

            var dateElFive = document.querySelector("#today-5");
            var tempElFive = document.querySelector("#city-temp-5");
            var uviElFive = document.querySelector("#city-uvi-5");
            var windElFive = document.querySelector("#city-wind-5");
            var humidityElFive = document.querySelector("#city-humidity-5");

            dateElFive.textContent = "(" + todayPlusFive + ")"
            tempElFive.textContent = "Temp: " + tempFahrenheitFive + "°";
            windElFive.textContent = "Wind: " + windNumFive + " MPH"
            humidityElFive.textContent = "Humidity: " + humidityNumFive + "%"
            uviElFive.textContent = "UV Index: " + uviNumFive;

            // 
            // 
            // 


          }))
    }))
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