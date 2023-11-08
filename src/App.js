import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';


function App() {
 const [likes, setLikes] = useState(0)
 const [posts, setPosts] = useState([
  {id:1, title: 'Jsvascript', body: 'Body of post'},
  {id:2, title: 'Jsvascript 2', body: 'Body of post'},
  {id:3, title: 'Jsvascript 3', body: 'Body of post'},
])
  return (
    <div className="App">
    <PostList posts={posts} title="List of posts"/>
    </div>
  );
}

export default App;
