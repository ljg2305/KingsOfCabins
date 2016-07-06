$(document).ready(function(){
       $('html, body').scrollTop(0);

      $(window).on('load', function() {
        setTimeout(function(){
          $('html, body').scrollTop(0);
        }, 0);
     });
      
      var pagehash = location.hash;
      if (pagehash) {
        if(pagehash.indexOf('gallery') > -1){
            $("#galleryBtn").addClass('active');
            $("#contents").load("src/content/gallery_content.html");
            $('html,body').animate({
              scrollTop:$().offset().top
            },0);
        } else {
              $(pagehash+'Btn').addClass('active');
              $("#contents").load('src/content/'+location.hash.substring(1)+'_content.html');
            }
      } else {
        $("#homeBtn").addClass('active');
        $("#contents").load("src/content/home_content.html");
      }
    });

    window.onhashchange = function() {
        window.location.reload()
    }


  $(document).ready(function(){
    $("#logo-wrap").hover(function() {
      $("#logo-img").attr("src","src/images/Kings_Of_Cabins_Grey.png");
      
      $("#logo-text").css({ 'color': '#5c5c5c'});

      }, function() {
        $("#logo-img").attr("src","src/images/Kings_Of_Cabins_White.png");      
        $("#logo-text").css({ 'color': '#fff'});
      });
  });