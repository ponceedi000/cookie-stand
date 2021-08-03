'use strict';
// Create global variables
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let listOfCookies = document.getElementById('cookieData');
let table = document.createElement('table')
let storeArray = []

function Cookiestore (location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    storeArray.push(this)
}
Cookiestore.prototype.getRandomNumber = function(min,max) {
        let randomNumber = Math.floor(((Math.random() * (max - min)) + min) + 1)
        return randomNumber;
    };
    Cookiestore.prototype.renderCustomerPerHour = function(min,max) {
        for (let i = 0; i <hours.length; i++) {
            let num = this.getRandomNumber(this.min, this.max)
            this.customersPerHour.push(num);
        }
        console.log(this.customersPerHour)
    };
    Cookiestore.prototype.renderCookiesPerHour = function() {
        this.renderCustomerPerHour();
        for (let i = 0; i <this.customersPerHour.length; i++) {
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg))
        }
        console.log(this.cookiesPerHour);
    };
    // End of constructor function

    
    // Body portion of table
    Cookiestore.prototype.renderCity = function() {
        this.renderCookiesPerHour();
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
    Cookiestore.prototype.shopArray = [];
    console.log(Cookiestore.prototype.shopArray)


    //Header portion of table
function tableHeader() {
    let timeRow = document.createElement('tr')
    let blankCell = document.createElement('th')
    blankCell.textContent = ''
    timeRow.appendChild(blankCell)
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
    

    //Footer portion of table
function renderFooterTable() {
    const footerElem = document.createElement('tfoot');
    table.appendChild(footerElem);
    
    const rowFooterElem = document.createElement('th');
    rowFooterElem.textContent = 'Total Hourly Cookies Sold for All Cities';
    footerElem.appendChild(rowFooterElem);

    let dailyTotalCookies = [];
    for (let h = 0; h < hours.length; h++) {
        let cookieHourlyTotal = 0;
        for (let i = 0; i < storeArray.length; i++) {
            let currentStore = storeArray[i];
            cookieHourlyTotal += currentStore.cookiesPerHour[h];
            console.log('lkjdsf', storeArray[i]);
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
        console.log(dailyTotalCookies);

        const shopCellElem3 = document.createElement('td');
        shopCellElem3.textContent = `Ultimate Total: ` + cookieDailyTotal;
        footerElem.appendChild(shopCellElem3);
    }
    
    
// Created instances for each function
    const seattle = new Cookiestore('Seattle', 23, 65, 6.3);
    const tokyo = new Cookiestore('Tokyo', 3, 24, 1.2);
    const dubai = new Cookiestore('Dubai', 11, 38, 3,7);
    const paris = new Cookiestore('Paris', 20, 38, 2.3);
    const lima = new Cookiestore('Lima', 2, 16, 0.6);
    console.log(storeArray);
    tableHeader();
// Invokes renderCity function for each instance
    seattle.renderCity();
    tokyo.renderCity();
    dubai.renderCity();
    paris.renderCity();
    lima.renderCity();
    renderFooterTable();

