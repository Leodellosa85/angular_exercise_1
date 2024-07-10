type CityDirectory = {
  city: string;
  country: string;
  population: number;
};

export const addCity = (cName: string, cCountry: string, cPopulation: number) => {
  var showList = [];
  let city: CityDirectory = {
    city: cName,
    country: cCountry,
    population: cPopulation
  };
  showList.push(city);
  var finalArr = localStorage.getItem('cityDirectory') != undefined ? [...showList, ...JSON.parse(localStorage.getItem('cityDirectory')!)] : showList;
  localStorage.setItem("cityDirectory", JSON.stringify(finalArr));
};

export const displayCties = () => {
  let list = document.getElementById("cityList");
  if (list) {
    while (list.hasChildNodes() && list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  var showList = JSON.parse(localStorage.getItem('cityDirectory') || "[]");
  showList.forEach((element: any) => {
    console.log(element.city);
    let li = document.createElement("li");
    li.innerText = `City of ${element.city} in ${element.country} has a ${element.population} population`;
    if (list) {
      list.appendChild(li);
    }
  })
};

export const search = (searchValue: string) => {
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
    showList.forEach((element: any) => {
      let li = document.createElement("li");
      if (element.city.includes(searchValue)) {
        cityFound = true;
      }
      else if (element.country.includes(searchValue)) {
        countryFound = true;
      }
      else
      {
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
    })
  }
  else{
    displayCties();
  }
};

displayCties();
