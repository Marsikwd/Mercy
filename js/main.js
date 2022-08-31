$(".toogle").on('click', function () {
  $('body').toggleClass('open');
  $('main').toggleClass('down');
});



document.querySelector('.click-for-video').onclick = function () {
  this.style.display = 'none';
  document.querySelector('div.youtube').style.display = 'block';
  document.querySelector('iframe.youtube')
    .src = "https://www.youtube.com/embed/3PZ65s2qLTE";
};


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
  observer.observe(elm);
}