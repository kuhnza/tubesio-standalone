var fs = require('fs')
  , restify = require('restify')
  , spawn = require('child_process').spawn;


function runTube(script, args, callback) {
  var filename = 'scripts/' + script + '.js'
    , startTime = new Date();
  
  console.log('running script ' + filename);
  
  var tube = spawn('node', [ filename, JSON.stringify(args) ]);
  
  var stdout = [];
  tube.stdout.on('data', function (data) {    
    stdout.push(data + '');
  });
  
  var stderr = [];
  tube.stderr.on('data', function (data) {
    stderr.push(data + '');
  });
  
  tube.on('close', function (code) {
    var result
      , endTime = new Date();
    console.log('script exited with code ' + code);
    
    if (code == 0) {           
      try {
        result = JSON.parse(stdout.join(''));
      } catch (e) {
        result = 'Error parsing result: ' + e.message + '\n' + e.stack;
      }
    }
    
    callback(null, {
      success: code == 0,
      result: result,      
      time: { start: startTime, end: endTime, elapsed: endTime - startTime },
      log: stderr
    });
  });
}

function onGet(req, res, next) {  
  runTube(req.params.script, req.query, function (err, result) {
    res.send(result);
    next();  
  });
}

function onPost(req, res, next) {    
  runTube(req.params.script, req.body, function (err, result) {
    res.send(result);
    next();  
  });
}

var server = restify.createServer();

// middleware
server.use(restify.queryParser());
server.use(restify.bodyParser());

// routes
server.get('/tube/:script', onGet);
server.post('/tube/:script', onPost);

server.listen(3000, function() {
  console.log('tubes.io standalone server listening at %s', server.url);
});