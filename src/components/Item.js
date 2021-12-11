import React from 'react';
import './Item.scss'

const Item = (props) => {
    return (
        <div className="itemOption">
            <img className="itemOption__image"src={props.children.image}/>
            <p className="itemOption__price">{props.children.price} zł</p>
            <span className="itemOption__smart"> <img className="itemOption__smart--img" src="https://assets.allegrostatic.com/freebox/icons/FREEBOX_NOMARGIN.svg" alt="icon"/><span className="itemOption__smart--delivery"> z kurierem</span> </span>
            <span className="itemOption__desc">{props.children.title}</span>
        </div>
    );
};

export default Item;