'use strict';

console.log("Hello World!");


let hours = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    // avgCookiesSoldEachHourArray: [],
    // dailyTotal: 0,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer * this.avg);
     },
     render: function() {
         let seattleHeader = document.createElement('seattleHeader');
         seattleHeader.textContent = 'Seattle Cookies Sold by the Hour';
         listOfCookies.appendChild(seattleHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
         for (let i = 0; i < hours.length; i++) {
             let seattleCookiesSold = seattle.calcCookiePerHour();
             let li = document.createElement('li');
             li.textContent = `${hours[i]}: ${seattleCookiesSold} cookies`;
             ul.appendChild(li);
             total = total + seattleCookiesSold;
             console.log(seattleCookiesSold);
         }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
     }
}

let listOfCookies = document.getElementById('cookietest');

seattle.render();








// let cookieList = document.getElementById('cookieList');

// let h3 = document.createElement('h3');
// h3.textContent = 'Seattle Cookies Sold Per Hour';
// cookieList.appendChild(h3);

// let ul = document.createElement('ul');

// cookieList.appendChild(ul);



// let testCookie = {
//     render: function() {
//         let total = 0;
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesSold = seattle.calcCookiePerHour();
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}: ${cookiesSold} cookies`;
//             ul.appendChild(li);
//             total = total + cookiesSold;
//             console.log(cookiesSold);
//         }
//         let li = document.createElement('li');
//         li.textContent = `Total cookies: ${total}`;
//         ul.appendChild(li);
//     }
// }


// // seattle.render();
// testCookie.render();
















// creat an element
    // let article = document.creatElement(')
// give it content

// append it to the DOM