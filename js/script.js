$( "button" ).click(function() {
 	$(this).parent().next().slideToggle( "slow" );
   $(this).children().toggleClass("down");
});




function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 47.757, lng: -122.36}
        });

        //T ucker Garden

        var tuckerGarden = {
        	url: 'img/tucker-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.71333, lng: -122.3662},
          map: map,
          icon: tuckerGarden
        });

        // Livingston Garden

        var livingstonGarden = {
        	url: 'img/livingston-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.72435, lng: -122.372},
          map: map,
          icon: livingstonGarden
        });

        // Kunnen Garden

        var kunnenGarden = {
        	url: 'img/kunnen-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.7699483, lng: -122.3658489},
          map: map,
          icon: kunnenGarden
        });

        //Amundson Garden

        var amundsonGarden = {
        	url: 'img/amundson-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.7624672, lng: -122.3786526},
          map: map,
          icon: amundsonGarden
        });

        //Kruckeberg Garden

        var kruckebergGarden = {
        	url: 'img/kruckeberg-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.7762023, lng: -122.3769033},
          map: map,
          icon: kruckebergGarden
        });

        //Thompson Garden

        var thompsonGarden = {
        	url: 'img/thompson-garden.png',
        	anchor: new google.maps.Point(0,0)
        };
        var gardenMarker = new google.maps.Marker({
          position: {lat: 47.8054817, lng: -122.3708337},
          map: map,
          icon: thompsonGarden
        });


      }