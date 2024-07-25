const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const padraoCPF = new RegExp(/^\d{11}$/);
const padraoDataNascimento = new RegExp(/^\d{4}-\d{2}-\d{2}$/); // Date in YYYY-MM-DD format
const Usuario = require('../models/Usuario')

class UsuarioController {

    async criarConta(request, response) {
        try {
            const dados = request.body

            if (!dados.nome || !dados.sexo || !dados.cpf || !dados.endereco || !dados.email || !dados.senha || !dados.dataNascimento) {
                return response.
                    status(400).
                    json({ mensagem: 'Um o mais dados faltantes. O nome, sexo, cpf, endereço, email, senha, e data de nascimento são obrigatórios.' })
            }

            if (!isNaN(dados.nome)){
                return response
                .status(400)
                .json({ mensagem: 'O nome não pode ser numérico.' })
            }

            const valoresSexo = ['Masculino', 'Feminino', 'Nao especificado'];
            if (!valoresSexo.includes(dados.sexo)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O valor de sexo é inválido. Os valores permitidos são: Masculino, Feminino, ou  Nao especificado.' })
            }

            if (!padraoCPF.test(dados.cpf)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O CPF deve conter somente números e ter 11 dígitos.' });
            }

            const cpfExistente = await Usuario.findOne(
                {
                    where: {
                        cpf: dados.cpf
                    }
                })

            if (cpfExistente) {
                return response
                    .status(409)
                    .json({ mensagem: 'Cpf ja cadastrado.' })
            }

            if (padraoEmail.test(dados.email) === false) {
                return response
                    .status(400)
                    .json({ mensagem: 'O email está no formato inválido' })
            }

            const emailExistente = await Usuario.findOne(
                {
                    where: {
                        email: dados.email
                    }
                })

            if (emailExistente) {
                return response
                    .status(409)
                    .json({ mensagem: 'Email ja cadastrado.' })
            }
            //revisar si envia solo numeros email


            if (!(dados.senha?.length >= 8 && dados.senha?.length <= 16)) {
                return response
                    .status(400)
                    .json({ mensagem: 'A senha deve ter entre 8 e 16 dígitos' })
            }


            //validar data nascimento
            if (!padraoDataNascimento.test(dados.dataNascimento)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O formato da data de nascimento é inválido. O formato correto é YYYY-MM-DD.' });
            }

            const usuario = await Usuario.create({
                nome: dados.nome,
                sexo:dados.sexo,
                cpf: dados.cpf,
                endereco: dados.endereco,
                email: dados.email,
                senha: dados.senha,
                dataNascimento: dados.dataNascimento
            })

            response.status(201).json({
                nome: dados.nome,
                sexo:dados.sexo,
                cpf: dados.cpf,
                endereco: dados.endereco,
                email: dados.email,
                dataNascimento: dados.dataNascimento,
                createdAt: usuario.createdAt
            })
        } catch (error) {
            //console.log(error)
            response
                .status(500)
                .json({
                    mensagem: 'Não foi possível criar a conta.'
                })
        }
    }
}

module.exports = new UsuarioController()