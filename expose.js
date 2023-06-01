let fs = require("fs");
let path = require("path");

const wsdlService = fs.readFileSync(
  path.join(__dirname, "postsservice.wsdl"),
  "utf8"
);

const posts = () => {
  return {
    post1: {
        Title: "Celular iPhone 14 Pro 128GB eSIM 6GB RAM A16Bionic Camara 48MP Morado",
        CategoryID: 10,
        Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
        // Description: {
        //   Description_text: "En estos iPhone 14 Pro, la compañía continúa en el máximo nivel en materiales y acabados - en los que no tienen competencia.",
        //   Brand: "apple",
        //   Tech_details: ["128GB", "6GB", "48MP"],
        //   Other_details: ["Morado"]
        // },
        Creation_date: "2023-07-10",
        Units: 20,
        Price: 10500.0,
    },
    post2: {
        Title: "Apple iPhone 12 Pro 128GB - Negro",
        CategoryID: 10,
        Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
        Creation_date: "2023-07-10",
        Units: 20,
        Price: 10500.0,
      }
  };
};

const postsService = {
  PostsService: {
    PostsPort: {
      GetPosts: ( args ) => {
        return {
          name: args.name.$value + ' --- result'
          // posts: [
          //   posts()
          // ]
        }
      }
    },
  },
  //archivo wsdl
  wsdl: wsdlService, // or xml (both options are valid)
};

module.exports = { service: postsService, xml: wsdlService };

/*

<types>
        <xsd:schema elementFormDefault="qualified" targetNamespace="http://tempuri.org/">
            <xsd:element name="GetPostsReq">
                <xsd:complexType>
                    <xsd:sequence>
                        <xsd:element minOccurs="0" name="page" type="xsd:int" />
                    </xsd:sequence>
                </xsd:complexType>
            </xsd:element>
            <xsd:element name="GetPostsResponse">
                <xsd:complexType>
                    <xsd:sequence>
                        <xsd:element minOccurs="0" name="GetPostsResult" nillable="true" type="xsd:int" />
                    </xsd:sequence>
                </xsd:complexType>
            </xsd:element>
        </xsd:schema>
    </types>

*/