/*
 * http://stackoverflow.com/questions/18260815/use-gapi-client-javascript-to-execute-my-custom-google-api
 * https://developers.google.com/appengine/docs/java/endpoints/consume_js
 * https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientload
 *
 */

/**
 * After the client library has loaded, this init() function is called.
 * The init() function loads the helloworldendpoints API.
 */

function init() {
	
	// You need to pass the root path when you load your API
	// otherwise calls to execute the API run into a problem
	
	// rootpath will evaulate to either of these, depending on where the app is running:
	// //localhost:8080/_ah/api
	// //your-app-id/_ah/api

	var rootpath = "//" + window.location.host + "/_ah/api";
	
	// Load the helloworldendpoints API
	// If loading completes successfully, call loadCallback function
	gapi.client.load('helloworldendpoints', 'v1', loadCallback, rootpath);
}

/*
 * When helloworldendpoints API has loaded, this callback is called.
 * 
 * We need to wait until the helloworldendpoints API has loaded to
 * enable the actions for the buttons in index.html,
 * because the buttons call functions in the helloworldendpoints API
 */
function loadCallback () {	
	// Enable the button actions
	enableButtons ();
}

function enableButtons () {
	// Set the onclick action for the first button
	var btn1 = document.getElementById("input_greet_generically");
	btn1.onclick= function(){greetGenerically();};
	
	// Update the button label now that the button is active
	btn1.value="Click me for a generic greeting";
	
	// Set the onclick action for the second button
	var btn2 = document.getElementById("input_greet_by_name");
	btn2.onclick=function(){greetByName();};
	
	// Update the button label now that the button is active
	btn2.value="Click me for a personal greeting";
	
	var btn3 = document.getElementById("input_period");
	btn3.onclick=function(){greetByPeriod();};
	
	btn3.value="Click me for a period";
	
	var btn4 = document.getElementById("input__greet_by_Full_name");
	btn4.onclick=function(){greetByFullName();};
	
	btn4.value="Click me for a full name greeting";
}

/*
 * Execute a request to the sayHello() endpoints function
 */
function greetGenerically () {
	// Construct the request for the sayHello() function
	var request = gapi.client.helloworldendpoints.sayHello();
	
	// Execute the request.
	// On success, pass the response to sayHelloCallback()
	request.execute(sayHelloCallback);
}

/*
 * Execute a request to the sayHelloByName() endpoints function.
 * Illustrates calling an endpoints function that takes an argument.
 */
function greetByName () {
	// Get the name from the name_field element
	var name = document.getElementById("name_field").value;
	
	// Call the sayHelloByName() function.
	// It takes one argument "name"
	// On success, pass the response to sayHelloCallback()
	var request = gapi.client.helloworldendpoints.sayHelloByName({'name': name});
	request.execute(sayHelloCallback);
}

// Process the JSON response
// In this case, just show an alert dialog box
// displaying the value of the message field in the response
function sayHelloCallback (response) {
	alert(response.message);	
}

function greetByPeriod(){
	var name = document.getElementById("name_field").value;
	var period = document.getElementById("period_field").value; 
	var request = gapi.client.helloworldendpoints.greetByPeriod({'name': name, 'period':period});
	request.execute(sayHelloCallback);
}

function greetByFullName() {
	var name = document.getElementById("name_field").value;
	var SecondName = document.getElementById("second_name_field").value;
	var thirdName = document.getElementById("middle_name_field").value;
	var request = gapi.client.helloworldendpoints.greetByFullName({'name': name, 'secondName':SecondName, 'ThirdName':thirdName});
	request.execute(sayHelloCallback);
}


