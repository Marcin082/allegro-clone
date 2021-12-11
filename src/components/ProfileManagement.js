import React, { useContext, useState } from 'react';
import { auth } from '../config/firebase';
import { GlobalContext } from '../context/GlobalState';
import './ProfileManagement.scss'
const ProfileManagement = () => {
    const [section, setSection] = useState('Zakupy')

    const {user} = useContext(GlobalContext)

    const style={
        color: 'rgb(255, 90, 0)',
        borderBottom: '2px rgb(255, 90, 0) solid',
        
    }
    return (
        <div className="profile">
            <div className="profile__nav">
                <button onClick={()=>setSection('Zakupy')} style={(section==='Zakupy') ? style: {} } className="profile__nav--btn">ZAKUPY</button>
                <button onClick={()=>setSection('Sprzedaż')} style={(section==='Sprzedaż')? style:{}} className="profile__nav--btn">SPRZEDAŻ</button>
                <button onClick={()=>setSection('Konto')} style={(section==='Konto')? style:{}} className="profile__nav--btn">KONTO</button>
            </div>
        
            { section==='Zakupy' && <div className="profile__page">
                <div className="profile__section">
                    <h5 className="profile__section--head">Zakupy na Allegro</h5>
                    <li className="profile__section--option">Moje Zakupy</li>
                    <li className="profile__section--option">Licytuję</li>
                    <li className="profile__section--option">Obserwowane</li>
                    <li className="profile__section--option">Oceń produkty</li>
                    <li className="profile__section--option">Oceń sprzedawcę</li>
                </div>
                <div className="profile__section">
                    <h5 className="profile__section--head">Zakupy na Allegro Lokalnie</h5>
                    <li className="profile__section--option">Moje Zakupy</li>
                    <li className="profile__section--option">Licytuję</li>
                    <li className="profile__section--option">Zarezerwowane dla mnie</li>
                </div>
                <div className="profile__section">
                    <h5 className="profile__section--head">Programy zniżkowe</h5>
                    <li className="profile__section--option">Allegro Smart!</li>
                    <li className="profile__section--option">Centrum kuponów</li>
                    <li className="profile__section--option">Twoje monety i kupony</li>
                </div>
            </div>}

           { section==='Sprzedaż' && <div className="profile__page">
                <div className="profile__section">
                    <h5 className="profile__section--head">Sprzedaż na Allegro Lokalnie</h5>
                    <li className="profile__section--option">Wystaw przedmiot</li>
                    <li className="profile__section--option">Wystawione</li>
                    <li className="profile__section--option">Moje zamówienia</li>
                    <li className="profile__section--option">Zakończone</li> 
                </div>
                <div className="profile__section">
                    <h5 className="profile__section--head">Sprzedaż na Allegro</h5>
                    <li className="profile__section--option">Moja sprzedaż</li>
                    <li className="profile__section--option">Zamówienia od kupujących</li>
                </div>
            </div>}

            {section==='Konto' && <div className="profile__page">
                <div className="profile__section">
                    <div className="profile__data">
                        <div className="profile__data--mailContainer">
                            <h3 className="profile__data--hello">Cześć!</h3>
                            <span className="profile__data--mail">Client:{user.$.app.options_.messagingSenderId}</span>  
                            <span className="profile__data--mail">{user.email}</span>  
                        </div>
                        
                        <img className="profile__data--img" src="https://a.allegroimg.com/original~ovwcolormcoloryellow400/1dd8dc/1de226e34391a52ce583037832f2"/>
                        
                    </div>
                    
                    <div className="profile__myAccount">
                        <p className="profile__myAccount--para">MOJE KONTO</p>
                    </div>  
                </div>
                <div className="profile__section">
                    <h5 className="profile__section--head">Rachunki</h5>
                    <li className="profile__section--option">Rozliczenia z Allegro</li>
                </div>
                <div className="profile__section">
                    <h5 className="profile__section--head">Centrum pomocy</h5>
                    <li className="profile__section--option">Pomoc</li>
                    <li className="profile__section--option">Zapytaj społeczność</li>
                    <li className="profile__section--option">Skorzystaj ze szkoleń</li>
                </div>
                <div className="profile__logout">
                    <button onClick={()=> auth.signOut()} className="profile__myAccount--para profile__logout--btn">WYLOGUJ SIĘ</button>
                </div>
            </div>}

        </div>
    );
};

export default ProfileManagement;