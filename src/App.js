import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <Navbar />
          {/* <Product /> */}
          <Products />
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
