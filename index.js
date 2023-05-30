const http = require('http');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

// Define las funciones que serán expuestas como operaciones del servicio SOAP
const service = {
  MyService: {
    MyPort: {
      MyFunction: (args) => {
        // Lógica para procesar los datos de entrada y generar una respuesta SOAP
        const response = {
          response: 'Hello, ' + args.name + '!'
        };
        return response;
      }
    }
  }
};

const wsdlPath = path.join(__dirname, 'wsdl-file.xml');

// Crea un servidor HTTP y expone el servicio SOAP
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml');
    if (req.url === '/soap?wsdl') {
      res.end(wsdlPath);
    } else {
      // Procesa las solicitudes SOAP
      const xml = req.body;
      soap.listen(server, '/soap', service, wsdlPath);
    }
  });

// Inicia el servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Servicio SOAP en funcionamiento en http://localhost:${port}/soap?wsdl`);
});
