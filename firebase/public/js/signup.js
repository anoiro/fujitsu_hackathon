function signup() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('ユーザー作成完了')
      alert('ユーザー作成完了')
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        // Update successful.
        alert("name ok")
      }).catch(function(error) {
        // An error happened.
        alert("name no")
      });
    })
    .catch((error) => {
      console.log('ユーザー作成失敗', error);
      alert('ユーザー作成失敗')
    });
}