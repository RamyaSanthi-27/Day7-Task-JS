//a. Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    var reg=data.filter((element)=>element.region);
    console.log(reg);
    var asia=reg.map((element1)=>element1.region);
    console.log(asia);
    
}