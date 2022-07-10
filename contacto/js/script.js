
// Validador de formulario


$(document).ready(function(){

  $("#cform").submit(function(){
    $(this).find(".required").each(function(){
      $flag = true;
     if($(this).val()==""){
       $flag = false;
       $(this).addClass("empty").siblings(".red").children("small").html(" El campo es requerido");
     }
    });
    return $flag; 
  });
});
