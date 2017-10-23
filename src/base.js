import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAYvld542Q5ZtdkoQlyXzxy7UByAaPQGvw",
    authDomain: "hooli-1629a.firebaseapp.com",
    databaseURL: "https://hooli-1629a.firebaseio.com"
})

const base = Rebase.createClass(app.database());

export default base;