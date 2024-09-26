const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Project Api - CSE 341 ',
        description: 'Contacts Api'
    },
    host: 'cse341-contacts-iqm6.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);