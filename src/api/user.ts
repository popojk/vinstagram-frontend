import apiHelper from '../utils/helpers';
import axios from "axios";

async function createUser(formData: FormData) {
  try {
    const response = await axios.post(`http://vinstagram.ap-northeast-2.elasticbeanstalk.com/api/users`, formData)
  } catch(error){
    console.log(error)
  }
}

async function getRecommendUsers() {
  return apiHelper.post('graphql', {
    query: `
    query {
    recommendUsers {
        _id,
        name,
        avatar
    }
}
    `
  })
}

async function followUser(userId: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($followId: String!) {
    follow(input: {
        followId: $followId
    }){
        name
    }
}
    `,
    variables: {
      followId: userId
    }
  })
}

export {
  getRecommendUsers,
  followUser,
  createUser
}