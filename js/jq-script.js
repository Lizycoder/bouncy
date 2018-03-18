$( document ).ready(function() {
	$('#cities').on('change', function(e){
		// geocode();
		reverseGeocode();
	});

	

var map, marker;


function createMarker(coords, map) {
	return new google.maps.Marker({
		position: coords,
		map: map,
		icon: 'favicon.png',
		animation: google.maps.Animation.DROP

	})
}

function createMap (center, zoom) {
	return new google.maps.Map(document.getElementById('map'), {
        		zoom: zoom,
        		center: center
        	});
}

// function geocode (){
//     var geocoder = new google.maps.Geocoder(),
//    		address = $('#cities').val(),
//    		latLng = latLng ? latLng : false;

//    	var options = latLng ? {'location' : latLng} : {'address' : address};

//     geocoder.geocode(options, function(result, status) {
//     	if (status == 'OK' && result.length) {
//     		var point = result[0].geometry.location;

//     		map = map ? map.setCenter(point) : map = createMap(point, 14);
//     		marker ? marker.setMap(null) : '';
//      		marker = createMarker(point, map);

//      		if (latLng) {
//      			return result[0].['formatted_address'];
//      		} else {
//      			return '';
//      		}
//      		if($('body').hasClass('directions')) {
//      			directionsDisplay = new google.maps.DirectionsRenderer();
// 				directionsService = new google.maps.DirectionsService();
//      		} else {

// 	        	drawInfoWindow(map, marker, address);
//      		}

//     	} else {
//     		showError('Така адреса не знайдена');
//     		return '';
//     	}
//     });
	
// }	



