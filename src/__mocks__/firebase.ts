import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDC0_v9AWBXlHtDckPxZSQ5y0PXwgrcbaA',
  authDomain: 'gdg-burnaby.firebaseapp.com',
  projectId: 'gdg-burnaby',
  storageBucket: 'gdg-burnaby.appspot.com',
  messagingSenderId: '638355114414',
  appId: '1:638355114414:web:633a799364844d6d16e03f',
  measurementId: 'G-X6CJ1MK1WT',
});
export const db = getFirestore(firebaseApp);
