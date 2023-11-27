import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const [menu, setmenu] = useState(false);
  return (
    <div>
      <nav>
      <Link className="title" to="/">SGPA Calculator</Link>
      <div className="menu" onClick={()=>{
        setmenu(!menu);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menu?"open":""}>
          <li>
            <NavLink to="/Sem1">Sem-1</NavLink>
          </li>
          <li>
            <NavLink to="/Sem2">Sem-2</NavLink>
          </li>
          <li>
            <NavLink to="/">Sem-3</NavLink>
          </li>
          <li>
            <NavLink to="/Sem4">Sem-4</NavLink>
          </li>
          <li>
            <NavLink to="/Sem5">Sem-5</NavLink>
          </li>
          <li>
            <NavLink to="/Sem6">Sem-6</NavLink>
          </li>
          <li>
            <NavLink to="/Sem7">Sem-7</NavLink>
          </li>
          <li>
            <NavLink to="/Sem8">Sem-8</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
