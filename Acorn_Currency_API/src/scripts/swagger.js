const casual = require('casual');
const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'Acorn Currency',
    description: 'Backend API for Acorn Currency Project App'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    User: {
      $userFirstName: casual.first_name,
      userLastName: casual.last_name,
      $userEmail: casual.email,
      userPhone: casual.phone,
      $userProjectCount: Math.floor(casual.random * 10),
      userStory: casual.description,
      userAvatar: casual.short_description
    },
    Project: {
      $projectName: casual.short_description,
      $projectLink: casual.email,
      $projectAutherId: casual.uuid,
      $projectLikesCount: Math.floor(casual.random * 100),
      $projectStartDate: casual.date(),
      $projectDescription: casual.description,
      $isProjectFinished: casual.boolean
    },
    Skill: {
      $skillName: casual.language_code,
      $skillLevel: Math.floor(casual.random * 5),
      $skillDescription: casual.short_description
    },
    ProjectLiks: {
      $projectId: casual.uuid,
      $userId: casual.uuid
    },
    UserSkills: {
      $userId: casual.uuid,
      $skillId: casual.uuid
    }
  }
};

const outputFile = '../../swagger.json';
const endpointsFiles = ['../routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
