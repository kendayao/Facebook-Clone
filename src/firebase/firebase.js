import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqVrBu6ynxI4APE9uZZ3HqZFNPHJAS_lY",
    authDomain: "facebook-clone-d025c.firebaseapp.com",
    projectId: "facebook-clone-d025c",
    storageBucket: "facebook-clone-d025c.appspot.com",
    messagingSenderId: "889223992208",
    appId: "1:889223992208:web:9145539bcbf1b99f2a1915",
    measurementId: "G-5TVEG1Q2LV"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;