var async = require('async');
var fs = require('fs');
var pg = require('pg');
const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

username = "";
password = "";
anxiety = 0;
depression = 0;
eating = 0;
psychosis = 0;
personality = 0;

users = [];
users2 = [];

app.use(bodyParser.json());

app.listen(3080,function(){
    console.log("server is running on port 3080");
 });

app.get('/getresult', (req, res) => {
    console.log(users);
    users.push({user: "WishMoon", anxiety: 5, depression: 3, eating: 4, psychosis: 2, personality: 1});
    res.json(users);
});

app.post('/result', (req, res) => {
    const user = req.body.user;
    // users.push(user);
    username = user.name;
    password = user.password;
    anxiety = parseFloat(user.anxiety);
    depression = parseFloat(user.depression);
    eating = parseFloat(user.eating);
    psychosis = parseFloat(user.psychosis);
    personality = parseFloat(user.personality);
    res.json("user added");
    console.log(user);

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
                client.query('CREATE TABLE IF NOT EXISTS individuals (username TEXT, password TEXT, anxiety FLOAT, depression FLOAT, eating FLOAT, psychosis FLOAT, personality FLOAT);', next);
            },
            function (results, next) {
                // Insert two rows into the 'accounts' table.
                client.query("INSERT INTO individuals (username, password, anxiety, depression, eating, psychosis, personality) VALUES ('"+username+"', '"+password+"', '"+anxiety+"', '"+depression+"', '"+eating+"', '"+psychosis+"', '"+personality+"');", next);
            },
            function (results, next) {
                // Print out account balances.
                client.query('SELECT username, password, anxiety, depression, eating, psychosis, personality FROM individuals;', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from individuals: ', err);
                finish();
            }

            console.log('All Individuals:');
            results.rows.forEach(function (row) {
                console.log(row);
            });

            finish();
        });
    });
})

