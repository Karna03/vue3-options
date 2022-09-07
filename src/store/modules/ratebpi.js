
export default{
    namespaced: true,
    state: ()=>( {
        cours:''
    }),
    mutations: {
    setExchangeRate(state,cours){
        state.cours=cours
    }
    },
    actions: {
        async fetchExchangeRate({state,commit}) {
              return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
              .then(async (responce) => {
                const data = await responce.json()
                commit('setExchangeRate', data.bpi)
                return state.cours
              })
          }
    },
    getters:{
        allExchangeRate: state => state.cours
    }
}