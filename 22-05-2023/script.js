const weather = {
  apiKey: "6430bcf79da2899569cfb26e0767e022",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=6430bcf79da2899569cfb26e0767e022"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    const cityElement = document.querySelector(".city");
    cityElement.textContent = "Il tempo nella città " + name + " è:";

    const iconElement = document.querySelector(".icon");
    iconElement.src = "https://openweathermap.org/img/wn/" + icon + ".png";

    const descriptionElement = document.querySelector(".description ");
    descriptionElement.textContent = description;

    const tempElement = document.querySelector(".temp");
    tempElement.textContent = temp + "°C";

    const humidityElement = document.querySelector(".humidity");
    humidityElement.textContent = "Umidità: : " + humidity + "%";

    const windElement = document.querySelector(".wind");
    windElement.textContent = "Velocità del vento: " + speed + " km/h";

    const weatherElement = document.querySelector(".weather");
    weatherElement.classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
