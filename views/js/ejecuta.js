function llenaredificios(){
	var req= new XMLHttpRequest();
	req.open("GET","http://localhost:3000/edificios");
	req.send(null);

	var edificios= JSON.parse(req.responsetext);
	var mapa= document.getElementById("map");

	for (var i = 0; i < edificios.length; i++) {
		
		var edif=[
		{lat: edificios[i].lat1 lng: edificios[i].lng1 },
		{lat: edificios[i].lat2 lng: edificios[i].lng2 },
		{lat: edificios[i].lat3 lng: edificios[i].lng3 },
		{lat: edificios[i].lat4 lng: edificios[i].lng4 },
		{lat: edificios[i].lat1 lng: edificios[i].lng1 }
		];

		var rectagulos= new google.maps.polygon({
		  paths: edif,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
		});
		rectagulos.setMap(mapa);
}