import {createServer} from 'http';
import SocketIO from 'socket.io';
import configureExpress from './src/app';
import realtime from './src/realtime';

const dirname = __dirname;
const setupApp = configureExpress(dirname);
const server = createServer(setupApp);
let io = new SocketIO(server);
const port = 3000;

realtime(io);

server.listen(port, () => { console.log(`Port ${port}`); })