import styled from "styled-components";
import logo from "../../assets/logo.png";


const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 70%;
  margin-left: 20px;
`

const NavContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  
`

const NavElement = styled.div`
  color: white;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo src={logo} alt="" className="logo"/>
            <NavContainer>
                <NavElement>Accueil</NavElement>
                <NavElement>Profil</NavElement>
                <NavElement>Réglages</NavElement>
                <NavElement>Communauté</NavElement>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header;