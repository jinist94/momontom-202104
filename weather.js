const weather = document.querySelector(".js-weather");
const API_KEY = "398e3171a6d4f0f231151d3f0d3b38eb"
const COORDS="coords";




function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperture = json.main.temp;
        const place = json.name;
        weather.innerText= `${temperture} @ ${place}`;
    })
}
function saveCoord(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoord(coordsObj);
    getWeather(latitude, longitude);
}

function handleErrer(){
    console.log("sorry")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleErrer);

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
 loadCoords();
}
init();