import About from "./components/About";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Routes,Route} from 'react-router-dom';
// const connectButton = document.getElementById("connectButton");

// connectButton.onClick = connect

// async function connect(){
//   if(typeof window.ethereum !=="undefined"){
//      await window.ethereum.request({method:"eth_requestAccounts"});
//      document.getElementById("connectButton").innerHTML = "Metamask Connected!";
//      console.log("You are connected!");
//   }else{
//       document.getElementById("connectButton").innerHTML = "Please install the metamask!";
//   }
// }




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        {/* <Route path="/skills" element = {<Skills/>}/> */}
        <Route path="/work" element = {<Work/>}/>
        <Route path="/registration" element = {<Registration/>}/>

      </Routes>

      {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
    </>
  );
}

export default App;
