import axios from "axios";
import { getRecommendUsers } from "../api/user";
const BACKEND_URL = process.env.BACKEND_URL;

export type userData = {
  username: string
  password: string
}

//signin user
const login = async (userData: userData): Promise<any> => {
  const response = await axios.post(`http://vinstagram.ap-northeast-2.elasticbeanstalk.com/api/auth/signin`, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

//logout user
const logout = () => localStorage.removeItem('user');

//get recommend users
const getRecommendation =  async () => {
  const response = await getRecommendUsers();
  return response
}

const authService = {
  login,
  logout
}

export default authService;