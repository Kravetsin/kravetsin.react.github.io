import React, {useState} from 'react';
import Counter from './Components/Counter';
import CoolButton from './Components/First';
import Comptest from './Components/Comptest';
import { elements } from './Components/Input';

export default function App(){
  const [] = useState(0)

  return(
    <div>
      <Counter/>
      <CoolButton/>
      <Comptest name="Kravets"/>
      {elements}
    </div>
  )
}