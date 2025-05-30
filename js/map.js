

	 function initialize(){
		  google.maps.controlStyle = 'azteca';
		  
			var locations = [
				[
					"New Mermaid",
					36.9079,
					-76.199,
					1,
					"Georgia Mason",
					"",
					"Norfolk Botanical Gardens, 6700 Azalea Garden Rd.",
					"coming soon"
				],
				[
					"1950 Fish Dish",
					36.87224,
					-76.29518,
					2,
					"Terry Cox-Joseph",
					"Rowena's",
					"758 W. 22nd Street in front of Rowena's",
					"found"
				],
				[
					"A Rising Community",
					36.95298,
					-76.25158,
					3,
					"Steven F. Morris",
					"Judy Boone Realty",
					"Norfolk City Library - Pretlow Branch, 9640 Granby St.",
					"found"
				],
				[
					"A School Of Fish",
					36.88909,
					-76.26055,
					4,
					"Steven F. Morris",
					"Sandfiddler Pawn Shop",
					"5429 Tidewater Dr.",
					"found"
				],
				[
					"Aubrica the Mermaid (nee: Aubry Alexis)",
					36.8618,
					-76.203,
					5,
					"Myke Irving/ Georgia Mason",
					"USAVE Auto Rental",
					"Virginia Auto Rental on Virginia Beach Blvd",
					"found"
				],
				[
					"Adroit Infoways",
					22.307159,
					73.181219,
					6,
					"Manjalpur",
					"Monalisa Bussiness Center",
					"Vadodara",
					"found"
				],
				[
					"Dabhoi",
					22.132339,
				   73.412128,
					7,
					"krishna cenema",
					
				],
					[
					"Sathod",
					22.125801,
				   73.410170,
					,
					"motufaliyu",
					
				]
			]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      // center: new google.maps.LatLng(-33.92, 151.25),
      center: new google.maps.LatLng(22.307159,73.181219),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
		
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
       
     });
        
      
  

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0], locations[i][6]);
          infowindow.open(map, marker);
          
        }
      }
      )
      (marker, i));
    }
      if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         map.setCenter(initialLocation);
     });
 }
  var flightPlanCoordinates = [
    {lat: 22.307159, lng: 73.181219},
    {lat: 22.132339, lng: 73.412128},
    {lat: 22.125801, lng: 73.410170},
    
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 5
  });

  flightPath.setMap(map);
           
  
        
} 
  google.maps.event.addDomListener(window, 'load', initialize);  
