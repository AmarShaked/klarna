const path = require('path');
const peoplesController = require('../controllers/peoples');

exports.registerRoutes = (app) => {
	app.get('/peoples', peoplesController.getPeoples);
	app.get('/', (req, res) => {
				res.sendFile('index.html', { root: __dirname + "/../../client" } );
    });
}
