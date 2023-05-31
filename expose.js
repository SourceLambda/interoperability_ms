let fs = require("fs");
let path = require("path");
const { json } = require("express");

const wsdlService = fs.readFileSync(
  path.join(__dirname, "posts.wsdl"),
  "utf8"
);

const posts = () => {
  return {
    post1: {
        Title: "Celular iPhone 14 Pro 128GB eSIM 6GB RAM A16Bionic Camara 48MP Morado",
        CategoryID: 10,
        Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
        Description: {
          Description_text: "En estos iPhone 14 Pro, la compañía continúa en el máximo nivel en materiales y acabados - en los que no tienen competencia.",
          Brand: "apple",
          Tech_details: ["128GB", "6GB", "48MP"],
          Other_details: ["Morado"]
        },
        Creation_date: "2023-07-10",
        Units: 20,
        Price: 10500.0,
    },
    post2: {
        Title: "Apple iPhone 12 Pro 128GB - Negro",
        CategoryID: 10,
        Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
        Description: {
          Description_text: "EiPhone 12 Pro es de 6.1 pulgadas, sin marco, FullHD, con resolución de 2.532 x 1.170 460 p/p.",
          Brand: "apple",
          Tech_details: ["128GB", "8GB", "48MP"],
          Other_details: ["Negro"]
        },
        Creation_date: "2023-07-10",
        Units: 20,
        Price: 10500.0,
      },
    post3: {
        Title: "AirPods Pro Portatil Apple AirPods Pro Apple",
        CategoryID: 9,
        Image: "https://firebasestorage.googleapis.com/v0/b/:]:][]:]c]a]:]s]a]i]:]c]:]s]a]i][]c]:]s]c]i][]i]i]a]:]c]:]c]a]s]s]:]i][]:][]c][]s]s][]i]:]i]s]:]a]s]s]s]:]:]c]i]s]/o/images%2Fftqf6bq6ihx-bcj29bakw6.jpeg?alt=media&token=e30vfrht548brxvhhhvqcdy2d-agppa7u9y",
        Description: {
          Description_text: "AirPods Pro Portatil Apple Reducción de ruido: Tiene la función de reducción de ruido activa para que todo sea más envolvente en el oído.",
          Brand: "apple",
          Tech_details: ["Pro"],
          Other_details: ["musica", "llamadas"]
        },
        Creation_date: "2023-07-10",
        Units: 20,
        Price: 10500.0,
      }
  };
};

const PostsService = {
  PostService: {
    PostSoap: {
      postsArray: function(){
        return [posts()];
      }
    },
  },
  //archivo wsdl
  wsdl: wsdlService, // or xml (both options are valid)
};

module.exports = { service: PostsService, xml: wsdlService };