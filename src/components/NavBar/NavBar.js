import React, { useState } from "react";
import { NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuItemLink, IconLogoMovile, IconLogo } from "./NavBar.elements";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {

    const [click, setClick] = useState(false);


    const changeClick = () => {
        setClick(!click);
    }


    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <Link to={`/`} className="link">
                            TOP-GYM
                        </Link>
                    </IconLogo>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <FaTimes /> : <FaBars />}
                    </IconLogoMovile>
                    <Menu click={click}>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg>
                                <a href="#home" className={"link"}>HOME</a>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <a href="#programs" className={"link"}>PROGRAMS</a>
                            </MenuItemLink>
                        </MenuItem>
                        {/* <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>
                                <a href="#home" className={"link"}>TEAM</a>
                            </MenuItemLink>
                        </MenuItem> */}
                        <MenuItem onClick={() => changeClick()}>

                            <MenuItemLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                                </svg>
                                {/* <NavLink to="/signin" className={"link"}>CONTACT</NavLink> */}
                                <a href="#contact" className={"link"}>CONTACT</a>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;