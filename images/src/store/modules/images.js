import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

// rootState gives access to data inside all other modules
// {token} is an object from rootState.auth
// fetchImages is an async request
// commit changes state (action, values)
const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
