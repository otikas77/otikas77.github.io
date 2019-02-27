let menuButton = document.getElementsByClassName('menuButton')[0]
let dropDownMenu = document.getElementsByClassName('drop-menu')[0]

menuButton.addEventListener("click", ()=>{
  if(dropDownMenu.style.display == "none"){
    dropDownMenu.style.display = "block"
  }
  else {
    dropDownMenu.style.display = "none"
  }
})
