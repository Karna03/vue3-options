<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions('weather',['fetchWeather'])
  },
  mounted() {
    this.fetchWeather();
  },
   computed:{
    ...mapGetters({
      allWeather:'weather/allWeather'
    })
  }
};
</script>

<template>
  <div class="weather-w">
  <div class="weather">
      <input v-model="allWeather.city" @keydown.enter="fetchWeather" placeholder="inter city" />
      <button @click="fetchWeather">Find</button>
    </div>
    <div class="weather inf">
      <h2>{{ allWeather.all_weather.name }}</h2>
      <p><img class="wet-img" :src="allWeather.all_weather.img_url" alt="" /></p>
      <p>temp:{{ allWeather.all_weather.temp }}&deg;</p>
      <p>feels like: {{ allWeather.all_weather.feels }}&deg;</p>
    </div>
  </div>
</template>

<style>
.weather-w {
  min-height: 300px;
  color: aliceblue;
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
