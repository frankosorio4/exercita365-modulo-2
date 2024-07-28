'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(
      'locais',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nomeLocal: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        usuarioId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        descricao: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING(8),
          allowNull: false
        },
        numeroLocal: {
          type: Sequelize.STRING(10),
          allowNull: true
        },
        latitude: {
          type: Sequelize.STRING(12),
          allowNull: false
        },
        longitude: {
          type: Sequelize.STRING(13),
          allowNull: false
        },
        logradouro: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        bairro: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        cidade: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        estado: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        linkGoogleMaps: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      }
     )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('locais');
  }
};
