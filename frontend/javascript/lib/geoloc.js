/**
 * Created by elwin013 on 15.04.16.
 * File for geolocalization methods.
 */
var currentPosition = {lat: "", lng: "", err: ""};
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pst) {
            currentPosition.lat = pst.coords.latitude;
            currentPosition.lng = pst.coords.longitude;
            currentPosition.err = "";
        }, function() {
            currentPosition = { lat: "", lng: "", err: "Unknown error"};
        });
    } else {
        currentPosition = {lat: "", lng: "", err: "Don't support localization"};
    }
    return currentPosition;
}
