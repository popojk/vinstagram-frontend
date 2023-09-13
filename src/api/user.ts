import apiHelper from '../utils/helpers';

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
  followUser
}