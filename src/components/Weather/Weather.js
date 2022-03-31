import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getAddress } from '../../services/Geofind.service';
import { getGridpoints, getWeather } from '../../services/Weather.service';
import { WeatherCard } from './WeatherCard.tsx';
import { colorSet } from './colorSet';

export const Weather = () => {
  const [address, setAddress] = useState("4600 Silver Hill Rd, Washington, DC 20233");
  const [coordinates, setCoordinates] = useState();
  const [gridpoints, setGridpoints] = useState();
  const [weatherData, setWeatherData] = useState();

  const getCoord = () => {
    if(address) {
      getAddress(address).then((results) => {
        if(results[0]) {
          setCoordinates(results[0].coordinates);
        } else {
          setWeatherData(null);
        }
      })
    }
  }

  const getPoints = () => {
    if(coordinates){
      getGridpoints(coordinates.x, coordinates.y).then(results => {
        if(results) {
          setGridpoints(results.data.properties);
        } else {
          setWeatherData(null);
        }
      });
    }
  }

  const getLocalWeather = () => {
    if(gridpoints){
      getWeather(gridpoints.cwa, gridpoints.gridX, gridpoints.gridY).then(results => {
        if(results){
          setWeatherData(results.data.properties.periods);
        } else {
          setWeatherData(null);
        }
      });
    }
  }

  useEffect(getCoord, [address]);
  useEffect(getPoints, [coordinates]);
  useEffect(getLocalWeather, [gridpoints]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress(`${event.target[0].value}, ${event.target[1].value}, ${event.target[2].value} ${event.target[3].value}`);
  }
  
  return (
    <WeatherContainer>
      <AddressForm onSubmit={handleSubmit}>
        <AddressDiv>
          <AddressLabel>Structure and Street:</AddressLabel>
          <AddressInput type="text"/>
        </AddressDiv>
        <AddressDiv>
          <AddressLabel>City:</AddressLabel>
          <AddressInput type="text"/>
        </AddressDiv>
        <AddressDiv>
          <AddressLabel>State:</AddressLabel>
          <AddressInput type="text"/>
        </AddressDiv>
        <AddressDiv>
          <AddressLabel>ZIP Code:</AddressLabel>
          <AddressInput type="text"/>
        </AddressDiv>
        <AddressDiv>
          <AddressSubmit type="submit">Submit</AddressSubmit>
        </AddressDiv>
      </AddressForm>
      <AddressDisplay>{address}</AddressDisplay>
      <CardsWrapper>
        <CardsContainer>
          {weatherData ? weatherData.map(e => {
            return (
              <WeatherCard
                key={e.number}
                name={e.name}
                icon={e.icon}
                detailedFC={e.detailedForecast}
                shortFC={e.shortForecast}
                temp={e.temperature}
                windDir={e.windDirection}
                windSpeed={e.windSpeed}
              />)
          }) : 'There isn\'t data for that address'}
        </CardsContainer>
      </CardsWrapper>
    </WeatherContainer>
  )
}

const today = new Date();
const hour = today.getHours();
const colors = colorSet(hour);

const AddressDisplay = styled.h2`
  display: flex;
  justify-content: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  color: #E9EEEF;
`

const WeatherContainer = styled.div`
  background-image: linear-gradient(#${colors[0]}, #${colors[1]});
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100vh;
`

const CardsContainer = styled.div`
  border: 2px solid #000000;
  padding: 4px;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 24px;


  :hover {
    overflow: auto;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 12px;
`

const AddressInput = styled.input`
  border-color: #7F7F7F;
  background-color: #E3E4D5;
  border-radius: 16px;
  padding: 4px;
`

const AddressLabel = styled.label`
  padding-bottom: 8px;
  width: 256px;
  font-weight: 900;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  color: #E9EEEF;
`

const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 8px 0px;
  align-items: center;
  justify-content: center;
`

const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  margin: 6px 0px;
  text-align: center;
`

const AddressSubmit = styled.button`
  font-size: 16px;
  font-family: Tahoma, sans-serif;
  margin-top: 4px;
  width: 256px;
  height: 48px;
  border-radius: 8px;
  border-color: #7F7F7F;
  background-color: #E3E4D5;
`

export default Weather;