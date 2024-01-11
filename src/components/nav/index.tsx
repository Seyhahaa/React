import React from "react";
import "./style.css";

interface NavProps {}
const Nav: React.FC<NavProps> = () => {
    // const {} = props;
    return (
        <nav>
            <a href="#" className="logo" >food website</a>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Nav;