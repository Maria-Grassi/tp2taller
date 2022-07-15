formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	/*var l = document.getElementById("number");
	window.setInterval(function(){
	  l.innerHTML = n;
	  n++;
	},1000);*/
var nombre= "Marcos";
var comentario= document.getElementById('contribucion').value;
var haceCuanto=`hasce 1 seg`; //ajustar con reloj
var respetarN="4"// sumar si el usuario da respetar
	var contribucion = document.createElement("div");
	contribucion.setAttribute("id","comentarito");
	var nombres = document.createElement("h5");
	nombres.setAttribute("id","hector");
	nombres.innerHTML=nombre;
	//var tiempo = document.createElement("h6");
	//tiempo.setAttribute("id","tiempo");
	//tiempo.innerHTML=haceCuanto;
	var coment = document.createElement("p");
	coment.setAttribute("class","coment");
	coment.innerHTML=comentario;
	//var respetar=document.createElement("div");
	//respetar.setAttribute("id","respetar");
	//respetar.innerHTML=`
	//<p>Respetar<img src="respetar.png">${respetarN}</p>`;
	//var contribuir=document.createElement("div");
	//contribuir.setAttribute("id","contribuir");
	//contribuir.innerHTML=`
	//<p>Responder<img src="responder.png" id="responderComentFijo"></p>`;
	contribucion.appendChild(nombres);
	//contribucion.appendChild(tiempo);
	contribucion.appendChild(coment);
	//contribucion.appendChild(respetar);
	//contribucion.appendChild(contribuir);
	document.getElementById("caja-contribuciones").prepend(contribucion);
	formulario.reset();

		});
	
		
		
	

