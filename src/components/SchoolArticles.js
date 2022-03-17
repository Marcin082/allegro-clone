import React from 'react';
import './SchoolArticles.scss'
const SchoolArticles = () => {
    const Articles = [
        {
            id:'1',
            src:'https://web.archive.org/web/20180901013012im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/1LXa6JTC7YMIZ0fDnoEBIv-w160-h160.png',
            name:'Do plecaka włóż'
        },
        {
            id:'2',
            src:'https://web.archive.org/web/20180901013015im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/5xuT2IesROrQolpXIpv74o-w160-h160.png',
            name:'Artykuły plastyczne'
        },
        {
            id:'3',
            src:'https://web.archive.org/web/20180901013018im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/2GuGKoflM0jfG2gLVMlNNq-w160-h160.png',
            name:'Biurka i fotele'
        },
        {
            id:'4',
            src:'https://web.archive.org/web/20180901013022im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/2XfBKTRNxx923iTPzNSTrh-w160-h160.png',
            name:'Elektronika'
        },
        {
            id:'5',
            src:'https://web.archive.org/web/20180901013026im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/1FAkR9xmuDziRzTtIcw8Qv-w160-h160.png',
            name:'Książki i podręczniki'
        },
        {
            id:'6',
            src:'https://web.archive.org/web/20180901013029im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/1ZNKbU9zRr6TdmJP99z2cC-w160-h160.png',
            name:'Moda'
        },
        {
            id:'7',
            src:'https://web.archive.org/web/20180901013033im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/6kyI6yDJldxZvYfBxNlocL-w160-h160.png',
            name:'Plecaki i tornistry'
        },
        {
            id:'8',
            src:'https://web.archive.org/web/20180901011539im_/https://assets.allegrostatic.com/opbox/allegro.pl/homepage/Main%20Page/5yWyrMWRxj5Sx4RbtLV0Ad-w160-h160.png',
            name:'Pomoce naukowe'
        },
        
    ]
    return (
        <div className="articlesContainer">
            <h3 className="articlesContainer__header" >Wszystko do szkoły</h3>
            <div className="articles">
                {Articles.map((article)=>{
                    return <div className="articles__option">
                        <img className="articles__option--img" alt={article.name} src={article.src} key={article.id}/>
                        <span className="articles__option--name">{article.name}</span>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SchoolArticles;