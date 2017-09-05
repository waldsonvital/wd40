// imports routes
let exemple = require('./routes/exemple');

module.exports = (server) => {

    //instace routes files
    exemple('/', server);
}