
function cargarNoticias(){
	$("#noticias").empty();
	$("#noticias").append("<h3> Procesando noticias de: </h3>");
	$("#noticias").append("<h4>"+$("#url").val()+"</h4>");

	 $.ajax({
        url: "http://microserver01:8080/ServidorNoticias/?url="+$("#url").val(),
		success: function( response ) {
			console.log(response);
			if (response.rss != undefined) {
				procesaRSS(response.rss);
			}
			if (response.feed != undefined) {
				procesaATOM(response.feed);
			}
			
		},
		error: function (response) {
			var respuesta = JSON.parse(response.responseText);
			$("#noticias").append("ERROR "+ respuesta.error);
			console.log(response);
		}
	});
}

function procesaRSS(canal) {
	console.log("RSS");
	var num_not = canal.channel.item.length;
	var caja;
	for (var i=0; i<num_not; i++) {
		caja = $("<div/>");
		caja.addClass("well well-sm");
		caja.append("<h5><a href='"+canal.channel.item[i].link+"'>"+canal.channel.item[i].title+"</a></h5>");
		caja.append("<p>"+canal.channel.item[i].description+"</p>");
		caja.append("<p>"+canal.channel.item[i].pubDate+"</p>");
		$("#noticias").append(caja);
	}
}

function procesaATOM(canal) {
	console.log("ATOM");
	var num_not = canal.entry.length;
	var caja;
	for (var i=0; i<num_not; i++) {
		caja = $("<div/>");
		caja.addClass("well well-sm");
		caja.append("<h5><a href='"+canal.entry[i].id+"'>"+canal.entry[i].title+"</a></h5>");
		caja.append("<p>"+canal.entry[i].summary+"</p>");
		caja.append("<p>"+canal.entry[i].updated+"</p>");
		$("#noticias").append(caja);
	}
}





