import { getRecommendUsers } from "../api/user";

//get recommend users
const getRecommendation = async () => {
  const response = await getRecommendUsers();
  return response
}

const userService = {
  getRecommendation,
}

export default userService;