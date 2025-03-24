var isPlayingSim = false;
var isPlayingNao = false;
var fundoOriginal = "pink"; 
function sim() {
    var musica = document.getElementById('musica');
    var mensagem = document.getElementById('mensagem');
    var musicaNao = document.getElementById('musicaNao');
    var mensagemNao = document.getElementById('mensagemNao');

    if (isPlayingSim) {
        musica.pause();
        mensagem.style.display = 'none';
        isPlayingSim = false;
        document.body.style.backgroundImage = 'none'; 
        document.body.style.backgroundColor = fundoOriginal; 
    } else {
        musica.play();
        mensagem.style.display = 'block';
        isPlayingSim = true;
        document.body.style.backgroundImage = "url('song/foto.jpg')"; 
        document.body.style.backgroundSize = "700px 1150px"; 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center"; 
    }
}

function nao() {
    var musicaNao = document.getElementById('musicaNao');
    var mensagemNao = document.getElementById('mensagemNao');
    var musica = document.getElementById('musica');
    var mensagem = document.getElementById('mensagem');

    if (isPlayingNao) {
        musicaNao.pause();
        mensagemNao.style.display = 'none';
        isPlayingNao = false;
    } else {
        musicaNao.play();
        mensagemNao.style.display = 'block';
        isPlayingNao = true;

        if (isPlayingSim) {
            musica.pause();
            mensagem.style.display = 'none';
            isPlayingSim = false;
            document.body.style.backgroundImage = 'none'; 
            document.body.style.backgroundColor = fundoOriginal; 
        }
    }
}