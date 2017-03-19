const filter = require('lodash/filter');
const find = require('lodash/find');
const articles = [
  { id: 1, title: 'I like pie', description: 'The best food', body: 'It just tastes so so so so so so good!' },
  { id: 2, title: 'I love jelly beans', description: "The diabetic's choice", body: 'Popcorn is by far my favorite flavor' }
];
module.exports = {
  Query: {
    articles() {
      return articles;
    },
  },
  Mutation: {
    tagArticle(_, { articleId }) {
      const article = find(articles, { id: articleId });
      if (!article) {
        throw new Error(`Couldn't find article with id ${articleId}`);
      }
      article.tags += 1;
      return article;
    },
  },
  Author: {
    articles(author) {
      return filter(articles, { authorId: author.id });
    },
  },
  Article: {
    author(article) {
      return find(authors, { id: article.authorId });
    },
  },
};
