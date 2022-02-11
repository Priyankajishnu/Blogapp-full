import React from 'react';
import './Article.css';
const Upvotesection = (props) => {

    const {name,setarticleData,upvotes} = props;

   async function fetchUpvotes(){
       const response = await  fetch(`/api/article/${name}/upvotes`,{
            method:'post'
        });
        const body = await response.json();
        setarticleData(body);
    }
  return (
    <div>
        <button className="like" onClick={fetchUpvotes}>👍</button>
        <p className='upvotes'>This article has {upvotes} upvotes</p>
    </div>
  );
}

export default Upvotesection;
