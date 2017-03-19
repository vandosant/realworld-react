const { makeExecutableSchema } = require('graphql-tools');

const schema = `
type Author {
  id: Int! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  articles: [Article] # the list of Posts by this author
}
type Article {
  id: Int!
  title: String
  description: String
  body: String
  author: Author
  tags: Int
}
# the schema allows the following query:
type Query {
  articles: [Article]
}
type Mutation {
  tagArticle (
    articleId: Int!
  ): Article
}
schema {
  query: Query
  mutation: Mutation
}
`;

const resolvers = require('./resolvers.js');
module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});
