console.log('Hello Epsilon!');

$(document).ready(function(){



	$(function () {
	  // Grab the template script
	  var theTemplateScript = $("#myTemplate").html();

	  // Compile the template
	  var theTemplate = Handlebars.compile(theTemplateScript);

	  // Define our data object
	  var context = {
	    "fName": "Doug",
	    "lName": "Ritzinger",
	    "city": "Vadnais Heights",
	    "sport": "Kayaker",
	    "hobby": "musician",
	    boats: [
	    	{make: "Dagger", model: "Nomad"},
	    	{make: "Jackson", model: "AllStar"},
	    	{make: "Perception", model: "Pirouette"}
	    ]
	  };

	  // Pass our data to the template
	  var theCompiledHtml = theTemplate(context);

	  // Add the compiled html to the page
	  $('.content-placeholder').html(theCompiledHtml);
	});


});