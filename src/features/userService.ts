import axios from "axios";
const BACKEND_URL = process.env.BACKEND_URL;

export type userData = {
  username: string
  password: string
}

//signin user
const login = async (userData: userData): Promise<any> => {
  const response = await axios.post(`http://localhost:8080/auth/signin`, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

//logout user
const logout = () => localStorage.removeItem('user');

const userService = {
  login,
  logout
}

export default userService;