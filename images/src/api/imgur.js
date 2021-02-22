import { myAPI } from "../../api";

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
    }
};