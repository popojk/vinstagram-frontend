import apiHelper from '../utils/helpers';

function getPosts() {
  return apiHelper.post('graphql', {
    query: `
    query {
    findPosts{
        author {
                _id,
                avatar,
                name
            }
        text,
        image,
        replies {
            author {
                avatar,
                name
            }
            text,
            isLiked
        },
        likers {
            name
        }
        isLiked,
        createdAt
    }
}
    `
  })
}

export {
  getPosts,
}