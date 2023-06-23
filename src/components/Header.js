import '../css/header.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";

function Header(props) {
    const [menuToggle, setMenuToggle] = useState(false);

    const move_header_top = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
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
    return (
        <div id="header">
            <div id="header-wrap">
                <div id="header-top">
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
                            <li>프로젝트</li>
                            <li>컨택</li>
                        </ul>
                    </div>
                </div>
                <div id="header-main">
                    <h1>BackEnd Developer Hong Je Hyeop</h1>
                    <div>
                        <span>한걸음씩 꾸준히 성장하는 성실한 개발자가 되겠습니다 :D</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;