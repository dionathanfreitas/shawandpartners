import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

import './UsersGrid.css'

const userURL = import.meta.env.VITE_API;


const Home = () => {

    const [anyUsers, setAnyUsers] = useState([]);

    const getAnyRatedUsers = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        console.log(data);

        setAnyUsers(data);
    }

    useEffect(() => {


        getAnyRatedUsers(userURL);


    }, []);


    return (
        <div className="container">
            <h2 className="title">Some Github Users</h2>
            <div className="users-container">
                {anyUsers.length < 1 && <p>Loading...</p>}
                {anyUsers.length > 0 && anyUsers.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    );
}

export default Home;