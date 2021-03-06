import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Component/App';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAq8TAHg5wsm-nvJ_Sz6W7sq6tq_X1mNeI",
  authDomain: "mo-blog-react.firebaseapp.com",
  projectId: "mo-blog-react",
  storageBucket: "mo-blog-react.appspot.com",
  messagingSenderId: "152506069079",
  appId: "1:152506069079:web:51343be78d927d76947312"
};

firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


