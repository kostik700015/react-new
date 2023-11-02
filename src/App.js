import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';


function App() {
 const [likes, setLikes] = useState(0)
  return (
    <div className="App">
      <h1>It's Alive!</h1>
      <Counter/>
      <Input/>
    </div>
  );
}

export default App;
