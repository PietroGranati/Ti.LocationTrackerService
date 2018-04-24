var win = Ti.UI.createWindow();

var LUS = require("ti.locationupdatesservice");
win.addEventListener("open", function() {
	console.log("open");
	LUS.requestLocationUpdates({
		interval : 10
	});
});
win.addEventListener("close", function() {
	console.log("TiGeoLogger: close");
	LUS.removeLocationUpdates();
});

LUS.config({
	database : "geolog", // tablename the same
	notification : {
		channel : "cannel1",
		title : "Your position",
		stopTracking : "Stop tracking", // or null if you don't need
		startTracking : "Start tracking", // or null if you don't need

	}
});
LUS.addEventListener("ServiceConnectionChanged", function(e) {
	console.log(e.connected);
});
LUS.addEventListener("LocationChanged", function(e) {
	console.log(e.latitude + ',' + e.longitude + ' @' + e.time);
});

win.open();
