import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import PostItem from './components/PostItem';
import './styles/App.css';


function App() {
 const [likes, setLikes] = useState(0)
  return (
    <div className="App">
      <h1>It's Alive!</h1>
      <PostItem post={{id:1, title: 'Jsvascript', body: 'Body of post'}}/>
    </div>
  );
}

export default App;
