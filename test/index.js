// Load modules

var ChildProcess = require('child_process');
var Fs = require('fs');
var Path = require('path');
var Lab = require('lab');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('doitlive', function () {

    it('starts a server with the current plugin running', function (done) {

        var doitlivePath = Path.join(__dirname, '..', 'doitlive.js');
        var tvPath = Path.join(__dirname, '..', 'node_modules', 'tv');
        var doitlive = ChildProcess.spawn('node', [doitlivePath], { cwd: tvPath });

        doitlive.stdout.on('data', function (data) {

            expect(data.toString().indexOf('Server started')).to.equal(0);
            doitlive.kill();

            done();
        });

        doitlive.stderr.on('data', function (data) {

            expect(data.toString()).to.not.exist;
        });
    });
});
