import styled from 'styled-components';

const HomeWrapper = style.div`
    width : 1024px;
    
`


function Home () {
    return(
        <HomeWrapper>
            <HorizontalNav/>
            <VerticalNav/>
            <Dashboard/>
        </HomeWrapper>

    )
}