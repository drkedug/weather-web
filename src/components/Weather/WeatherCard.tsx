import React from 'react';
import styled from '@emotion/styled';

type WeatherProps = {
  key: number;
  name: string;
  icon: string;
  detailedFC: string;
  shortFC: string;
  temp: number;
  windDir: string;
  windSpeed: string;
}

const WeatherCard: React.FC<WeatherProps> = (props) => {
    const celsiusTemp = Math.round(((props.temp-32)*5)/9);
    return (
      <CardContainer>
        <TitleDiv>{props.name}</TitleDiv>
        <IconImg src={props.icon}/>
        <DescriptionDiv>{props.shortFC}</DescriptionDiv>
        <TempDiv>{`${props.temp}°F / ${celsiusTemp}°C`}</TempDiv>
        <WindDiv>{`${props.windSpeed}, ${props.windDir}`}</WindDiv>
      </CardContainer>
    )
}

const CardContainer = styled.div`
  @keyframes animate {
    0% {
      transform: translate(0px, 0px)
    }

    30% {
        transform: translate(0px, -15%)
    }

    33% {
        transform: translate(0px, -15%)
    }
    
    90% {
      transform: translate(0px, -12%)
    }

    100% {
        transform: translate(0px, -12%)
    }
  }

  :hover {
    animation-name: animate;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  border: 2px solid #000000;
  border-radius: 8px;
  border-color: #000000;
  background-color: #EEEEEE;
  min-width: 124px;
  height: 316px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const TitleDiv = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
`

const IconImg = styled.img`
  border: 2px solid #000000;
  border-radius: 8px;
  width: 80%;
  align-self: center;
`

const DescriptionDiv = styled.div`
  margin-top: 4px;
  align-self: center;
  text-align: center;
  font-size: 14px;
  min-height: 48px;
`
const LargeDescriptionDiv = styled.div`
  align-self: center;
  text-align: center;
  font-size: 9px;
  min-height: 112px;
`

const TempDiv = styled.h2`
  text-align: center;
`

const WindDiv = styled.div`
  margin-top: 8px;
  align-self: center;
  text-align: center;
  font-size: 12px;
`

export { WeatherCard };