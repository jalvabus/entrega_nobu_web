var express = require('express');
var path = require('path');
var app = express();

/**
 * 
 #!/bin/sh
/usr/bin/pkill -f /home/codelabs/webapps/nobu_web/bin/node && rm -f /home/codelabs/webapps/nobu_web/run/node.pid

 */
app.use(express.static(path.join(__dirname, './../dist')));

app.listen(31943, function () {
    console.log("Nobu web orriendo en puero 31943")
})