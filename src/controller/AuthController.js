import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:3000/api';


const AuthController = {

    sendOtp: async (data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/user/auth/sendOtp`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    
    verifyOtp: async (data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/user/auth/verifyOtp`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    
    login: async (data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/user/auth/login`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },

    updatePassword: async (data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/user/auth/updatePassword`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
};

export default AuthController;
