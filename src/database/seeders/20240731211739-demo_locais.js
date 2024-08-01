'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locais', [
      {
        nomeLocal: 'Local 1',
        usuarioId: 1,
        descricao: 'Descrição do local 1',
        cep: '88051010',
        numeroLocal: '123',
        latitude: '12.345678',
        longitude: '-12.345678',
        logradouro: 'Rua Local 1',
        bairro: 'Bairro Local 1',
        cidade: 'Cidade Local 1',
        estado: 'Estado Local 1',
        linkGoogleMaps: 'https://www.google.com/maps?q=12.345678,-12.345678',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        nomeLocal: 'Local 2',
        usuarioId: 2,
        descricao: 'Descrição do local 2',
        cep: '88085540',
        numeroLocal: '321',
        latitude: '-12.345678',
        longitude: '12.345678',
        logradouro: 'Rua Local 2',
        bairro: 'Bairro Local 2',
        cidade: 'Cidade Local 2',
        estado: 'Estado Local 2',
        linkGoogleMaps: 'https://www.google.com/maps?q=-12.345678,12.345678',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        nomeLocal: 'Local 3',
        usuarioId: 3,
        descricao: 'Descrição do local 2',
        cep: '88047480',
        numeroLocal: '321',
        latitude: '-12.345678',
        longitude: '12.345678',
        logradouro: 'Rua Local 3',
        bairro: 'Bairro Local 3',
        cidade: 'Cidade Local 3',
        estado: 'Estado Local 3',
        linkGoogleMaps: 'https://www.google.com/maps?q=-12.345678,12.345678',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locais', null, {});
  }
};
