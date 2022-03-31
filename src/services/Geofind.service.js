import axios from 'axios';

const getAddress = async (address) =>
  await axios.get(`https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${address}&benchmark=2020&format=json`)
  .then(res => {
    return res.data?.result?.addressMatches;
  });


export { getAddress };