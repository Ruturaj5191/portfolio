import axios from 'axios';

const rawApiUrl = import.meta.env.VITE_API_URL;
const API_URL = rawApiUrl 
  ? (rawApiUrl.endsWith('/api') ? rawApiUrl : `${rawApiUrl.replace(/\/$/, '')}/api`) 
  : 'http://localhost:5000/api';

export const submitContact = async (data: { name: string; email: string; subject: string; message: string }) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Something went wrong';
  }
};
