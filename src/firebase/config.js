import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
apiKey: "AIzaSyDY2SEIJJG837s41d9PKfgGptk5Yfd2VQw",
authDomain: "cooking-ninja-site-42f4a.firebaseapp.com",
projectId: "cooking-ninja-site-42f4a",
storageBucket: "cooking-ninja-site-42f4a.appspot.com",
messagingSenderId: "1081517467572",
appId: "1:1081517467572:web:b54c3037a97d1ef20434e1"
};

//initialize firebase
firebase.initializeApp(firebaseConfig)

//initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }

