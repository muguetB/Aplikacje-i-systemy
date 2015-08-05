  var currentIndex = 0;
      var currentId = "camera";
      $(document).ready(function() {
        $("#nav").ferroMenu({
          position  : "right-center",
          delay     : 50,
          rotation  : 720,
          margin    : 20
        });
      });
      
      var colors = {
          "top" : {
            "background" : "#F4F4F4",
            "index" : 0
          },
          "onas" : {
            "background" : "#F4F4F4",
            "index" : 1
          },
          "oferta" : {
            "background" : "#F4F4F4",
            "index" : 2
          },
          "portfolio" : {
            "background" : "#F6F6F6",
            "index" : 3
          },
          "kontakt" : {
            "background" : "#99B7CA",
            "index" : 4
          },
          "tip" : {
          "background" : "#99B7CA",
            "index" : 5

          },
      };
      
      function goTo(id){
        var obj = eval("colors."+id);
        
        $("body").css("background",obj.background);
     
        if(obj.index > currentIndex){
          $(".active").addClass("off");
          $(".active").transition({
            y : -100,
            opacity : 0,
            zIndex : 0
          },600);
          
          $("#"+currentId).removeClass("active");
          
          $("#"+id).addClass("active");
          $("#"+id).transition({
            y : 400
          },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
              y : 0,
              opacity : 1,
              zIndex : 2
            },600);
          });
        }else if(obj.index < currentIndex){
          $(".active").addClass("off");
          $(".active").transition({
            y : 100,
            opacity : 0,
            zIndex : 0
          },600);
          $("#"+currentId).removeClass("active");
          
          
          $("#"+id).addClass("active");
          $("#"+id).transition({
            y : -400
          },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
              y : 0,
              opacity : 1,
              zIndex : 2
            },600);
          });
        }
        currentIndex = obj.index;
        currentId = id;
      
      }

        function goTo2(id){
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





