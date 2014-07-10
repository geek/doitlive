#!/usr/bin/env node

var Hapi = require('hapi');
var Plugin = require(process.cwd());

var server = new Hapi.Server(process.argv[2] || 0);
server.pack.register(Plugin, function (err) {

    if (err) {
        return console.error(err);
    }

    server.start(function (err) {

        if (err) {
            return console.error(err);
        }

        var pluginName = Plugin.register.attributes.name || Plugin.register.attributes.pkg.name;
        console.log('Server started \nport: ' + server.info.port + '\nplugin: ' + pluginName);
    });
});
