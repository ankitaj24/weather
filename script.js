

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '2a6948b00cmshfa38966e810c593p102730jsn6ea01ebd9c91',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };
const getWeather = (city) => {
  // cityName.innerHTML=city;
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
  // .then(response=>response.json())
  // .then((response)=>{
  //   cloud_pct.innerHTML= response.cloud_pct;
  //   feels_like.innerHTML=response.feels_like+"&deg;"+"C";
  //   humidity.innerHTML=response.humidity;
  //   min_temp.innerHTML=response.min_temp;
  //    max_temp.innerHTML=response.max_temp;
  //   temp.innerHTML=response.temp;
  //   wind_speed.innerHTML=response.wind_speed;
  //   wind_degrees.innerHTML=response.wind_degrees;
  //   sunrise.innerHTML=response.sunrise;
  //   sunset.innerHTML=response.sunset;  
  //   console.log(response)})
  // .catch(err=>console.log(err));
}
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(city.value);
})
getWeather("Kolkata");




const timeEl = document.getElementById('act');
const dateEl = document.getElementsByClassName('ampm');
const dateE = document.getElementsByClassName('date');
const checkMonth = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const checkDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const API_KEY = 'e3e137feecab57dadf7170461e20fdf8';
//e3e137feecab57dadf7170461e20fdf8
setInterval(() => {
  const ob = new Date();
  const hour = ob.getHours();
  let min = ob.getMinutes().toString();
  //console.log("Hour: " + hour + ", Minute: " + min);
  let hour12 = (hour > 12 ? hour % 12 : hour).toString();
  const ampm = hour < 12 ? 'AM' : "PM";
  if (min.length == 1) {
    min = '0' + min;
  }
  if (hour12.length == 1) {
    hour12 = '0' + hour12;
  }

  const date = ob.getDate();
  const day = ob.getDay();
  const month = ob.getMonth();

  console.log(date + " " + day + " " + month);
  // Loop through each element and update their content
  timeEl.innerHTML = hour12 + ":" + min;
  dateEl[0].innerHTML = ampm;
  dateE[0].innerHTML = checkDay[day] + "," + date + " " + checkMonth[month];
}, 1000);

// // getWeatherData();
// // function getWeatherData(){
// //   navigator.geolocation.getCurrentPosition((success)=>{
// //     //console.log(success);

// //     let{latitude,longitude}=success.coords;//object destructuring
// //     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&
// //     lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`).then(res=>res.json()).then(data=>{
// //       console.log(data);
// //     })
// //   })
// }