const resumes = require('./data/resumes.json');
const templates = require('./data/templates.json');
const users = require('./data/users.json');

module.exports = () => ({
  resumes: resumes,
  templates: templates,
  users: users,
});
