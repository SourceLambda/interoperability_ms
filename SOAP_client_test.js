const soap = require('soap');
const url = 'http://localhost:8080/GetPosts?wsdl';
const args = { name: 'value'};

soap.createClient(url, function(err, client) {
    if(err) {
        console.log("client create error: ", err);
    }
    
    if(client) {
        //console.log(client.describe());
        client.GetPosts(args, function(err, result) {
            console.log(result);
        });
    }
});