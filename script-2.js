//------Day 07:ARRAY METHODS-------//
console.log("Day 07:ARRAY METHODS")

var container = document.getElementsByTagName("body")[0];

fetch("https://restcountries.com/v3.1/all")
  .then((a) => a.json())
  .then((x) => {
    const overAllData = x;
      //a. Get all the countries from Asia continent /region using Filter function
      let region = overAllData.filter(function (value){
        return value.region == "Asia";
      })
      console.log("a. The countries from Asia continent /region using Filter function");
      console.log(region);

      //b. Get all the countries with a population of less than 2 lakhs using Filter function
      let population = overAllData.filter(function (value){
        return value.population < 200000;
      })
      console.log("b. The countries with a population of less than 2 lakhs using Filter function");
      console.log(population);

     // c. Print the following details name, capital, flag using forEach function
      console.log("c. The Details of name, capital, flag using forEach function");
      var v={};
      overAllData.forEach((value)=>{
        v={
          name:value.name,
          capital:value.capital,
          flag:value.flag
          };
        console.log(v);
      });

      //d. Print the total population of countries using reduce function
      let Tpopulation =  overAllData.reduce(function (accumulator, Cvalue){
        return accumulator + Cvalue.population;
      },0)
      console.log("d. The total population of countries using reduce function is",Tpopulation);

    //e. Print the country which uses US Dollars as currency
    console.log("e. The country which uses US Dollars as currency");
    for(let i=0; i<overAllData.length; i++){
     let isCurrency = overAllData[i].currencies;
     if(isCurrency){
        let currencyObj = overAllData[i].currencies;
        let isUSD = currencyObj.USD !== undefined;
        if(isUSD){
            console.log(overAllData[i].name.common);
        }
     }
   }
  })
  .catch((err) => {
    console.log(err);
  });