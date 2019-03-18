const { sequelize } = require('./models');

(async () => {
  await sequelize.sync({ force: true });
  process.exit();
})();
