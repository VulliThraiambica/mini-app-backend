import exp from "express"
import { employeemodel } from "../models/employeemodel.js"
export const empapp=exp.Router()

// read
empapp.get("/employee",async(req,res)=>{
    const emplist= await employeemodel.find({isemployeeactive:true})
    res.status(200).json({message:'employee',payload:emplist})
})

// create 

empapp.post("/employee", async (req, res) => {
    const empobj = req.body
    const newEmp = await employeemodel.create(empobj)
    res.status(201).json({ message: "employee created", payload: newEmp })
})

//edit employee

empapp.put("/employee/:id", async (req, res) => {
    const modifiedEmp = await employeemodel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    if (!modifiedEmp) return res.json({ message: "emp not found" })
    res.json({ message: "emp updated", payload: modifiedEmp })
})
// delete
empapp.delete("/employee/:id", async (req, res) => {   
    const deletedEmp = await employeemodel.findByIdAndUpdate(  
        req.params.id,
        { isemployeeactive: false },
        { new: true }
    )
    if (!deletedEmp) return res.json({ message: "emp not found to delete" })
    res.json({ message: "this emp is deleted" })
})