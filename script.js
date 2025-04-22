let block = document.querySelector('.rotating-img');

document.addEventListener('mousemove', function(e) {
    if (!block) return;

    let dx = e.pageX - window.innerWidth / 2;
    let dy = e.pageY - window.innerHeight / 2;

    let angleX = 20 * dx / (window.innerWidth / 2);
    let angleY = 20 * dy / (window.innerHeight / 2);

    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
});

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#FFD700'; 
    });
    link.addEventListener('mouseout', function() {
        link.style.color = 'white'; 
    });
});
