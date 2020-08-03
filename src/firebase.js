import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyArY6lrvVU1ubIS2k8IIinNuZZoaQmk91k',
  authDomain: 'firegram-ea28a.firebaseapp.com',
  databaseURL: 'https://firegram-ea28a.firebaseio.com',
  projectId: 'firegram-ea28a',
  storageBucket: 'firegram-ea28a.appspot.com',
  messagingSenderId: '982506955982',
  appId: '1:982506955982:web:947180dc2ac82ad6565c9f',
  measurementId: 'G-3N9QCTMQ0Y',
})

const db = firebaseApp.firestore()
const storage = firebase.storage()
export {db, storage}
