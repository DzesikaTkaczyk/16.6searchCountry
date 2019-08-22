var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (countryName.length <= 0) { countryName = 'Poland'; }
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    if (Array.isArray(resp)){
        countriesList.innerHTML = '';
        resp.forEach(function(item) {
        	var country = document.createElement('h1');
        	country.innerText = item.name;
        	countriesList.appendChild(country);
        	var capital = document.createElement('li');
        	capital.innerText = "Capital city: " + item.capital;
        	countriesList.appendChild(capital);
        	var population = document.createElement('li');
        	population.innerText = "Population: " + item.population;
        	countriesList.appendChild(population);
        	var flag = document.createElement('img');
        	flag.src = item.flag;
        	countriesList.appendChild(flag);
    	});
    } else {
        countriesList.innerHTML = 'server side error or country not found';
    }
}


