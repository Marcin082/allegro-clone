import React, { useState } from 'react';
import Item from './Item';
import './Items.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Items = ({products}) => {
    const [direction, setDirection] = useState('ltr')
    const[opacity, setOpacity] = useState(0.6)
    console.log(products)
    return (
    <>
        <div className="ItemList" 
        onMouseEnter={()=>setOpacity(0.6)}
        onMouseLeave={()=>setOpacity(0)}
            style={{
            direction: `${direction}`,
            transition: '1s'
            }}>  
            <bdi  className="ItemList__items" 
            >
                {products.map((product)=>{
                    return <Item key={product.id} children={product}/>;
                })}
            </bdi>
            
         </div>
         
         {direction==='rtl' &&<button onMouseEnter={()=>setOpacity(0.6)} onClick={()=>setDirection('ltr')} style={{opacity:`${opacity}`}} className="ItemList__btn ItemList__btn--first"><ArrowBackIosIcon className="ItemList__icon"/></button>}
         {direction==='ltr' &&<button onMouseEnter={()=>setOpacity(0.6)} onClick={()=>setDirection('rtl')} style={{opacity:`${opacity}`}} className="ItemList__btn ItemList__btn--second"><ArrowForwardIosIcon className="ItemList__icon"/></button> }
   </>
        
    );
};

export default Items;