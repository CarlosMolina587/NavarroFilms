const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
  
})






// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = {
  0: 'top',
  1: 'right',
  2: 'bottom',
  3: 'left'
};
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));
const getDirectionKey = (ev, node) => {
  const {
    width,
    height,
    top,
    left
  } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - width / 2 * (width > height ? height / width : 1);
  const y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};
class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
  }
  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }
}
nodes.forEach(node => new Item(node));





// Función para verificar cuando el elemento está en el viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll() {
  const section = document.getElementById('sec');
  if (isElementInViewport(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      window.removeEventListener('scroll', showElementOnScroll);
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll);

// Función para ocultar el elemento
function hideElement() {
  const section = document.getElementById('sec');
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll() {
  const section = document.getElementById('sec');
  if (isElementInViewport(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
  } else {
      hideElement(); // Ocultar el elemento si no está en el viewport
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll);

// También debemos asegurarnos de ocultar el elemento inicialmente
hideElement();













// Función para verificar cuando el elemento está en el viewport
function isElementInViewport2(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll2() {
  const section = document.getElementById('sec2');
  if (isElementInViewport2(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      window.removeEventListener('scroll', showElementOnScroll2);
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll2);

// Función para ocultar el elemento
function hideElement2() {
  const section = document.getElementById('sec2');
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll2() {
  const section = document.getElementById('sec2');
  if (isElementInViewport2(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
  } else {
      hideElement2(); // Ocultar el elemento si no está en el viewport
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll2);

// También debemos asegurarnos de ocultar el elemento inicialmente
hideElement2();









// Función para verificar cuando el elemento está en el viewport
function isElementInViewport3(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll3() {
  const section = document.getElementById('sec3');
  if (isElementInViewport(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      window.removeEventListener('scroll', showElementOnScroll3);
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll3);

// Función para ocultar el elemento
function hideElement3() {
  const section = document.getElementById('sec3');
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
}

// Función para mostrar el elemento cuando esté en el viewport
function showElementOnScroll3() {
  const section = document.getElementById('sec3');
  if (isElementInViewport3(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
  } else {
      hideElement3(); // Ocultar el elemento si no está en el viewport
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener('scroll', showElementOnScroll3);

// También debemos asegurarnos de ocultar el elemento inicialmente
hideElement();

