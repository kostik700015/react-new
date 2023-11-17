import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


function App() {
 const [likes, setLikes] = useState(0)
 const [posts, setPosts] = useState([
  {id:1, title: 'Jsvascript', body: 'Body of post'},
  {id:2, title: 'Jsvascript 2', body: 'Body of post'},
  {id:3, title: 'Jsvascript 3', body: 'Body of post'},
])
const [title, setTitle] = useState('')
const addNewPost = (e) =>{
  e.preventDefault()
  console.log(title)
}
  return (
    <div className="App">
    <form>
      <MyInput
       value={title}
       onChange={e => setTitle(e.target.value)}
       type="text" 
       placeholder='Title of post'
       />
      <MyInput type="text" placeholder='Post description'/>
      <MyButton onClick={addNewPost} >Create post</MyButton>
    </form>
    <PostList posts={posts} title="List of posts"/>
    </div>
  );
}

export default App;
