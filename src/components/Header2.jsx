"use client"; 
import Dropdown from '../components/Recommand'
import Filter from '../components/Filter'
import './Header2.css';  

function Header2() {
  

    return (
        <ul className="header-list">
            <li className="dropdown">
                <button className="dropbtn">3425 Items</button>
            </li>
            
            <li className="dropdown">
                <Dropdown/>
            </li>
        </ul>
    );
}

export default Header2;



