//DOW
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);	
});
*/

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link){

	// Agregar un evneto click a cada uno de ellos - case sensitive -
	link.addEventListener("click", function(ev){
		ev.preventDefault();
		let content = document.querySelector('.content');

		//Quitarle las clases de animacion que ya tiene -
		content.classList.remove("animacionate__fadeInDown");
		content.classList.remove("animate__animated");

		// Agregar clases para animar su salida -fadeOutUp	
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");

		setTimeout(function(){			
			location.href = "/boletines";
		},600)

		

		return false;
	});
});




/*let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
	icono.classList.remove("fa-star-o");
	icono.classList.add("fa-star");	
})*/

