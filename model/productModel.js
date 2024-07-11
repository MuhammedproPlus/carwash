import mongoose,{Schema,model} from "mongoose";

const productSchema=new Schema({
    carName:{
        type:String,
        required:true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: "category",
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDelete:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const productModel = mongoose.model("cars",productSchema)

export default productModel