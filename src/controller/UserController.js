import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:3000';


const UserController = {

    getUsers: async (data) => {
        try {
        const response = await axios.get(`${API_BASE_URL}/admin/userCrud/listUsers`, {
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
    getUser: async (token,id) => {
      try {
      const response = await axios.get(`${API_BASE_URL}/admin/userCrud/getuser/${id}`, {
        headers: {
          Authorization: token
        },
      });
      return response.data;
      } catch (error) {
          console.log('axios error=>',error.response)
          return error.response ?? error;

      }
  },
  createUser: async (token,data) => {
    try {
    const response = await axios.post(`${API_BASE_URL}/admin/userCrud/addNewUser`, data,{
      headers: {
        Authorization: token
      },
    });
    return response.data;
    } catch (error) {
        console.log('axios error=>',error.response)
        return error.response ?? error;

    }
  },
  editUser: async (token,data,id) => {
    try {
    const response = await axios.put(`${API_BASE_URL}/admin/userCrud/updateUser/${id}`, data,{
      headers: {
        Authorization: token
      },
    });
    return response.data;
    } catch (error) {
        console.log('axios error=>',error.response)
        return error.response ?? error;

    }
  },
  deleteUser: async (token,id) => {
    try {
    const response = await axios.delete(`${API_BASE_URL}/admin/userCrud/deleteUser/${id}`, {
      headers: {
        Authorization: token
      },
    });
    return response.data;
    } catch (error) {
        console.log('axios error=>',error.response)
        return error.response ?? error;

    }
  },
};

export default UserController;
