const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'Acorn Currency',
    description: 'Backend API for Acorn Currency Project App'
  },
  host: 'acorn-currency.onrender.com',
  schemes: ['https'],
  definitions: {
    User: {
      $userFirstName: 'New',
      userLastName: 'User',
      $userEmail: 'example@email.com',
      userPhone: '9997776666',
      $userProjectCount: 0,
      userStory: 'I am a great developer!',
      userAvatar: 'An img supposingly'
    },
    Project: {
      $projectName: 'Acorn Currency',
      $projectLink: 'acorn-currency@github.com',
      $projectAutherId: 'ObjectId',
      $projectLikesCount: 0,
      $projectStartDate: new Date(),
      $projectDescription: 'This is a new project:>'
    },
    Skills: {
      $skillName: 'Javascript',
      $skillLevel: 'Enum',
      $skillDescription: 'Javascript is awesome!'
    }
  }
};

const outputFile = '../../swagger.json';
const endpointsFiles = ['../routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
