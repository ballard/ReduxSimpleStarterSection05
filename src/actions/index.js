import axios from 'axios';

const API_KEY = '303d01c33e4135c4eeda511e6d2e8b74';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log(`Requset: $request`);
    console.log('Reqest: ', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}