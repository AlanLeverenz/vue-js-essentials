const state = {
    token: null
};

// state is an argument to a function, not THE state
// !! turns a value into a boolean
// using ES2015 function syntax
const getters = {
    isLoggedIn: state => !!state.token
    }
};

const actions = {

};

const mutations = {

};

