import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../error/Error';
import AddComments from './AddComments';
import Comments from './Comments';
import articleContent from './SampleArticlesDB';
import Upvotesection from './Upvotesection';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Article = (props) => {
  
  const {name} =useParams();

// temporary storage of DB data
  const [articleData,setarticleData]=useState({upvotes:0,comments:[]});

//Matching name parameter
  const article = articleContent.find(i=> i.name===name);

  //Backend connection API fetch

 useEffect(()=>{ 
  fetchAPI();
  },[name]);

 async function fetchAPI(){
    const response=await fetch(`/api/article/${name}`);
    const body=await response.json();
    console.log(body);
    setarticleData(body)
    
  }
  let navigate = useNavigate();
  const clicked=()=>{
    navigate("../article/:name/update", { replace: true })
  }
  

  function fetchDelete(event) {
    console.log(event.target.getAttribute("name"))
    axios.post("/api/delete", { title: event.target.getAttribute("name") })
        .then((res) => {
            alert("Successfully Deleted");

            navigate("../", { replace: true })

        }
        )
}
//Article not exists in DB
  if(!article) return <Error/>

 

  return (
    <div >
        <h1 className='singlearticle'> {article.title} </h1>
        <Upvotesection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
        <br></br><br></br>
        <p className='para'>{article.description}</p>
        {/* <Comments comments={articleData.comments}/>
        <AddComments name={name} setarticleData={setarticleData} /> */}
        < div className="buttons">
          <button onClick={fetchDelete}>DELETE</button>
          <button name={article.title} onClick={clicked}>UPDATE</button>
        </div>
        
    </div>
  );
}

export default Article;
