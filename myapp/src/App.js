import logo from './logo.svg';
import './App.css';
import myImage from "./img.jpg"
import './style.css'
function App() {
  return (
    
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

 <h1 className='title'>Albert Einstein</h1>

 <br />

 <img className='img' src={myImage} alt='img'/>

 <br />

 <img className='img' src="/th.jpg" alt='img' />



<video style={{width:"320" ,height:"240"}}>

 <source src={"myVideo.mp4" }type={"video/mp4"}/>

</video>
</div>
  );
}

export default App;
