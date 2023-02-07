const casual = require('casual');
const mongodb = require('../db/connection');

const seedDb = async () => {
  // Connect to mongo
  await mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('db connected');
    }
  });

  setTimeout(async () => {
    try {
      await mongodb.getDb().db('acorn_currency').collection('users').deleteMany();
      await mongodb.getDb().db('acorn_currency').collection('projects').deleteMany();
      await mongodb.getDb().db('acorn_currency').collection('skills').deleteMany();
      await mongodb
        .getDb()
        .db('acorn_currency')
        .collection('users')
        .insertMany(createUserMockData());
      console.log('Users created');
      await mongodb
        .getDb()
        .db('acorn_currency')
        .collection('projects')
        .insertMany(createProjectMockData());
      console.log('Projects created');
      await mongodb
        .getDb()
        .db('acorn_currency')
        .collection('skills')
        .insertMany(createSkillMockData());
      console.log('Skills created');
    } catch (e) {
      console.log(e);
    }
  }, 5000);
  // mongodb.closeDb();
};

const createUserMockData = () => {
  let userArray = [];
  for (let i = 0; i < 10; i++) {
    userArray.push({
      userFirstName: casual.first_name,
      userLastName: casual.last_name,
      userEmail: casual.email,
      userPhone: casual.phone,
      userProjectCount: casual.random,
      userStory: casual.description,
      userAvatar: casual.short_description
    });
  }
  return userArray;
};

const createProjectMockData = () => {
  let projectArray = [];

  for (let i = 0; i < 10; i++) {
    projectArray.push({
      projectName: casual.title,
      projectLink: casual.url,
      projectAutherId: casual.uuid,
      projectLikesCount: 0,
      projectStartDate: casual.date,
      projectDescription: casual.description,
      $isProjectFinished: casual.boolean
    });
  }
  return projectArray;
};

const createSkillMockData = () => {
  let skillArray = [];

  for (let i = 0; i < 10; i++) {
    skillArray.push({
      skillName: casual.last_name,
      skillLevel: casual.letter,
      skillDescription: casual.description
    });
  }
  return skillArray;
};

seedDb();
