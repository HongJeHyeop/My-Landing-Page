import '../css/header.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";

function Header(props) {
    const [menuToggle, setMenuToggle] = useState(false);
    const [fixed, setFixed] = useState(false);
    const fiexdRef = useRef(null);
    const move_header_top = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    const scroll_fixed_top = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 100) {
            setFixed(true);
        }else {
            setFixed(false);
        }
    }
    const menubar_toggle = () => {
        setMenuToggle(!menuToggle);
    }
    const move_introRef = () => {
        setMenuToggle(!menuToggle);
        props.move_introRef();
    }
    const move_skillRef = () => {
        setMenuToggle(!menuToggle);
        props.move_skillRef();
    }
    const move_projectRef = () => {
        setMenuToggle(!menuToggle);
        props.moveProjectRef();
    }
    useEffect(() => {
        const scrollListener = () => {
            window.addEventListener('scroll', scroll_fixed_top);
        };
        scrollListener();
        return () => {
            window.removeEventListener('scroll', scroll_fixed_top);
        };
    });
    return (
        <div id="header">
            <div id="header-wrap" className={fixed ? "header-fixed" : ""} ref={fiexdRef}>
                    <div id="logo">
                        <h2 onClick={move_header_top}>DEV_HONG</h2>
                    </div>
                    <div className="header-menus-toggle">
                        <FontAwesomeIcon icon={faBars} onClick={menubar_toggle}/>
                    </div>
                    <div className={"header-menus " + (menuToggle ? "toggle-active" : "")} >
                        <ul>
                            <li onClick={move_introRef}>소개</li>
                            <li onClick={move_skillRef}>스킬</li>
                            <li onClick={move_projectRef}>프로젝트</li>
                            <li>컨택</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Header;