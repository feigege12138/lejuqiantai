import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityInfo:{}
  },
  mutations: {
     add(state,val){
      state.cityInfo=val
    }
  },
  actions: {
  },
  modules: {
  }
})
