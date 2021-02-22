import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// allows Vuex to talk to Vue
Vue.use(Vuex);

// wires auth module to vue instance
export default new Vuex.Store({
    modules: {
        auth
    }
});