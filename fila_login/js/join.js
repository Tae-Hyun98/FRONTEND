//아이디 확인
const userId = document.getElementById('user_id');

//약관동의
const allTerms = document.getElementById('all_terms');
const terms = document.querySelectorAll('.term');
const term01 = document.getElementById('term_1');
const term02 = document.getElementById('term_2');
const term03 = document.getElementById('term_3');
const term04 = document.getElementById('term_4');

allTerms.addEventListener('click', allCheck);
term01.addEventListener('click', termCheck);
term02.addEventListener('click', termCheck);
term03.addEventListener('click', termCheck);
term04.addEventListener('click', termCheck);

//전체체크함수
function allCheck() {
  if (allTerms.checked) {
    terms.forEach((e) => {
      e.checked = true;
    });
  } else {
    terms.forEach((e) => {
      e.checked = false;
    });
  }
}

//체크여부
function termCheck() {
  if (term01.checked && term02.checked && term03.checked && term04.checked) {
    allTerms.checked = true;
  } else {
    allTerms.checked = false;
  }
}