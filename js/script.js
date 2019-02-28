let menuButton = document.getElementsByClassName('menuButton')[0];
let dropDownMenu = document.getElementsByClassName('drop-menu')[0];
let toTop = document.getElementsByClassName('toTop');
let scrollMenu = document.getElementsByClassName("scroll");
let myWork = document.getElementsByClassName('work-example');
let progress = document.getElementsByClassName("progress");
// SCROLLING --->
scrollMenu[1].addEventListener('click', ()=>{
    window.scrollTo({
      top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height,
      behavior: "smooth"
     })
})

scrollMenu[2].addEventListener('click', ()=>{
    window.scrollTo({
      top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height + document.getElementsByClassName('about-me')[0].getBoundingClientRect().height,
      behavior: "smooth"
     })
})

scrollMenu[3].addEventListener('click', ()=>{
    window.scrollTo({
      top: document.getElementsByClassName('representation')[0].getBoundingClientRect().height + document.getElementsByClassName('about-me')[0].getBoundingClientRect().height + document.getElementsByClassName('section-education')[0].getBoundingClientRect().height + document.getElementsByClassName('section-skills')[0].getBoundingClientRect().height + 100,
      behavior: "smooth"
     })
})
//<--- SCROLLING

menuButton.addEventListener("click", ()=>{
  if(dropDownMenu.style.display == "none"){
    dropDownMenu.style.display = "block"
  }
  else {
    dropDownMenu.style.display = "none"
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
          if($(window).scrollTop() >= 2489){
            progress[i].style.width = progress[i].getAttribute("data-percent")
          }
        }
      })
    })
