var jsdom = require('jsdom').jsdom
  // , myWindow = jsdom().createWindow()
  , $ = require('jquery')
  // , jq = require('jQuery').create()
  // , jQuery = require('jQuery').create(myWindow)
  ;
var exec = require('child_process').exec;

exec('curl -s -S -L -k https://dena.jp', function (error, stdout, stderr) {
    if(stdout){
		var h2s = $(stdout).find("h2");
		Object.keys(h2s).forEach(function(key){
			var h2 = h2s[key];
			console.log( h2 );
		});
    }
    if(stderr){
        console.log('stderr: ' + stderr);
    }
    if (error !== null) {
      console.log('Exec error: ' + error);
    }
});
