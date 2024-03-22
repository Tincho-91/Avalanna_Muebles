const db = require("../../database/models");
const { op } =require("sequelize");
const { validationResult } = require("express-validator");
const path = require("path");

module.exports = {
    detail: async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            if(!Number.isInteger(id)){
                throw new Error("Por favor ingrese un numero entero")
            }

            const product = await db.Product.findByPk(id,{
                include:{association:'categories'}
            })

            if(!product){
                throw new Error("El ID ingresado no corresponde a ningun producto")
            }

            return res.status(200).send(product);            
        } catch (error) {
            res.status(400).send(error.message)
        }
    },

    list: async (req,res) =>{

        let {limit = 10 , page = 1} = req.query;
        
        limit = parseInt(limit)
        const offset = limit * (parseInt(page)-1);
        try {
            const products = await db.Product.findAll({include:{association:"categories"},limit , offset });

            return res.status(200).send(products);
        } catch (error) {
            return res.status(400).send(error.message);
        }

    },
    store:(req,res) =>{
    	const producto = req.body;

        producto.image = req.file.filename;

        db.Product.create(producto)
        .then((product)=>{
            res.redirect(`/products`);
        })
        .catch(err=> console.log(err))
    },

    update: async (req,res)=>{
        
        console.log("req.body: ", req.body);
        try {
            const id = parseInt(req.params.id);
            if (!Number.isInteger(id)) {
                throw new Error (`${req.params.id} no es un término válido, debe ingresar un número entero`)
            }

            const product = await db.Product.findByPk(id);
            console.log("req.body: ", req.body);

            if (!product) {
                throw new Error (`Producto inexistente`);
            }
            const {name, price, description, extraDescription, categoryId, discount, height, width,depth} = req.body;
                await product.update({
                  name,
                  price,
                  description,
                  extraDescription,
                  categoryId,
                  discount,
                  height,
                  width,
                  depth,
                  image: product.image ? product.image : "default.jpg"
                })

                return res.status(200).json(product);
            
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },

    destroy:(req,res)=>{
        const {id}=req.params;
       db.Product.destroy({
        where:{
            id,
        }
       })
       db.Product.findOne({
        where:{
            id
        }
       }).then((resp)=>{
        fs.unlink(path.join(__dirname,`../../public/img/${resp.dataValues.image}`),(err)=>{
            
            if(err) throw err;
           
            res.redirect(`/`);
       })
    }
       ).catch(err=>console.log(err))
       
    },
}