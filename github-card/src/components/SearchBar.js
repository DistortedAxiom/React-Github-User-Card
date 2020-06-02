import React from "react";
import {Input, Button} from 'reactstrap';
import './SearchBar.css'

const SearchBar = (props) => {

    return (
        <form className="search-form" onSubmit={props.handleSubmit}>
            <Input
            type="text"
            name="user"
            value={props.value}
            onChange={props.changeHandler} />
            <Button className="search-button" type="submit">Submit</Button>
        </form>
    )

}

export default SearchBar;
