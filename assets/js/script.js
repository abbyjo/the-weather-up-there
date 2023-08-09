var APIkey = "d5addee24f3ceadd8bc7ee2aecd4ce24"
var searchBtn = $('#search-btn')
var city = $("#searchbox")
var currentDate = dayjs().format('M/D/YY')
var currentCity = $('#today')
var currentTemp = $('#todayTemp')
var currentWind = $('#todayWind')
var currentHumid = $('#todayHumid')

//API call to fetch and display current weather in searched city
function weatherToday() {
    var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.val()}&appid=${APIkey}&units=imperial`;

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then (function (data){
            var iconCode = data.weather[0].icon;
            var iconurl = `http://openweathermap.org/img/w/${iconCode}.png`;
            currentCity.text(`${data.name} ⋆ ${currentDate}`);
            currentCity.prepend(`<img id="t-icon" width="50px" height="50px"></img>`)
            $('#t-icon').attr('src', iconurl)
            currentTemp.text(`Temp: ${data.main.temp} °F`)
            currentWind.text(`Wind Speed: ${data.wind.speed} mph`)
            currentHumid.text(`Humidity: ${data.main.humidity}%`)
        })
}

function weatherWeek() {
    var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=Miami&appid=d5addee24f3ceadd8bc7ee2aecd4ce24&units=imperial`

    fetch(fiveDayURL)
        .then (function (response) {
            return response.json();
        })
        .then (function (data){
            $('#day-1').text(dayjs.unix(data.list[7].dt).format('M/D/YY'))
            $('#day-2').text(dayjs.unix(data.list[15].dt).format('M/D/YY'))
            $('#day-3').text(dayjs.unix(data.list[23].dt).format('M/D/YY'))
            $('#day-4').text(dayjs.unix(data.list[31].dt).format('M/D/YY'))
            $('#day-5').text(dayjs.unix(data.list[39].dt).format('M/D/YY'))
        })

}

searchBtn.on("click", weatherToday)

weatherWeek()



// {
//     "coord": {
//         "lon": -80.1937,
//         "lat": 25.7743
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 91.18,
//         "feels_like": 103.78,
//         "temp_min": 87.01,
//         "temp_max": 95.02,
//         "pressure": 1016,
//         "humidity": 72
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4,
//         "deg": 127,
        // "gust": 10
//     },
//     "clouds": {
//         "all": 95
//     },
//     "dt": 1691359226,
//     "sys": {
//         "type": 2,
//         "id": 2009435,
//         "country": "US",
//         "sunrise": 1691318965,
//         "sunset": 1691366637
//     },
//     "timezone": -14400,
//     "id": 4164138,
//     "name": "Miami",
//     "cod": 200
// }