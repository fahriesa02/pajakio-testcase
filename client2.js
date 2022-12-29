import net from 'net';

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('2 ssh log-in attempts were made at nodeXYZ');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.end(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});