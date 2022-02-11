import React, { useState } from 'react';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import ArticleList from './components/article/ArticleList';
import About from './components/about/About';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Article from './components/article/Article';
import AddArticle from './components/article/AddArticle';
import Error from './components/error/Error';
import NavMain from './components/navbar/NavMain';

import UpdateArticle from './components/article/UpdateArticle';


function App() {

  
    return (
      <Router>
        <div className="App">
        <NavMain/>
          <Routes>
          <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Home/>}  />
            <Route path="/article-list" element={<ArticleList />} />
            <Route path="/article/:name" element={<Article />} />
            <Route path="/add-article" element={<AddArticle />} />
            <Route path="/login" element={<Login  />} ></Route>
            <Route path='/article/:name/update/' element={<UpdateArticle />} />
            <Route path="/" element={<Error/>} />
          </Routes>
        </div>
      </Router>
    );
  }
 

export default App;
