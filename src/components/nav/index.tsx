import React from "react";
import "./style.css";

interface NavProps {}
const menu = [
    {
        link: "#about",
        label: "About"
    },
    {
        link: "#menu",
        label: "Menu"
    },
    {
        link: "#contact",
        label: "Contact"
    },
];
const Nav: React.FC<NavProps> = () => {
    // const {} = props;
    return (
        <nav>
            <a href="#" className="logo" >food website</a>
            <ul>
                {
                    menu.map((item,index) => (
                        <li key={index}><a href={item.link}>{item.label}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Nav;