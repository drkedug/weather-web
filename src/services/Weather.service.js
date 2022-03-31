import axios from 'axios';

const getGridpoints = async (long, lat) =>
  await axios.get(`https://api.weather.gov/points/${lat},${long}`)
  .then(res => {
    return res;
  });

const getWeather = async (office, gridX, gridY) =>
  await axios.get(`https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`)
  .then(res => {
    return res;
  })

export { getGridpoints, getWeather };