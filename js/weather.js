search=document.getElementById("searchInput");
const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });

  /* ----------------Get Default Country  First---------------*/
(function defaultCountry()
{
    (async function serverRequest()
    {
        let response=await fetch("http://api.weatherapi.com/v1/forecast.json?key= 060ae6e1ddc94c05b9524915210305&q=cairo&days=3&aqi=no&alerts=no");
        let responseData=await response.json();
         let day=responseData.forecast.forecastday;
         
         getCurrentDay(responseData,day);
         getNextDays(day,1);
         getNextDays(day,2);
        
  
       
    })();
})();
  
  /* --------------for search about  any country User will Enter----------- */
search.addEventListener("keyup",function()
{
     (async function serverRequest()
     {
         let response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key= 060ae6e1ddc94c05b9524915210305&q=${search.value}&days=3&aqi=no&alerts=no
         `);
         let responseData=await response.json();
          let day=responseData.forecast.forecastday;
          getCurrentDay(responseData,day);
          getNextDays(day,1);
          getNextDays(day,2);
        
         

        
     })();
})

/* to get  all information about Current Day  */ 
function getCurrentDay(responseData,day)
{
    /*----------- get the Data From Api-----------------*/
    let nameOfCurrentDay=dayName( new Date(day[0].date));
    let countryName=responseData.location.name;
    let currentTemperature=responseData.current.temp_c;
    let currentIcon=responseData.current.condition.icon;
    let currentText=responseData.current.condition.text;
    
    /* -------------------Put the Data From Api  in Html *--------------------*/
    document.getElementById("NameOfCurrentDay").innerHTML= nameOfCurrentDay;
    document.getElementById("countryNameOfCurrentDay").innerHTML=countryName;
    document.getElementById("currentIcon").src="https:"+currentIcon;
    document.getElementById("currentText").innerHTML=currentText;
    document.getElementById("temperatureOfCurrentDay").innerHTML=currentTemperature; 
}
 /* to get all Information about nextDay and DayThree*/
function getNextDays(date,index)
{
    let day,dayText,maxTemPerature,minTemperature,icon="https:";
    if(index==1)
    {
        day=dayName( new Date(date[index].date));
        dayText=date[index].day.condition.text;
        maxTemPerature=date[index].day.maxtemp_c;
        minTemperature=date[index].day.mintemp_c;
        icon+=date[index].day.condition.icon;
         /* -------------------Put the Data From Api  in Html *--------------------*/
       document.getElementById("NameOfNextDay").innerHTML=day;
      document.getElementById("NextText").innerHTML=dayText;
      document.getElementById("maxTemperatureOfNextDay").innerHTML=maxTemPerature;
      document.getElementById("iconOfNextDay").src=icon;
      document.getElementById("minTemperatureOfNextDay").innerHTML=minTemperature;
      

    }
    else
    {

        day=dayName( new Date(date[index].date));
        dayText=date[index].day.condition.text;
        maxTemPerature=date[index].day.maxtemp_c;
        minTemperature=date[index].day.mintemp_c;
        icon+=date[index].day.condition.icon;
         /* -------------------Put the Data From Api  in Html *--------------------*/
       document.getElementById("nameOfDayThree").innerHTML=day;
      document.getElementById("dayThreeText").innerHTML=dayText;
      document.getElementById("maxTemperatureOfDayThree").innerHTML=maxTemPerature;
      document.getElementById("iconOfDayThree").src=icon;
      document.getElementById("minTemperatureOfDayThree").innerHTML=minTemperature;
        
    }
}