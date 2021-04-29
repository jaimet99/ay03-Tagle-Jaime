$(document).ready(function(){
    var foto= $(".foto");
    var parrafo= $(".parrafo");
    var deporte = $(".deport")
    var div= $(".foto");


    deporte.click(function(){
        parrafo.toggle();
    });

    foto.click(function(){
        var idFoto = $(this).attr("id");
        $("#lista").append(", " + idFoto);

    });
    div.mouseenter(function(){
        var idFoto = $(this).attr("id");
        $(this).fadeTo("fast",0.5);
    });
    div.mouseleave(function(){
        var idFoto = $(this).attr("id");
        $(this).fadeTo("fast",1);
    });

});