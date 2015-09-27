function JqueryAjax() {
	if ( this instanceof Window ) {
		// throw Error("こらー！newして使ってくださいね");
		return new JqueryAjax();
	}
	var self = this;
	self.get = function(params) {
		console.log( params );
	}
}
