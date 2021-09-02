const dataload=()=>{
    const searchText=document.getElementById('input-filed');
    const searchValue=searchText.value;
    searchText.value='';
    const api_key=`1fbb386453806ce4f5fba2fdf3003a63`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemprature(data))
}
const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemprature=temperature=>{
    setInnerText('city',temperature.name);
    setInnerText('temp',temperature.main.temp)
    setInnerText('weathersky',temperature.weather[0].main);
    const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon=document.getElementById('icon-img');
    icon.setAttribute('src',url)
    console.log(temperature)
}