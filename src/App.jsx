import React, {useState} from 'react';
import Counter from './Components/Counter';
import CoolButton from './Components/First';

export default function App(){
  const [] = useState(0)

  return(
    <div>
      <Counter/>
      <CoolButton/>
    </div>
  )
}