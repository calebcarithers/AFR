import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './app.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Search from './components/Search'

function App() {
    const [searchText, setSearchState] = useState({
        search: ""
    })

    const handleSearch = (e)=> {
        console.log(e.target.value)
        setSearchState({
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <Navbar/>
            <Search handleSearch={handleSearch} searchVal={searchText.search}/>
            <Main/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))