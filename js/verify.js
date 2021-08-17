document.getElementById('login-submit').
  addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassWord = passwordField.value;
    // check password
    if (userEmail == 'kalam@gmail.com' &&
      userPassWord == '1997') {
      console.log('valid user');
      window.location.href = "index.html"
    }
    else {

    }
  })

