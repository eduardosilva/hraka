var express = require('express'),
    app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

require('./routes')(app);

app.listen(3001);
console.log("api running on port 3001...");
