import firebase from 'firebase/app'
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyAlzX7OEiR1fiZxwIdKWiKjK0PuDmGQYp4",
    authDomain: "allegro-clone-2f9b5.firebaseapp.com",
    projectId: "allegro-clone-2f9b5",
    storageBucket: "allegro-clone-2f9b5.appspot.com",
    messagingSenderId: "512736188152",
    appId: "1:512736188152:web:05809c5311fc256edf4d0d",
    measurementId: "G-559XNE3EGE"  
})

export const auth= app.auth()
export default app