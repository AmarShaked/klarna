const bodyParser = require('body-parser');
const express = require('express');

exports.registerMiddlewares = (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
}
