import './App.css';

import React, { useState } from 'react';

const App = () => {
  const baseUrl = 'https://kudago.com/public-api/v1.4';
  const [data, setdata] = useState([]);
 
  const GetEventsOfTheDay = async () => {
    fetch('/api/eventsOfTheDay', {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }

  const GetEvents = async () => {
    fetch('/api/events', {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }

  const GetCityList = async () => {
    fetch('/api/cityList', {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }

  const GetEventСategories = async () => {
    fetch('/api/eventCategories', {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }
  
  const GetPlaceСategories = async () => {
    fetch('/api/placeCategories', {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }


  const GetData = async () => {
    fetch(`${baseUrl}/?lang=ru&fields=place,id,dates,title,location,images,description,body_text,site_url&expand=place,dates`, {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        //setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }


  const GetDog = async () => {
    fetch(`https://dog.ceo/api/breeds/image/random`, {
    })
    .then(
      async function (res) {
        const resJson = await res.json();
        setdata(resJson);
      }
      )
    .catch(err => console.log(err))
    console.log(data);
  }

  

  return (
    <div className="App">
      <div>
      <button onClick={async () => await GetEventsOfTheDay()}>Получить события дня</button>
      <button onClick={async () => await GetEvents()}>Получить список событий</button>
      <button onClick={async () => await GetCityList()}>Получить список Городов</button>
      <button onClick={async () => await GetEventСategories()}>Получить список категорий событий</button>
      <button onClick={async () => await GetPlaceСategories()}>Получить список категорий мест</button>
      
      {/*<button onClick={async () => await GetData()}>запрос</button>*/}
      {/*<button onClick={async () => await GetDog()}>показать собачку</button>*/}
      </div>
      {/*<img src={`${data.message}`} />*/}
      {/* {data.map((item) => (<a href='#'>{item.title}</a>))} */}
      {/*<button onClick={() => (console.log(list))}>тут</button>*/}



    </div>
  );
}

export default App;
