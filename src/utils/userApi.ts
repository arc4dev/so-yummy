import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_RECIPES_API_URL_DEV
    : import.meta.env.VITE_RECIPES_API_URL;

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
