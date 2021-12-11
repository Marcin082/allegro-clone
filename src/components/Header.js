import React, { useContext, useState } from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ProfileSign from './ProfileSign';
import ProfileManagement from './ProfileManagement';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
const Header = ({categories}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [category, setCategory] = useState("")

    const {user} = useContext(GlobalContext)
    const handleChange = (e) =>{
        setCategory(e.target.value)
        
    }
    return (
        <>
        <header className="header">
            <Link to="/">
                <img className="header__logo" src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__input header__input--searchText" placeholder="czego szukasz?"/>
                <div className="header__categories">
                    <select className="header__category" value={category} onChange={handleChange}>
                    <option className="header__categoryList header__categoryList--option header__categoryList--optionfirst">Wszystkie kategorie</option>
                    <option disabled className="header__categoryList header__categoryList--head">Kategorie</option>
                        {categories.map((category) => {
                            return <option value={category} key={Math.random()} className="header__categoryList header__categoryList--option">{category}</option>
                        })
                }
                </select>
                </div>
                <input type="submit" className="header__input header__input--submit" value="SZUKAJ"/>
            </div>
                
                
            <div className="header__navigation">

                <div className="header__option">
                    <StarBorderIcon className="header__option--icons"/>
                </div>

                <div className="header__option">
                    <img src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg" className="header__option--icons"/>
                </div>

                <div className="header__option">
                    <img src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg" className="header__option--icons"/>
                </div>

                <div className="header__option">
                    <img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" className="header__option--icons"/>
                </div>

                <div className="header__option" >
                    <img src="https://assets.allegrostatic.com/metrum/icon/user-0135502fa4.svg" onClick={()=>setShowLogin(!showLogin)} className="header__option--icons" />
                    {showLogin && user && <ProfileManagement/>}
                    {showLogin && !user && <ProfileSign/>}
                    
                </div>

            </div>
               
        </header> 
        
        </>
    );
};

export default Header;