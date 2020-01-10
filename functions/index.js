"use strict"
const functions = require('firebase-functions');
const express = require("express");
const app = express();
const firebase = require("firebase/app");
var bodyParser = require('body-parser');

const cors = require('cors')({origin: true});
// Firebase products that you want to use
var auth = require("firebase/auth");
var firestore=require("firebase/firestore");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors)
//Firebase project configuration object
var firebaseConfig = {
    apiKey: "AIzaSyDeWzBrOLonZVh2my2oyt2VMqBt2i4uPwk",
    authDomain: "fir-webapp-3aaef.firebaseapp.com",
    databaseURL: "https://fir-webapp-3aaef.firebaseio.com",
    projectId: "fir-webapp-3aaef",
    storageBucket: "fir-webapp-3aaef.appspot.com",
    messagingSenderId: "615914881882",
    appId: "1:615914881882:web:d027c29181ca70c3632963",
    measurementId: "G-2JTE9GFS4T"

};

firebase.initializeApp(firebaseConfig);  


app.post("/user/register",(request, response) => {

    return firebase.auth().createUserWithEmailAndPassword(request.body.email, request.body.password)
    .then(response.send("Registration sucessfully"))
    .catch((error)=>{         
        var errordetails={code:error.code,
                        Message:error.message}
            response.send(errordetails) 
      })    
        
   })
 exports.useradd=functions.https.onRequest(app)

 app.post("/user/login",(request, response) => {
    return firebase.auth().signInWithEmailAndPassword(request.body.email, request.body.password)
    .then(response.send("login sucessfully"))
    .catch((error)=>{         
        var errordetails={code:error.code,
                        Message:error.message}
            response.send(errordetails) 
      })    
        
   })
 exports.getuser=functions.https.onRequest(app)



