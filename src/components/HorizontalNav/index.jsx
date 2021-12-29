import styled from "styled-components";
import logo from "../../assets/logo.png";


const HorizontalNavContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 70px;
  margin: 10px 0 10px 20px;`

const HorizontalNavWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  
`

const NavElement = styled.div`
  color: white;
`

function HorizontalNav() {
    return(
        <HorizontalNavContainer>
            <Logo src={logo} alt="" className="logo"/>
            <HorizontalNavWrapper>
                <NavElement>Accueil</NavElement>
                <NavElement>Profil</NavElement>
                <NavElement>Réglages</NavElement>
                <NavElement>Communauté</NavElement>
            </HorizontalNavWrapper>
        </HorizontalNavContainer>
    )
}

export default HorizontalNav;