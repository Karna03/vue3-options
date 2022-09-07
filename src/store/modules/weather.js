export default {
  namespaced: true,
  state: () => ({
    all_weather: {
      name: "",
      temp: "",
      feels: "",
      img_url: "",
    },
    apiKey: process.env.VUE_APP_WEATHER,
    city: "Minsk",
  }),
  mutations: {
    setWeather(state, data) {
      state.all_weather.name = data.name;
      state.all_weather.temp = data.main.temp;
      state.all_weather.feels = data.main.feels_like;
      state.all_weather.img_url =
        "https://openweathermap.org/img/wn/" +
        data.weather[0]["icon"] +
        "@2x.png";
      console.log(state.all_weather);
    },
  },
  actions: {
    async fetchWeather({ state, commit }) {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${state.city}&lang=ru&units=metric&appid=${state.apiKey}`;
      return fetch(url).then(async (response) => {
        const data = await response.json();
        console.log(url);
        console.log(data);
        commit("setWeather", data);
        return state;
      });
    },
  },
  getters: {
    allWeather: (state) => state,
  },
};
