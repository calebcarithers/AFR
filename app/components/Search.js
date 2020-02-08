import React from 'react'

function Search(props) {

    return(
        <div className="search-box-container">
            <div className="search-box">
                <form>
                    <input type="text" name="search" placeholder="search" onChange={props.handleSearch} value={props.searchVal}/>
                </form>
            </div>
        </div>
    )
}

export default Search