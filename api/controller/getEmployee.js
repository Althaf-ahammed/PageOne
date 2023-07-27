const employee = require("../model/emloyee")

const getEmployee = async(req,res)=>{
    const employees = await employee.find({})
    res.json(employees)
}
module.exports = getEmployee