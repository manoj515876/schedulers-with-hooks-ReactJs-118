import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151515;
  padding: 50px;
  min-height: 100vh;
`

export const Button = styled.button`
  color: #333333;
  background-color: #6fc7b2;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 12px 16px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
