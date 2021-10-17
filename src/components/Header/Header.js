import React from "react";
import './Header.css'
const Header = React.memo((props) => {
    return (
        <div>
            <h1 class="name">Defino</h1>
        </div>
    )
}, )

export default Header;