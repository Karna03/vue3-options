<script>
export default {
  data() {
    return {
      all_weater: {
        name: "",
        temp: "",
        feels: "",
        img_url: "",
      },
      apiKey: process.env.VUE_APP_WETHER,
      city: "Minsk",
      info: "",
    };
  }, 
  methods: {
    async WeaterF() {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=ru&units=metric&appid=${this.apiKey}`;
      fetch(url)
        .then(async (response) => {
          const data = await response.json();
          console.log(data);
          this.all_weater.name = data.name;
          this.all_weater.temp = Math.round(data.main.temp);
          this.all_weater.feels = Math.round(data.main.feels_like);
          this.all_weater.img_url =
            "https://openweathermap.org/img/wn/" +
            data.weather[0]["icon"] +
            "@2x.png";
        })
        .catch(function () {
          this.all_weater.name = "No information about this city";
          this.all_weater.temp = "not found";
          this.all_weater.feels = "not found";
          this.all_weater.img_url =
            "https://cdn-icons-png.flaticon.com/512/929/929457.png";
        });
    },
    async Curs() {
      fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      )
        .then(async (response) => {
          const data = await response.json();
          this.info = data.bpi;
        })
        .catch(function () {
          console.log("error");
        });
    },
  },
  mounted() {
    this.WeaterF();
    // this.$store.dispatch()
    console.log(this.$store.dispatch)
    this.Curs();
  },
};
</script>

<template>
  <div class="weather-w">
    <div class="weather">
      <input v-model="city" @keydown.enter="WeaterF" placeholder="inter city" />
      <button @click="WetherF">Find</button>
    </div>
    <div class="weather inf">
      <h2>{{ all_weater.name }}</h2>
      <p><img class="wet-img" :src="all_weater.img_url" alt="" /></p>
      <p>temp:{{ all_weater.temp }}&deg;</p>
      <p>feels like: {{ all_weater.feels }}&deg;</p>
    </div>
    <div class="weather">
      <h2>Bitcoin Price Index</h2>
      <div v-for="currency in info" :key="currency.id" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          {{ currency.rate_float }}<span v-html="currency.symbol"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.weather-w {
  min-height: 300px;
}
.wet-img {
  width: 100px;
  height: 100px;
}
.inf {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
p,
h2 {
  margin: 5px;
}
input {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: rgb(255, 255, 255);
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.weather {
  margin: 10px auto;
  width: 60%;
  background-color: #ffffff82;
  border-radius: 10px;
  height: 90%;
  padding: 1%;
}
</style>
