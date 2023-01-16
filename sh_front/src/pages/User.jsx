import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './UsersGrid.css'
import { useSearchParams } from "react-router-dom";


const userURL = import.meta.env.VITE_API_DETAIL;


const User = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("username");

    const [user, setAnyUsers] = useState([]);

    const getAnyRatedUsers = async (url) => {

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        setAnyUsers(data);
    }

    useEffect(() => {


        getAnyRatedUsers(userURL + query);


    }, []);


    return (
        <div className="container">
            <h2 className="title">{user.login}'s details:</h2>
            <div className="users-container">
                {user.length < 1 && <p>Loading...</p>}
                <div className="use-card">
                    <img src={user.avatar_url} alt={user.login} />
                    <h2> Login: {user.login}</h2>
                    <p>

                    </p>

                </div>
                <div className="use-card-descriptions">
                    <h2> Descriptions:</h2>
                    <ul className="list-group container">
                        <li className="list-group-item">Link GitHub: <span>{user.html_url}</span></li>
                        <li className="list-group-item text-justify">User Orgs: <span> {user.organizations_url}</span></li>
                        <li className="list-group-item">Followers: {user.followers}</li>
                        <li className="list-group-item">Following: {user.following}</li>
                        <li className="list-group-item">Public Repos: {user.public_repos}</li>
                        <Link to={`/repos?username=${user.login}`}>Repos</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default User;