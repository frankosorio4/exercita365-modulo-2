const Usuario = require("../models/Usuario")
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class LoginController {

    async login(request, response) {

        /*
        #swagger.tags = ['Login']
        #swagger.summary = 'Realiza o login de um usuário'
        #swagger.description = 'Endpoint para autenticação do usuário e geração de token JWT'
        #swagger.parameters['login'] = {
            in: 'body',
            description: 'Informações para login',
            required: true,
            schema: {
                    $email:  'usuario1@example.com',
                    $senha:  '12345678'
            }
        }
        #swagger.responses[200] = {
            description: 'Login realizado com sucesso',
            schema: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    nome: 'Nome do Usuário'
            }
        }
        #swagger.responses[400] = {
            description: 'Nome e senha são obrigatórios ou formato de email inválido',
            schema: {mensagem: 'Nome e senha são obrigatórios' || 'O email está no formato inválido'}
        }
        #swagger.responses[404] = {
            description: 'Conta não encontrada',
            schema: {mensagem: 'Conta não encontrada' || 'Conta não encontrada com esse email ou senha'}
            }
        }
        #swagger.responses[500] = {
            description: 'Erro ao realizar login',
            schema: { mensagem: 'Erro ao realizar login'}
        }
        */

        try {
            const dados = request.body

            if (!dados.email || !dados.senha) {
                return response
                    .status(400)
                    .json({ mensagem: 'Nome e senha são obrigatórios' })
            }

            if (padraoEmail.test(dados.email) === false) {
                return response
                    .status(400)
                    .json({ mensagem: 'O email está no formato inválido' })
            }

            const usuario = await Usuario.findOne({
                where: {
                    email: dados.email
                }
            })

            if (!usuario) {
                return response
                    .status(404)
                    .json({ mensagem: 'Conta não encontrada' })
            }

            const senhaEstaCorreta = compareSync(dados.senha, usuario.senha)

            if (senhaEstaCorreta === false) {
                return response
                    .status(404)
                    .json({
                        mensagem: 'Conta não encontrada com esse email ou senha'
                    })
            }

            const token = sign({
                id: usuario.id
            },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            )

            response.status(200).json({
                token: token,
                nome: usuario.nome
            })

        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao realizar login' })
        }
    }

}

module.exports = new LoginController()