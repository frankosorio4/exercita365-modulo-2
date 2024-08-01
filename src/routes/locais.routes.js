const { Router } = require('express');
const LocaisController = require('../controllers/LocaisController');

const LocaisRouter = new Router();

LocaisRouter.post('/', LocaisController.criar
    /*
        #swagger.tags = ['Locais'],
        #swagger.summary = 'Cria um novo local'
        #swagger.description = 'Endpoint para criar um novo local',
        #swagger.parameters['novoLocal'] = {
            in: 'body',
            description: 'Informações do Local. Você pode criar um novo local com os seguintes dados, ou modificá-los.',
            required: true,
            schema: { 
                $nomeLocal: 'Nome do Local',
                $descricao: 'Descriçao do local',
                $cep: "88085540",
                $numeroLocal: "123"
            }
        },
        #swagger.responses[201] = { 
            description: 'Local criado com sucesso',
            schema: {
                id: 1,
                nomeLocal: 'Nome do Local',
                descricao: 'Descrição do local',
                cep: '88085540',
                numeroLocal: '123',
                latitude: '12.345678',
                longitude: '-12.345678',
                logradouro: 'Rua Exemplo',
                bairro: 'Bairro Exemplo',
                cidade: 'Cidade Exemplo',
                estado: 'Estado Exemplo',
                linkGoogleMaps: 'https://www.google.com/maps?q=12.345678,-12.345678',
                createdAt: '2023-06-27T00:00:00.000Z',
                updatedAt: '2023-06-27T00:00:00.000Z'
            }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Os campos nome, descrição do local, cep são obrigatórios' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[404] = { 
            description: 'CEP não encontrado',
            schema: { mensagem: 'CEP não encontrado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
     */
);

LocaisRouter.get('/', LocaisController.listar
    /*
        #swagger.tags = ['Locais']
        #swagger.summary = 'Lista todos os locais'
        #swagger.description = 'End point para listar todos os locais cadastrados pelo usuário.'
        #swagger.responses[200] = {
            description: 'Locais listados com sucesso',
            schema: [
                {
                    id: 1,
                    nomeLocal: 'Nome do Local',
                    descricao: 'Descrição do local',
                    cep: '12345678',
                    numeroLocal: '123',
                    latitude: '12.345678',
                    longitude: '-12.345678',
                    logradouro: 'Rua Exemplo',
                    bairro: 'Bairro Exemplo',
                    cidade: 'Cidade Exemplo',
                    estado: 'Estado Exemplo',
                    linkGoogleMaps: 'https://www.google.com/maps?q=12.345678,-12.345678',
                    createdAt: '2023-06-27T00:00:00.000Z',
                    updatedAt: '2023-06-27T00:00:00.000Z'
                }
            ]
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
     */
);

LocaisRouter.get('/:id', LocaisController.listarUm
    /*
        #swagger.tags = ['Locais']
        #swagger.summary = 'Lista um local específico'
        #swagger.description = 'End point para listar um local específico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Forneça o ID do local que você quer listar.',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Local encontrado',
            schema: {
                id: 1,
                nomeLocal: 'Nome do Local',
                descricao: 'Descrição do local',
                cep: '12345678',
                numeroLocal: '123',
                latitude: '12.345678',
                longitude: '-12.345678',
                logradouro: 'Rua Exemplo',
                bairro: 'Bairro Exemplo',
                cidade: 'Cidade Exemplo',
                estado: 'Estado Exemplo',
                linkGoogleMaps: 'https://www.google.com/maps?q=12.345678,-12.345678',
                createdAt: '2023-06-27T00:00:00.000Z',
                updatedAt: '2023-06-27T00:00:00.000Z'
            }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[403] = { 
            description: 'Permissão negada',
            schema: { mensagem: 'Você não tem permissão para listar este local' }
        }
        #swagger.responses[404] = {
            description: 'Local não encontrado',
            schema: { mensagem: 'Local não encontrado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
 */
);

LocaisRouter.put('/:id', LocaisController.editar
    /*
        #swagger.tags = ['Locais']
        #swagger.summary = 'Edita um local'
        #swagger.description = 'End point para editar um local existente'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Forneça o ID do local que você quer editar.',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['local'] = {
            in: 'body',
            description: 'Você pode editar um o mais campos dos quatro listados embaixo.  Se não quiser editar um campo, pode apagar ele.',
            required: true,
            schema: { 
                $nomeLocal: 'Novo nome do Local',
                $descricao: 'Nova descrição do local',
                $cep: 'Novo cep',
                $numeroLocal: 'Novo numero de Local'
            }
        }
        #swagger.responses[200] = {
            description: 'Local atualizado com sucesso',
            schema: {
                id: 1,
                nomeLocal: 'Nome do Local Atualizado',
                descricao: 'Descrição do local atualizada',
                cep: '12345678',
                numeroLocal: '123',
                latitude: '12.345678',
                longitude: '-12.345678',
                logradouro: 'Rua Exemplo',
                bairro: 'Bairro Exemplo',
                cidade: 'Cidade Exemplo',
                estado: 'Estado Exemplo',
                linkGoogleMaps: 'https://www.google.com/maps?q=12.345678,-12.345678',
                createdAt: '2023-06-27T00:00:00.000Z',
                updatedAt: '2023-06-27T00:00:00.000Z'
            }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Você deve introduzir um destes campos: nome, descrição do local, CEP ou número de local.' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[403] = { 
            description: 'Permissão negada',
            schema: { mensagem: 'Você não tem permissão para editar este local' }
        }
        #swagger.responses[404] = { 
            description: 'CEP não encontrado ou Local não encontrado',
            schema: { mensagem: 'CEP não encontrado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
 */
);

LocaisRouter.delete('/:id', LocaisController.deletar
    /*
        #swagger.tags = ['Locais']
        #swagger.summary = 'Deleta um local específico'
        #swagger.description = 'End point para deletar um local específico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Forneça o ID do local que você quer apagar.',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Local excluído com sucesso',
            schema: { mensagem: 'Local excluído com sucesso' }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[403] = { 
            description: 'Permissão negada',
            schema: { mensagem: 'Você não tem permissão para editar este local' }
        }
        #swagger.responses[404] = { 
            description: 'Local não encontrado',
            schema: { mensagem: 'Local não encontrado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
    */
);

LocaisRouter.get('/:id/maps', LocaisController.mapaLocal
    /*
    #swagger.tags = ['Locais']
        #swagger.summary = 'Obtém o link do Google Maps para um local específico'
        #swagger.description = 'End point para obter o link do Google Maps para um local específico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Forneça o ID do local que você quer obter o link do GoogleMaps.',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Link do Google Maps gerado com sucesso',
            schema: { link: 'https://www.google.com/maps?q=12.345678,-12.345678' }
        }
        #swagger.responses[400] = { 
            description: 'Dados inválidos',
            schema: { mensagem: 'Token não anexado' }
        }
        #swagger.responses[401] = { 
            description: 'Não Autorizado',
            schema: { mensagem: 'O Token está inválido ou expirado' }
        }
        #swagger.responses[403] = { 
            description: 'Permissão negada',
            schema: { mensagem: 'Você não tem permissão para editar este local' }
        }
        #swagger.responses[404] = { 
            description: 'Local não encontrado',
            schema: { mensagem: 'Local não encontrado' }
        }
        #swagger.responses[500] = { 
            description: 'Erro no servidor',
            schema: { mensagem: 'Erro no servidor' }
        }
 */
);

module.exports = LocaisRouter