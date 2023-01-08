import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <img src="../images/airbnb-logo.png" className="nav--logo" />
            <ul  className="nav--title">
                 <li>
                    <a href="/">Marketplace</a>
                </li> 

                <li>
                    <a href="/">List My NFT</a>
                </li> 

                <li>
                    <a href="/">Profile</a>
                </li> 
            </ul>
        </nav>
    )
}