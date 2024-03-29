import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://so-yummy-back-end-d3fb63604733.herokuapp.com/api'
    : 'http://localhost:3001/api';

const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

export const loginUser = async ({ email, password }: LoginFormData) => {
  const res = await axios.post('/auth/sign-in', { email, password });

  setAuthToken(res.data.token);
  localStorage.setItem('token', res.data.token);

  return res.data.data;
};

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterFormData) => {
  const res = await axios.post('/auth/sign-up', { email, name, password });

  return res.data.message;
};

export const logoutUser = async () => {
  await axios.post('/auth/sign-out');

  clearAuthToken();
};

export const refreshUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  setAuthToken(token);

  const res = await axios.get('/users/me');

  return res.data.data;
};

export const updateUser = async (data: FormData) => {
  const res = await axios.patch('/users/update-me', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.user;
};
