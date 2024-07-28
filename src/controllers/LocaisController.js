//importing the model that contains the table
const Local = require('../models/Local')
const {getMapLocal, getGoogleMapsLink} = require('../services/map.service')

class LocaisController {

    async criar(request, response) {
        try {
            // validation of required fields not empty
            const dados = request.body
            if (!dados.nomeLocal || !dados.descricao || !dados.cep ) {
                return response.status(400).json({ mensagen: 'Os campos nome, descriçao do local, cep são obrigatorios' })
            }

            if (!isNaN(dados.nomeLocal)){
                return response
                .status(400)
                .json({ mensagem: 'O nome do local não pode ser numérico.' })
            }

            if (dados.nome?.length > 100) {
                return response
                    .status(400)
                    .json({ mensagem: 'O nome nao pode ter mais de 100 digitos.' })
            }

            //validating cep
            if ( dados.cep?.length !== 8 || isNaN(dados.cep)) {
                return response
                    .status(400)
                    .json({ mensagem: 'CEP mal formatado. O cep so tem que conter 8 numeros.' })
            }

            // console.log(dados.cep)
            // const dadosApi = await getMapLocal(dados.cep);
            // console.log(dadosApi);
            // const linkGoogleMaps = await getGoogleMapsLink(dadosApi);
            // console.log(linkGoogleMaps);

            // API para solicitar datos faltantes
            const local = await Local.create({
                // nomeLocal: dados.nomeLocal,
                // usuarioId: request.usuarioId,
                // descricao: dados.descricao,
                // cep: dados.cep,
                // numeroLocal: dados.numeroLocal,
                // latitude: dadosApi.lat,
                // longitude: dadosApi.lng,
                // logradouro: dadosApi.address,
                // bairro: dadosApi.district,
                // cidade: dadosApi.city,
                // estado: dadosApi.state,
                // linkGoogleMaps: linkGoogleMaps
                nomeLocal: dados.nomeLocal,
                usuarioId: request.usuarioId,// CHECK
                descricao: dados.descricao,
                cep: dados.cep,
                numeroLocal: dados.numeroLocal,
                latitude: dados.latitude,
                longitude: dados.longitude,
                logradouro: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.cidade,
                estado: dados.estado,
                linkGoogleMaps: dados.linkGoogleMaps
            })

            response.status(201).json(local);
            //or to list some fields
            // response.status(201).json({
            //     nome: Local.nome,
            //     idade: Local.idade,
            //     cep: Local.cep
            // });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    //TO DO  validar solo usuario puede accesar a sus locales
    async listar(request, response) {
        try {
            const locais = await Local.findAll({
                where: {usuarioId: request.usuarioId}
            });
            if (locais.length === 0){
                return response.status(200).json({mensagem: 'Você nao tem locais cadastrados.'})
            }
            return response.status(200).json(locais);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    //TO DO validar solo usuario puede accesar a su local
    async listarUm(request, response) {
        try {
            const localId = request.params.id;
            const local = await Local.findByPk(localId);

            if (!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }

            if(local.localId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao listar este local.'})
            }

            return response.status(201).json(local);
            //or to list some fields
            // response.status(201).json({
            //     id: local.id,
            //     nome: local.nome,
            //     idade: local.idade,
            //     email: local.email
            // });
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    //TO DO validar solo usuario puede editar a sus locales
    async editar(request, response) {
        try {

            const localId = request.params.id;
            const dados = request.body;

            if (!dados.nomeLocal || !dados.descricao || !dados.cep ) {
                return response.status(400).json({ mensagen: 'Os campos nome, descriçao do local, cep são obrigatorios' })
            }

            if (!isNaN(dados.nomeLocal)){
                return response
                .status(400)
                .json({ mensagem: 'O nome do local não pode ser numérico.' })
            }

            if (dados.nome?.length > 100) {
                return response
                    .status(400)
                    .json({ mensagem: 'O nome nao pode ter mais de 100 digitos.' })
            }

            //validating cep
            if ( dados.cep?.length !== 8 || isNaN(dados.cep)) {
                return response
                    .status(400)
                    .json({ mensagem: 'CEP mal formatado. O cep so tem que conter 8 numeros.' })
            }

            const local = await Local.findByPk(localId);
            if (!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }

            if(local.usuarioId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao para editar este local'})
            }

            //validation TO DO

            // local.nome = dados.nome ?? local.nome;
            // local.idade = dados.idade ?? local.idade;
            // local.email = dados.email ?? local.email;
            // local.senha = dados.senha ?? local.senha;
            // local.sexo = dados.sexo ?? local.sexo;

            await local.save();
            //204 does not return anything
            return response.status(204).json();
            //or to list some fields
            // response.status(201).json({
            //     nome: local.nome,
            //     idade: local.idade,
            //     email: local.email
            // });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    //TO DO validar solo usuario puede BORRAR a sus locales
    async deletar(request, response) {
        try {
            const localId = request.params.id;

            const local = await Local.findByPk(localId);

            if (!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }

            if(local.usuarioId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao para deletar este local'})
            }

            await local.destroy();

            return response.status(200).json({ mensagem: 'Local excluído com sucesso' });
            //return response.status(204).json()//empty response
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

}

module.exports = new LocaisController()