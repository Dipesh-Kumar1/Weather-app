// For Security I have not addded the API key here.
// You can simply get your own API key from openweathermap.org
const API_KEY = "API key";

function getWeather() {
    const city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = Math.round(data.main.temp);
            document.getElementById("desc").innerText = data.weather[0].description;

            document.getElementById("humidity").innerText = data.main.humidity + "%";
            document.getElementById("wind").innerText = data.wind.speed + " km/h";
            document.getElementById("pressure").innerText = data.main.pressure + " hPa";
            document.getElementById("visibility").innerText = (data.visibility / 1000) + " km";
        });
}

