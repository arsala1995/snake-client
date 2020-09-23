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
    });

  conn.on('data', (data) => {
      console.log('Server says: ', data);
      console.log("It's got a sharp tongue, this server!");
     
    });
   
    
  return conn;
}

module.exports = { connect };