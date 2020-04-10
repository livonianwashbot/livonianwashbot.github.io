function change(){
var user = firebase.auth().currentUser;
var newPassword = document.getElementById("new_password").value;


user.updatePassword(newPassword).then(function() {
  // Update successful.
   window.alert("Password Changed");
}).catch(function(error) {
  // An error happened.
});

// var auth = firebase.auth();
// var emailAddress = "user@example.com";

// auth.sendPasswordResetEmail(emailAddress).then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });
