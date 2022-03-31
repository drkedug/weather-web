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
  index: number;
}

const WeatherCard: React.FC<WeatherProps> = (props) => {
    const celsiusTemp = Math.round(((props.temp-32)*5)/9);
    return (
      <CardContainer onClick={() => props.onClick(props.index)}>
        <TitleDiv>{props.name}</TitleDiv>
        <IconImg src={props.icon}/>
        <DescriptionDiv>{props.shortFC}</DescriptionDiv>
        <TempGroup>
        <TempDiv>{`${props.temp}°F`}</TempDiv>
        <TempDivider/>
        <TempDiv>{`${celsiusTemp}°C`}</TempDiv>
        </TempGroup>
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
      transform: translate(0px, -10%)
    }

    100% {
        transform: translate(0px, -10%)
    }
  }

  :hover {
    animation-name: animate;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  border-radius: 4px;
  border-color: #000000;
  background-color: rgba(238, 238, 238, 0.8);
  box-shadow: 5px 1px 5px #B0B0B0;
  width: 120px;
  min-width: 120px;
  height: 312px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const TitleDiv = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  font-weight: 600;
`

const IconImg = styled.img`
  border-radius: 8px;
  width: 100px;
  align-self: center;
`

const DescriptionDiv = styled.div`
  margin-top: 12px;
  align-self: center;
  text-align: center;
  font-size: 14px;
  min-height: 48px;
`

const TempDiv = styled.h2`
  text-align: center;
  min-height: 0px;
  margin-bottom: -12px;
`

const TempDivider = styled.div`
  margin-top: 18px;
  margin-bottom: -12px;
  margin-right: 40px;
  margin-left: 40px;
  border: 1px solid #C0C0C0;
`

const TempGroup = styled.div`
  margin-top: -4px;
`

const WindDiv = styled.div`
  margin-top: 22px;
  align-self: center;
  text-align: center;
  font-size: 12px;
`

export { WeatherCard };