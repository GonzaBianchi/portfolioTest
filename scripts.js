const nav = document.querySelector('#sidebar');
const lista = nav.querySelector('#sidebarItems');


const secciones = [
    document.querySelector('#gonzalo'),
    document.querySelector('#aboutMe'),
    document.querySelector('#projects'),
    document.querySelector('#education'),
    document.querySelector('#experience'),
    document.querySelector('#skills'),
    document.querySelector('#contact')
];

const enlaces = lista.querySelectorAll('a');

enlaces.forEach((enlace, i) => {
    enlace.addEventListener('click', () => {
      secciones[i].scrollIntoView({ behavior: 'smooth' });
      actualizarEnlaces(i);
    });
});
  
function actualizarEnlaces(indiceActivo) {
    enlaces.forEach((enlace, i) => {
      if (i === indiceActivo) {
        enlace.classList.add('activo');
      } else {
        enlace.classList.remove('activo');
      }
    });
}
  
window.addEventListener('scroll', () => {
    const seccionActual = secciones.findIndex(seccion =>
      seccion.offsetTop <= window.scrollY + 50 &&
      seccion.offsetTop + seccion.offsetHeight > window.scrollY + 50
    );
  
    actualizarEnlaces(seccionActual);
});

enlaces[0].classList.add('activo');


// Cierra el dropdown cuando se hace click en cualquier lugar de la página
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }


const emailForm = document.querySelector('#formContact');

  emailForm.addEventListener('submit', (event) => {
  event.preventDefault(); // previene el comportamiento predeterminado de enviar el formulario

  const name = document.querySelector('#name').value;
  const topic = document.querySelector('#topic').value;
  const message = document.querySelector('#message').value;

  const body = message + '\n\n' + name;
  const mailto = 'mailto:gonzalobianchini01@gmail.com?subject=' + encodeURIComponent(topic) + '&body=' + encodeURIComponent(body);
  
  window.location.href = mailto;
});
