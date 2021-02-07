var async = require('async');
var fs = require('fs');
var pg = require('pg');
const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

username = "";
password = "";

app.use(bodyParser.json());

app.listen(3080,function(){
    console.log("server is running on port 3080");
 });

app.post('/result', (req, res) => {
    const user = req.body.user;
    console.log("adding user");
    username = user.name;
    password = user.password;
    res.json("user added");
    console.log(username);
    console.log(password);

    // Connect to the "bank" database.
    var config = {
        user: 'irena',
        host: 'localhost',
        database: 'health',
        port: 26257
    };

// Create a pool.
    var pool = new pg.Pool(config);

    pool.connect(function (err, client, done) {
        console.log("pool");
        console.log(username);
        console.log(password);

    // Close communication with the database and exit.
        var finish = function () {
            done();
            process.exit();
        };

        if (err) {
            console.error('could not connect to cockroachdb', err);
            finish();
        }
        async.waterfall([
            function (next) {
                // Create the 'accounts' table.
                client.query('CREATE TABLE IF NOT EXISTS people (username TEXT, password TEXT);', next);
            },
            function (results, next) {
                // Insert two rows into the 'accounts' table.
                client.query("INSERT INTO people (username, password) VALUES ('"+username+"', '"+password+"');", next);
            },
            function (results, next) {
                // Print out account balances.
                client.query('SELECT username, password FROM people;', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from people: ', err);
                finish();
            }

            console.log('Initial balances:');
            results.rows.forEach(function (row) {
                console.log(row);
            });

            finish();
        });
    });
})

