const APIkey='a7b2165a7a6c404a730e7e9c0590b7df';
let localoy='';
const search=()=>{

    const cityField=document.getElementById('city-name');
    const cityName=cityField.value;
    cityField.value='';
    localoy=cityName;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>weatherResult(data));

};

// const cityPosition=data=>{
  
//     const lat=data.lat;
//     const lon=data.lon;


//     const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>weatherResult(data));
// };


const weatherResult=(data)=>{

    const icon=document.getElementById('weather-icon');
    icon.setAttribute('src',`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    const country=document.getElementById('country');
    country.innerText='Country : '+data.sys.country;
    const city=document.getElementById('cityName');
    city.innerText='City Name : '+localoy;

    const temp=document.getElementById('temp');
    temp.innerText='Temperature :'+data.main.temp+'°C';
    const atm=document.getElementById('atm');
    atm.innerText='Atmosphere :'+data.weather[0].main;
    
    const feeltemp=document.getElementById('feelslike');
    feeltemp.innerText='Feels like :'+data.main.feels_like+'°C';
    const airspeed=document.getElementById('airspeed');
    airspeed.innerText='Air Speed :'+data.wind.speed;
    const degree=document.getElementById('degree');
    degree.innerText='Wind Direction :'+data.wind.deg + ' Degree';

}