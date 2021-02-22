import api from '../../api/imgur';

const state = {
    token: null
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
    logout: ({ commit }) => {
        commit('setToken', null);
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

