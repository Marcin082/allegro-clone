import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Login.scss'
import {useHistory} from "react-router-dom";
import { auth } from '../config/firebase';
const Login = () => {
    const [pswType,setPswType] = useState("password")

    const[actmail,setActmail] = useState("")
    const[actpsw,setActpsw] = useState("")

    const[showFieldset,setShowFieldset] = useState(false)
    const[showFieldsetpsw,setShowFieldsetpsw] = useState(false)

    const history = useHistory();

    const mailHandler =(e) => {
        console.log("kot")
        setActmail(e.target.value)
    }
    const pswHandler =(e) => {
        setActpsw(e.target.value)
    }

    const submitHandler =(e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(actmail,actpsw)
       
       .then((auth)=>{
        console.log(auth)
        if(auth){
            history.push('/')
        }
    })
    .catch(error=>alert(error.message))
    }
    return (
        <>
            <div className="emptyHeader">
                <Link to="/">
                    <img className="emptyHeader__logo" src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"/>
                </Link>
            </div>
            <div className="loginContainer" onClick={()=>(showFieldset || actmail)? setShowFieldset(false):"" || showFieldsetpsw ? setShowFieldsetpsw(false):""}>
                <span className="loginContainer__header">Zaloguj się</span>
                <div className="loginContainer__data">
                    <input  onChange={mailHandler} className={showFieldset||actmail? "loginContainer__data--showInput" :"loginContainer__data--input"} placeholder={showFieldset? "":"Login lub e-mail"}  onClick={()=>setShowFieldset(true)}/>
                    {(showFieldset || actmail) && <fieldset className="loginContainer__fieldset" onClick={(e)=>{
                        e.stopPropagation()
                        setShowFieldset(true)
                        }}>
                        <legend className="loginContainer__fieldset--legend">
                            Login lub e-mail
                        </legend>
                    </fieldset>}
                    <div  className="loginContainer__data--password">
                        <><input onChange={pswHandler} type={pswType} className={!showFieldsetpsw && !actpsw? "loginContainer__data--input loginContainer__data--password--input":"loginContainer__data--password--showInput"} placeholder={showFieldsetpsw?"":"Hasło"} type={pswType} onChange={pswHandler} onClick={()=>setShowFieldsetpsw(true)}/>
                        <button className="loginContainer__data--password--btn" onClick={()=>setPswType(()=>pswType==="password"?"text":"password")}>POKAŻ</button></>
                        {(showFieldsetpsw || actpsw) && <fieldset className="loginContainer__fieldset--Psw" onClick={(e)=>{
                            e.stopPropagation()
                            setShowFieldsetpsw(true)
                            }}>
                        <legend className="loginContainer__fieldset--legend">
                        Hasło                       
                         </legend>
                    </fieldset>}
                    </div>
                </div> 
                <div className="loginContainer__button">
                    <span className="loginContainer__button--forgot">Nie pamiętam hasła</span>
                    <button className="loginContainer__button--btn" onClick={submitHandler} >ZALOGUJ SIĘ</button>
                    
                </div>
            </div> 
            <div className="loginContainer footer">
                <span className="footer__span">Nie masz konta?</span>
                <Link   to="/rejestracja" className="footer__link">
                    ZAREJESTRUJ SIĘ
                </Link>
            </div>

            <div className="footer__rules">
            <p>Logując się do Allegro akceptujesz <span className="footer__rule">Regulamin</span> w aktualnym brzmieniu obowiązującym od dnia 4.10.2021. Informacje o planowanych oraz archiwalnych zmianach Regulaminu są dostępne na <span className="footer__rule">stronie</span>.</p>
            </div>

            <div className="ending">
                <p className="ending__paragraph">Korzystanie z serwisu oznacza akceptację <span className="ending__span">regulaminu</span></p>
                <Link to="/">
                    <img className="ending__logo" src="https://a.allegroimg.com/original/126b6e/bf09245243ef947800dfb73121cb"/>
                </Link>
            </div>
            
        </>
    );
};

export default Login;