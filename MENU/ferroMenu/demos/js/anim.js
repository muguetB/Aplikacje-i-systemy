  var currentIndex = 0;
      var currentId = "camera";
      $(document).ready(function() {
        $("#nav").ferroMenu({
          position  : "right-center",
          delay     : 50,
          rotation  : 1420,
          margin    : 20
        });
      });
      
      var colors = {
          "top" : {
            "background-image" : "#99B7CA",
            "index" : 0
          },
          "onas" : {
            "background" : "#99B7CA",
            "index" : 1
          },
          "oferta" : {
            "background" : "#99B7CA",
            "index" : 2
          },
          "portfolio" : {
            "background" : "#99B7CA",
            "index" : 3
          },
          "kontakt" : {
            "background" : "#99B7CA",
            "index" : 4
          }
      };
      
      function goTo(id){
        var obj = eval("colors."+id);
        
        $("body").css("background",obj.background);
       
        if(obj.index > currentIndex){
          $(".active").addClass("off");
          $(".active").transition({
            x : -100,
            opacity : 0,
            zIndex : 0
          },600);
          
          $("#"+currentId).removeClass("active");
          
          $("#"+id).addClass("active");
          $("#"+id).transition({
            x : 400
          },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
              x : 0,
              opacity : 1,
              zIndex : 2
            },600);
          });
        }else if(obj.index < currentIndex){
          $(".active").addClass("off");
          $(".active").transition({
            x : 100,
            opacity : 0,
            zIndex : 0
          },600);
          $("#"+currentId).removeClass("active");
          
          
          $("#"+id).addClass("active");
          $("#"+id).transition({
            x : -400
          },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
              x : 0,
              opacity : 1,
              zIndex : 2
            },600);
          });
        }
        currentIndex = obj.index;
        currentId = id;
      
      }


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
