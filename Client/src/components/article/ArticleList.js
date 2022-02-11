import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

import articleContent from './SampleArticlesDB';
const ArticleList = (props) => {
  
  return (
    
    <div className='articleslist'>
        <h1 className="articles" style={{marginTop: 20}}>ARTICLES</h1>
        <br></br>
        {articleContent.map((i, key)=>(
            <Link className="articlelink" key={key} to={`/article/${i.name}`}>
              <h3 style={{padding:10,marginLeft:60,fontWeight:'bold'}}>{i.title}</h3>
            </Link>
                    
        ))}
       

   </div>
  );
}

export default ArticleList;
