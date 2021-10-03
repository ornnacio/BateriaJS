"use strict";

let teclas = document.getElementById("keys").getElementsByTagName("div");
let sons = document.getElementsByTagName("audio");

document.addEventListener('keydown', (k) => {
	
	for(var i = 0; i < teclas.length; i++){
		
		if(teclas[i].dataset.key == k.keyCode){
			teclas[i].classList.add("playing");
			sons[i].currentTime = 0;
			sons[i].play();
		}
	}
});

document.addEventListener('keyup', (k) => {
	
	for(var i = 0; i < teclas.length; i++){
		
		if(teclas[i].dataset.key == k.keyCode){
			teclas[i].classList.remove("playing");
		}
	}
});