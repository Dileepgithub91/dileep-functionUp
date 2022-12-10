const trim = function() {
    console.log("functionUp")
}
module.exports.mytrim = trim


const changeToLowerCase = function() {
    var str = "functionUp"
    console.log("Change the case of string to lower", str.toLowerCase())
}
module.exports.lowerCase = changeToLowerCase

const changeToUpperCase = function() {
    var str = "functionUp"
    console.log("Change the case of string to lower", str.toUpperCase())
}
module.exports.upperCase = changeToUpperCase