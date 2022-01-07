import styled from "styled-components";
import useUserFirstName from "../../../services/users";
import PropTypes from "prop-types";

const DashboardHeaderContainer = styled.div`
  margin-bottom: 40px;
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


const DashboardHeader = (props) => {
    const name = useUserFirstName(props.userId)
    return (
        <DashboardHeaderContainer>
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs d'hier</p>
        </DashboardHeaderContainer>
    )
}

DashboardHeader.protoTypes = {
    userId : PropTypes.number.isRequired
}

export default DashboardHeader