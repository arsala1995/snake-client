const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541

   
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    // when a connection is established
    console.log("successfully connected to server");
    conn.write("Name: Ars");

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);
    setTimeout(() => {
      conn.write("Move: left");
    }, 100);
    setTimeout(() => {
      conn.write("Move: down");
    }, 150);
    setTimeout(() => {
      conn.write("Move: right");
    }, 200);
    
    setInterval(() => {
      conn.write("Move: up");
    }, 50);
   
    });

  conn.on('data', (data) => {
      console.log('Server says: ', data);
      console.log("It's got a sharp tongue, this server!");
     
    });
   
    
  return conn;
}

module.exports = { connect };