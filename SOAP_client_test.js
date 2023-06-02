const soap = require('soap');
const url = 'http://localhost:7070/GetPosts?wsdl';
const args = { name: 'camilo'};

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