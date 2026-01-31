import exp from 'express'
//create min-express(seperate Route)app
export const productApp=exp.Router()
const app=exp()

let products=[]
productApp.get('/products',(req,res)=>{
    res.status(200).json({"message":"all products",payload:products})
})
//get product by id
productApp.get('/products/:id',(req,res)=>{
    let pid = Number(req.params.id)
    let product = products.find(p => p.productId === pid)

    if (!product) {
        return res.status(404).json({ message: "product not found" })
    }

    res.status(200).json({ message: "product", payload: product })
})
//get product by brand
productApp.get('/products-brand/:brand', (req, res) => {
  let brandName = req.params.brand.toLowerCase()
  let result = products.filter(p => p.brand.toLowerCase() === brandName)

  if (result.length === 0) {
    return res.status(404).json({ message: "no products for this brand" })
  }

  res.status(200).json({ message: "products by brand", payload: result })
})
productApp.post('/products',(req,res)=>{
    //get user resources from req
    let newProduct=req.body
    //console.log("new user",newuser)
    products.push(newProduct);
    res.status(201).json({message:"products created"})

})
productApp.put('/products',(req,res)=>{
    
    let updatedproducts=req.body;
  
    let productsIndex=products.findIndex((ele)=>ele.id===updatedproducts.id)
    
    if (productsIndex===-1){
        return res.status(404).json({message:"products not found"})
    }
    
    products.splice(productsIndex,1,updatedproducts)

    res.status(200).json({message:"products modified"})


});

productApp.delete('/products/:id',(req,res)=>{
    let productid = Number(req.params.id)

    let productsIndex = products.findIndex(p => p.productId === productid)

    if (productsIndex === -1) {
        return res.status(404).json({ message: "products not found" })
    }

    products.splice(productsIndex, 1)

    res.status(200).json({ message: "products deleted successfully" })
})