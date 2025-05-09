import porductsModel from "../model/porducts.model.mjs";



export async function addProducts(req, res) {
    // console.log(req);
    // console.log(res);
    try {
        const products = req.body;
            if (Array.isArray(products)) {
              // Add multiple documents
              const result = await porductsModel.insertMany(products);
              res
                .status(201)
                .json({ message: "Products added successfully", data: result });
            } else {
              // Add a single document
              const result = await porductsModel.insertOne(products);
              res
                .status(201)
                .json({ message: "Product added successfully", data: result });
            }
        
    } catch (error) {
        res.status(500).json({ message: "Error adding product(s)", error: error.message });
    }
}



export async function fetchAllProducts(_,res) {

    // console.log(res)
    try {
        const result = await porductsModel.find();
        if (!result) {
            return res.status(404).send({message: "No Product Found"})
        }
        return res.status(200).send({message:"Products found Successfully: ",result})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error fetching all Products",error: error.message})
    }

}
export async function fetchProductById(req,res) {

    // console.log(res)
    try {
        const result = await porductsModel.find();
        if (!result) {
            return res.status(404).send({message: "No Product Found"})
        }
        return res.status(200).send({message:"Products found Successfully: ",result})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error fetching all Products",error: error.message})
    }

}