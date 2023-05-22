// import './App.css';
// import * as React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Navbar from './components/Navbar';
// import Product from './components/Product';
// import Products from './components/Products';
// import CheckoutPage from './components/CheckoutPage';
// import CheckoutCard from './components/CheckoutCard';
// import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import SignIn from './components/Signin';
// import SignUp from './components/Signup';
// import { useEffect } from 'react';
// import { auth } from './firebase';
// import { useStateValue } from './StateProvider';
// import Checkout from './CheckoutForm/Checkout';

// const theme = createTheme();

// function App() {
//   const [{user}, dispatch] = useStateValue();


//   useEffect(()=>{
//     auth.onAuthStateChanged((authUser)=>{
//       console.log(authUser);
//       if(authUser){
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: authUser
//         })
//       }
//     })
//   },[ ])



//   return (
//     <Router>
// <ThemeProvider theme={theme}>
//       <div className="App">
//         <div className="container">
//           <Navbar />
//           <Switch>
//           <Route path='/signup'>
//             <SignUp /> 
//             </Route>
//           <Route path='/signin'>
//             <SignIn /> 
//             </Route>
//           <Route path='/checkout-page'>
//             <CheckoutPage /> 
//             </Route>
//             <Route path='/checkout'>
//             <Checkout /> 
//             </Route>
//             <Route path='/'>
//             <Products /> 
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </ThemeProvider>
//     </Router>
    
    
//   );
// }

// export default App;

import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Checkout from './CheckoutForm/Checkout';
import { actionTypes } from './reducer';

const theme = createTheme();

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="container">
            <Navbar />
            <Switch>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/checkout-page">
                <CheckoutPage />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/">
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