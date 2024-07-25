const Usuario = require("../models/Usuario")
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class LoginController {

    async login(request, response) {
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

            response.json({
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