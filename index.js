"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.displayCties = exports.addCity = void 0;
const addCity = (cName, cCountry, cPopulation) => {
    var showList = [];
    let city = {
        city: cName,
        country: cCountry,
        population: cPopulation
    };
    showList.push(city);
    var finalArr = localStorage.getItem('cityDirectory') != undefined ? [...showList, ...JSON.parse(localStorage.getItem('cityDirectory'))] : showList;
    localStorage.setItem("cityDirectory", JSON.stringify(finalArr));
};
exports.addCity = addCity;
const displayCties = () => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    var showList = JSON.parse(localStorage.getItem('cityDirectory') || "[]");
    showList.forEach((element) => {
        console.log(element.city);
        let li = document.createElement("li");
        li.innerText = `City of ${element.city} in ${element.country} has a ${element.population} population`;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCties = displayCties;
const search = (searchValue) => {
    if (searchValue != '') {
        let list = document.getElementById("cityList");
        if (list) {
            while (list.hasChildNodes() && list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
        var showList = JSON.parse(localStorage.getItem('cityDirectory') || "[]");
        let cityFound = false;
        let countryFound = false;
        showList.forEach((element) => {
            let li = document.createElement("li");
            if (element.city.includes(searchValue)) {
                cityFound = true;
            }
            else if (element.country.includes(searchValue)) {
                countryFound = true;
            }
            else {
                cityFound = false;
                countryFound = false;
            }
            if (cityFound || countryFound) {
                li.innerText = `City of ${element.city} in ${element.country} has a ${element.population} population`;
                console.log(element.city);
            }
            if (list && (cityFound || countryFound)) {
                list.appendChild(li);
            }
        });
    }
    else {
        (0, exports.displayCties)();
    }
};
exports.search = search;
(0, exports.displayCties)();
