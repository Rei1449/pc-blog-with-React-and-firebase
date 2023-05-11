import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDlH7YxTtKjUkBcEVnTaAuh-bLLv4MC0ws',
  authDomain: 'pc-blog-e6fa0.firebaseapp.com',
  projectId: 'pc-blog-e6fa0',
  storageBucket: 'pc-blog-e6fa0.appspot.com',
  messagingSenderId: '152162230488',
  appId: '1:152162230488:web:f14f289696a86e187b77ad',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
