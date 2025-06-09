import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {
    const { userID } = useParams();

    useEffect(() => {
        document.title = `User ID: ${userID}`;
    }, [userID]);

    return (
        <>
            <h1>user with ID: {userID}</h1>
        </>
    )
}

export default UserPage