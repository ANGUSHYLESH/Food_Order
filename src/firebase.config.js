import {
  getApp,
  getApps,
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
import {
  getStorage
} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCyEwa0-IzJHjHcrEJszhBsvubjOcBH0gc",
  authDomain: "restaurantapp-520f5.firebaseapp.com",
  databaseURL: "https://restaurantapp-520f5-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-520f5",
  storageBucket: "restaurantapp-520f5.appspot.com",
  messagingSenderId: "957469349886",
  appId: "1:957469349886:web:9433a64c2fdcdb1612d2af",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export {
  app,
  firestore,
  storage
};