import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getAddress } from '../../services/Geofind.service';
import { getGridpoints, getWeather } from '../../services/Weather.service';
import { WeatherCard } from './WeatherCard.tsx';
import { WeatherCardBig } from './WeatherCardBig.tsx';
import { colorSet } from './colorSet';

export const Weather = () => {
  const [address, setAddress] = useState("4600 Silver Hill Rd, Washington, DC 20233");
  const [coordinates, setCoordinates] = useState();
  const [gridpoints, setGridpoints] = useState();
  const [weatherData, setWeatherData] = useState();
  const [cardSelected, setCardSelected] = useState(-1);

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

  const handleCardClick = (e) => {
    setCardSelected(e);
  }

  const handleBigCardClick = () => {
    setCardSelected(-1);
  }

  useEffect(getCoord, [address]);
  useEffect(getPoints, [coordinates]);
  useEffect(getLocalWeather, [gridpoints]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress(`${event.target[0].value}, ${event.target[1].value}, ${event.target[2].value} ${event.target[3].value}`);
  }
  
  return (
    <>
      <FormTitle>Input Address</FormTitle>
      <WeatherContainer>
        {((cardSelected != -1) && weatherData) ? 
          <WeatherCardBig
            number={weatherData[cardSelected].number}
            name={weatherData[cardSelected].name}
            icon={weatherData[cardSelected].icon}
            detailedFC={weatherData[cardSelected].detailedForecast}
            shortFC={weatherData[cardSelected].shortForecast}
            temp={weatherData[cardSelected].temperature}
            windDir={weatherData[cardSelected].windDirection}
            windSpeed={weatherData[cardSelected].windSpeed}
            onClick={handleBigCardClick}
          /> : null}
        <FormWrapper>
          <AddressForm onSubmit={handleSubmit}>
            <AddressDiv>
              <AddressInput required placeholder="Structure and Street*" type="text"/>
            </AddressDiv>
            <AddressDiv>
              <AddressInput placeholder='City (optional)' type="text"/>
            </AddressDiv>
            <AddressDiv>
              <AddressInput placeholder='State (optional)' type="text"/>
            </AddressDiv>
            <AddressDiv>
              <AddressInput placeholder='ZIP Code (optional)' type="text"/>
            </AddressDiv>
            <AddressDiv>
              <AddressSubmit type="submit">SUBMIT</AddressSubmit>
            </AddressDiv>
          </AddressForm>
        </FormWrapper>
        <CardsWrapper>
          <CardsContainer>
            {weatherData ? weatherData.map((e, i) => {
              return (
                <WeatherCard
                  key={e.number}
                  number={e.number}
                  index={i}
                  name={e.name}
                  icon={e.icon}
                  detailedFC={e.detailedForecast}
                  shortFC={e.shortForecast}
                  temp={e.temperature}
                  windDir={e.windDirection}
                  windSpeed={e.windSpeed}
                  onClick={handleCardClick}
                />
              )
            }) : 'There isn\'t data for that address'}
          </CardsContainer>
        </CardsWrapper>
        <AddressDisplay>{address}</AddressDisplay>
      </WeatherContainer>
    </>
  )
}

const today = new Date();
const hour = today.getHours();
const colors = colorSet(hour);

const FormTitle = styled.h1`
  background-color: #EEEEEE;
  margin: 0px;
  position: absolute;
  justify-content: center;
  left: 0;
  right: 0;
  align-items: center;
  text-align: center;
`

const AddressDisplay = styled.h2`
  display: flex;
  justify-content: center;
  color: #555555;
  background-color: rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  padding: 2px 4px;
  margin: 0 auto;
`

const WeatherContainer = styled.div`
  background-image: linear-gradient(#${colors[0]}, #${colors[1]});
  font-family: Ubuntu, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  height: 100vh;
  padding-top: 24px;
`

const CardsContainer = styled.div`
  padding: 16px;
  padding-top: 48px;
  margin-top: -8px;
  align-items: center;
  justify-content: left;
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 24px;

  overflow: hidden;

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
  border-color: #E3E4D5;
  background-color: #E3E4D5;
  border-radius: 4px;
  width: 256px;
  font-size: 18px;
  padding: 4px;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`

const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  margin: 6px 0px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const AddressSubmit = styled.button`
  font-size: 16px;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.25px;
  font-weight: 600;
  margin-top: 4px;
  width: 230px;
  justify-content: center;
  height: 48px;
  border-radius: 8px;
  border-color: #E3E4D5;
  background-color: #E3E4D5;
`

export default Weather;