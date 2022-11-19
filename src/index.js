import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ruta from './screens/Router.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2TTUTuhW8qy15D-NwSRcQuinvpkDUzDw",
  authDomain: "elegantbd-fac81.firebaseapp.com",
  projectId: "elegantbd-fac81",
  storageBucket: "elegantbd-fac81.appspot.com",
  messagingSenderId: "241977741160",
  appId: "1:241977741160:web:162a353fae2bc2623d90dd"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ruta />
  </React.StrictMode>
);