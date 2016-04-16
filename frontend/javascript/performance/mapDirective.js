angular.module('taxApp').directive('performanceMap', performanceMap);

performanceMap.$inject = ['$window'];

function performanceMap($window) { 
	return {
		scope : {
			data : '=',
			showPerfModal : "&"
		},
		template : '',
		link : function postLink(scope, elem, attrs) {
			var winHeight = $window.innerHeight - 92;
			elem.css('height', winHeight + 'px');

			var createMap = function (lat, long, perf) {
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

                console.warn([lat,long]);
				var marker = L.marker([lat, long], 
					{ 
						icon: L.icon({iconUrl: 'img/marker-icon.png'})
					}
				);
				marker.addTo(map);
				
				return [];
			}

			scope.$watch('data', function(newVal, oldVal) {
				if (newVal) {
					var markers = createMap(newVal.lat, newVal.long, newVal.performances);
				}
			}, true);
		}
	}
}
