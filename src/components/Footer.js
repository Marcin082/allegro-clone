import React,{useState} from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
        console.log(screenWidth);
        window.addEventListener("resize", handleResize);
      });
    return (
        <div className="footer">
            <div style={{   
            flexDirection:screenWidth<400?'column':'row',
            }} className="footer__section">
                <div className="footer__column">
                    <h3 className="footer__column--header">Allegro</h3>
                    <li className="footer__column--option">O nas</li>
                    <li className="footer__column--option">Reklama</li>
                    <li className="footer__column--option">Allegro Ads</li>
                    <li className="footer__column--option">Allegro API</li>
                    <li className="footer__column--option">Praca w Allegro</li>
                    <li className="footer__column--option">Społeczna Odpowiedzialność</li>
                    <li className="footer__column--option">Allegro Polecam</li>
                    <li className="footer__column--option">Allegro Pay</li>
                    <li className="footer__column--option">Mapa strony</li>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column--header">Centrum pomocy</h3>
                    <li className="footer__column--option">Pomoc</li>
                    <li className="footer__column--option">Aktualności</li>
                    <li className="footer__column--option">Spytaj Społeczność</li>
                    <li className="footer__column--option">Kupuj na Allegro</li>
                    <li className="footer__column--option">Dla sprzedających</li>
                    <li className="footer__column--option">Sprzedawaj na Allegro</li>
                    <li className="footer__column--option">Polityka zwrotów towaru</li>
                    <li className="footer__column--option">Polityka plików "cookies"</li>
                    <li className="footer__column--option">Regulamin</li>
                    <li className="footer__column--option">Dopasowanie reklam</li>
                    <li className="footer__column--option">Udostępnianie lokalizacji</li>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column--header">Serwisy</h3>
                    <li className="footer__column--option">Allegro Smart!</li>
                    <li className="footer__column--option">Strefa marek</li>
                    <li className="footer__column--option">Artykuły</li>
                    <li className="footer__column--option">Archiwum Allegro</li>
                    <li className="footer__column--option">Monety Allegro</li>
                    <li className="footer__column--option">Karty podarunkowe Allegro</li>
                    <li className="footer__column--option">Akademia Allegro</li>
                    <li className="footer__column--option">Allegro Lokalnie</li>
                    <li className="footer__column--option">Allegro Charytatywni</li>
                    <li className="footer__column--option">Allegro Biznes</li>
                </div>
                 <div className="footer__column">
                    <h3 className="footer__column--header">Serwisy</h3>
                    <li className="footer__column--option">Sell on Allegro</li>
                    <li className="footer__column--option">Help Center</li>
                    <li className="footer__column--option">Terms and conditions</li>  
                </div>
            </div>
            
                      
            
            <div  className="footer__section">
                <div style={{   
            flexWrap:screenWidth<400?'wrap':'nowrap',
            }} className="footer__row">
                    <img alt="icon" className="footer__row--link" src="https://assets.allegrostatic.com/metrum/icon/appstore-1bc3bc3c06.svg"/>
                    <img alt="icon" className="footer__row--link" src="https://assets.allegrostatic.com/metrum/icon/playstore-d44c743ccc.svg"/>
                    <img alt="icon" className="footer__row--link" src="https://assets.allegrostatic.com/metrum/icon/appgallery-e4b87bbf17.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/facebook-a2b92f9dcb.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/linkedin-cd6807318a.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/instagram-95464778fb.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/pinterest-d8d9e5a8f6.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/youtube-dca5fff408.svg"/>
                    <img alt="icon" className="footer__row--icon" src="https://assets.allegrostatic.com/metrum/icon/charity-7610bf9ae4.svg"/>
                </div>           
            </div>

            <div className="footer__ending">
                <p className="footer__ending--paragraph">Korzystanie z serwisu oznacza akceptację <span className="footer__ending--span">regulaminu</span></p>
                <Link to="/">
                    <img alt="icon" className="footer__ending--logo" src="https://a.allegroimg.com/original/126b6e/bf09245243ef947800dfb73121cb"/>
                </Link>
            </div>
        </div>
    );
};

export default Footer;