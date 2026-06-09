
function fuja() {
    var botaoNao = document.getElementById("btnNao");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);
    
    botaoNao.style.position = "absolute";

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

function teamo() {
    var painel = document.querySelector(".painel");
    painel.style.paddingTop = "20px";
    
    painel.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 22px; color: #ff0000ff; margin-bottom: 15px; padding: 0 15px;">Você é o meu lugar favorito no mundo. 🥰</h2>
        
        <img src="https://media.giphy.com/media/1hp9jlHrOqweEtrJKl/giphy.gif" 
             alt="Feliz Dia dos Namorados" 
             style="max-width: 85%; max-height: 230px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); object-fit: contain;">
        
        <p style="font-size: 24px; font-weight: bold; margin-top: 15px; font-family: 'Dancing Script', cursive; color: #ff0000ff;">Te amo! ❤️</p>
    `;
    
    var botaoNao = document.getElementById("btnNao");
    if (botaoNao) {
        botaoNao.style.display = "none";
    }

    var duracao = 4 * 1000; 
    var fim = Date.now() + duracao;

    var coracao = confetti.shapeFromPath({
        path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
    });

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#ff0055', '#ff5252', '#ffb3ba'],
            shapes: [coracao],
            scalar: 2 
        });
        
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#ff0055', '#ff5252', '#ffb3ba'],
            shapes: [coracao],
            scalar: 2
        });

        if (Date.now() < fim) {
            requestAnimationFrame(frame);
        }
    }());
}