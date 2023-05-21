import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const theme = createTheme();

function App() {
  return (
    <Router>
<ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <Navbar />
          <Switch>
          <Route path='/checkout-page'>
            <CheckoutPage /> 
            </Route>
            <Route path='/'>
            <Products /> 
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeProvider>
    </Router>
    
    
  );
}

export default App;
