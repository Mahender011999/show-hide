import React,{useState} from 'react'
import './App.css'
function App() {
  const [showData,setShowData] = useState(false)
  const showHiden = () =>{
    setShowData(!showData)
  } 
  return (
    <div className='container'>
      <center>
      <button className='button' onClick={showHiden}>{showData ? 'Hide':'Show'}</button>
      <div>
     {showData ?  ( <p className='para'>Est nulla magna nulla deserunt nisi.<br/> 
     Officia do adipisicing sint sit enim elit excepteur <br/>
     anim incididunt. Sunt sit exercitation velit laborum culpa <br/>
     sunt ipsum quis duis velit minim aute incididunt cillum.<br/>
      Consequat velit adipisicing irure nulla elit cupidatat aute do.<br/>
       Pariatur sit occaecat ullamco ipsum culpa.</p>):(
        <h1>Data is Hidden</h1>
       )}
      </div>
      </center>
    </div>
  )
}

export default App
