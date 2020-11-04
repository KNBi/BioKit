import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    serverData: ""
  },
  mutations: {
    serverDataMutation: (state, data) => {
      state.serverData = data;  
    }
  },
  actions: {
    async getServerData({ commit }) {
      try {
        const serverResponse = await axios.get("http://localhost:5000/");
        commit('serverDataMutation', serverResponse.data.response);
      } catch(err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
