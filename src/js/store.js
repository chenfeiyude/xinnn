import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
          uid         : null,
          username    : null,
          token       : null,
          firstname   : null,
          lastname    : null
        },
        sessionExpired: false,
    },
    mutations: {
        [types.LOGIN]: (state, user) => {
          localStorage.user = JSON.stringify(user);
          state.user = user;
          state.sessionExpired = false;
        },
        [types.REFRESH_USER]: (state, user) => {
          localStorage.user = JSON.stringify(user);
          state.user = user;
          state.sessionExpired = false;
        },
        [types.LOGOUT]: (state) => {
          localStorage.removeItem('user');
          state.user = null;
        },
    }
})
