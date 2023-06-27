$(document).ready(function() {
  // Manipular o evento de clique dos nav-items
  $('.nav-item').click(function() {
    // Remover todos os "active" dos nav-items
    $('.nav-item').removeClass('active');
    
    // Obter o índice do nav-item clicado
    var index = $(this).index();

    // Adiciona a classe "active" ao nav-item clicado
    $(this).addClass('active');

    // Atualizar o slide do carrossel com base no índice
    $('#carouselExampleIndicators').carousel(index);
  });

  // Manipular o evento de slide do carrossel
  $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    // Obter o índice do slide ativo
    var index = event.to;

    // Remover todos os "active" dos nav-items
    $('.nav-item').removeClass('active');
    
    // Adicionar a classe "active" ao nav-item correspondente ao slide
    $('.nav-item').eq(index).addClass('active');
  });
});
  