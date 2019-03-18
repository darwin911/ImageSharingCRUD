const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: 'postPicle',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
    returning: true
  }
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  bio: Sequelize.TEXT,
  pro_pic: Sequelize.STRING
});

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  publicId: Sequelize.STRING,
});

User.hasMany(Post);
Post.belongsTo(User);

User.belongsToMany(Post, { through: 'Likes' });
Post.belongsToMany(User, { through: 'Likes' });

User.belongsToMany(Post, { through: 'Comments' });
Post.belongsToMany(User, { through: 'Comments' });

module.exports = {
  Post,
  User,
  sequelize
}
