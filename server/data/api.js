const fs = require('fs');

exports.allPeoples = JSON.parse(fs.readFileSync('server/data/people.json', 'utf8'));
