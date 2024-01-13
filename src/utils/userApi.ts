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
};

export const loginUser = async ({ email, password }: LoginFormData) => {
  try {
    const res = await axios.post('/auth/sign-in', { email, password });

    setAuthToken(res.data.token);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterFormData) => {
  try {
    const res = await axios.post('/auth/sign-up', { email, name, password });

    return res.data.message;
  } catch (err) {
    return console.log(err);
  }
};

export const logoutUser = async () => {
  try {
    await axios.post('/auth/sign-out');

    clearAuthToken();
  } catch (err) {
    return console.log(err);
  }
};
