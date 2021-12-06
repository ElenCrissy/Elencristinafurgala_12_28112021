import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const GetUser = () => {
    const [user, setUser] = useState('yo')

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18`

        // if (userId == null || userId === '') {
        //     return;
        // }

        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(user)
        //         setUser('hello')
        //         console.log(data)
        //         console.log(data.response)
        //     })

        const resp = await fetch(url)
        const data = await resp.json()
        const userTest = data.data
        console.log(userTest.id)
        console.log(user)

    }, [])

    return <div>{user}</div>
}

// GetUser.protoTypes = {
//     userId: PropTypes.number
// }

export default GetUser