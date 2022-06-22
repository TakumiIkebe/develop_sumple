(function($){
  $(document).ready(function(){
    $("#add").on("click",function(){
      if(parseInt($("#display").text())<100){
    $("#display").text(parseInt($("#display").text())+1);
    }})
   $("#sub").on("click",function(){
     if(parseInt($("#display").text())>0){
    $("#display").text(parseInt($("#display").text())-1);
    }});
    $("#mul").on("click",function(){
      if(parseInt($("#display").text())<50){
    $("#display").text(parseInt($("#display").text())*2);
    }else if(parseInt($("#display").text())>=50){
      $("#display").text(100);
    }});


  });






})(jQuery);
