'use strict';

console.log("Hello World!");


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let listOfCookies = document.getElementById('cookieData');

// Code for Seattle location
let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
         let seattleHeader = document.createElement('h3');
         seattleHeader.textContent = 'Seattle Cookies Sold by the Hour';
         listOfCookies.appendChild(seattleHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let seattleCookiesSold = this.calcCookiePerHour();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${seattleCookiesSold} cookies`;
                ul.appendChild(li);
                total += seattleCookiesSold;
                console.log(seattleCookiesSold);
            }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
    }
}
seattle.render();


// Code for Tokyo location
let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
         let tokyoHeader = document.createElement('h3');
         tokyoHeader.textContent = 'Tokyo Cookies Sold by the Hour';
         listOfCookies.appendChild(tokyoHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let tokyoCookiesSold = this.calcCookiePerHour();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${tokyoCookiesSold} cookies`;
                ul.appendChild(li);
                total += tokyoCookiesSold;
                console.log(tokyoCookiesSold);
            }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
    }
}
tokyo.render();


// Code for Dubai location
let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
         let dubaiHeader = document.createElement('h3');
         dubaiHeader.textContent = 'Dubai Cookies Sold by the Hour';
         listOfCookies.appendChild(dubaiHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let dubaiCookiesSold = this.calcCookiePerHour();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${dubaiCookiesSold} cookies`;
                ul.appendChild(li);
                total += dubaiCookiesSold;
                console.log(dubaiCookiesSold);
            }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
    }
}
dubai.render();


// Code for Paris location
let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
         let parisHeader = document.createElement('h3');
         parisHeader.textContent = 'Paris Cookies Sold by the Hour';
         listOfCookies.appendChild(parisHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let parisCookiesSold = this.calcCookiePerHour();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${parisCookiesSold} cookies`;
                ul.appendChild(li);
                total += parisCookiesSold;
                console.log(parisCookiesSold);
            }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
    }
}
paris.render();

// Code for Lima location
let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcCookiePerHour: function () {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
         let limaHeader = document.createElement('h3');
         limaHeader.textContent = 'Lima Cookies Sold by the Hour';
         listOfCookies.appendChild(limaHeader);

         let ul = document.createElement('ul');

         listOfCookies.appendChild(ul);

         let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let limaCookiesSold = this.calcCookiePerHour();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${limaCookiesSold} cookies`;
                ul.appendChild(li);
                total += limaCookiesSold;
                console.log(limaCookiesSold);
            }
         let li = document.createElement('li');
         li.textContent = ` Total cookies: ${total}`;
         ul.appendChild(li);
    }
}
lima.render();