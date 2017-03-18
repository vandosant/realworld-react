const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { graphqlKoa } = require('graphql-server-koa');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
