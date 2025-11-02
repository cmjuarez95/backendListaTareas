import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";
import path from 'path';
import { fileURLToPath } from 'url';

const server = new Server();

//agregar las rutas
server.app.use('/api', router)


const __dirname = path.dirname(fileURLToPath(import.meta.url));
server.app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
server.listen()