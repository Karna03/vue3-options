<template>
     <div>
      <h2>Bitcoin Price Inde</h2>
      <div v-for="currency in info" :key="currency.id" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          {{ currency.rate_float }}<span v-html="currency.symbol"></span>
        </span>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods:{
    ...mapActions([
      'increm'
    ])
  }



//     computed:{
//         curs(){
//             return this.$store.state.curs
//         }
//     },
//  created(){
  
// console.log(store.dispatch('weather/increm'))


//     console.log(this.$store.dispatch('weather/fetchCurs'))
//     this.$store
//     .dispatch('weather/fetchCurs')
//     .then( curs =>{
//         this.curs =curs
//     })
//     .catch (error =>{

//     }
//     )
//  }
}
</script>

<style scoped>
div{
    color: azure;
}
</style>
