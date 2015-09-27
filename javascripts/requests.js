function JqueryAjax() {
	if ( this instanceof Window ) {
		// throw Error("こらー！newして使ってくださいね");
		return new JqueryAjax();
	}
	var self = this;
	self.get = function(params) {
		return $.ajax({
			async    : true,
			//cache    : false,
			type     : "GET",
			dataType : params.dataType || "json",
			url      : params.url || "/",
			data     : params.data || {},
			context  : params.context || document,
			success  : params.success || function(data){ console.log( data ); }
		});
	}
	self.post = function(params) {
		var fd = new FormData();
		return $.ajax({
			async    : true,
			cache    : false,
			type     : "POST",
			dataType : params.dataType || "json",
			url      : params.url || "/",
			data     : fd,
			context  : params.context || document,
			success  : params.success || function(data){ console.log( data ); },
			xhr      : params.xhr || function(){
				XHR = $.ajaxSettings.xhr();
				if( XHR.upload ){
					XHR.upload.addEventListener('progress',function(e){
						progre = parseInt( e.loaded / e.total * 10000 ) / 100;
						console.log(progre+"%");
						$("#progress-bar").width(progre + "%");
					}, false);
				}
				return XHR;
			}
		});
	}
}
