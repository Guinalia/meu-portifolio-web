// script.js

// Função para exibir um alerta quando um link de navegação é clicado
document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            alert('Você clicou em um link de navegação!');
        });
    });

    // Função para adicionar um efeito de desaparecimento na imagem do hero
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('click', () => {
            heroImage.style.opacity = 0;
            setTimeout(() => {
                heroImage.style.opacity = 1;
            }, 1000); // Tempo de desaparecimento e reaparecimento
        });
    }

    // Função para alterar a cor do texto dos links ao passar o mouse
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff007f'; // Rosa mais forte
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffffff'; // Cor original
        });
    });

    // Função para adicionar rotação aos vídeos
    const videoContainers = document.querySelectorAll('.video-container iframe');
    videoContainers.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.style.transform = 'rotate(5deg)';
        });
        video.addEventListener('mouseout', () => {
            video.style.transform = 'rotate(0deg)';
        });
    });

    // Contador de visualizações nos vídeos
    const videoViews = {
        'kJXH8CWoAmU': 0,
        'v1RuUpOu0SA': 0,
        '5HNrIWyw--k': 0
    };

    videoContainers.forEach(video => {
        const videoId = video.src.split('/')[4];
        if (videoViews[videoId] !== undefined) {
            video.addEventListener('load', () => {
                videoViews[videoId]++;
                console.log(`Vídeo ${videoId} visualizado ${videoViews[videoId]} vezes.`);
            });
        }
    });
});