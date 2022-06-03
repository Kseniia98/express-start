const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));

  if(req.method == 'POST' && req.url.includes === '/workspaces'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('OK');
    return;
  }

  if(req.method == 'GET' && req.url.includes === '/workspaces'){
    const id = req.url.split('/')[1];
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('DELETED' + id);
    return;
  }
});

server.listen(5001);
//http://localhost:6000