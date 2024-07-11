import categoryModel from "../model/categoryModel.js";

//add category
const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body
        if (!categoryName) {
            return res.status(400).json({ message: 'Please add categoryName' })

        }
        else {
            const categoryData = new categoryModel({
                categoryName

            })
            const newData = await categoryData.save()
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

const findCategory = async (req, res) => {
    try {
        const categoryData = await categoryModel.find().exec()
        if (categoryData) {
            return res.status(200).json({ data: categoryData })
        } else {
            return res.status(409).json({ message: 'No Data' })
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}

export { addCategory, findCategory }