import React,{useState,useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form"; 
import WhishList from "./components/WishList"; 
function App() {

  const [inputText, setInputText] = useState("");
  const [wishes, setWishes] = useState([])

  useEffect(getLocal,[])
  useEffect(saveLocal,[wishes])

  function saveLocal(){
    localStorage.setItem("wishes",JSON.stringify(wishes));
  };
  function getLocal(){
    if (localStorage.getItem("wishes") === null){
      localStorage.setItem("wishes",JSON.stringify([]));
    }else{
      let wishesLocal = JSON.parse(localStorage.getItem("wishes"));
      if (wishesLocal.length === 0){
        return undefined;
      }
      setWishes(wishesLocal)
     
    }
  }




  return (
    <div className="App">
      <header className="App-header container-fluid text-center">
        <h1 >Wish list</h1>
      </header>
      <div  className="container">
        <Form inputText={inputText} wishes={wishes} setWishes={setWishes} setInputText={setInputText}/>
        <WhishList setWishes={setWishes} wishes={wishes}/>
      </div>
    </div>
  );
}

export default App;
