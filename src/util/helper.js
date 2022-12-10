const printDate = function() {
    var currentDate = new Date()
    console.log(currentDate)
}
module.exports.date = printDate


const printMonth = function() {
    var currentMonth = new Date()
    console.log(currentMonth)
}
module.exports.month = printMonth


const getBatchInfo = function(batch) {
    console.log(`Batch Name ${batch}`)
}
module.exports.getBatch = getBatchInfo