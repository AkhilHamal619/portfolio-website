const typingElement = document.getElementById("typing");
const words = ["Full Stack Developer", "React Developer", "Mobile App Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (i >= words.length) i = 0;
  currentWord = words[i];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i++;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      j = currentWord.length;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();