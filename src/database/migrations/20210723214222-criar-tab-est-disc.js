module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estudantes_disciplinas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_estudante: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'estudantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'disciplinas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_professor: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('estudantes_disciplinas');
  },
};
