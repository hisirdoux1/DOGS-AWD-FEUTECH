document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = 'opacity 1.062s';
  
    window.onload = () => {
      body.style.opacity = 1;
    };
  });