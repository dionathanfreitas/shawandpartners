import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './UsersGrid.css'
import { useSearchParams } from "react-router-dom";

const userURL = import.meta.env.VITE_API_REPOS;

const Repos = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("username");

    const [users, setAnyUsers] = useState([]);

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
            <h2 className="title">{users['0']?.owner.login}'s repos:</h2>
            <div className="users-container">
                {users.length < 1 && <p>Loading...</p>}
                <div className="use-card">
                    <img src={users['0']?.owner.avatar_url} alt={users['0']?.owner.login} />
                    <h2> Login: {users['0']?.owner.login}</h2>
                    <p>

                    </p>

                </div>
                <div className="use-card-descriptions">
                    <h2> Repos:</h2>
                    <ul className="list-group container">
                        {users.map((user) =>
                            
                                <a href={user?.url}>{user?.name}</a>
                            
                        )}
                        <Link to={`/details?username=${users['0']?.owner.login}`}>Details</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Repos;