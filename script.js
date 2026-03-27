let trilho = document.getElementById('trilho');
let body = document.body;

if (trilho) {
    trilho.addEventListener('click', () => {
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');

        // troca imagens
        atualizarImagens();

        // salva tema
        localStorage.setItem('tema', body.classList.contains('dark') ? 'dark' : 'light');
    });
}

function atualizarImagens() {
    const dark = document.body.classList.contains('dark');

    document.getElementById('img1').src = dark ? 'img1black.png' : 'img1.png';
    document.getElementById('img2').src = dark ? 'img2black.png' : 'img2.png';
    document.getElementById('img3').src = dark ? 'img3black.png' : 'img3.png';
}



// aplica tema salvo
let temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
    document.body.classList.add('dark');

    let trilho = document.getElementById('trilho');
    if (trilho) {
        trilho.classList.add('dark');
    }
}

// atualiza imagens ao carregar
atualizarImagens();
