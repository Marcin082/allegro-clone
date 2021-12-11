import React, { useState } from 'react';
import './Registration.scss'
import { Link, useHistory } from "react-router-dom";
import {auth} from "../config/firebase"
const Registration = () => {
    const [showFirstOptional,setShowFirstOptional] = useState(false);
    const [showSecOptional,setShowSecOptional] = useState(false);
    const [pswType,setPswType] = useState("password");
    const [adult,setAdult] = useState(true);
    const [ischecked,setIschecked] = useState([false,false,false]);
    const [isAllchecked,setIsAllchecked] = useState(false);

    const [mail , setMail] = useState('')
    const [password , setPassword] = useState('')

    
    const[showFieldset,setShowFieldset] = useState(false)
    const[showFieldsetpsw,setShowFieldsetpsw] = useState(false)

    const history = useHistory();

    const mailHandler =(e) => {
        setMail(e.target.value)
    }
    const passwordHandler =(e) => {
        setPassword(e.target.value)
    }

    const SubmitHandler =(e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(mail,password)
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
                <img className="header__logo" src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"/>
            </Link>
    </div>
    <div className="container">
    <h1 className="head">Zarejestruj</h1>
        <div className="register" onClick={()=>(showFieldset || mail)? setShowFieldset(false):"" || showFieldsetpsw ? setShowFieldsetpsw(false):""}>
            
           
                <label className="register__title">1. Dane do rejestracji</label><br/>
            <div className="register__container">

                
                <input  onChange={mailHandler} className={showFieldset||mail? "register__input--after" :" register__input  register__input--header register__input--header--mail"} placeholder={showFieldset? "":"E-mail"}  onClick={()=>setShowFieldset(true)}/>
                    {(showFieldset || mail) && <fieldset className="register__fieldset" onClick={(e)=>{
                        e.stopPropagation()
                        setShowFieldset(true)
                        }}>
                        <legend className="register__fieldset--legend">
                            E-mail
                        </legend>
                    </fieldset>}

                    <div  className="register__password">
                        <><input onChange={passwordHandler} type={pswType} className={!showFieldsetpsw && !password? "register__input register__input--header register__input--header--psw":"register__input--pswAfter"} placeholder={showFieldsetpsw?"":"Hasło"} type={pswType} onChange={passwordHandler} onClick={()=>setShowFieldsetpsw(true)}/>
                        <button className={!showFieldsetpsw && !password ? "register__input--btn":"register__input--afterBtn"} onClick={()=>setPswType(()=>pswType==="password"?"text":"password")}>POKAŻ</button></>
                        {(showFieldsetpsw || password) && <fieldset className=" register__fieldset register__fieldset--password" onClick={(e)=>{
                            e.stopPropagation()
                            setShowFieldsetpsw(true)
                            }}>
                        <legend className="register__fieldset--legend">
                        Hasło                       
                         </legend>
                    </fieldset>}
            </div>
        
                </div>
                <label className="register__title">2. Twój wiek</label>
                <p className="register__note register__note--info">Dzięki tej informacji możemy pokazać oferty odpowiednie dla Ciebie</p>
                <div className="register__age">
                     <button className="register__age--btn" onClick={()=>setAdult(false)}>Mam mniej niż 18 lat</button><button className="register__age--btn" onClick={()=>setAdult(true)}>Mam 18 lat i więcej</button>
                </div>
                {!adult &&
                <>
                    <p className="register__note register__note--needed">Potrzebujemy od Ciebie dokładnej daty urodzenia</p>
                    <fieldset className="register__ageFieldset">
                    <legend className=" register__note register__note--info">Data urodzenia</legend>
                    <input  className="register__input register__input--date" type="date"/>
                    </fieldset>
                </>
                }
            <div className="register__consent">
                <label className="register__title">3. Zgody i oświadczenia</label>
                <p className="register__note register__note--comment"><span className="register__consent--star">*</span> Wymagane zgody lub oświadczenia</p>
                
                <div className="register__consent--container">
                    <input checked={isAllchecked} className="register__consent--box" type="checkbox" onClick={()=>setIsAllchecked(!isAllchecked) || setIschecked([!ischecked[0],!ischecked[1],!ischecked[2]])}/><label className="register__consent--titles">Zaznacz wszystkie zgody</label>
                </div> 

                <hr className="register__consent--line"/>

                <div className="register__consent--container">
                    <input className="register__consent--box" checked={ischecked[0]} onClick={()=>setIschecked([!ischecked[0],ischecked[1],ischecked[2]]) } type="checkbox"/><label className="register__consent--titles"><span className="register__consent--star">*</span> Oświadczam, że znam i akceptuję postanowienia <span className="register__consent--btn">Regulaminu Allegro.</span></label>
                </div>

               <div className="register__consent--container">
                   <input checked={ischecked[1]} onClick={()=>setIschecked([ischecked[0],!ischecked[1],ischecked[2]])}className="register__consent--box" type="checkbox"/>
                   <label className="register__consent--titles">
                        <span className="register__consent--titles--firstPara">Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych i otrzymywanie informacji handlowych od Allegro z wykorzystaniem telekomunikacyjnych urządzeń końcowych (m.in. telefon) oraz środków komunikacji elektronicznej (m.in. SMS, e-mail).</span>
                        <span className="register__consent--titles--SecondPara">(opcjonalnie)</span>
                        {!showFirstOptional && <span className="register__consent--btn" onClick={()=>setShowFirstOptional(true)}>rozwiń</span>}
                        <br/>{showFirstOptional && <span className="register__consent--titles--SecondPara">Na podstawie tej zgody będziemy mogli skontaktować się z Tobą za pośrednictwem np. telefonu, SMS czy poczty elektronicznej (w zależności od tego jakie dane nam podasz przy rejestracji) w celu promocji usług lub towarów Allegro w tym m.in. przedstawienia informacji o aktualnych promocjach czy akcjach marketingowych. W dowolnym momencie możesz zrezygnować z otrzymywania informacji handlowych od Allegro wycofując zgodę. Allegro.pl sp. z o. o. oznacza spółkę z siedzibą w Poznaniu, przy ul. Grunwaldzkiej 182, 60-166 Poznań („Allegro”).</span>}
                        {showFirstOptional && <span className="register__consent--btn" onClick={()=>setShowFirstOptional(false)}>zwiń</span>}
                    </label>
               </div>

                <div className="register__consent--container">
                    <input  checked={ischecked[2]} onClick={()=>setIschecked([ischecked[0],ischecked[1],!ischecked[2]])} className="register__consent--box" type="checkbox"/>
                    <label className="register__consent--titles">
                        <span className="register__consent--titles--firstPara">Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych i otrzymywanie informacji handlowych od podmiotów współpracujących z Allegro z wykorzystaniem telekomunikacyjnych urządzeń końcowych (m.in. telefon) oraz środków komunikacji elektronicznej (m.in. SMS, e-mail).</span> 
                        <span className="register__consent--titles--SecondPara"> (opcjonalnie)</span>
                        {!showSecOptional && <span className="register__consent--btn" onClick={()=>setShowSecOptional(true)}>rozwiń</span>}
                        <br/>{showSecOptional && <span className="register__consent--titles--SecondPara">Na podstawie tej zgody będziemy mogli skontaktować się z Tobą za pośrednictwem np. telefonu, SMS czy poczty elektronicznej (w zależności od tego jakie dane nam podasz przy rejestracji) w celu promocji usług lub towarów podmiotów współpracujących z Allegro, w tym m.in. przedstawienia informacji o aktualnych promocjach czy akcjach marketingowych. W dowolnym momencie możesz zrezygnować z otrzymywania informacji handlowych od podmiotów współpracujących z Allegro wycofując zgodę. Allegro.pl sp. z o. o. oznacza spółkę z siedzibą w Poznaniu, przy ul. Grunwaldzkiej 182, 60-166 Poznań („Allegro”).</span>}
                        {showSecOptional && <span className="register__consent--btn" onClick={()=>setShowSecOptional(false)}>zwiń</span>}
                    </label>
                </div>

            </div>
        <button className="register__button" onClick={SubmitHandler}>ZAREJESTRUJ</button>
        </div>
        </div>
        </>
    );
};

export default Registration;