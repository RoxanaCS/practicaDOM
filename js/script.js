function add(){
  /*hay que almacenar el valor que entrega el usuario en el comentario*/
  var comments = document.getElementById("comment").value;
/*limpiar el campo de añadir comentario del textarea*/
  document.getElementById("comment").value = "";
  /*creando la sección de comentarios*/
  var newComments = document.createElement('div');
  var cont = document.getElementById('cont');
/*creando un check*/
  var check = document.createElement('input');
  check.type = 'checkbox';
  /*creando el p de los comentarios guardados*/
  var paragraph = document.createElement('p');
  paragraph.classList.add('color');
  /*hay que crear el texto que va dentro del p*/
  var nodoText = document.createTextNode(comments);
  /*metiendo el texto en p*/
  paragraph.appendChild(nodoText);
/*creando los iconos de corazon y de basura*/
  var heart = document.createElement('i');
  heart.classList.add('fa', 'fa-heart', 'heart');

  var trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash', 'trash');

/*el orden es de ir desde dentro hacia afuera, los papás es lo ultimo que se crea*/

  newComments.appendChild(check);
  newComments.appendChild(heart);
  newComments.appendChild(trash);
  newComments.appendChild(paragraph);

  /*ahora hay que agregar el newcomments al div cont*/
  cont.appendChild(newComments);

  /*usando eventos para cuando se haga click pase algo*/
  check.addEventListener('click',function(){
    /*para rayar el parrafo, toggle cambia alguna característica*/
    paragraph.classList.toggle('strike-out');
  })
}
