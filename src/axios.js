import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-79ced/us-central1/api' //THE API (CLOUD FUNCTION) URL
});



export default instance;
