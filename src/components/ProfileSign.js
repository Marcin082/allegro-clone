import React from 'react';
import {Link} from "react-router-dom";
import './ProfileSign.scss'
const ProfileSign = () => {
    return (
        <div className="Sign" >
            <img className="Sign__image"src="https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167"/>
            <h2 className="Sign__head" >Witaj w allegro!</h2>
            <span className="Sign__caption">Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</span>
            <Link className="Sign__btn" to="/logowanie">                  
                <button className="Sign__btn">Zaloguj się</button>
            </Link>
            <p className="Sign__signup">
                Nie masz konta? 
                <Link to="/rejestracja" className="Sign__link">
                    Zerejestruj się
                </Link>
            </p>
        </div> 
    );
};

export default ProfileSign;