var directions = new Array('Zero', 'One', 'Eastbound', 'Three', 'Four', 'Five', 'Westbound');
var stops = new Array(

/* #4 Speedway Westbound */

	{ desc: "Speedway @ Kolb",
	  latitude: 32.235756,
	  longitude: -110.841766,
	  route: 4,
	  direction: 6,
	  stopID: 1934 },

	{ desc: "Speedway @ Wilmot",
	  latitude: 32.236215,
	  longitude: -110.858692,
	  route: 4,
	  direction: 6,
	  stopID: 1976 },

	{ desc: "Speedway @ Craycroft",
	  latitude: 32.236335,
	  longitude: -110.876002,
	  route: 4,
	  direction: 6,
	  stopID: 1904 },

	{ desc: "Speedway @ Country Club",
	  latitude: 32.236245,
	  longitude: -110.92682,
	  route: 4,
	  direction: 6,
	  stopID: 1898 },

	{ desc: "Speedway @ Treat",
	  latitude: 32.236254,
	  longitude: -110.931133,
	  route: 4,
	  direction: 6,
	  stopID: 1968 },

	{ desc: "Speedway @ Tucson",
	  latitude: 32.236272,
	  longitude: -110.935317,
	  route: 4,
	  direction: 6,
	  stopID: 1970 },

	{ desc: "Speedway @ Plumer",
	  latitude: 32.236263,
	  longitude: -110.939598,
	  route: 4,
	  direction: 6,
	  stopID: 1945 },

	{ desc: "Speedway @ Campbell",
	  latitude: 32.236318,
	  longitude: -110.944254,
	  route: 4,
	  direction: 6,
	  stopID: 1896 },

	{ desc: "Speedway @ Warren Underpass",
	  latitude: 32.236236,
	  longitude: -110.946915,
	  route: 4,
	  direction: 6,
	  stopID: 1974 },

	{ desc: "Speedway @ Highland Underpass",
	  latitude: 32.236154,
	  longitude: -110.950879,
	  route: 4,
	  direction: 6,
	  stopID: 1927 },

	{ desc: "Speedway @ Olive Underpass",
	  latitude: 32.23619,
	  longitude: -110.955069,
	  route: 4,
	  direction: 6,
	  stopID: 1941 },

	{ desc: "Speedway @ Euclid",
	  latitude: 32.236159,
	  longitude: -110.959575,
	  route: 4,
	  direction: 6,
	  stopID: 1917 },
	  
/* #4 Speedway Eastbound */
	{ desc: "Speedway @ Euclid",
	  latitude: 32.235896,
	  longitude: -110.95943,
	  route: 4,
	  direction: 2,
	  stopID: 1918 },

	{ desc: "Speedway @ Olive Underpass",
	  latitude: 32.235877,
	  longitude: -110.95501,
	  route: 4,
	  direction: 2,
	  stopID: 1942 },

	{ desc: "Speedway @ Highland Underpass",
	  latitude: 32.235837,
	  longitude: -110.950853,
	  route: 4,
	  direction: 2,
	  stopID: 1928 },

	{ desc: "Speedway @ Warren Underpass",
	  latitude: 32.2359,
	  longitude: -110.946862,
	  route: 4,
	  direction: 2,
	  stopID: 1975 },

	{ desc: "Speedway @ Campbell",
	  latitude: 32.235955,
	  longitude: -110.943782,
	  route: 4,
	  direction: 2,
	  stopID: 1897 },

	{ desc: "Speedway @ Plumer",
	  latitude: 32.235955,
	  longitude: -110.939544,
	  route: 4,
	  direction: 2,
	  stopID: 1946 },

	{ desc: "Speedway @ Plumer",
	  latitude: 32.235977,
	  longitude: -110.935231,
	  route: 4,
	  direction: 2,
	  stopID: 1971 },

	{ desc: "Speedway @ Treat",
	  latitude: 32.235927,
	  longitude: -110.931053,
	  route: 4,
	  direction: 2,
	  stopID: 1969 },

	{ desc: "Speedway @ Country Club",
	  latitude: 32.235896,
	  longitude: -110.92674,
	  route: 4,
	  direction: 2,
	  stopID: 1899 },

	{ desc: "Speedway @ Craycroft",
	  latitude: 32.236044,
	  longitude: -110.875067,
	  route: 4,
	  direction: 2,
	  stopID: 1905 },

	{ desc: "Speedway @ Wilmot",
	  latitude: 32.235437,
	  longitude: -110.856803,
	  route: 4,
	  direction: 2,
	  stopID: 1977 },

	{ desc: "Speedway @ Kolb",
	  latitude: 32.235389,
	  longitude: -110.840358,
	  route: 4,
	  direction: 2,
	  stopID: 1935 }

	);

function updateLocation(position) {
	$('#ll').text(position.coords.latitude + " / " + position.coords.longitude);

	var ht = "";
	ht = "<div>Closest Stops to</div>";
	$('#result').append(ht);

	var closestStops = findClosestStops(position);
	
	var mapURL = "http://maps.google.com/maps/api/staticmap?size=300x300&sensor=false&maptype=roadmap";
	
	var stopsElement = $('#stopsElement');
	stopsElement.html('');
	
	for (var i=0; i < 4; i++) {
		var stop = closestStops[i];
		var url = "http://www.suntran.com/webwatch/ada.aspx?r=" + stop.route + "&d=" + stop.direction + "&s=" + stop.stopID;
		ht = "<li><a href='" + url + "'><h3>" + stop.desc + "</h3><p>" + directions[stop.direction] + "</p></a></li>";
		stopsElement.append(ht);
		mapURL += "&markers=" + stop.latitude + "," + stop.longitude;
	}
	stopsElement.listview("refresh");
	
	var imageElement = $('#imageElement');
	ht = "<img src='" + mapURL + "'>";
	imageElement.append(ht);
	
	/*
	if (stop != null) {
		$('#result').text(stop.desc);
	} else {
		$('#result').text("No stops found");
	}
	loadSuntranPage(stop);
	*/
}

function handleError(error) {
	// alert(error.message);

	var position = new Object();
	position.coords = new Object();
	position.coords.latitude = 32.236154;
	position.coords.longitude = -110.950879;
	updateLocation(position);
	
}

function findClosestStops(position) {
	minVectorLength = 99999999;
	var closestStop = null;

	for (var i=0; i < stops.length; i++) {
		var stop = stops[i];	
		var latDelta = position.coords.latitude - stop.latitude;
		var longDelta = position.coords.longitude - stop.longitude;
		var vectorLengthSquared = (latDelta * latDelta) + (longDelta * longDelta);
		var vectorLength = Math.sqrt(vectorLengthSquared);
		stop.distance = vectorLength;
		if (vectorLength < minVectorLength) {
			minVectorLength = vectorLength;
			closestStop = stop;
		}
	}
	
	stops.sort(compareDistances);
	var closestStops = new Array();
	for (var i=0; i < 4; i++) {
		closestStops.push(stops[i]);
	}
	
	return closestStops;
}

function compareDistances(a, b) {
	return a.distance - b.distance;
}

function loadSuntranPage(stop) {
	var url = "http://www.suntran.com/webwatch/ada.aspx?r=" + stop.route + "&d=" + stop.direction + "&s=" + stop.stopID;
	var ht = "";
	ht += "<iframe width='300' height='400' src='" + url + "'></iframe>";
	$('#routeinfo').html(ht);
}

$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(updateLocation, handleError);
});

