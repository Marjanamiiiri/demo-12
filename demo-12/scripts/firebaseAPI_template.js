//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB6NCQHn9XgzCFoDd3TNMAHOvuwyVWHRk4",
    authDomain: "fir-comp1800-d6ca6.firebaseapp.com",
    projectId: "fir-comp1800-d6ca6",
    storageBucket: "fir-comp1800-d6ca6.appspot.com",
    messagingSenderId: "642242272689",
    appId: "1:642242272689:web:9fbce0924defe558acb190",
    measurementId: "G-Y8T1E4T3BQ"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
