const router = require("express").Router();
let Employee = require("../models/employee.js");

//in "/student" url when direct to "student/add"
router.route("/add").post((req ,res) => {

    //body is the body-part in request which sends from frontend to backend 

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    //initializing properties in request to a new object
    const newEmployee = new Employee({
        name, 
        age, 
        gender
    })

    newEmployee.save().then(() => {
        res.json("Employee added");
    }).catch((err) => {
        console.log(err);
    })


} )




module.exports = router;