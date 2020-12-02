// firebase.initializeAppができているかどうかの確認
document.addEventListener('DOMContentLoaded', function () {
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });

  let unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('ログイン済み')
      document.getElementById('auth').innerText = 'ログイン済み'
    } else {
      console.log('未ログイン')
      document.getElementById('auth').innerText = '未ログイン'
    }
  })

  function signup() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('ユーザー作成完了')
        alert('ユーザー作成完了')
      })
      .catch((error) => {
        console.log('ユーザー作成失敗', error);
        alert('ユーザー作成失敗')
      });
  }

  function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        var name;
        if (user != null) {
          name = user.displayName;
          alert(name);
        }
        console.log('ログイン完了')
        alert('ログイン完了')
      })
      .catch((error) => {
        console.log('ログイン失敗', error);
        alert('ログイン失敗')
      });

  }

  function logout() {
    firebase.auth().signOut().then(() => {
      console.log('ログアウトしました')
      alert('ログアウトしました')
      //document.getElementById('emailVerify').innerHTML = 'ログイン後に確認します'
    }).catch((error) => {
      console.log('ログアウト失敗', error);
      alert('ログアウト失敗')
    })
  }   