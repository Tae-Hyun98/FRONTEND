//눈표시누르면 input type -> text 끄면 input type -> password
const loginId = document.getElementById('login_id');
const loginPw = document.getElementById('login_pw');

const eye = document.querySelector('.eye');
const eyeOff = document.querySelector('.eye_off');

eye.addEventListener('click', inputText);
eyeOff.addEventListener('click', inputPassword);

function inputText() {
  loginPw.type = 'text';
  eye.style.display = 'none';
  eyeOff.style.display = 'block';
}

function inputPassword() {
  loginPw.type = 'password';
  eye.style.display = 'block';
  eyeOff.style.display = 'none';
}