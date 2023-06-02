const axios = require('axios');

require('dotenv').config();

const HOST = process.env.API_GATEWAY_HOST || 'localhost';
const PORT = process.env.API_GATEWAY_PORT || '5000';

const graphQLAddress = `http://${HOST}:${PORT}/graphql`;

const GraphQLQuery = async (query) => {

    return await axios({
        url: graphQLAddress,
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: {
            "operationName": "",
            "query": query,
            "variables": {}
        },
    })
}

module.exports = GraphQLQuery