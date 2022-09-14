const express = require('express')
const cors = require('cors');
//import routes from './routes';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.middleware();
        this.routes();
    }

    middleware() {
        //Directorio publico
        this.app.use(express.static('public'));
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        
    }

    routes() {
        this.app.use(this.usuariosPath , require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Aplicacion corriendo en la dirección : http:/localhost: ${ this.port }`);
        })
    }
}

module.exports = Server;


