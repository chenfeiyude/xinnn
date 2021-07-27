import axios from 'axios'
import store from './store'
import * as types from './types'
import router from '../router/index'

axios.defaults.timeout = 60000;
axios.defaults.baseURL = 'http://moments.feiyu4fun.com';
// axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        // config.headers['Access-Control-Allow-Origin'] = '*';
        // config.headers['request-from'] = 'web';
        if (store.state.user) {
            config.headers['username'] = store.state.user.username;
            config.headers['token'] = store.state.user.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        var error_data = error.response.data;
        if (error.response) {
            switch (error.response.status) {
                case 401:
                if ('/login' != router.currentRoute.path){
                  store.commit(types.LOGOUT);
                  store.state.sessionExpired = true;
                  router.replace({
                      path: 'login',
                      query: {redirect: router.currentRoute.fullPath}
                  });
                }
            }
        }
        return Promise.reject(error_data.errors);
    }
);

export default axios;
