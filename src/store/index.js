import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs:[],
    plugins: [],
  },
  getters: {
    tabs(state){
      return state.tabs;
    },
    plugins(state){
      return state.plugins;
    }
  },
  mutations: {
    setTabs(state, tabs){
      tabs.reduce((obj, tab) => {
        obj[tab.id] = tab.title;
        return obj;
      }, tabs);
      state.tabs = tabs;
    },
    setPlugins(state, plugins){
      state.plugins = plugins;
    },
  },
  actions: {
    async fetchTabs({commit}) {
      try {
        const response = await axios.get('https://afternoon-hamlet-15466.herokuapp.com/tabs');
        if (response) {
          commit('setTabs', response.data)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPlugins({commit}) {
      try {
        const response = await axios.get('https://afternoon-hamlet-15466.herokuapp.com/plugins');
        if (response) {
          commit('setPlugins', response.data)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updatePlugin(context, plugin) {
      try {
        const response = await axios.patch(`https://afternoon-hamlet-15466.herokuapp.com/plugins/${plugin.id}`, plugin);
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
})
