import firebase from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyAJHJcMbCXVJSHwCIiGmJN1yiHic8WVpjc",
    authDomain: "budget-79d56.firebaseapp.com",
    projectId: "budget-79d56",
    storageBucket: "budget-79d56.appspot.com",
    messagingSenderId: "409507033448",
    appId: "1:409507033448:web:fd20c0ed464e9f649126dd",
    measurementId: "G-YCZZE7T5KN"
};

const fire = firebase.initializeApp(config);
export  default  fire;