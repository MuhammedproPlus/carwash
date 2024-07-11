import productModel from "../model/productModel.js";

//add category
const addProduct = async (req, res) => {
    try {
        const { carName,categoryId } = req.body
        if (!carName || !categoryId) {
            return res.status(400).json({ message: 'Please add carName' })

        }
        else {
            const productData = new productModel({
                carName ,
                categoryId

            })
            const newData = await productData.save()
            if (newData) {
                return res.status(200).json({ data: newData })

            } else {
                return res.status(409).json({ message: 'Some error' })

            }


        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });

    }
}

//find category

const findAllCars = async (req, res) => {
    try {
        const productData = await productModel.find().populate('categoryId').exec()
        if (productData) {
            return res.status(200).json({
                 message:'Success',
                data: productData,
                error:false })
        } else {
            return res.status(409).json({ message: 'No Data' })
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}


const findCarsByCategory=async(req,res)=>{
    const {id} =req.params
    try {
        const productData=await productModel.find({categoryId:id}).populate('categoryId')
        if (productData) {
            return res.status(200).json({ 
                 message:'Success',
                data: productData,
                error:false
               
             })
            
        }
        else {
            return res.status(409).json({ message: 'No Data' })
        }
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export { addProduct, findAllCars,findCarsByCategory }