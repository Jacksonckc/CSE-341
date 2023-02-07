const {
  getProjects,
  getProject,
  addProject,
  changeProjectInfo,
  deleteProject
} = require('./projectControllers');

const {
  getSkills,
  getSkill,
  addSkill,
  changeSkillInfo,
  deleteSkill
} = require('./skillControllers');

const { getUsers, getUser, addUser, changeUserInfo, deleteUser } = require('./userControllers');

const {
  getAllUserSkillsByUserId,
  addUserSkill,
  deleteUserSkill
} = require('./userSkillControllers');

const {
  getAllProjectLikesByUserId,
  addProjectLike,
  deleteProjectLike
} = require('./projectLikeControllers');

module.exports = {
  getProjects,
  getProject,
  addProject,
  changeProjectInfo,
  deleteProject,
  getSkills,
  getSkill,
  addSkill,
  changeSkillInfo,
  deleteSkill,
  getUsers,
  getUser,
  addUser,
  changeUserInfo,
  deleteUser,
  getAllUserSkillsByUserId,
  addUserSkill,
  deleteUserSkill,
  getAllProjectLikesByUserId,
  addProjectLike,
  deleteProjectLike
};
