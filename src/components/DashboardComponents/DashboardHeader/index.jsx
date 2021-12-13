import styled from "styled-components";
import useUserFirstName from "../../../services/users";

const DashboardHeaderContainer = styled.div`
  h1{
    font-size: 35px;
    margin-bottom: auto;
    margin-top: 30px;
  }
  span{
    color: red;
  }
  p{
    font-size: 18px;
    font-weight: lighter;
  }
`


function DashboardHeader(){
    const name = useUserFirstName()

    return (
        <DashboardHeaderContainer>
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs d'hier</p>
        </DashboardHeaderContainer>
    )
}

export default DashboardHeader