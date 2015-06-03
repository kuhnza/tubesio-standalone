var tubesio = require('tubesio')();  // username & API key no longer required

var args = tubesio.utils.args
  , log = new tubesio.logging.Logger();

// Uncomment and fill in your proxy details (e.g. ProxyMesh) or pass null
// if you don't want/need to use a proxy.
// 
// tubesio.http.setProxy({ host: 'hostname', port: 80, proxyAuth: 'user:pass' });

log.info('Hello log!');

tubesio.finish({hello: args.name});  