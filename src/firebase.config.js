import Firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDy0oLH4LO5HlZr9UIW5QdzaNwsIYKxnls",
  authDomain: "pizzaplanet-92a6f.firebaseapp.com",
  databaseURL: "https://pizzaplanet-92a6f.firebaseio.com",
  projectId: "pizzaplanet-92a6f",
  storageBucket: "pizzaplanet-92a6f.appspot.com",
  messagingSenderId: "351507295230",
  appId: "1:351507295230:web:865eaeeae8ffe4f5bd2eaf"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')

