/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
// variables para el jslint



$.noticias = {};

$.noticias.imprimirNoticiasRss = function(arrayNoticias){ //response.rss.channel.item
    for(var i = 0 ; i<arrayNoticias.length ; i++){
        var caja, lista;
        var donde = i;
        // para los paneles
        caja = $("<div></div>");
        caja.addClass("panel");
        caja.attr("id","item"+donde);
        caja.attr("data-tittle", arrayNoticias[i].title);
        caja.append("<a href='"+arrayNoticias[i].id+"'> " + arrayNoticias[i].title + " </a>");
        $("#contenedorSecundario").append(caja);
    }
    
};

$.noticias.imprimirNoticiasAtom = function(arrayNoticias){ //response.feed.entry
    for(var i = 0 ; i<arrayNoticias.length ; i++){
        var caja, lista;
        var donde = i;
        // para los paneles
        caja = $("<div></div>");
        caja.addClass("panel");
        caja.attr("id","item"+donde);
        caja.attr("data-tittle", arrayNoticias[i].title);
        caja.append("<a href='"+arrayNoticias[i].id+"'> " + arrayNoticias[i].title + " </a>");
        $("#contenedorSecundario").append(caja);
    }
    
};

/**

    var caja, lista;
    var donde;
    if (pos === undefined) {
        donde = $.marcadores.lista.length-1;
    } else {
        donde = pos;
    }
    // para los paneles
    caja = $("<div></div>");
    caja.addClass("panel");
    caja.attr("data-tittle", canal.nombre);
    caja.attr("id","item"+donde);
    $("#paneles").append(caja);
    // para la rejilla
    lista = $("<li></li>");
    caja = $("<div></div>");
    caja.attr('onClick', '$.ges_error.refreshChannel('+donde+')');
    caja.addClass("grid-photo-box");
    caja.append("<a href='#item"+donde+"'>"+ canal.nombre+" </a>");
    lista.append(caja);
    $("#rejilla").append(lista);

*/