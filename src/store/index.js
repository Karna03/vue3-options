import { createStore } from 'vuex'
import ratebpi from './modules/ratebpi'
import weather from './modules/weather'
import comment from './modules/comment'


export default createStore({
  modules: {
    ratebpi,
    weather,
    comment
  }
})



