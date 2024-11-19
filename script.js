
let indiceAtual= 0;

const imagens = document.querySelectorAll('.img_carrocel img');

const totalImagens = imagens.length;

function atualizarCarrossel(){

    const larguraImagem = imagens[0].clientWidth;

    document.getElementById('carrocel_img').style.transform = `translateX(${-indiceAtual * larguraImagem}px)`;

}

function proximo(){
    

    indiceAtual = (indiceAtual + 1) % totalImagens;
    atualizarCarrossel();

}
function anterior(){

    indiceAtual =(indiceAtual - 1 + totalImagens) % totalImagens;

    atualizarCarrossel();
}
window.addEventListener('resize', atualizarCarrossel);