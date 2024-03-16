const express = require('express');
const http = require('http');
const axios = require('axios');

const app = express();


const baseUrl = 'https://kudago.com/public-api/v1.4';
const reqAPI = {
    eventСategories: 'event-categories',
    placeCategories: 'place-categories',
    cityList: 'locations',
    events: 'events',
    eventsOfTheDay: 'events-of-the-day',
}

app.set('port', (process.env.PORT || 3001));

app.get('/api/eventsOfTheDay', async (req, res) => {
    console.log('запрашиваем события дня');
	const result = await fetch(`${baseUrl}/${reqAPI.events}/?lang=&fields=&expand=&text_format=&location=&date=`)
						.catch(err => console.log(err));
    list = await result.json()
	res.send(list);
    console.log(list);
});

app.get('/api/events', async (req, res) => {
    console.log('запрашиваем события');
	const result = await fetch(`${baseUrl}/${reqAPI.eventsOfTheDay}/?lang=&fields=&expand=&text_format=&location=&date=`)
						.catch(err => console.log(err));
    list = await result.json()
	res.send(list);
    console.log(list);
});

app.get('/api/cityList', async (req, res) => {
    console.log('запрашиваем список городов');
	const result = await fetch(`${baseUrl}/${reqAPI.cityList}/?lang=&fields=&order_by=`)
						.catch(err => console.log(err));
    list = await result.json()
	res.send(list);
    console.log(list);
});

app.get('/api/eventCategories', async (req, res) => {
    console.log('запрашиваем категории событий');
	const result = await fetch(`${baseUrl}/${reqAPI.eventСategories}/?lang=&order_by=&fields=`)
						.catch(err => console.log(err));
    list = await result.json()
	res.send(list);
    console.log(list);
});

app.get('/api/placeCategories', async (req, res) => {
    console.log('запрашиваем категории мест');
	const result = await fetch(`${baseUrl}/${reqAPI.placeCategories}/?lang=&order_by=&fields=`)
						.catch(err => console.log(err));
    list = await result.json()
	res.send(list);
    console.log(list);
});

app.get("/test", function(_, response){
     
    response.send("<h1>rabotai blet</h1>");
});


app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
  });
