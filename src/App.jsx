
import { createSignal, useContext } from 'solid-js';
import banner from '../src/assets/image/banner.jpg'

import Home from './components/Home';
import { Router, Route, A } from "@solidjs/router";
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import { useCartContext } from './context/CartContext';

function App() {
  const[darkmode,setDarkMode]= createSignal(false)
  function darkmodefunction()
  {
    setDarkMode(!darkmode());
  }
  const {items} = useCartContext()
  const quantity =()=>
    {
      return items.reduce((acc,current) => {
        return acc +current.quantity},0)
      
    }
  return (
  
   <div>
    <header style={{"background-color":darkmode()? 'black' :'white'}}> <h1 style={{"color":darkmode()? 'white':'black'}}>Header</h1>
<button onClick={()=>darkmodefunction()} >{darkmode()?  "Light Mode" : "Dark Mode"}</button>
   
   <span>
    <a href='/'>Home</a>
     <a href='/cart'>Cart({quantity()})</a>
     </span>  
    </header>
    <img src={banner} alt="site banner"/>
     
  
  <Router>
  <Route path="/" component={Home} />
  <Route path="/cart" component={Cart}/>
  <Route  path="/product/:id" component={Product} />
           
        </Router>
   </div>

    
  );
}

export default App;
