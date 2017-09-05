const restify = require ('restify');
const server =  restify.createServer();

server.get("/", (req, res, next) => {
    res.send("ola");
    return next();
});

server.listen(5000, () => {
    console.log('%s listening at %s', server.name, server.url);
});