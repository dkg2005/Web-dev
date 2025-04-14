import { useState } from 'react'
function App() {
    const [color, setColor] = useState("Black");
  return (
    <div className='h-screen w-screen flex justify-center items-center' style={{backgroundColor:color}}>
        <div flex justify-center items-center >
          <button className='m-5 p-4' onClick={()=>setColor("Red")} style={{backgroundColor:"red"}}>Red</button>
          <button className='m-5 p-4' onClick={()=>setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>
          <button className='m-5 p-4' onClick={()=>setColor("Yellow")} style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button className='m-5 p-4' onClick={()=>setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>
          <button className='m-5 p-4' onClick={()=>setColor("Grey")} style={{backgroundColor:"Grey"}}>Grey</button>
          <button className='m-5 p-4' onClick={()=>setColor("wheat")} style={{backgroundColor:"wheat"}}>wheat</button>
        </div>
    </div>
  )
}

export default App
