import { useState } from 'react';
import './TwitterFollowCard.css';

function TwitterFollowCard({ name, userName, formatUserName}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'is-following' : 'follow-button';
    
    return (
        <article className="twitter-follow-card">
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="Avatar" className="avatar" />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <strong>
                        <span className='seguir'>{text}</span>
                        <span className='dejarDeSeguir'>Dejar de Seguir</span>
                    </strong>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;
