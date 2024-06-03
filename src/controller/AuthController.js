import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:3000';


const AuthController = {

    login: async (data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/admin/login`, data);
        return response.data;
        } catch (error) {
            console.log('axios error=>',error.response)
            return error.response ?? error;

        }
    },
    tokenVerifier: async (data) => {
      try {
      const response = await axios.get(`${API_BASE_URL}/admin/verify-token`, {
        headers: {
          Authorization: data.token
        },
      });
      return response.data;
      } catch (error) {
          console.log('axios error=>',error.response)
          return error.response ?? error;

      }
  },
};

export default AuthController;
