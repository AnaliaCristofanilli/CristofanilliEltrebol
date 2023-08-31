import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery";
import "popper.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKUu2JqI6DBHHkPpziiIRs-vRaqcJLYgg",
  authDomain: "libreriaeltrebol-32e55.firebaseapp.com",
  projectId: "libreriaeltrebol-32e55",
  storageBucket: "libreriaeltrebol-32e55.appspot.com",
  messagingSenderId: "461625116133",
  appId: "1:461625116133:web:90c8ba504cc85b0b8f1b0c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
