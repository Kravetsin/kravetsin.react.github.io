import React, {useState} from 'react';
import Counter from './Components/Counter';

export default function App(){
  const [] = useState(0)

  return(
    <div className='App'>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}