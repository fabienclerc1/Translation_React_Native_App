import axios from 'axios';

const baseURL = 'https://api-free.deepl.com/v2/';

const Axios = axios.create({
    baseURL: baseURL
});

export default Axios;