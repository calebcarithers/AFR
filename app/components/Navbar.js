import React from 'react'
import NavIcon from './NavIcon'
import NavLogo from './Logo'

import logo from '../images/AFRLogo.svg';
import libIcon from '../images/Library.svg'
import indexIcon from '../images/Index.svg'

function Navbar() {
    return(
        <div className="nav-container">
            <NavLogo logo={logo} />

            <NavIcon icon={libIcon} top={'195px'}/>
            <NavIcon icon={indexIcon} top={'275px'}/>
            <div className="lib-index-container">
                <div className="library-contatiner">

                </div>
                <div className="index-contatiner">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar