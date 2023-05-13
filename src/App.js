import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Product />
      </div>
    </div>
  );
}

export default App;
