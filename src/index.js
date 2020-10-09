import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBauz4FpnBL2OoDG9D38KQESuAmYtPNwvU",
  authDomain: "web-chat-3db76.firebaseapp.com",
  databaseURL: "https://web-chat-3db76.firebaseio.com",
  projectId: "web-chat-3db76",
  storageBucket: "web-chat-3db76.appspot.com",
  messagingSenderId: "142199063389",
  appId: "1:142199063389:web:ad2e860ec0e32c42d1deb4",
  measurementId: "G-2SYTQMWC7D"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
