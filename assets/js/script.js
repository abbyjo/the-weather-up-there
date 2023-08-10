var APIkey = "d5addee24f3ceadd8bc7ee2aecd4ce24"
var searchBtn = $('#search-btn')
var city = $("#searchbox")
var currentDate = dayjs().format('M/D/YY')
var currentCity = $('#today')
var currentTemp = $('#todayTemp')
var currentWind = $('#todayWind')
var currentHumid = $('#todayHumid')
var savedSearches = $('#saved-search')

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

//API call to fetch and display 5-day forecast in searched city
function weatherWeek() {
    var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city.val()}&appid=${APIkey}&units=imperial`

    fetch(fiveDayURL)
        .then (function (response) {
            return response.json();
        })
        .then (function (data){ 
            $("h4").removeClass("d-none")
            $("#5-day").removeClass("d-none")
            $('#day-1').text(dayjs.unix(data.list[7].dt).format('M/D/YY'))
            $('#day-2').text(dayjs.unix(data.list[15].dt).format('M/D/YY'))
            $('#day-3').text(dayjs.unix(data.list[23].dt).format('M/D/YY'))
            $('#day-4').text(dayjs.unix(data.list[31].dt).format('M/D/YY'))
            $('#day-5').text(dayjs.unix(data.list[39].dt).format('M/D/YY'))
            $('#T1').text(`Temp: ${data.list[7].main.temp}°F`)
            $('#T2').text(`Temp: ${data.list[15].main.temp}°F`)
            $('#T3').text(`Temp: ${data.list[23].main.temp}°F`)
            $('#T4').text(`Temp: ${data.list[31].main.temp}°F`)
            $('#T5').text(`Temp: ${data.list[39].main.temp}°F`)
            $('#W1').text(`Wind: ${data.list[7].wind.speed} mph`)
            $('#W2').text(`Wind: ${data.list[15].wind.speed} mph`)
            $('#W3').text(`Wind: ${data.list[23].wind.speed} mph`)
            $('#W4').text(`Wind: ${data.list[31].wind.speed} mph`)
            $('#W5').text(`Wind: ${data.list[39].wind.speed} mph`)
            $('#H1').text(`Humidity: ${data.list[7].main.humidity}%`)
            $('#H2').text(`Humidity: ${data.list[15].main.humidity}%`)
            $('#H3').text(`Humidity: ${data.list[23].main.humidity}%`)
            $('#H4').text(`Humidity: ${data.list[31].main.humidity}%`)
            $('#H5').text(`Humidity: ${data.list[39].main.humidity}%`)
            
        })

}
function saveSearch() {
    $("#saved-search").append(`<a id="savedSearchBtn" href="#" class="my-2 btn custom-btn">${city.val()}</a>`);
    // localStorage.setItem("city",city.val());
    var newCity = city.val()
    if (localStorage.getItem('city')== null){
        localStorage.setItem('city', '[]')
    }
    var savedSearches = JSON.parse(localStorage.getItem('city'));
    savedSearches.push(newCity);
    localStorage.setItem('city', JSON.stringify(savedSearches))
}


function getWeather(){
    weatherToday();
    weatherWeek();
    saveSearch()
}

searchBtn.on("click", getWeather)
savedSearches.on("click",function(){
    
})