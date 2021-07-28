'use strict';

console.log("Hello World!");


let seattle = {
name: 'Seattle',
min: 23,
max: 65,
avg: 6.3,
avgCookiesSoldEachHourArray: [],
dailyTotal: 0,
getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}
}

console.log(seattle.getRandomCustomer())