
// função para fechar o popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}


// exibe o popup de forma automatica
if (window.location.href === window.location.origin + '/'){
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
})
}; 

//exibe popup de forma manual - nao esta sendo usada mas criei para futuro uso
function botaoExibePopup(){
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

//opcao de ir para o site - homepage
function redirecionaProsite() { 
    window.location.href = 'https://brazildesignhome.cl/';
}


//opcao de ir para pagina de duvidas
function redirecionaPraProductos() {
    window.location.href = 'https://brazildesignhome.cl/catalogo/';
}

 // Função para exibir o popup
function exibirPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Adiciona um ouvinte de evento para exibir o popup quando o botão for clicado
document.getElementById('exibirPopupBtn').addEventListener('click', exibirPopup);

function abrirWhatsApp(){
    var numeroWhatsapp = '56952309933';
       var urlWhatsapp = 'https://api.whatsapp.com/send?phone=' + numeroWhatsapp;
        window.location.href = urlWhatsapp;

}

