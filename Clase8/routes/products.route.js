import { Router } from "express";
//INICIALIZO ROUTER
const router = Router();
//Inicializo el arreglo de productos
const productos =[ {
    id: 1,
    title: "Guitarra",
    price: 20000,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmui.today%2F__export%2F1602378684955%2Fsites%2Fmui%2Fimg%2F2020%2F10%2F10%2F58.jpg_693687776.jpg&f=1&nofb=1&ipt=5748c2e33eff91b05198e6a1e4030bd4d719cfe9a6205ac42dd5f2183ee67d41&ipo=images",
  },
  {
    id: 2,
    title: "Tambor",
    price: 15000,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimagenesnoticias.com%2Fwp-content%2Fuploads%2F2017%2F11%2FPerrosGraciosos45.jpg&f=1&nofb=1&ipt=331c9060a4ac587e697e513401159b258ccbd56cb359fdd19f0d629a55d6f1ed&ipo=images",
  },
  {
    id: 3,
    title: "Trompeta",
    price: 1,
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.doogweb.es%2Fwp-content%2Fuploads%2F2016%2F03%2FLabrador-retriever-1024x675.jpg&f=1&nofb=1&ipt=a10c408cb0cb83f4bdad8c78bd8c666b5331a71698a03a6edfd3f35196bad74e&ipo=images",
  },
];

//Ruta base productos
router.route('/')
    .get((req, res) => {
        //Busco TODOS los productos
        const response = {
            status: "OK",
            data: productos,
        };

        res.json(response);
    })
    .post((req, res) => {
        //Inserto un nuevo producto
        const { title, price, thumbnail } = req.body;
        const image = req.file;
        const newProductId = productos[productos.length - 1].id + 1;

        const newProduct = { 
            id: newProductId,
            title, 
            price, 
            thumbnail,
        };
        //Creo respuesta
        const response = {
            status: "Created",
            data: newProduct
        };
        //PUSH del producto al arreglo
        productos.push(newProduct);
        //Respuesta del Post
        res.status(201).json(response);
    });

//Ruta por ID productos
router.route('/:id')
    .get((req,res) => {
        //Leo el ID del parametro 
        const { id } = req.params;
        // BUsco el ID en el arreglo
        const product = productos.find((product) => product.id === Number(id));
        //Valido el resultado de la búsqueda
        const response = product 
            ? { status: "OK", data: product} 
            : { status: "NOT FOUND", data: null };

        const statusCode = product ? 200 : 404;

        res.status(statusCode).json(response);
    })
    .put((req,res) => {
        //Leo el ID del parametro 
        const { id } = req.params;
        const { title, price, thumbnail } = req.body;
        // BUsco el ID en el arreglo
        const indexProductToUpdate = productos.find((indexProduct) => indexProduct.id === Number(id));
        //Verifico que lo encontro
        if(!indexProductToUpdate){
          return  res.status(404).json({ status: "PRODUCTO NO ENCONTRADO", data: null });
        }

        productos.splice(indexProductToUpdate, 1, { id, title, price, thumbnail });

        res.status(200).json({
            status: "PRODUCTO AGREGADO", 
            data: { id, title, price, thumbnail },
        });
    })
    .delete( (req, res) => {
        //Leo el ID del parametro 
        const { id } = req.params;
        // BUsco el ID en el arreglo
        const indexProductoToUpdate = productos.findIndex((indexProduct) => indexProduct.id === Number(id));
        const productToDelete = productos[indexProductoToUpdate];
        //Verifico que lo encontro
        if(!productToDelete){
            return  res.status(404).json({ status: "PRODUCTO NO ENCONTRADO", data: null });
        }

        productos.splice(productToDelete, 1);

        res.status(200).json({
            status: "PRODUCTO ELIMINADP", 
            data: productToDelete,
        });
    });

export default router;