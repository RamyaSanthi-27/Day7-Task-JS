//e. Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var data = JSON.parse(request.response);  
 const usDollarCountries = data.filter((country) => {
        return country.currencies;
    });  
console.log(`Countries using US Dollars as currency: `);

      usDollarCountries.forEach((country) => {
        console.log(country.name.common);
    });

}