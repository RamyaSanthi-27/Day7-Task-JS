//d. Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
  var data = JSON.parse(request.response);  
  const totalPopulation = data.reduce((acc, country) => {    
    return acc + (country.population); 
  }, 0);

  console.log(`Total Population: ${totalPopulation}`);
}