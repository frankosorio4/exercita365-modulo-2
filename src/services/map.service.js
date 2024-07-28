const axios = require('axios');
const linkMapApi = 'https://cep.awesomeapi.com.br/json/'

async function getMapLocal(cep){
    try {
        const response = await axios.get(`${linkMapApi}${cep}`)

        if(!response.data || response.data.length === 0){
            throw new Error('CEP não encontrado');
        }

        const dataCep = response.data

        return dataCep
    } catch (error) {
        console.log(error)
        return {erro: 'CEP não encontrado'}
    }
}

async function getGoogleMapsLink(dadosApi){
    try {
        const lat = dadosApi.lat
        const lng = dadosApi.lng

        const googleMapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

        return googleMapsLink;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao gerar o link do Google Maps');
    }
}

module.exports = {getMapLocal, getGoogleMapsLink}

