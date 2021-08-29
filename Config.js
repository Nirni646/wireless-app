import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAKKkPrbZZQxrSikZ_Xw2blfqRoUCItKb8",
    authDomain: "willy-app-447cf.firebaseapp.com",
    projectId: "willy-app-447cf",
    storageBucket: "willy-app-447cf.appspot.com",
    messagingSenderId: "512258146299",
    appId: "1:512258146299:web:a1d1c77a0fb4f8bd61155e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore