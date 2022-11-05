module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [{
      name: 'Teste Padrão',
      email: 'teste@testepadrao.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    },
    {
      name: 'Fulana Pereira',
      email: 'fulana@teste.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
    },
    ], {timestamp: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};