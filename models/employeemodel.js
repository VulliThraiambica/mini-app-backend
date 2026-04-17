import { Schema,model,Types } from "mongoose";
const empschema= new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
type:String,
required:[true,"email is required"],
unique:true
    },
    mobile:{
        type:Number
    },
    designation:{
        type:String

    },
    companyname:{
type:String
    },
       isemployeeactive: { type: Boolean, 
        default: true }

});

export const employeemodel=model("employee",empschema)