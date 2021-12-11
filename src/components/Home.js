import React, { useState } from 'react';
import './Home.scss'
import Slider from './Slider'
import Categories from './Categories'
import Items from './Items'
import Slogan from './Slogan'
import Footer from './Footer'
import SchoolArticle from './SchoolArticles'
import {SportWear} from '../data/products'
import {SchoolArticles} from '../data/products'
const Home = () => {
    const[screenWidth,setScreenWidth] = useState(0)
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth)
        
    }
    
        window.addEventListener('resize', handleResize)
      })
      
    return (
       <div className="Home">
        <div className="HomeContainer">
            <div className="sliderElement sliderElement__first">
               <Slider/>
               {screenWidth > 1237 && <img className="sliderElement__slogan" src="https://web.archive.org/web/20180901012911im_/https://assets.allegrostatic.com/display-pl/2018/10590/NOWY_KV_400x350%20(2).jpg"/>}
            </div>
            <div className="sliderElement sliderElement__second">
               <Categories/>
            </div>
            <div className="sliderElement sliderElement__third">
               <h3 className="sliderElement__third--header">Wybrane dla Ciebie: Odzież</h3>
               <Items products={SportWear}/>
            </div>
            <div className="sliderElement sliderElement__fourth">
               <Slogan/>
            </div> 
            <div className="sliderElement sliderElement__fifth">
               <SchoolArticle/>
            </div> 
            
            <div className="sliderElement sliderElement__sixth">
              
               <Items products={SchoolArticles}/>
            </div>

            
        </div>
         <Footer/>
         </div>
    );
};

export default Home;