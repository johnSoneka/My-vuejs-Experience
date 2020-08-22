import firebase from 'firebase'
import { initializeApp} from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAADEXAssOO1ck3QMB6ZjwFNftUtF60w7M",
    authDomain: "shop-27f83.firebaseapp.com",
    databaseURL: "https://shop-27f83.firebaseio.com",
    projectId: "shop-27f83",
    storageBucket: "shop-27f83.appspot.com",
    messagingSenderId: "242427849309",
   // appId: "1:242427849309:web:c42420d859953cc03e3bb4",
   // measurementId: "G-31R2FHZG3J"
  })
  export const db = app.database()
  export const nameRefs = db.ref('name')
  export const imageUrl = db.ref('imgUrl')