// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/database';

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
	apiKey: 'AIzaSyBnVJOtHivEBYaUbtSGvKyvIumNLieYFDM',
	authDomain: 'env-monitor-d445c.firebaseapp.com',
	databaseURL: 'https://env-monitor-d445c-default-rtdb.firebaseio.com',
	projectId: 'env-monitor-d445c',
	storageBucket: 'env-monitor-d445c.appspot.com',
	messagingSenderId: '1036427937453',
	appId: '1:1036427937453:web:22252a8959e5990c3aa824',
	measurementId: 'G-F5EW4NXWC9',
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export const database = firebase.database();

export default firebase;
