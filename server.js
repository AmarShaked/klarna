const express = require('express');
const path = require('path');
const config = require('./server/config');

const app = express();

app.use(express.static('client'));
config.express.registerMiddlewares(app);
config.routes.registerRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Hi Klarna, your app waiting on port ' + port);
});
