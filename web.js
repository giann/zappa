var express = require('express');
var app = module.exports = express();

app.set('host', '127.0.0.1');
app.set('port', 8080);

app.use(express.static(__dirname));
app.listen(app.get('port'), app.get('host'), function() {
    var baseUrl = 'http://' + app.get('host') + ':' + app.get('port');
    console.log('Server listening @ %s%s', baseUrl, '/');
});