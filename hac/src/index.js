import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './component/header'; 
import Home from './pages/home';
import Security from './pages/security';
import Solutions from './pages/solutions';
import Breck from './pages/breck';
import Complete from './pages/complete';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {   
    // path: "/home", 
    path: "/",
    element: <Home /> ,
    errorElement:<h1>opssss.....</h1>
  }, 
  {   path: "/header",
    element: <Header /> ,
    errorElement:<h1>opssss.....</h1>
  } 
  ,
  {  path: "/security",
    element: <Security /> ,
       }
  ,
  {    path: "/solutions",
    element: <Solutions /> ,   
  } ,
  {    path: "/breck",
    element: <Breck/> ,   
  } ,
  {    path: "/complete",
    element: <Complete /> ,   
  } ,
]);

 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

 