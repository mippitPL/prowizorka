angular.module("taxApp").factory('notificationService', [notificationService]);

function notificationService($http, $q) {
	var factory = {}
    
    if(! ('Notification' in window) ){
        console.log('Web Notification not supported');
        return;
    }   

	navigator.serviceWorker.register('sw.js');

	function showNotification() {
	  Notification.requestPermission(function(result) {
	    if (result === 'granted') {
	      navigator.serviceWorker.ready.then(function(registration) {
	        registration.showNotification('Vibration Sample', {
	          body: 'Buzz! Buzz!',
	          // icon: '../images/touch/chrome-touch-icon-192x192.png',
	          vibrate: [200, 100, 200, 100, 200, 100, 200],
	          tag: 'vibration-sample'
	        });
	      });
	    }
	  });
	}

	showNotification();
	
    return factory;
}

