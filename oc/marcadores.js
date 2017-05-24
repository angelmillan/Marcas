/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
// variables para el jslint


/**

    CANALES USADOS: 
            -RSS(" http://www.ideal.es/jaen/rss/2.0/portada ").
            -ATOM(" http://www.ideal.es/jaen/rss/atom/portada ").
            
    DIRECCIÓN USADA PARA EL SERVIDOR: " http://microserver01:8080/ServidorNoticias/RssServlet?url=(URL ALIMENTADOR) "

*/
$.marcadores = {};

$.marcadores.lista = [];

$.marcadores.add = function(url) {
    $.ajax({
        url: "http://microserver01:8080/ServidorNoticias/RssServlet?url="+ url,
        
        dataType: "json",
        
        success: function( response ) {
            console.log(url);
            if (response.rss !== undefined && response.rss.channel.item.length > 0 ) { //Count o cualquier parámetro que tenga la respuesta
                var n_noticias = response.rss.channel.item.length;
                // añadir RSS
                var alimentador = {
                    "url":url, 
                    "tipo":"rss"};
                $.marcadores.lista.push(alimentador);
                $.marcadores.save();
                console.log(n_noticias);
                console.log(response.rss.channel.item);
                $.noticias.imprimirNoticiasAtom(response.rss.channel.item);
            } else {
                // Probar con atom  
                console.log("Entra en ATOM");
                $.ajax({
                     url: "http://microserver01:8080/ServidorNoticias/RssServlet?url="+ url,
                     dataType: "json",
                    success: function( response ) {
                         var n_noticias = response.feed.entry.length;
                            if (n_noticias >0) { //Count o cualquier parámetro que tenga la respuesta
                            // añadir ATOM
                            var alimentador = {
                                "url":url, 
                                "tipo":"atom"};
                            $.marcadores.lista.push(alimentador);   
                            $.marcadores.save();
                            console.log(n_noticias);
                            console.log(response.feed.entry);
                            $.noticias.imprimirNoticiasAtom(response.feed.entry);
                        } else {
                            // ERROR
                            //Se que el alert no debemos usarlo pero no hay tiempo.
                           alert("Error en la url");
                        }
                    }
                });
                    
            }
        },
        error: function(XHR, textStatus, errorThrown) {
            alert("Error en la url");
        },
        timeout: 3000
    });
};

// Vuelca a localStorage los marcadores
$.marcadores.save = function(){
    localStorage.setItem('canales',JSON.stringify($.marcadores.lista));
};
/**
// Carga de localStorage los marcadores
$.marcadores.load = function(){
    $.marcadores.lista = JSON.parse(localStorage.getItem('canales'));
    if ($.marcadores.lista === null) {
        $.marcadores.lista = new Array(0);
    } else {
        $.noticias.escribirCanal($.marcadores.lista);
        //$.ges_error.generarRejilla($.marcadores.lista);
    }
};

$.marcadores.escribirCanales = function(lista){
      for(var i=0; i<lista.length() ; i++){
          $.noticias.escribirCanal(i);
      }
};
*/