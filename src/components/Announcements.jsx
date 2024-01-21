import styled from "styled-components"


const Container = styled.div `
  height: 30px;
  background-color:red;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  
`



const Announcement = () => {
  return (
    <Container>
      EVERYTHING 30% OFF UNTIL 12/21/2024 With Free Shipping!!
    </Container>
  )
}

export default Announcement