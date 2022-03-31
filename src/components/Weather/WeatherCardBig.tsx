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
  onClick: any;
}

const WeatherCardBig: React.FC<WeatherProps> = (props) => {
    const celsiusTemp = Math.round(((props.temp-32)*5)/9);
    return (
      <CardBG onClick={() => props.onClick()}>
        <Wrapper>
          <CardContainer>
            <TitleDiv>{`Forecast: ${props.name}`}</TitleDiv>
            <MainDescription>
              <IconTemp>
                <IconImg src={props.icon}/>
                <TempDiv>
                  <h2>{`${props.temp}°F`}</h2>
                  <h2>/</h2>
                  <h2>{`${celsiusTemp}°C`}</h2>
                </TempDiv>
              </IconTemp>
              <DescriptionDivWrapper>
                <DescriptionDiv>{props.shortFC}</DescriptionDiv>
              </DescriptionDivWrapper>
            </MainDescription>
            <LargeDescriptionDiv>{`${props.detailedFC}`}</LargeDescriptionDiv>
            <WindDiv>{`Wind Speed: ${props.windSpeed}, ${props.windDir}`}</WindDiv>
          </CardContainer>
        </Wrapper>
      </CardBG>
    )
}

const CardBG = styled.div`
  position: absolute;
  background-color: rgba(35, 35, 35, 0.4);
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainDescription = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
  background-image: linear-gradient(to right, #000000, #EEEEEE);
  border-radius: 2px;
  gap: 32px;
`

const IconTemp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const CardContainer = styled.div`
  border: 2px solid #000000;
  border-radius: 8px;
  border-color: #000000;
  background-color: #EEEEEE;
  width: 596px;
  height: 732px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const TitleDiv = styled.h1`
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

const DescriptionDivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 32px;
`

const DescriptionDiv = styled.h2`
  margin-left: 16px;
  align-self: center;
  align-content: flex-end;
`

const LargeDescriptionDiv = styled.h2`
  align-self: left;
  text-align: left;
  border: 2px solid #000000;
  border-radius: 4px;
  min-height: 420px;
  margin: 16px;
`

const TempDiv = styled.div`
  text-align: center;
  margin-left: 8px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  color: #E9EEEF;
`

const WindDiv = styled.h1`
  margin-left: 16px;
  align-content: flex-end;
`

export { WeatherCardBig };