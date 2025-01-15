let container = document.querySelector('.container');

window.addEventListener('mousemove',(e)=>{
  
  x = e.pageX;
  y = e.pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
})

window.addEventListener('mouseout',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

 window.addEventListener("touchmove",(e)=>{
  
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})

window.addEventListener('touchend',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

container.addEventListener('mouseover',()=>{
  
  document.querySelector('.love').style.opacity = "1";
})
