import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';
import './UserCard.css';

const UserCard = (props) => {
    return (
        <div className="user-container">
            <Col lg="8">
            <Card>
                <CardImg top width="100%" src={`${props.user.avatar_url}`} />
                    <CardBody>
                        <CardTitle>{props.user.name}</CardTitle>
                        <CardSubtitle>{props.user.login}</CardSubtitle>
                        <CardText>{props.user.bio}</CardText>
                        <CardText>Followers: {props.user.followers}</CardText>
                        <CardText>Following: {props.user.following}</CardText>
                    </CardBody>
            </Card>
            </Col>
        </div>
    )
}

export default UserCard;
