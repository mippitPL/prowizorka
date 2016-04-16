angular.module('taxApp').directive('leafletMap', leafletMap);

leafletMap.$inject = ['$window'];

function leafletMap($window) { 
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

				function onClick(perf) {
					return function () {
						scope.showPerfModal({perf: perf});
					};
				}

				markers = [];
				for (var i = 0; i < perf.length; i++) {
					var p = perf[i];
					var marker = L.marker([p.lat, p.long], 
						{ 
							icon: L.icon({iconUrl: 'img/marker-icon.png'})
						}
					);
					marker.addTo(map).on('click', onClick(p));
					markers[perf[i]] = marker;
				}
				
				return markers;
			}

			scope.$watch('data', function(newVal, oldVal) {
				if (newVal) {
					var markers = createMap(newVal.lat, newVal.long, newVal.performances);
				}
			}, true);
		}
	}
}