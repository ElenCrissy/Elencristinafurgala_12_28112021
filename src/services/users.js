import {useEffect, useState} from "react";

const GetUser = () => {
    const [user, setUser] = useState(null)
    useEffect( () => {
        const url = `/user/`
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        const { userId } = this.props.match.params

        fetch(`http://localhost:3000/user/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                console.log(data.response)
                setUser(data)
            })


        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(url);
        //         const json = await response.json();
        //         console.log(json);
        //     } catch (error) {
        //         console.log("error", error);
        //     }
        // };
        // fetchData().then(r => console.log(r));
    }, [])

    return <div>{user}</div>
}

export default GetUser