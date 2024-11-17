import {useState} from "react";
import './NavBar.css';

function NavBar(){

    const [activePage, setActivePage] = useState("Dashboard");

    const handleButtonClick = (index) => {
        setActivePage(index);
    }
    const pages = ["Dashboard", "PDF to Word", "Excel to Word"];
    return (
        <div className="navbar grid grid-flow-row auto-rows-max font-bold">
            <div className="navicon text-2xl">N</div>
            {
                pages.map((button, index) => (
                    <div key={index}
                    className={`${activePage === index ? "navbutton navbutton-active" : "navbutton"}`}
                    onClick={()=>handleButtonClick(index)}
                    >{button}</div>
                ))
            }
        </div>
    )
}

export default NavBar;