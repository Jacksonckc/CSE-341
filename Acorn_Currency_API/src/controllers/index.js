const {
  getProjects,
  getProject,
  addProject,
  changeProjectInfo,
  deleteProject
} = require('./projectControllers');
const { getUsers, getUser, addUser, changeUserInfo, deleteUser } = require('./userControllers');

module.exports = {
  getProjects,
  getProject,
  addProject,
  changeProjectInfo,
  deleteProject,
  getUsers,
  getUser,
  addUser,
  changeUserInfo,
  deleteUser
};
