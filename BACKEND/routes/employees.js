const router = require("express").Router();
let Employee = require("../models/employee.js");

//in "/student" url when direct to "student/add"
router.route("/add").post((req ,res) => {

    //body is the body-part in request which sends from frontend to backend 

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    //const {name, age, gender} = req.body;

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

//to get employee details when view is opened in html
router.route("/").get((req, res)=> {
    Employee.find().exec((err,employees) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingEmployees:employees
        });
    });
        
});

//update one employee's data
//:id is meant to get value as id after /update

router.route("/update/:id").put(async (req, res) => {
    //put is to get exist data and replace with update data

    let userId = req.params.id; //fetch id from url
    //d structure to fetch data from body
    const {name, age, gender} = req.body;

    const updateEmployee = {
        name,
        age,
        gender
    };
    
    const udpate = await Employee.findByIdAndUpdate(userId, updateEmployee)
    //findOne is to used find object by other than id(pk)

    .then(() => {
        res.status(200).send({status: "user udpated"}); // to send that update is successful. 200 - success code

    })

    .catch((err) => {
        console.log(err); //1st error
        res.status(500).send({status : "error with updating data", error: err.message}); //2nd method to notify error

    })
})


//delete an employee

router.route("/delete/:id").delete(async (req, res) => {
    //send delete method instead post or put
    let userId = req.params.id;
    
    await Employee.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "user deleted"});
    })

    .catch((err) => {
        console.log(err);
        res.status(500).send({status : "error with deleting user", error : err.message});

    })

})


//fetch one employee's data

router.route("/get/:id").get(async (req, res) => {

    let userId = req.params.id;
    
    //making user object to assign userdetail to send to front end
    Employee.findById(userId, (err, employee) => {
        if(err){
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({
            success:true,
            employee
        });
    });
});

module.exports = router;