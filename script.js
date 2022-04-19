const heartBtn = document.querySelector('#heart-btn')
const courtMsgBox = document.querySelector('.court-msg')
const sections = document.querySelectorAll('section')

let i = 0;
const txt = 'Em can you be my girlfriend?';
const speed = 50;


heartBtn.addEventListener('click', () => {
    document.body.classList.add('active')

    courtMsgBox.style.display = 'block';
    typeWriter()

    sections.forEach(element => {
      element.style.display = 'none'
    })
})

function typeWriter() {
  if (i < txt.length) {
    courtMsgBox.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 600);
  }
}