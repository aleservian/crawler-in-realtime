import {createServer} from 'http';
import SocketIO from 'socket.io';
import configureExpress from './src/app';

const dirname = __dirname;
const setupApp = configureExpress(dirname);
const server = createServer(setupApp);
let io = new SocketIO(server);
const port = 3002;

let visit = 0;
io.on('connection', (socket) => {
  visit++;
  io.emit('visit', visit);
});

server.listen(port, () => { console.log(`Port ${port}`); })