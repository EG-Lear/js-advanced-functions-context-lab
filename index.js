/* Your Code Here */
function createEmployeeRecord(array) { //creates an object for the passed in employee information
    const obj = {
        'firstName': array[0], 
        'familyName': array[1], 
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
    console.log(obj)
    return obj
}

function createEmployeeRecords(employees) { //creates objects for multiple employees
    let records = employees.map(createEmployeeRecord)
    console.log('test')
    return records
}

function createTimeInEvent(punch) { //assigns a time punch to an employee
    let addedPunch = this
    addedPunch.timeInEvents.push(punchIn.call(punch))
    return addedPunch
}

//2014-02-28 1400
function punchIn() { //takes a string based time punch and returns an object of hour and date
    let seperated = this.split(" ")
    console.log(seperated)
    const obj = {
        'date': seperated[0],
        'hour': parseInt(seperated[1]),
        'type': "TimeIn"
    }
    console.log(obj)
    return obj
}

function createTimeOutEvent(punch) { //assings a time out punch
    let addedPunch = this
    addedPunch.timeOutEvents.push(punchOut.call(punch))
    return addedPunch
}

function punchOut() { //takes a string based time punch and returns an object of hour and date
    let seperated = this.split(" ")
    console.log(seperated)
    const obj = {
        'date': seperated[0],
        'hour': parseInt(seperated[1]),
        'type': "TimeOut"
    }
    console.log(obj)
    return obj
}

function hoursWorkedOnDate(dateVal) { //takes employee information and a date and calculates hours worked
    let inCheck = this.timeInEvents.find(check => check.date === dateVal)
    let outCheck = this.timeOutEvents.find(checks => checks.date === dateVal)
    console.log (inCheck, outCheck)
    let hours = (outCheck.hour - inCheck.hour) / 100
    console.log(hours)
    return hours
}

function wagesEarnedOnDate(date) { //checks the wages earned on a specific day
    let value = hoursWorkedOnDate.call(this, date)
    return value * this.payPerHour
}

function allWagesFor() { //calculates total wages for an employee
    let total = 0
    for (let i = 0; i < this.timeInEvents.length; i++) {
        total = total + wagesEarnedOnDate.call(this, this.timeInEvents[i].date)
        console.log(total)
    }
    return total
}

function calculatePayroll(employees) { //calculates total combined wages paid out to multiple employees
    let total = 0
    employees.forEach(worker => {
        total = total + allWagesFor.call(worker)
        console.log(total)
    })
    return total
}

function findEmployeeByFirstName(group, target) {
    let employee = group.find(check => check.firstName === target)
    return employee
}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

function test() {
    console.log(this)
    let x = this.split(" ")
    console.log(x)
}

function testPartTwo() {
    console.log(this.two)
}

function testThree(x) {
    testFour(x)
}

function testFour() {
    console.log(this)
}