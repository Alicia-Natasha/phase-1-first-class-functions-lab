// Code your solution in this file!
const drivers = ([ 'Antonia', 'Nuru', 'Amari', 'Mo' ]);

function returnFirstTwoDrivers(drivers) {
    console.log(drivers);
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    console.log(drivers);
    return drivers.slice(-2);
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers ]);

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};
