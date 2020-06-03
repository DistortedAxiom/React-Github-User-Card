import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';
import './FollowerCard.css'

const FollowerCard = (props) => {

    return (
        <div className="follower-container">
            {props.followers.map((follower, i) => (
                    <Card className="follower-card" key={i}>
                    <CardImg top width="100%" src={`${follower.avatar_url}`} />
                    <CardBody>
                        <CardTitle>{follower.login}</CardTitle>
                    </CardBody>
                    </Card>
            ))}
        </div>
    )
}

export default FollowerCard;
