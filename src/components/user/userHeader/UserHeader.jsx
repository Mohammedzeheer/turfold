import React from 'react'
import './userHeader.css'
import { useSelector } from 'react-redux'


function UserHeader() {

    
    const { username} = useSelector(state => state.user)

    return (
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        <img src="/image/AONE.png" alt="Symbol Image" />
                    </div>
                </div>

                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                <a><i className="fa fa-phone" aria-hidden="true"><span className="contact-link"> Contact us</span></i></a>
                    <a><i className="fa fa-user" aria-hidden="true"> <span className="contact-link"> {username}</span></i></a>
                    {/* <a href="//github.io/jo_geek" target="_blank">Github</a> */
            /* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
            <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
            <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
            <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
                </div>
            </div>
        </div>
    )
}

export default UserHeader
