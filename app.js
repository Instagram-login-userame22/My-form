// Aapka Asli Firebase Code
const firebaseConfig = {
    apiKey: "AIzaSyCFY0hRnBRG3OoU7yWIOwAtpS...",
    authDomain: "my-database-test-96eed.firebaseapp.com",
    databaseURL: "https://my-database-test-96eed-default-rtdb.firebaseio.com",
    projectId: "my-database-test-96eed",
    storageBucket: "my-database-test-96eed.appspot.com",
    messagingSenderId: "989410414182",
    appId: "1:989410414182:web:5c4b3fdae292...",
    measurementId: "G-T1VYTGXG02"
};

// Database connect karne ke liye
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Form ka data save karne ke liye
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('username').value;
    var email = document.getElementById('useremail').value;

    database.ref('users/' + Date.now()).set({
        username: name,
        useremail: email
    }).then(function() {
        alert("Data successfully saved in Database!");
        document.getElementById('userForm').reset();
    });
});
