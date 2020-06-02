import React from "react";

const SearchBar = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input
            type="text"
            name="user"
            value={props.value}
            onChange={props.changeHandler} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default SearchBar;
