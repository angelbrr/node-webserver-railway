
const http = require('http');


http.createServer( ( req, resp ) => {

    resp.write('Hola mundo');
    resp.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);