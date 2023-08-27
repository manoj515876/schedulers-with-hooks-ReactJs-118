import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [data, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {data.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}

export default Clock
