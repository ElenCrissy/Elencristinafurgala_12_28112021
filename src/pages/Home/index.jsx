import styled from 'styled-components';
import VerticalNav from "../../components/VerticalNav";
import Dashboard from "../../layout/Dashboard";
import HorizontalNav from "../../components/HorizontalNav";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
`

const getUserId = () => {
    return 18
}

const Home = () => {
    return(
        <HomeWrapper>
            <HorizontalNav/>
            <Wrapper>
                <VerticalNav/>
                <Dashboard userId={getUserId()}/>
            </Wrapper>
        </HomeWrapper>

    )
}

export default Home;