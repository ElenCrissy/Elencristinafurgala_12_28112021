import styled from 'styled-components';
import Header from '../../components/Header';
import VerticalNav from "../../components/VerticalNav";
import Dashboard from "../../layout/Dashboard";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
`

const Home = () => {
    return(
        <HomeWrapper>
            <Header/>
            <Wrapper>
                <VerticalNav/>
                <Dashboard/>
            </Wrapper>
        </HomeWrapper>

    )
}

export default Home;