const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const UsuariosRouter = new Router()

UsuariosRouter.post('/',UsuariosController.criarConta

    /*
    #swagger.tags = ['Usuários']
    #swagger.summary = 'Cria uma nova conta de usuário'
    #swagger.description = 'Endpoint para criação de uma nova conta de usuário'
    #swagger.parameters['dados'] = {
        in: 'body',
        description: 'Você pode criar um novo usuário com os seguintes dados ou modificalos.',
        required: true,
        schema: {
                $nome: "Usuario4",
                $sexo: 'Masculino",
                $cpf: '12345678915',
                endereco: 'Endereço do Usuário',
                email: 'usuario4@exemplo.com',
                senha: 'senha123',
                dataNascimento:'2000-01-01'
        }
    }
    #swagger.responses[201] = {
        description: 'Conta criada com sucesso',
        schema: {
                nome: 'Nome do Usuário',
                sexo: 'Masculino',
                cpf: '12345678901',
                endereco: 'Endereço do Usuário',
                email: 'usuario@exemplo.com',
                dataNascimento: '2000-01-01',
                createdAt:  '2024-06-27T00:00:00.000Z'
        }
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos',
        schema: { mensagem: 'Um o mais dados faltantes. O nome, sexo, cpf, endereço, email, senha, e data de nascimento são obrigatórios.'}
    }
    #swagger.responses[409] = {
        description: 'Conflito de dados',
        schema: { mensagem: 'Cpf ja cadastrado.' || 'Email ja cadastrado.'}
    }
    #swagger.responses[500] = {
        description: 'Erro no servidor',
        schema: {mensagem: 'Não foi possível criar a conta.'}
    }
*/
)

module.exports = UsuariosRouter