const pkg = require('../package.json');

module.exports = {
	version: pkg.version,
    queue_client: require('./lib/queue_client')
};
