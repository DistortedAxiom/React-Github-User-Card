import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <h2>{props.user.login}</h2>
            <h3>{props.user.bio}</h3>
            <h3>Followers: {props.user.followers}</h3>
            <h3>Following: {props.user.following}</h3>
        </div>
    )
}

export default UserCard;
