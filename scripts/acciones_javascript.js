console.log("Bienvenido al portafolio de Carlos Mateos");
// Esperamos a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos los enlaces de los proyectos
    const enlaces = document.querySelectorAll('a');  // Seleccionamos todos los enlaces <a>
    
    // Añadimos un evento de clic a cada enlace
    enlaces.forEach(function(enlace) {
      enlace.addEventListener('click', function(evento) {
        // Prevenimos que el enlace se siga (evitar que se navegue)
        evento.preventDefault();
  
        // Mostramos un mensaje en la consola o una alerta
        console.log('Has hecho clic en ' + enlace.textContent);
        alert('Has hecho clic en ' + enlace.textContent);
  
        // Si deseas, puedes redirigir al usuario después del mensaje
        window.location.href = enlace.href;
      });
    });
  });
  