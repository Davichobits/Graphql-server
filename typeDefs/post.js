const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
  }
  # query generic
  type Query {
    totalPosts: Int!
    allPosts: [Post!]!
  }
  # input type
  input PostInput{
    title: String!
    description: String!
  }
  #mutation
  type Mutation {
    newPost(input: PostInput!): Post!
  }
`;