document.getElementById("menu").addEventListener('click',function(e) {
    e.preventDefault();
    alert('le site est en maintenance. les autres pages ne sont pas disponible.')
}) 

document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.d-grid-3');

    block.addEventListener('click', function() {
        block.style.transform = 'translatey(100px)';
    });
});




