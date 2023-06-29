$(document).ready(function() {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
      // Obtém o data-referencia do slide ativo
      var activeSlideReferencia = $(this).find('.carousel-item.active').data('referencia');
  
      // Remover a classe active dos <li>
      $('.navbar-nav .nav-item').removeClass('active');
      var elementoID = 'nav-' + activeSlideReferencia;
      //console.log(elementoID);
      var elemento = document.getElementById(elementoID);
      //console.log(elemento);
      elemento.classList.add('active');
    });
  });
  