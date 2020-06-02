import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';
import './FollowerCard.css'

const FollowerCard = (props) => {

    return (
        <div className="follower-container">
            {props.followers.map((follower) => (
                <Col sm="4">
                    <Card>
                    <CardImg top width="100%" src={`${follower.avatar_url}`} />
                    <CardBody>
                        <CardTitle>{follower.login}</CardTitle>
                    </CardBody>
                    </Card>
                </Col>
            ))}
        </div>
    )
}

export default FollowerCard;
