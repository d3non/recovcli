import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter your Agent ID:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Agent ID" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;