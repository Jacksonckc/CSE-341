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
const { getAllUserSkills, addUserSkill } = require('./userSkillControllers');

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
  getAllUserSkills,
  addUserSkill
};
