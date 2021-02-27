import { myAPI } from "../../api";
import axios from 'axios';
import qs from 'qs';

const CLIENT_ID = myAPI.Client_ID;
const ROOT_URL = myAPI.Root_URL;

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        // window.location causes user's browser to navigate to this URL
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    // Array turns object of arrays into an Array
    // formData object. get the real object of a reference
    uploadImages(images, token) {
        Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post('`${ROOT_URL}/3/image', formData, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    }
};