import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Hero from './components/Hero/Hero.jsx';
import Highlights from './components/Highlights.jsx'
import Testimonials from './components/Testimonials.js'
import About from './components/About.jsx'
import App from './App.jsx'
import BookingForm from './components/BookingForm/BookingForm.js';


const router= createBrowserRouter([
  {path:'/',
   element:<Layout/>,
   children: [
   {
    path: '',
    element: <App/>
   },
   {
    path:'hero',
    element:<Hero/>
   },
  {
    path:'highlights',
    element:<Highlights/>
  },
  {
    path:'testimonials',
    element: <Testimonials/>
  },
  {
    path:'about',
    element:<About/>
  },{
    path:'BookingForm',
    element: <BookingForm/>
  }]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
