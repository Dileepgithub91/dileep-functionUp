const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const wel = require('../logger/logger.js')
const cDate = require('../util/helper')
const cMonth = require('../util/helper')
const batch = require('../util/helper')
const trim1 = require('../validator/formatter.js')
const lower = require('../validator/formatter.js')
const upper = require('../validator/formatter.js')
const lodash = require('lodash')

router.get('/test-me', function(req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Dileep')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    wel.welcome("Dileep Kumar")
    cDate.date()
    cMonth.month()
    batch.getBatch("Californium ,W3D4, the topic for today is Node.js Module")
    trim1.mytrim()

    lower.lowerCase()
    upper.upperCase()
    var month = ["jan", "fab", "mar", "april", "may", "jun", "july", "Augu", "sep", "oct", "nov", "dec"]
    var newMoth = lodash.chunk(month, 3)
    console.log(newMoth)

    var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(odd))
    var arr = [1, 2, 3, 1, 4]
    console.log(lodash.union(arr))

    var obj = [
        ["horror", "The shipping"],
        ["drama", "titanic"],
        ["fantasy", "labo"]

    ]
    console.log(lodash.fromPairs(obj))

    res.send('any dummy text')
});


router.get('/test-you', function(req, res) {
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;









