const dynamicText = document.querySelector("h2 span");
const words = ["Economia", "Investimento", "Educação", "Diversão", "Inovação"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
   const currentWord = words[wordIndex];
   const currentChar = currentWord.substring(0, charIndex);
   dynamicText.textContent = currentChar;
   dynamicText.classList.add("stop-blinking")

   if(!isDeleting && charIndex < currentWord.length){
      charIndex++;
      setTimeout(typeEffect, 200);
   } else if(isDeleting && charIndex > 0){
      charIndex--;
      setTimeout(typeEffect, 100);
   }
   else{
      isDeleting = !isDeleting;
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
   }
}
typeEffect();


const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () =>{
  closeBtn.classList.toggle("open");
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



let checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== this) {
        otherCheckbox.checked = false;
      }
    });
  });
});


