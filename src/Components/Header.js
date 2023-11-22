import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            {/*<a href={'/'}>Home</a>*/}
            {/*<a href={'/search'}>Seacrh</a>*/}
            <div className={'link'}>
                <Link to={"/"}>Home</Link>
                <Link to={"/search"}>Search</Link>
            </div>
        </header>
    )
}

export default Header