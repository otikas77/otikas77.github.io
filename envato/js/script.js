let seconds = document.getElementsByClassName('clock-number')[3];
let minutes = document.getElementsByClassName('clock-number')[2];
let hours = document.getElementsByClassName('clock-number')[1];
let dropMenu = document.getElementsByClassName("time-and-menu-wraper");
let dropDown = document.getElementsByClassName("drop-down");
let mapButton = document.querySelector(".map-btn");
let nav = document.getElementsByClassName('nav-target');
let scrollToTop = document.getElementsByClassName("to-top")[0]

setInterval(()=>{
	let secondsMinusOne = +(seconds.innerText) - 1
	seconds.innerHTML = secondsMinusOne
	if(seconds.innerHTML == 0){
		seconds.innerHTML = 59
		let minutesMinusOne = +(minutes.innerText) - 1
			minutes.innerHTML = minutesMinusOne
			if(minutes.innerHTML == 0){
				minutes.innerHTML = 59
				let hoursMinusOne = +(hours.innerText) - 1
					hours.innerHTML = hoursMinusOne
			}
	}
}, 1000)
	

for(let i = 0; i <= dropMenu.length - 1; i++){
		dropMenu[i].addEventListener("click", function(){
			if(!dropDown[i].classList.contains('drop-down-active')){
				for(let i = 0; i <= dropMenu.length - 1; i++){
					dropDown[i].classList.remove("drop-down-active")
				}
			}
			if(!dropMenu[i].classList.contains("time-and-menu-wraper-active")){
				for(let i = 0; i <= dropMenu.length - 1; i++){
					dropMenu[i].classList.remove("time-and-menu-wraper-active")
				}
			}
			dropDown[i].classList.toggle("drop-down-active")
			dropMenu[i].classList.toggle("time-and-menu-wraper-active")
	});
}

mapButton.onclick = function(){
	document.querySelector(".contact-us").style.display = "none";
	document.querySelector("iframe").style.display = "block"

}


//Navigation scrolling---> 

function scroll(position){
	window.scrollTo({
		top: position,
		behavior: "smooth"
	})
}


for(let i= 0; i<=nav.length - 1; i++){
	nav[i].addEventListener("click", function(){
		let func = new scroll(nav[i].getAttribute("data-scroll-position"))
		
	})
}

//<---Navigation scrolling

scrollToTop.addEventListener('click', function(){
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})


