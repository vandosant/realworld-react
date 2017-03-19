const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa } = require('graphql-server-koa');

const schema = require('./data/schema.js');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;

app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
