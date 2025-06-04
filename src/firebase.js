import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBJTSZhTeR-59F7PbKLhy4KCs6IsQtkxGY',
  authDomain: 'clarita2025-b23de.firebaseapp.com',
  projectId: 'clarita2025-b23de',
  storageBucket: 'clarita2025-b23de.firebasestorage.app',
  messagingSenderId: '946929322189',
  appId: '1:946929322189:web:dd1f3cdb5859026db84184',
  measurementId: 'G-30Y0NNM1S6'
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
