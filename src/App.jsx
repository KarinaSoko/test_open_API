import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import { createElement } from 'react';
import React, { useState } from 'react';

const App = () => {

  const [data, setdata] = useState([]);
  let list = {
   data: [{title :'lol'}],
  }
  const GetData = async () => {
    let res = await fetch('https:gorest.co.in/public/v1/posts')
    list = await res.json()
    console.log(list);
    setdata(list.data)
  }

  return (
    <div className="App">

      <button onClick={async () => await GetData()}>Показать</button>
      {/* {data.map((item) => (<a href='#'>{item.title}</a>))} */}
      <button onClick={ () => (console.log(list))}>тут</button>
      {list.data.map((item) => (<a href='#'>{item.title}</a>))}


    </div>
  );
}

export default App;
