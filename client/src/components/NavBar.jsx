import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { BsFillTrainFreightFrontFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={"C:\\Users\\ASUS\\Desktop\\siren\\Siren\\client\\public\\siren_home.png"} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to={`/`} className="primary-button">Home</Link>

        <Link to={`/about`} className="primary-button">About</Link>
        <Link to={`/contact`} className="primary-button">Contact</Link>
        <Link to={`/trains`} className="primary-button"><BsFillTrainFreightFrontFill className="navbar-train-icon" /></Link>
        <Link to={`/users/login`}>
          <button className="primary-button">Login</button>
        </Link>
      </div>
      
    </nav>
  )
}

export default NavBar