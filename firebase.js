import * as firebase from 'firebase';
import '@firebase/firestore';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7Y1RFQHnZlNvjpldmzXPBS6eKx3xbEWU",
    authDomain: "rnproject-a2fe3.firebaseapp.com",
    databaseURL: "https://rnproject-a2fe3.firebaseio.com",
    projectId: "rnproject-a2fe3",
    storageBucket: "rnproject-a2fe3.appspot.com",
    messagingSenderId: "818784637319",
    appId: "1:818784637319:web:801d0d891e8a61eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase ;