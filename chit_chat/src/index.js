import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { App } from './Components';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Providers/AuthProvider';

// setTimeout(()=>{
//   console.log("timeout")
// },2000)
// const prom = new Promise((res,rej)=>{
//   res("res");
// })
// prom.then((res)=>{
//   console.log(res);
// })
// prom.catch((err)=>{
//   console.error(err)
// })

// let obj = {
//   Name:"Harshit Pal",
//   address:{
//     city:"Jabalpur",
//     state:"Madhya Pradesh"
//   }
// }

// // let obj2 = {...obj};
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.Name = "Riya"
// obj2.address.city = "bhopal"
// console.log(obj2,obj);

// async function promise(){
//   const api = await fetch();
//   try{

//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
