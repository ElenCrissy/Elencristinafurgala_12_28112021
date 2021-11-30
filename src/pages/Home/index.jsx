import styled from 'styled-components';
import Header from '../../components/Header';
import VerticalNav from "../../components/VerticalNav";
import Dashboard from "../../layout/Dashboard";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61dafb;
`

function Home () {
    return(
        <HomeWrapper>
            <Header/>
            <VerticalNav/>
            <Dashboard/>
        </HomeWrapper>

    )
}

export default Home;