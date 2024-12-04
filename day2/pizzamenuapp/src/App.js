
import './App.css';
import data from './data/pizza';

function App() {
  return (
    <div className="App">
     <Header />
     <Menu />
     <Footer />
    </div>
  );
}

function Header(){
  return <h1>Fresh React Pizza Shop</h1>
}

function Menu(){
  const Pizzas = data;
  const numPizzas = data.length;
  return (
    <div>
       <h2>Our Menu</h2>
       { numPizzas > 0 ? (
        <div>
         {
          Pizzas.map((pizza) => {
            return <PizzaCard key ={pizza.name} pizza={pizza}  />
          })
        }
     </div>
       ):(<p>Lets meet after </p>)}
    </div>
  )
  }


function PizzaCard({pizza}){ 
  return (
    <div>
      <h2>This is card</h2>
        <img src={pizza.photoName} alt={pizza.name} />
        <h1>{pizza.name}</h1>
        <p>{pizza.ingredients}</p>
    </div>
  )
}
function Footer(){
  return <footer>Our shop open until </footer>
}
export default App;
