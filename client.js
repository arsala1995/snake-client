const { IP, PORT } = require('./constants');
const { setupInput } = require('./input');
const net = require('net');


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    // when a connection is established
    console.log("successfully connected to server");
    conn.write("Name: Ars");
    conn.write("Say: HI")

    const setupInput1 = setupInput();

    setupInput1.on('data', (data) => {
      if (data == 'w') {
        conn.write("Move: up");
        console.log("up");
      }
      else if (data == 's') {
        conn.write("Move: down");
        console.log("down");
      }
      else if (data == 'a') {
        conn.write("Move: left");
        console.log("left");
      }
      else if (data == 'd') {
        conn.write("Move: right");
        console.log("right");
      }

    });

  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
    console.log("It's got a sharp tongue, this server!");

  });


  return conn;
}

module.exports = { connect };