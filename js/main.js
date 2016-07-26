/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/


// document ready function created for the main purpose of using the Leaflet API focusing on the area of MT rainier
$(document).ready(function(){

// sat layer created using the mapbox api. 
var satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/kmcweeney/ciqx5hygf000bbdm1xf2rh2cz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia21jd2VlbmV5IiwiYSI6ImNpcXZuZmN1bTAwMXhmcG1nNjR1Zzg2ZDYifQ.ePd61-kW6c8vpSxmKQFHOA', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  minZoom: 8, maxZoom: 16,
});
// basic street view using the mapbox api.
var originalLayer = L.tileLayer('https://api.mapbox.com/styles/v1/kmcweeney/ciqx1bdgm0003bikvpenkslb8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia21jd2VlbmV5IiwiYSI6ImNpcXZuZmN1bTAwMXhmcG1nNjR1Zzg2ZDYifQ.ePd61-kW6c8vpSxmKQFHOA', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  minZoom: 8, maxZoom: 16,
});
// outdoor/terrain view also by using the mapbox api.
var outdoorLayer = L.tileLayer('https://api.mapbox.com/styles/v1/kmcweeney/ciqx4vb9h0001beme4jnar6ug/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia21jd2VlbmV5IiwiYSI6ImNpcXZuZmN1bTAwMXhmcG1nNjR1Zzg2ZDYifQ.ePd61-kW6c8vpSxmKQFHOA', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  minZoom: 8, maxZoom: 16,
});
// variable created the link all of the map layers together
var mapLayers = {
    "Satellite": satLayer,
    "Basic": originalLayer,
    "Outdoors": outdoorLayer,
};
  
// set the main poin of the map to the top of MT Rainier.  
var mymap = L.map('map-container').setView([46.852984, -121.760368,], 11);
L.control.layers(mapLayers).addTo(mymap);
satLayer.addTo(mymap);  
// marker added to the map at the top of MT Rainier. also showing the highest point.  
var marker = L.marker([46.852984, -121.760368,]).addTo(mymap);
  marker.bindPopup("<p>Top of Mount Rainier. Highest point at 14,411 ft</p>");
// marker added showing a popular tourist spot "The grove of the Patriach"  
var marker2 = L.marker([46.756960, -121.556381]).addTo(mymap);
  marker2.bindPopup("<p>Grove of the Patriarch</p>");
// circle added surrounding an area with a hotel, climbing information center and a bunch of hiking starting points
var circle = L.circle([46.7866252,-121.7343637], 1000).addTo(mymap);
  circle.bindPopup("<p>Paradise Inn & Climbing Information Center")
  
  
// click function added for smooth scrolling when you click on a link in the navbar
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  

});
