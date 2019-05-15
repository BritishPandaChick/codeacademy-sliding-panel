$(document).ready(function(){
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
        });
    }); 

/* $(document).ready(function(){
  $('panel').ready(function(){
    $('div').eventHandler(function(){
      $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
      });
    });
  });
}); */