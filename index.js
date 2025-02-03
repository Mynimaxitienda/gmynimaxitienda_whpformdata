/**
 *  *  * Autor: jl_
 * ADSI - SENA
 * email: devluisluzardo@gmail.com
 * Fecha creacion : 21 - Sept- 2023
 *
 * desscripcion:
 *
 **/

//Firebase: Authentication
//Google Firebase : Google Popu up
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

//Firebase: RealTime Database
import {
  getDatabase,
  ref,
  set,
  onValue,
  query,
  orderByKey,
  get,
  limitToLast,
  equalTo,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

let direccion = "",
  celular = "",
  ciudad = "";

//Firebase: Initialize service
const firebaseApp = initializeApp({
  apiKey: "AIzaSyApf3ZmNqhjhIVSRWV7BNISx4H2YIBwT6Q",
  authDomain: "gmynimaxitiendaregadd.firebaseapp.com",
  databaseURL: "https://gmynimaxitiendaregadd-default-rtdb.firebaseio.com",
  projectId: "gmynimaxitiendaregadd",
  storageBucket: "gmynimaxitiendaregadd.firebasestorage.app",
  messagingSenderId: "835030557718",
  appId: "1:835030557718:web:7045e20c0d741b817a8137",
  measurementId: "G-SJBQEZNLJJ",
});

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

// Asignamos el objeto a la constante
// Obtenemos el elemento, imagen,...
const login = document.getElementById("accedergoogle");
const cerrarsesion = document.getElementById("cerrarsesion");
const emailsesion = document.getElementById("emailinisesion");
const logininac = document.getElementById("logininac");
const loginactic = document.getElementById("loginac");
const myDiv = document.getElementById("sliderinisesion");
const loginactivo = document.getElementById("loginactivo");
