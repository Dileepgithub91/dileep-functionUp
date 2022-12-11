const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const managerName = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule');
const req = require('express/lib/request');
const { route } = require('express/lib/application');

// router.get('/test-me', function(req, res) {
//     console.log("email from introduction module", intro.myEmail)
//     intro.myFunction('Dileep')
//     console.log("Email from employee module ", employee.myEmail)
//     managerName.mymanager("Anil Gt")
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     let result = _.first(days, 2)
//     console.log(`Result from underscore function is ${result}`)
//     res.send("Find the Result")
// })

// router.get('/students', function(req, res) {
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// PATH Param example


// router.get('/student-details/:name', function(req, res) {
//     /*
//     params is an attribute inside request that contains
//     dynamic values.
//     This value comes from the request url in the form of an
//     object where key is the variable defined in code
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use many ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request " + JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)

//     res.send('Dummy response')
// })



// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out were name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })


// router.get('/students1-details/:name', function(req, res) {
//     let requestParams = req.params
//     console.log("This is request " + JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log("Name of the Student is:", studentName)
//     res.send("Result is Dummy ")
// })

// router.get('/profile/:name/:number', function(req, res) {

//     // console.log("User requesting for profile is:", req)...find params
//     console.log("user  request profile:", req.params)
//     console.log("user name is", req.params.name)
//     res.send("dummy details")
// })


// // Query Param example

// router.get("/shoes", function(req, res) {
//     console.log("The filter options for shoes are -", req.query)
//         //req.query.size
//         //req.query.brand
//     res.send("dummy shoes response")
// })

//........Assignment............  https://docs.google.com/document/d/1bivlpkgtsJfsudBDcXDNHboGjyuAGA6KgzxJKwJSQwI/edit

router.get('/movies', function(req, res) {
    console.log("The filter options for movies are :", req.query)

    res.send("dummy  response")
})

// let arr = ["Rang De Basanti", "The shining", "Lord of the rings", "Batman begings"];
// router.get('/movies/:indexNumber', function(req, res) {
//     let movie = req.params.indexNumber;
//     console.log(arr[movie])
//     res.send("dummy list")
// })

let array = ["Rang De Basanti", "The shining", "Lord of the rings", "Batman begings"];
router.get('/movies/:indexNumber1', function(req, res) {
    let movie = req.params.indexNumber1;
    for (let i = 0; i <= array.length; i++) {
        var indexNumber1;
        if (indexNumber1 == array[i]) {
            console.log(array[movie])
        } else {
            console.log("use A valid index")
        }

    }
    res.send("dummy list")
})

router.get('/films', function(req, res) {
    console.log(req.query)
    res.send("dummy fimls list")
})

const movieObj = [{
    "id": 1,
    "name": "The Shining"
}, {
    "id": 2,
    "name": "Incendies"
}, {
    "id": 3,
    "name": "Rang de Basanti"
}, {
    "id": 4,
    "name": "Finding Nemo"
}]

router.get('/films/:filmId', function(req, res) {
    let filmname = req.params
    let filmId = req.params.filmId;
    for (let i = 0; i < movieObj.length; i++) {
        if (filmId == movieObj[i].id && filmname == movieObj[i].name) {
            console.log(movieObj[i].id)
            console.log(movieObj[i].name)
        } else {
            console.log("No movie exists with this Id")
        }
    }
})

module.exports = router;