const fs = require("fs");
const path = require("path");
const GraphQLQuery = require("./graphQLQuery")

const wsdlService = fs.readFileSync(
    path.join(__dirname, "postsservice.wsdl"),
    "utf8"
);
    
const examplePosts = () => {
    return [
        {
            Title: "Celular motorola 14 Pro 128GB eSIM 6GB RAM A16Bionic Camara 48MP Morado",
            CategoryID: 10,
            Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
            Creation_date: "2023-07-10",
            Units: 20,
            Price: 10500.0,
        },
        {
            Title: "Apple iPhone 12 Pro 128GB - Negro",
            CategoryID: 10,
            Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
            Creation_date: "2023-07-10",
            Units: 20,
            Price: 10500.0,
        }
    ];
};

const postsService = {
    PostsService: {
        PostsPort: {
            GetPosts: async ( args ) => {

                const query = `
                query {
                    allPosts(page: ${args.PostsPage.iPage.$value}) {
                        Title
                        CategoryID
                        Image
                        Creation_date
                        Units
                        Price
                    }
                }`

                try {
                    const response = await GraphQLQuery(query);

                    if (response.errors) {
                        console.log(response.errors)
                        return Promise.reject({msg: "Error fetching API Gateway post data", error: json.errors})
                    }

                    return {
                        //name: args.name.$value + ' --- result',
                        //parameters: examplePosts()
                        parameters: response.data.data.allPosts
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        },
    },
    //archivo wsdl asld
    wsdl: wsdlService, // or xml (both options are valid)
};

module.exports = { service: postsService, xml: wsdlService };