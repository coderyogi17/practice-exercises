module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Cats', 'age', {
          type: Sequelize.DataTypes.FLOAT
        }, { transaction: t })
       ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Cats', 'age', { transaction: t }),
      ]);
    });
  }
};