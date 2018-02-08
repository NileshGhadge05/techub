
 var config = {}; //configuration data
 //SETUP configuration

 //PORT NUMBER
 config.PORT_NUMBER = 8080;
 //PERMITTED_URLS for auth
 config.PERMITTED_URLS = [
		"/", 
		"/dashboard.html",
		"/form-register.html",
		"/assets/css/style.css",
		"/assets/css/bootstrap.css",
		"/assets/js/source/jquery.fancybox.css",
		"/assets/js/custom.js",
		"/assets/js/jquery-1.11.1.js",
		"/assets/js/bootstrap.js",
		"/assets/js/source/jquery.fancybox.js",
		"/assets/js/jquery.isotope.js",
		"/assets/js/scrollReveal.js"
	 ];
 //HTTP_CODES used in app
 config.HTTP_CODES = {OK: 200, BAD_REQUEST: 400, FORBIDDEN: 403, SERVER_ERROR: 500};
 //DOMAIN
 config.DOMAIN = "techub01.herokuapp.com";
 //AUTH TOKEN
 config.TOKEN = undefined;

 module.exports = config; //export
