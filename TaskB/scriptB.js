//b. Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    
    var data = JSON.parse(request.response);
    var result=data.filter((ele)=>ele.population<200000);
    console.log(result);
    var popcountryname=result.map((ele1)=>ele1.population);
    console.log(popcountryname);
    
}