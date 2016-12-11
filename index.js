const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log(`Hostmaker app listening on port ${port}!`);
});
