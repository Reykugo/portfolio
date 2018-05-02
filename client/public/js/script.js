$(function(){

    $(".navbar a, footer a#aboutFooter").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });

    $(document).ready(function() {
        if(window.location.href.indexOf('login') != -1) {
          $('#loginModal').modal('show');
        }
      
    });
});
