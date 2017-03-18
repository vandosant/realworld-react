const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { buildSchema } = require('graphql');
const { graphqlKoa } = require('graphql-server-koa');
const { makeExecutableSchema } = require('graphql-tools');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;
const authors = [{ id: 1, firstName: 'Priscilla' }];
const schema = `
  type Author {
    id: Int!
    firstName: String
  }
  type Query {
    authors: [Author]
  }
  schema {
    query: Query
  }
`
const resolvers = {
  Query: {
    authors() {
      return authors;
    }
  }
}
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});

app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
