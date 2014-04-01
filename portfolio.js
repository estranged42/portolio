$.fn.wait = function(time, type) {
	time = time || 1000;
	type = type || "fx";
	return this.queue(type, function() {
		var self = this;
		setTimeout(function() {
			$(self).dequeue();
		}, time);
	});
};

var sendToBack = function() {
	$(this).css('z-index', -10);
}

var sendToFront = function() {
	$(this).css('z-index', 10);
}

var hideYourself = function() {
	var offsetOut, offsetIn = 0;
	var position = $(this).position();
	var position = position.left
	if (position < 0) {
		offsetOut = "-=300";
		offsetIn = "+=300";
	} else {
		offsetOut = "+=300";
		offsetIn = "-=300";
	}
	$(this).animate({left: offsetOut}, 100)
			.wait(1000)
			.animate({left: offsetIn}, 300, sendToBack);
}

var showYourself = function() {
	var offsetOut, offsetIn = 0;
	var position = $(this).position();
	var position = position.left
	if (position < 0) {
		offsetOut = "-=300";
		offsetIn = "+=300";
	} else {
		offsetOut = "+=300";
		offsetIn = "-=300";
	}
	$(this).animate({left: offsetOut}, 100)
			.wait(1000)
			.animate({left: offsetIn}, 300, sendToFront);
}

 /**
 * hidenotes
 *
 * This is called when the note button says "Hide Notes".
 * It replaces the button text, unbinds the current function,
 * and sets up the click event to show notes.
 */
var hidenotes = function() {
	//$(".comment").fadeOut(200);
	$(".comment").each(hideYourself);
	$(".notebutton").unbind();
	$(".notebutton").html("Show Notes");
	$(".notebutton").click(shownotes);
}

/**
 * shownotes
 *
 * This is called when the note button says "Show Notes".
 * It replaces the button text, unbinds the current function,
 * and sets up the click event to hide notes.
 */
var shownotes = function() {
	//$(".comment").fadeIn(200);
	$(".comment").each(showYourself);
	$(".notebutton").unbind();
	$(".notebutton").html("Hide Notes");
	$(".notebutton").click(hidenotes);
}

/**
 * This function is called automatically by jQuery when the document
 * has finished loading.  We append a note hide/show button to each
 * webpage element, and set up the click event to hide notes.
 *
 * By creating the buttons dynamically, we can be sure that if 
 * someone has JavaScript disabled in their browser, the buttons 
 * aren't there at all, rather than being there an non-functional.
 */
$(document).ready(function() {
	$(".webpage").append("<div class='graphpaper notebutton'>Hide Notes</div>");
	$(".notebutton").click(hidenotes);	
});

