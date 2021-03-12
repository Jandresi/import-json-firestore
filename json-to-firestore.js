const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "This apikey is from your project", // copy and paste from your key
    authDomain: "This authDomain is from your project", // copy and paste from your key
    projectId: "This projectId is from your project" // copy and paste from your key
});

var db = firebase.firestore();

// "users" is the collection name

// copy all data from json file and replace here
var users = [{
        "id": 1,
        "name": "Joseph",
        "date": "2021-01-02",
        "country": "spain"
    },
    {
        "id": 2,
        "name": "Katy",
        "date": "2021-01-03",
        "country": "USA"
    },
    {
        "id": 3,
        "name": "Jandresi",
        "date": "2021-01-04",
        "country": "Colombia"
    },
];

// write your collection and the type of documents (id: obj.id, food: obj.food, for example)
llamadas.forEach(function(obj) {
    db.collection("users").add({
            id: obj.id,
            name: obj.name,
            date: obj.date,
            country: obj.country,
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});