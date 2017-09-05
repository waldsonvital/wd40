//requires
const restify = require ('restify');
const server =  restify.createServer();
let routes = require('./routes');

// plugins
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.jsonp());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());

//rotas
routes(server);

//listen
server.listen(5000, () => {
    console.log('%s listening at %s', server.name, server.url);
});