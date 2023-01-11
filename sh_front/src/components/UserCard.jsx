import { Link } from 'react-router-dom';
import Home from '../pages/Home';



console.log();

const UserCard = ({user, showLink = true}) => {
    return (
    <div className="use-card">
        <img src={user.avatar_url}   alt={user.login} />
        <h2>{user.login}</h2>
        <p>

        </p>
        {showLink && <Link to={`/user/${user.id}`}>Details</Link>}

    </div>

    );
};

export default UserCard;