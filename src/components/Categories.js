import React, { useState } from 'react';
import './Categories.scss'
import categories from '../data/classes';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Carousel = () => {
    const[direction, setDirection] = useState('ltr')
    const[opacity, setOpacity] = useState(0.6)
    return (
        <>
        <div className="categories" 
            onMouseEnter={()=>setOpacity(0.6)}
            onMouseLeave={()=>setOpacity(0)}
            style={{
            direction: `${direction}`,
            transition: '1s'
            }}>
            <bdi style={{
                position:'absolute',
                display: 'flex', 
            }}>
                {categories.map((category)=>{
                    return <div className="categories__option" key={category.id}>
                                <img className="categories__option--image"src={category.img} alt={category.name}/>
                                <span className="categories__option--name">{category.name}</span>
                                <hr style={{
                                    background:` ${category.color }`,
                                    width:'102.5%',
                                    padding: "0px",
                                    margin: "0px",
                                    height: '3px',
                                    border:'none'
                                }} />
                            </div>
                            
                        })}  
    
            </bdi>   
        </div>        
        {direction==='rtl'  && <button onMouseEnter={()=>setOpacity(0.6)} type="button" onClick={()=>setDirection('ltr')}  style={{opacity:`${opacity}`}} className="categories__btn categories__btn--prevbtn"><ArrowBackIosIcon className="categories__icon categories__icon--first"/></button>}
        {direction==='ltr'  && <button onMouseEnter={()=>setOpacity(0.6)} type="button" onClick={()=>setDirection('rtl')} style={{opacity:`${opacity}`}} className="categories__btn categories__btn--nextbtn"><ArrowForwardIosIcon className="categories__icon categories__icon--second"/></button>}

        </> 
    );
};

export default Carousel;
