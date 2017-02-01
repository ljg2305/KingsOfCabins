$(document).ready(function(){
       $('html, body').scrollTop(0);

      $(window).on('load', function() {
        setTimeout(function(){
          $('html, body').scrollTop(0);
        }, 0);
     });
      
      var pagehash = location.hash;
      if (pagehash) {
              $(pagehash+'Btn').addClass('active');
              $("#contents").load('src/content/'+location.hash.substring(1)+'_content.html');
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


function carouselNormalization() {
  var items = $('#total_rfurb_carousel .item'), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    if( ! items.length )
        return;

    function normalizeHeights() {
      items.each( function() { //add heights to array
        heights.push( $(this).height() ); 
      } );
      tallest = Math.max.apply( null, heights ); //cache largest value
      items.css( 'min-height', tallest + 'px' );
    };
    normalizeHeights();

    $( window ).on( 'resize orientationchange', function () {
      tallest = 0, heights.length = 0; //reset vars
      items.css( 'min-height', '0' ); //reset min-height
      normalizeHeights(); //run it again 
    } );
}

$(document).ready(function(){
    carouselNormalization()
});