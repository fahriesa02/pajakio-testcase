import net from 'net';

var server = net.createServer(function(socket) {
	socket.write('Metrics for ssh log-in attempts\r\n*nodeABC 3 attempts\r\n*nodeXYZ 2 attempts\r\n');
	socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');