const dynamicText = document.querySelector("h2 span");
const words = ["Economia", "Investimento", "Educação", "Acessibilidade", "Inovação"];
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



document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}))



// search-box open close
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});


// sidebar open close
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


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


