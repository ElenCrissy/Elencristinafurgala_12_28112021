import styled from 'styled-components';
import yoga from "../../assets/yoga.png";
import swim from "../../assets/swimming.png";
import bike from "../../assets/bike.png";
import strength from "../../assets/strength.png";

const VerticalNavContainer = styled.div`
  height: 780px;
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
`

const VerticalNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VerticalNav = () => {
    const sports = [yoga, swim, bike, strength]
    const sportsDOMElements = (sports.map((sport, index) => (
        <IconWrapper key={index}>
            <Icon src={sport}/>
        </IconWrapper>
    )))

     return (
         <VerticalNavContainer>
          <VerticalNavWrapper>
              {sportsDOMElements}
          </VerticalNavWrapper>
         </VerticalNavContainer>
     )
}

export default VerticalNav;