import api from '../../api/imgur';
import { router } from '../../main';

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
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    // rootState provides access to all the store
    async uploadImages({ rootState }, images) {
        // get access token
        const { token } = rootState.auth;

        // Call our API module to do the upload
        await api.uploadImages(images, token);

        // Redirect our user to ImageList component
        // send to images list component
        router.push('/');
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
