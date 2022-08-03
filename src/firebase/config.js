import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBiJrjuz-BBwoeExazprP76dUqf_w5UfYU",
  authDomain: "dojo-ea032.firebaseapp.com",
  projectId: "dojo-ea032",
  storageBucket: "dojo-ea032.appspot.com",
  messagingSenderId: "207872174391",
  appId: "1:207872174391:web:2a886da88d5ccd0dc312b2"
};

//init
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }