import {useEffect, useState} from "react";

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

    return userFirstName
}

export default GetUserFirstName