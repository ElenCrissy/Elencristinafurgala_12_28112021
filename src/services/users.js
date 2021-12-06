import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderContainer = styled.div`
  
`

const GetUserFirstName = () => {
    const [userFirstName, setUserFirstName] = useState(null)

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18`

        // if (userId == null || userId === '') {
        //     return;
        // }

        const resp = await fetch(url)
        const data = await resp.json()
        const userTest = data.data.userInfos
        setUserFirstName(userTest.firstName)
    }, [])

    return (
        <HeaderContainer>
            <h1>Bonjour {userFirstName}</h1>
            <p>Félicitations ! Vous avez explosé vos objectifs d'hier</p>
        </HeaderContainer>
    )
}

// GetUser.protoTypes = {
//     userId: PropTypes.number
// }

export default GetUserFirstName