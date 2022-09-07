<template>
  <div>
    <h2>Bitcoin Price Indexx</h2>
    <div v-for="currency in allExchangeRate" :key="currency.id" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        {{ currency.rate_float }}<span v-html="currency.symbol"></span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions('ratebpi',['fetchExchangeRate'])
  },
  mounted(){
    this.fetchExchangeRate()
  },
  computed:{
    ...mapGetters({
      allExchangeRate:'ratebpi/allExchangeRate'
    })
  }
};
</script>

<style scoped>
div {
  color: azure;
}
</style>
