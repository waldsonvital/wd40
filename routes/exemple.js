
module.exports = (path, route) =>
{
    route.get(path, (req, res, next) => {
        res.send('start');
        return next();
    });
}