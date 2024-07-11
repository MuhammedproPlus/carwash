import mongoose,{Schema,model} from "mongoose";

const categorySchema=new Schema({
    categoryName:{
        type:String,
        required:true
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

const categoryModel = mongoose.model("category",categorySchema)

export default categoryModel