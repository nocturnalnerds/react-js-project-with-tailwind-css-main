
import "./App.css";
import About from "./components/About";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Services from "./components/Services";

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Product/>
      <MyFooter/>
    </>
  );
}

export default App;
