import React from 'react';

const FollowerCard = (props) => {

    return (
        <div>
            {props.followers.map((follower) => (
                <div>
                    <h3>{follower.login}</h3>
                </div>
            ))}
        </div>
    )
}

export default FollowerCard;
