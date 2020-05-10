import axios from 'axios';

// Default API will be your root
const API_ROOT = process.env.REACT_APP_URL || 'http://localhost:3000/';
const TIMEOUT = 20000;
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

class ApiService {
    constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth }) {
        const client = axios.create({
            baseURL,
            timeout,
            headers,
            auth,
        });

        client.interceptors.response.use(this.handleSuccess, this.handleError);
        this.client = client;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(path) {
        return this.client.get(path).then((response) => response.data);
    }
}

export default ApiService;
