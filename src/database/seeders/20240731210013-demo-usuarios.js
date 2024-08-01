'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
    {
      nome: 'usuario1',
      sexo: 'Masculino',
      cpf: '12345678901',
      endereco: 'Rua das Flores, 123, São Paulo, SP',
      email: 'usuario1@example.com',
      senha: '$2a$10$gojsy00LJclPgU3sWZ5eTu/Az2AefFfaW7d.AlbnxvQwI.b2CdiJu',
      dataNascimento: '1990-01-01',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'usuario2',
      sexo: 'Feminino',
      cpf: '23456789012',
      endereco: 'Avenida Brasil, 456, Rio de Janeiro, RJ',
      email: 'usuario2@example.com',
      senha: '$2a$10$gojsy00LJclPgU3sWZ5eTu/Az2AefFfaW7d.AlbnxvQwI.b2CdiJu',
      dataNascimento: '1985-02-02',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'usuario3',
      sexo: 'Nao especificado',
      cpf: '34567890123',
      endereco: 'Praça da Liberdade, 789, Belo Horizonte, MG',
      email: 'usuario3@example.com',
      senha: '123456$2a$10$gojsy00LJclPgU3sWZ5eTu/Az2AefFfaW7d.AlbnxvQwI.b2CdiJu70', 
      dataNascimento: '2000-03-03',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
// senha comun 123456789