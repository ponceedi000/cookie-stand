'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let listOfCookies = document.getElementById('cookieData');
let table = document.createElement('table')
function Cookiestore (location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;

    this.getRandomNumber = function(min,max) {
        let randomNumber = Math.floor(((Math.random() * (max - min)) + min) + 1)
        return randomNumber;
    };

this.renderCustomerPerHour = function(min,max) {
    for (let i = 0; i <hours.length; i++) {
        let num = this.getRandomNumber(this.min, this.max)
        this.customersPerHour.push(num);
    }
    console.log(this.customersPerHour)
};

this.renderCookiesPerHour = function() {
    for (let i = 0; i <this.customersPerHour.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg))
    }
    console.log(this.cookiesPerHour);
};

this.renderCity = function() {

    
    listOfCookies.appendChild(table)
    let tr = document.createElement('tr');
    let locationHead = document.createElement('th');
    locationHead.textContent = `${this.location}`;
    tr.appendChild(locationHead)
    table.appendChild(tr)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
        total += this.cookiesPerHour[i];

    }
    let td = document.createElement('td');
    td.textContent = `Total cookies: ${total}`;
    tr.appendChild(td);
}

this.callUponAll = function () {
    this.renderCustomerPerHour();
    this.renderCookiesPerHour();
    this.renderCity();
}
this.callUponAll();
this.shopArray.push(this);
}
Cookiestore.prototype.shopArray = [];

function tableHeader() {
let timeRow = document.createElement('tr')
let tHead = document.createElement('th')
tHead.textContent = ''
timeRow.appendChild(tHead)
for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td')
    td.textContent = hours[i];
    timeRow.appendChild(td)
    
}
let td = document.createElement('td')
td.textContent = 'Daily Location Total'
timeRow.appendChild(td)
table.appendChild(timeRow)
}
tableHeader();


function renderFooterTable() {
    const footerElem = document.createElement('tr');
    table.appendChild(footerElem);

    const rowFooterElem = document.createElement('th');
    rowFooterElem.textContent = 'Total Hourly Cookies Sold for All Cities';
    footerElem.appendChild(rowFooterElem);

    let dailyTotalCookies = [];
    for (let h = 0; h < hours.length; h++) {
        let cookieHourlyTotal = 0;
        for (let i = 0; i < Cookiestore.prototype.shopArray.length; i++) {
            let currentStore = Cookiestore.prototype.shopArray[i];
            cookieHourlyTotal += currentStore.cookiesPerHour[h];
        }
        const shopCellElem2 = document.createElement('td');
        shopCellElem2.textContent = `${cookieHourlyTotal}`;
        footerElem.appendChild(shopCellElem2); 
        dailyTotalCookies.push(cookieHourlyTotal);
    }
    let cookieDailyTotal = 0;
    for (let i = 0; i < dailyTotalCookies.length; i++) {
        cookieDailyTotal += dailyTotalCookies[i];
    }
    const shopCellElem3 = document.createElement('td');
    shopCellElem3.textContent = `Ultimate Total: ` + cookieDailyTotal;
    footerElem.appendChild(shopCellElem3);
}
renderFooterTable();



const seattle = new Cookiestore('Seattle', 23, 65, 6.3);
const tokyo = new Cookiestore('Tokyo', 3, 24, 1.2);
const dubai = new Cookiestore('Dubai', 11, 38, 3,7);
const paris = new Cookiestore('Paris', 20, 38, 2.3);
const lima = new Cookiestore('Lima', 2, 16, 0.6);

console.log(Cookiestore.prototype.shopArray);

