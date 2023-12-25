console.log("This works")

document.getElementById('result').value = 'result:';

function add() {
    let number = parseFloat(document.getElementById("box").value);
    let multipler = parseFloat(document.getElementById("multipler").value);
    let result = number * multipler;
    document.getElementById("result").value = "result: " + result;
    document.getElementById('weatherInfo').innerText = "Weather:";
}

let number = document.getElementById("number");
number.addEventListener("click", add);

let calculateButton = document.getElementById("number");
calculateButton.addEventListener("click", add);

document.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        add();
    }
});

function getWeather() {
    const apiKey = '8216f6e872dec38b0b49b3875a9991e2';
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherInfo = `Temperature: ${temperature}°C, Description: ${description}`;

            document.getElementById('weatherInfo').innerText = "Weather: " + weatherInfo;
        })
        .catch((error) => {
            console.log('Error:', error);
            document.getElementById('weatherInfo').innerText = 'Failed to retrieve weather data. Check your spelling.';
        });
}

document.getElementById('getWeatherButton').addEventListener('click', getWeather);
document.getElementById('cityInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
