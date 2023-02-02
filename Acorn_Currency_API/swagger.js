const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'Acorn Currency',
    description: 'Backend API for Acorn Currency Project App'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
