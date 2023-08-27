import styled from 'styled-components'

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  border-radius: 12px;
  width: 100%;
  padding: 45px 40px;
  max-width: 650px;
  @media screen and (min-width: 768px) {
    font-size: 60px;
    padding: 50px;
  }
`

export const Heading = styled.h1`
  color: #fccc54;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 46px;
  }
`

export const ClockImage = styled.img`
  width: 100%;
  margin-top: 10px;
  max-width: 400px;
`

export const Time = styled.p`
  color: #333333;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  background-color: #fccc54;
  border-radius: 6px;
  padding: 12px 24px;
  margin: 0px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
