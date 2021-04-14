import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBsZ2ekQSNXyBCTaubUE-4dAYWJGqp3I4c",
authDomain: "storyhub-31fc2.firebaseapp.com",
databaseURL: "https://storyhub-31fc2.firebaseio.com",
projectId: "storyhub-31fc2",
storageBucket: "storyhub-31fc2.appspot.com",
messagingSenderId: "79553795915",
appId: "1:79553795915:web:188c94324c364968bb3ace",
measurementId: "G-2K86P7008H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();