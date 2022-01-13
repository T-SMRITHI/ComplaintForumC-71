import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyDnpsrI2Szs4thHsKJBq1F8zgHVeLXVpkE",
  authDomain: "c-71-complaint-forum.firebaseapp.com",
  databaseURL: "https://c-71-complaint-forum-default-rtdb.firebaseio.com",
  projectId: "c-71-complaint-forum",
  storageBucket: "c-71-complaint-forum.appspot.com",
  messagingSenderId: "626564782358",
  appId: "1:626564782358:web:6b3c65e887bb1c34c89837"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

