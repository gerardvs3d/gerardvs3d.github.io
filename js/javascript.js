var slideIndex = 0;

showSlides();


function showSlides() {

  var i;

  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {

  slides[i].style.display = "none";  

  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides,2000); // Change image every 2 seconds

}

$('iframe').aspectRatioKeeper()




function showMenu() {
  /*
  var open = document.getElementById("menulist");
  open.style.display = "block";

  document.getElementById('open').style.display = 'none';
  document.getElementById('close').style.display = 'block';
  */
}

function hideMenu() {
  /*
  var close = document.getElementById("menulist");
  close.style.display = "none";

  document.getElementById('open').style.display = 'block';
  document.getElementById('close').style.display = 'none';
  */
}




function showMenu() {
    var open = document.getElementById("menulist");
    open.style.display = "block";
    setTimeout(function() {
        open.style.opacity = "1"; // Mostrar el menú suavemente
    }, 50);
    open.style.pointerEvents = "auto"; // Permitir interacciones con el menú

    document.getElementById('open').style.opacity = '0'; // Ocultar el botón de apertura
    document.getElementById('open').style.pointerEvents = 'none'; // Deshabilitar interacciones con el botón de apertura
    document.getElementById('close').style.opacity = '1'; // Mostrar el botón de cierre
}

function hideMenu() {
    var open = document.getElementById("menulist");
    open.style.opacity = "0"; // Ocultar el menú suavemente
    open.style.pointerEvents = "none"; // Deshabilitar interacciones con el menú
    setTimeout(function() {
        open.style.display = "none";
    }, 200); // Espera hasta que termine la transición antes de ocultar definitivamente el menú

    document.getElementById('open').style.opacity = '1'; // Mostrar el botón de apertura
    document.getElementById('open').style.pointerEvents = 'auto'; // Permitir interacciones con el botón de apertura
    document.getElementById('close').style.opacity = '0'; // Ocultar el botón de cierre
}








