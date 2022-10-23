import React, {useState} from 'react';
import Counter from './Components/Counter';
import Header from './Components/First';
import Comptest from './Components/Comptest';
import { elements } from './Components/Input';
import Image from './Components/Image';
import Arrow from './img/pngegg.png'

export default function App(){
  const [] = useState(0)

  return(
    <div>
      <Header title = "Project K"/>
      <Image image={Arrow}/>
    </div>
  )
}
