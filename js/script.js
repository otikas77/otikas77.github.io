let menuButton = document.getElementsByClassName('menuButton')[0];
let dropDownMenu = document.getElementsByClassName('drop-menu')[0];
let toTop = document.getElementsByClassName('toTop');
let home = document.getElementsByClassName("home");
let about = document.getElementsByClassName("about");
let resume = document.getElementsByClassName("resume");
let works = document.getElementsByClassName("works");
let myWork = document.getElementsByClassName('work-example');
let progress = document.getElementsByClassName("progress");
// SCROLLING --->
for(let i=0; i<=home.length - 1; i++){
  home[i].addEventListener('click', ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
       })
  })
}

for(let i=0; i<=about.length - 1; i++){
  about[i].addEventListener('click', ()=>{
      window.scrollTo({
        top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height,
        behavior: "smooth"
       })
  })
}

for(let i=0; i<=resume.length - 1; i++){
  resume[i].addEventListener('click', ()=>{
      window.scrollTo({
        top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height + document.getElementsByClassName('about-me')[0].getBoundingClientRect().height,
        behavior: "smooth"
       })
  })
}

for(let i=0; i<=works.length - 1; i++){
  works[i].addEventListener('click', ()=>{
      window.scrollTo({
        top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height + document.getElementsByClassName('about-me')[0].getBoundingClientRect().height + document.getElementsByClassName('section-education')[0].getBoundingClientRect().height + document.getElementsByClassName('section-skills')[0].getBoundingClientRect().height + 350,
        behavior: "smooth"
       })
  })
}

//<--- SCROLLING

menuButton.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("drop-menu-active")
})

document.getElementsByTagName('main')[0].addEventListener('click', ()=>{
  if(dropDownMenu.classList.contains('drop-menu-active')){
    dropDownMenu.classList.remove("drop-menu-active")
  }
})

for(let i=0; i<=toTop.length - 1; i++){
  toTop[i].addEventListener("click", ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
     })
  })
}


for(let i=0; i<=myWork.length - 1; i++){
  myWork[i].addEventListener("click", ()=>{
    document.location.href = myWork[i].getAttribute('data-url');
  })
}

// jquery

$(document).ready(function(){

	$(window).on("scroll", function(){

    for(let i = 0; i<=progress.length -1; i++){
          if($(window).scrollTop() >=  document.getElementsByClassName('representation')[0].getBoundingClientRect().height + document.getElementsByClassName('about-me')[0].getBoundingClientRect().height + document.getElementsByClassName('section-education')[0].getBoundingClientRect().height / 2 + document.getElementsByClassName('section-skills')[0].getBoundingClientRect().height){
            progress[i].style.width = progress[i].getAttribute("data-percent")
          }
        }
      })
    })
