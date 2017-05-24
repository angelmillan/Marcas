/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
// variables para el jslint

function enviarUrl(){
    console.log("Funciona botón url");
    $.marcadores.add($("#urlAlimentador").val());
    //$.marcadores.load();
    
};

function limpiarUrl(){
    
    $("#contenedorSecundario").empty();
    
};


