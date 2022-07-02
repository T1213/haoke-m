import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    houseCode: '',
    isFavorite: false
  },
  getters: {},
  mutations: {
    saveToken (state, payload) {
      state.user = payload
    },
    saveHouseCode (state, payload) {
      state.houseCode = payload
    },
    saveIsFavorite (state, payload) {
      state.isFavorite = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
})
