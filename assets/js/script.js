//Hamburger
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__nav');

const toggleMenu = () => {
  menu.classList.toggle('is-active');
  hamburger.classList.toggle('is-active')
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
})

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('is-active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});

//Show block scrol
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let services = document.querySelectorAll('.services');
let statistic = document.querySelectorAll('.statistic');
let info = document.querySelectorAll('.info');
let about = document.querySelectorAll('.about');
let news = document.querySelectorAll('.news');
let instagram = document.querySelectorAll('.instagram');
for (let elm of services) {
  observer.observe(elm);
};
for (let elm of statistic) {
  observer.observe(elm);
};
for (let elm of info) {
  observer.observe(elm);
};
for (let elm of about) {
  observer.observe(elm);
};
for (let elm of news) {
  observer.observe(elm);
};
for (let elm of instagram) {
  observer.observe(elm);
};
