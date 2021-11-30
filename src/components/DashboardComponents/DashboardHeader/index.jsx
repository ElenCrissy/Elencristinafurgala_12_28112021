import styled from "styled-components";
import Data from "../../../services/api"

const Title = styled.h1`
  font-size: 48px;
`

function DashboardHeader(){
    const firstNames = []
    Data.forEach(el => {
        const userFirstName = el.userInfos.firstName
        firstNames.push(userFirstName)
    })
    console.log(firstNames)

    return (
        <div>
            {firstNames.map((firstName, index) => (
            <Title key={index}>Bonjour {firstName}</Title>
            ))
        }
        </div>
    )
}

export default DashboardHeader