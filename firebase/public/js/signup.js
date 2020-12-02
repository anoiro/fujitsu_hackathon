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
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    })
    .catch((error) => {
      console.log('ユーザー作成失敗', error);
      alert('ユーザー作成失敗')
    });
}