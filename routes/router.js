import exprss from 'express'
import {addCategory, findCategory} from '../controller/categoryController.js'
import { addProduct, findAllCars,findCarsByCategory } from '../controller/productController.js'
const router=exprss.Router()

//add category

router.post('/add_category',addCategory)

router.get('/find_category',findCategory)

router.post('/add_product',addProduct)
router.get('/find_all_cars',findAllCars)
router.get('/find_car_by_category/:id',findCarsByCategory)

export default router