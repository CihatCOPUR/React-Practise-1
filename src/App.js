
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from "./components/Main/Main";
import Data from "../src/components/assest/Assest"

function App() {
  return (
    <div className="App">
      <Header/>
      {Data.map((item)=>{
        const {language,img,btnName}=item
        return <Main language={language} img={img} btn={btnName}/>
      })

      }
      
      
      <Footer/>
    </div>
  );
}

export default App;
