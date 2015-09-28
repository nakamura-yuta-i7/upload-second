requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
});
requirejs.config = {
	settings: {
		webPath: "/upload-second",
		debugging: true
	}
}

var scripts = [
	// "libs/jquery/jquery-1.11.3.min.js",
	"extension",
	"errors",
	"jquery_ajax",
	"dnd_action",
];
requirejs(scripts, function(){

	try {
		throw new InputStringParserError("yuta");
	} catch (e) {
		if ( e instanceof InputStringParserError ) {
			console.debug( e.message );
		}
	}

	$(function(){
		new DndAction();
	});
});
