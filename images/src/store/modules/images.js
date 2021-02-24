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
const actions = {
    async fetchImages({ rootState }) {
        const { token } = rootState.auth
        const response = await api.fetchImages(token);
        console.log(response);
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
