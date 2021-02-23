import api from '../../api/imgur';
import qs from 'qs';
// named export is in curly braces
// the router avoids a full page reload
import { router } from '../../main';

// use localStorage for token
const state = {
    token: window.localStorage.getItem('imgur_token')
};

// state is an argument to a function, not THE state
// !! turns a value into a boolean
// using ES2015 function syntax
const getters = {
    isLoggedIn: state => !!state.token
    }

// commit function applies the setToken mutation
const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        // finalizeLogin carries the hash (2nd argument to action)
        // cleans up the query response
        const query = qs.parse(hash.replace('#', ''));
        // gets the access_token string from query
        // updates the 'token' state
        commit('setToken', query.access_token);
        // assign token to localStorage
        window.localStorage.setItem('imgur_token', query.access_token);
        // navigate user to home page
        router.push('/')
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },

};

// updates const state directly
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

