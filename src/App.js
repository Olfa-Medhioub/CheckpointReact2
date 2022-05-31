import './App.css';
import FormOlfa from './Components/FormOlfa';
import NavOlfa from './Components/NavOlfa';
import Yessin from './imageInSrc.png';
import Video from './myVideo.mp4';
function App() {
    var x= "Olfa";
  return (
    <>
    <NavOlfa/>
    <FormOlfa/>
    <div style={{border :'solid 1px black',maxWidth :'100vw'}}>

     <h1 className="title red">{x}</h1>

     <br/>

     <img src={Yessin} />

    <br/>

   <img src='/imageInPublic.png'/>

    </div>

<video width="320" height="240" controls>

 <source src={Video} type="video/mp4" />

</video>
    </>
  );
}

export default App;
