import React, { useState,useEffect } from 'react';
import imagesData from '../data/images';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Slider.scss';
const Slider = () => {
    const[index,setIndex]=useState(1)
    const[images,setImages]=useState(imagesData)
    const[screenWidth,setScreenWidth] = useState(0)
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth)
        
    }
    
        window.addEventListener('resize', handleResize)
      })
    useEffect(() => {
      
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        if(index === images.length){
            setIndex(1) 
        }
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    return (
        <div className="slider">
            <div className="slider__box">
                {images.filter(image => (parseInt(image.id)) === index).map((image)=>{
                    return <img className="slider__box--img" key={image.id} alt={image.title} src={image.img}/>;
                }
                )}
            </div>
        
            <div className="slider__btns">
                {images.map((image)=>{
                    if(screenWidth>1000){
                         return <button onClick={()=>setIndex(parseInt(image.id))} className="slider__btns--btnText" key={image.id}>{image.title}</button>;
                    }
                    else{
                        return <button  onClick={()=>setIndex(parseInt(image.id))} className="slider__btns--btnDot" key={image.id}>{<FiberManualRecordIcon/>}</button>;

                    }
                }
                )}
            </div>
            
        
        </div>
    );
};

export default Slider;