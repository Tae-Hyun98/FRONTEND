import userData from "./login_data.js";

//눈표시누르면 input type -> text 끄면 input type -> password
const loginId = document.getElementById('login_id');
const loginPw = document.getElementById('login_pw');
const loninBtn = document.getElementById('login_btn');

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

loninBtn.addEventListener('click', () => {
  for (let i = 0; i < userData.length; i++) {
    if (loginId.value === userData[i].userid && loginPw.value === userData[i].password) {
      alert('로그인성공');
    } else {
      alert('회원가입해주세요');
    }
  }
});