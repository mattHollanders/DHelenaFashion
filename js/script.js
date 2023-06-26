$(document).ready(function() {
    // Manipular o evento de clique dos nav-items
    $('.nav-item').click(function() {
      // Remover todos os "active" dos nav-items
      $('.nav-item').removeClass('active');
      
          // Obter a classe do nav-item clicado
          var classeItem = $(this).attr('class').split(' ')[1];
          classeItem = classeItem.split('-')[2];
  
      // Adiciona a classe "active" ao nav-item clicado
      $(this).addClass('active');

      // Mostra as imagens correspondentes ao nav-item no carrossel
      $('.carousel-item').hide();
      $('.carousel-item-' + classeItem).show();
    });
  });
  