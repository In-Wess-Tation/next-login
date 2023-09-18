"use client"
import Link from 'next/link';
import LoginStatus from './LoginStatus';
import { slide as Menu } from 'react-burger-menu'
import "./hamburger.css"


const Header = () => {

    // token && console.log(token.value)


    return ( 
        <nav>
            <h1>My app</h1>
            <LoginStatus />

            
            <Menu right>
                <Link href="/" className="menu-item">Home Page</Link>
                <Link href="/resp-css" className="menu-item">Responsive CSS</Link>
                <Link href="/resp-tail" className="menu-item">Responsive Tailwind</Link>
                <Link href="/statements" className="menu-item">Statements</Link>
            </Menu>

            
        </nav>
     );
}

 
export default Header;