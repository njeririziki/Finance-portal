import * as firebase from 'firebase/app' ;
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config ={
    apiKey: "AIzaSyD4lfcCU8akyD0V-gUVCsyYrwfQvJIDxmA",
    authDomain: "student-portal-9c88b.firebaseapp.com",
    databaseURL: "https://student-portal-9c88b.firebaseio.com",
    projectId: "student-portal-9c88b",
    storageBucket: "student-portal-9c88b.appspot.com",
    messagingSenderId: "257100076919",
    appId: "1:257100076919:web:8dea222274d0dc9ba5b372",
    measurementId: "G-HY4JW6NPFL"
}
const Firebase = firebase.initializeApp(config);
//const database = firebase.firestore()
//const auth = firebase.auth()

export default Firebase ;