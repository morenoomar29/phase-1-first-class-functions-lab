// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult){
    return function(fare){
        return fare * mult
    }
}

const fareDoubler = 
    function createFareMultiplier(fare) {
        return fare * 2
    }

const fareTripler = function createFareMultiplier(fare) {
    return fare * 3
}


function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}





































