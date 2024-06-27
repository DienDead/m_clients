import axios from 'axios';

export default axios.create({

    baseURL:'https://backend-client-3yq6.onrender.com/',
    headers:{"ngrok-skip-browser-warning": "true"}

}); 