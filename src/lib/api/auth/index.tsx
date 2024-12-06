import axios from 'axios';

const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
    if (res.status === 200) {
      console.log('Login successful', res.data);
      return res;
    } else {
      console?.error('Login failed', res.data.message);
      return res;
    }
  } catch (error) {
    console?.error('Login error', error);
    return { message: 'Network error' };
  }
};

const signup = async (name: string, email: string, password: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      name,
      email,
      password
    });

    if (res.status === 200) {
      alert("Sign up successful");
      return res;
    } else if (res.data.message === 'Email is registered'){
      alert("Email is registered");
      return res;
    } else {
      alert("Sign up failed");
      console?.error('Signup failed', res.data.message);
      return res;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        alert(error.response.data.ERROR);
        return { message: `Error ${error.response.status}: ${error.response.data.ERROR}` };
      } else if (error.request) {
        return { message: 'No response from server' };
      } else {
        return { message: error.message };
      }
    } else {
      return { message: 'An unexpected error occurred' };
    }
  }
};

export { login, signup };

