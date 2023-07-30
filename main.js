function toogleform(form) {
  var sign = document.getElementById('sign-in-form');
  var login = document.getElementById('login-form');
  var forgets = document.getElementById('forgot');
  if (form === 'sign') {
    sign.style.display = 'block';
    login.style.display = 'none';
    forgets.style.display = 'none';
  } else if (form === 'login') {
    forgets.style.display = 'none';
    sign.style.display = 'none';
    login.style.display = 'block';
  }
  else {
    forgets.style.display = 'block';
    sign.style.display = 'none';
    login.style.display = 'none';
  }
}