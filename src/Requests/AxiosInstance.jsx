
// Axios
import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    headers: {
        'Authorization': '',
        'X-Language': localStorage.LANGUAGE || 'ar',
        'accept-Language': localStorage.LANGUAGE || 'ar',
        'Accept': 'application/json',
        "Content-Type": "multipart/form-data"
    },
})

export default AxiosInstance;