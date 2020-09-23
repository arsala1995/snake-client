const net = require('net');

/**
 * Establishes connection with the game server
 */

const stdin = process.stdin;

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541

   
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
      console.log('Server says: ', data);
      console.log("It's got a sharp tongue, this server!");
    });
   
    
  return conn;
}


console.log('Connecting ...');
connect();
