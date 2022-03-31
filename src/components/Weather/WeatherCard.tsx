import React from 'react';
import styled from '@emotion/styled';

type WeatherProps = {
  key: number;
  number: number;
  name: string;
  icon: string;
  detailedFC: string;
  shortFC: string;
  temp: number;
  windDir: string;
  windSpeed: string;
  onClick: any;
}

const WeatherCard: React.FC<WeatherProps> = (props) => {
    const celsiusTemp = Math.round(((props.temp-32)*5)/9);
    return (
      <CardContainer onClick={() => props.onClick(props.number)}>
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
  border-radius: 4px;
  border-color: #000000;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 3px 6px 2px black;
  width: 120px;
  height: 312px;
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
  width: 100px;
  align-self: center;
`

const DescriptionDiv = styled.div`
  margin-top: 4px;
  align-self: center;
  text-align: center;
  font-size: 14px;
  min-height: 48px;
`

const TempDiv = styled.h2`
  text-align: center;
  min-height: 76px;
`

const WindDiv = styled.div`
  margin-top: 8px;
  align-self: center;
  text-align: center;
  font-size: 12px;
`

export { WeatherCard };