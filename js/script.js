let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

const counters = document.querySelectorAll('.counter');
setTimeout(() => {
  counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target')
      const c = +counter.innerText
      const increment = target / 200
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 6)
      } else {
        counter.innerText = target
      }
    }
    updateCounter()
  }) 
}, 3000);




const btnChevron = document.getElementById('chevron');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnChevron.style.display = "block";
  } else {
    btnChevron.style.display = "none";
  }
}

btnChevron.addEventListener('click', function () {
  // document.body.scrollTop = 0; // for Safari
  // document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


let loader = document.getElementById('preloader');

  setTimeout(() => {
    window.onload = loader.style.display = 'none';
  }, 3000);

  console.log(loader);



