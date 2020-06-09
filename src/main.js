import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzuYa90WN8OgJ1vQP7-avGQh5NRWuo1Fk",
  authDomain: "expenses-46cdb.firebaseapp.com",
  databaseURL: "https://expenses-46cdb.firebaseio.com",
  projectId: "expenses-46cdb",
  storageBucket: "expenses-46cdb.appspot.com",
  messagingSenderId: "859884447605",
  appId: "1:859884447605:web:92e7f85ba6ec547710953c",
  measurementId: "G-LH3MRMBJ62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
