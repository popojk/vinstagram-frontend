import apiHelper from '../utils/helpers';

function createPost(formData: FormData) {
  return apiHelper.post('/posts', formData)
}

function getPosts() {
  return apiHelper.post('graphql', {
    query: `
    query {
    findPosts{
        _id,
        author {
                _id,
                avatar,
                name
            },
        text,
        image,
        replies {
            author {
                avatar,
                name
            }
            text,
            isLiked,
            _id
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

function createReply(postId: string, reply: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($postId: String!, $text: String!) {
    createReply(input: {
        postId: $postId,
        text: $text
    }) {
        text
    }
}
    `,
    variables: {
      postId: postId,
      text: reply
    }
  })
}

function likePost(postId?: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($postId: String!) {
    likePost(input: {
        postId: $postId
    }) {
        text
    }
}
    `,
    variables: {
      postId: postId
    }
  })

}

function unlikePost(postId?: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($postId: String!) {
    unlikePost(input: {
        postId: $postId
    }) {
        text
    }
}
    `,
    variables: {
      postId: postId
    }
  })
}

function likeReply(postId: string, replyId?: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($postId: String!, $replyId: String!) {
    likeReply(input: {
        postId: $postId,
        replyId: $replyId
    }) {
        text
    }
}
    `,
    variables: {
      postId: postId,
      replyId: replyId
    }
  })
}

function unlikeReply(postId: string, replyId?: string) {
  return apiHelper.post('graphql', {
    query: `
    mutation($postId: String!, $replyId: String!) {
    unlikeReply(input: {
        postId: $postId,
        replyId: $replyId
    }) {
        text
    }
}
    `,
    variables: {
      postId: postId,
      replyId: replyId
    }
  })
}

export {
  getPosts,
  unlikePost,
  likePost,
  createReply,
  likeReply,
  unlikeReply,
  createPost
}