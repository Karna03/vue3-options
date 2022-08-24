
export default{
    namespaced: true,
    state: ()=>( {
        curs:''
    }),
    mutations: {
    setCurs(state,curs){
        state.curs=curs
    }
    },
    actions: {
        async fetchCurs(state) {
              return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
              .then(data => {
                console.log(this.$store)
                this.$store.commit('setCurs', data.curs)
                return this.$store.state.curs
              })
             

            // fetch(
            //   "https://api.coindesk.com/v1/bpi/currentprice.json"
            // )
            //   .then(async (response) => {
            //     const data = await response.json();
            //     this.info = data.bpi;
            //   })
            //   .catch(function () {
            //     console.log("error");
            //   });
          }
    },
    getters:{
        alltodo(state){
            return this.state.curs
        }
        // ToDo: state => state
    }
}