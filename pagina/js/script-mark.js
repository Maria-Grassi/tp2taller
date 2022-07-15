
 let range = new Range();

 // Cada método demostrado se representa aquí:
 let selection = document.getSelection();

   
 function  insertarNode() { //limitarlo a la nota 
     let selection = document.getSelection();
     range.setStart(selection.anchorNode, selection.anchorOffset);
     range.setEnd(selection.focusNode, selection.focusOffset);

     let content = range.extractContents();
     var divUser=document.createElement("span");
     divUser.setAttribute("id","div-usuario" );
     var user = document.createElement("img");
     user.setAttribute("src","usuario.jpg" );
     user.setAttribute("class","img-usuario" );
     let newNode = document.createElement('span');
     let marcar =document.createElement('mark');
     let Inputcomentario=document.createElement('div');
     
     Inputcomentario.setAttribute("class","mostrar" );
     let inputComentarioResaltado=`<div class="burbuja">
     <div class="title-burbuja">
     <img src="usuario.jpg" alt="" class="img-usuario">
     <h5 class="nombreUsuario">Marcos</h5>
     </div>
     <form action="" class="formulario" id="formulario-resaltar">
     <TExtarea id="comentario-resaltar">
   
     </TExtarea>
     <button onclick="comentar()" class="formulario__btn" id="formulario_resaltar_btn" >comentar</button>
   </form>
     </div>`;
     Inputcomentario.innerHTML=inputComentarioResaltado;
     divUser.appendChild(user);

     marcar.append( content );
     newNode.appendChild(marcar);
    newNode.append(Inputcomentario);
    //newNode.appendChild(divUser);
    
    
     range.insertNode(newNode);
   };

   function comentar(range){ 
        
    range.appendChild(divUser);
   

};



	
 

