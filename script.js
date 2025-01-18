let container = document.querySelector('.container');

// Fungsi untuk memunculkan elemen love
function showLove() {
  document.querySelector('.love').style.opacity = "1";
  document.querySelector('.love-back').style.opacity = "1";
}

// Event untuk mouse move
window.addEventListener('mousemove', (e) => {
  let x = e.pageX / window.innerWidth * 360;
  let y = e.pageY / window.innerHeight * 360;
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  showLove();
});

// Event untuk mouse out
window.addEventListener('mouseout', () => {
  container.style.animation = "animate 45s linear infinite";
});

// Event untuk touch move
window.addEventListener('touchmove', (e) => {
  let touch = e.touches[0];
  let x = touch.pageX / window.innerWidth * 360;
  let y = touch.pageY / window.innerHeight * 360;
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  showLove();
});

// Event untuk touch end
window.addEventListener('touchend', () => {
  container.style.animation = "animate 45s linear infinite";
});

// Event tambahan untuk memastikan elemen love muncul saat disentuh
container.addEventListener('touchstart', showLove);
