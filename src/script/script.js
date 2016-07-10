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
            $("#contents").load("src/content/gallery_content.html",function(){          
                $('html,body').animate({
                  scrollTop:$(pagehash).offset().top
                },500);
            });
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
      if($("#gallery-page").length && location.hash.indexOf('gallery')>-1) {
        //window.alert("page not reloaded")#
        if(location.hash == "#gallery"){
          $('html,body').animate({
            scrollTop:0
          },500);  
        }
      } else{
       window.location.reload()
      }
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

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // this is some default behavior that still needs to happen
      $("button").attr("aria-expanded","false");
      $("#navbar").attr("aria-expanded","false");
      $("#navbar").addClass("collapsing");
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified 
      if($(hash).length){
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
      } else {
        window.location.hash = hash;
      }
    } // End if
  });
});