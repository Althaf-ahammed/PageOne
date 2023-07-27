const employee = require("../model/emloyee")

const addEmployee = async(req,res)=>{
    const {Name,Address,Gender,Position,Department} = req.body
    const add = await employee.create({
        Name,
        Address,
        Gender,
        Position,
        Department
    })
    res.json('employee added')
}
module.exports = addEmployee