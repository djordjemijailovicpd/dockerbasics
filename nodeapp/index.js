const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(3000, function(){
    var appName = process.env.APP_NAME ? process.env.APP_NAME : "App";
    console.log(appName + " is listening on 3000");
});
