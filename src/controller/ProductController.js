import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:3000';

const ProductController = {
    
listProducts  : async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/listProducts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return { success: false, message: 'Failed to fetch products' };
    }
  },

  addProduct: async (productData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/addNewProduct`, productData);
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, message: 'Failed to add product' };
    }
  },

  viewProduct: async (productId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getProduct/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error viewing product:', error);
      return { success: false, message: 'Failed to view product' };
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/updateProduct/${productId}`, productData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      return { success: false, message: 'Failed to update product' };
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deleteProduct/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      return { success: false, message: 'Failed to delete product' };
    }
  }
};

export default ProductController;
