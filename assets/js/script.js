var APIkey = "d5addee24f3ceadd8bc7ee2aecd4ce24"
var city = $("#searchbox").val()
var currentWeather = $('#today')

function getWeatherAPI () {
    var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=d5addee24f3ceadd8bc7ee2aecd4ce24&units=imperial`;

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then (function (data){
            console.log(data.main.temp);
            $('#today').text(`${data.name} ⋆ 8/25/23`)

        })

}

getWeatherAPI()





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