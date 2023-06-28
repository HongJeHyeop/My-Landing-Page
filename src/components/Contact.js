import '../css/contact.css';
import profileImg from "../img/hongjehyeop.jpg";
import {forwardRef} from "react";

function Contact(prop, ref) {
    return (
        <div id="contact" ref={ref}>
            <div id="contact-wrap">
                <h2>CONTACT</h2>
                <div className="profile-img">
                    <img src={profileImg} alt=""/>
                </div>
                <div className="contact-contents">
                    <p>Phone : 010-7145-7406</p>
                    <p>Email : jhh951217@naver.com</p>
                    <p>Github : <a href="https://github.com/hongjehyeop">https://github.com/hongjehyeop</a></p>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Contact);