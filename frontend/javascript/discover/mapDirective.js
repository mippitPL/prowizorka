angular.module('taxApp').directive('leafletMap', leafletMap);

function leafletMap() { 
	return {
		scope : {
			data : '='
		},
		template : '',
		link : function postLink(scope, elem, attrs) {
			var createMap = function (lat, long) {
				var options = {
					zoom : 12
				}

				var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
				var osmAttrib = '&copy <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
				var osm = new L.TileLayer(osmUrl,  { attribution: osmAttrib });       

				var map = L.map(elem[0], options);
				map.setView(new L.LatLng(lat, long), 12);
				map.addLayer(osm);

				var minLat = lat, minLng = long, maxLat = lat, maxLng = long;

				map.fitBounds([
					[minLat, minLng],
					[maxLat, maxLng]
				], {
					padding: [10, 10]
				});
			}

			scope.$watch('data', function(newVal, oldVal) {
				if (newVal) {
					createMap(newVal.lat, newVal.long);
				}
			}, true);
		}
	}
}