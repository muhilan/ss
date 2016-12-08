var Hapi = require('hapi');
var os = require("os");

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hostname : ' + os.hostname() + " :::: Version : v1 \n");
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});