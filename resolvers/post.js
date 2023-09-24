const { posts } = require('../temp')
// Query generics
const totalPosts = () => posts.length;
const allPosts = () => posts;

// Mutations
const newPost = (parent, args) => {
  console.log(args);
  const post = {
    id: posts.length + 1,
    ...args.input,
  };
  // push
  posts.push(post);
  return post;
  
};

module.exports = {
  Query:{
    totalPosts,
    allPosts
  },
  Mutation:{
    newPost
  }
};