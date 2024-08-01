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

            const dadosApi = await getMapLocal(dados.cep);
            if(dadosApi.erro === 'CEP não encontrado'){
                return response.status(404).json({mensagem:'CEP não encontrado'})
            }
            const linkGoogleMaps = await getGoogleMapsLink(dadosApi);

            const local = await Local.create({
                nomeLocal: dados.nomeLocal,
                usuarioId: request.usuarioId,
                descricao: dados.descricao,
                cep: dados.cep,
                numeroLocal: dados.numeroLocal,
                latitude: dadosApi.lat,
                longitude: dadosApi.lng,
                logradouro: dadosApi.address,
                bairro: dadosApi.district,
                cidade: dadosApi.city,
                estado: dadosApi.state,
                linkGoogleMaps: linkGoogleMaps
            })

            response.status(201).json(local);

        } catch (error) {
            //console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async listar(request, response) {
        try {
            const locais = await Local.findAll({
                where: {usuarioId: request.usuarioId}
            });
            //validating if user create the local
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

            //validating if user create the local
            if(local.usuarioId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao para listar este local.'})
            }

            return response.status(200).json(local);
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async editar(request, response) {
        try {

            const localId = request.params.id;
            const dados = request.body;

            if (!dados.nomeLocal && !dados.descricao && !dados.cep && !dados.numeroLocal) {
                return response.status(400).json({ mensagen: 'Você debe introduzir um destes campos; nome, descrição do local, CEP ou numero de local.' })
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
            if(dados.cep){
                if ( dados.cep?.length !== 8 || isNaN(dados.cep)) {
                    return response
                        .status(400)
                        .json({ mensagem: 'CEP mal formatado. O cep so tem que conter 8 numeros.' })
                }
            }

            const dadosLocalDb = await Local.findByPk(localId);

            if (!dadosLocalDb) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }
            
            //validating if user create the local
            if(dadosLocalDb.usuarioId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao para editar este local'})
            }

            if(dados.cep){
                console.log(dados.cep)
                const dadosApi = await getMapLocal(dados.cep);

                if(dadosApi.erro === 'CEP não encontrado'){
                    return response.status(404).json({mensagem:'CEP não encontrado'})
                }

                const linkGoogleMaps = await getGoogleMapsLink(dadosApi);

                dadosLocalDb.cep = dadosApi.cep,
                dadosLocalDb.latitude = dadosApi.lat,
                dadosLocalDb.longitude = dadosApi.lng,
                dadosLocalDb.logradouro = dadosApi.address,
                dadosLocalDb.bairro = dadosApi.district,
                dadosLocalDb.cidade = dadosApi.city,
                dadosLocalDb.estado = dadosApi.state,
                dadosLocalDb.linkGoogleMaps = linkGoogleMaps
            }
            dadosLocalDb.nomeLocal = dados.nomeLocal ?? dadosLocalDb.nomeLocal;
            dadosLocalDb.descricao = dados.descricao ?? dadosLocalDb.descricao;
            dadosLocalDb.numeroLocal = dados.numeroLocal ?? dadosLocalDb.numeroLocal;

            await dadosLocalDb.save();
            //204 does not return anything
            return response.status(200).json(dadosLocalDb);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }

    async deletar(request, response) {
        try {
            const localId = request.params.id;

            const local = await Local.findByPk(localId);

            if (!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }

            //validating if user create the local
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

    async mapaLocal(request, response){
        try{
            const localId = request.params.id;

            const local = await Local.findByPk(localId);

            if (!local) {
                return response.status(404).json({ mensagem: 'Local não encontrado' });
            }

            if(local.usuarioId !== request.usuarioId){
                return response.status(403).json({mensagem: 'Você nao tem permissao para accesar este local'})
            }

            return response.status(200).json(local.linkGoogleMaps)
        }catch (error){
            console.log(error);
            return response.status(500).json({ mensagem: 'Erro no servidor' });
        }
    }
}

module.exports = new LocaisController()