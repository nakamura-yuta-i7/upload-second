$(function(){
	new DndAction();
});

function DndAction() {
	var self = this;
	self.isDragIn = false;

	self.initialize = function() {
		self.setDndEvent();
		self.setButtonEvent();
	}
	self.setDndEvent = function () {

		$("body").on("dragenter", function(e){
			console.log( e.type );
			if ( self.isDragIn ) {
				return false;
			}
			dragIn();
		});

		$(document).on("drop dragleave", "#transparentView", function(e){
			console.log( e.type );
			dragOut();
			e.preventDefault();

		}).on("drop dragover", function(e) {
			console.log( e.type );
			e.preventDefault();

		}).on("drop", function(e) {
			console.log( e );

			var files = e.originalEvent.dataTransfer.files;
			console.log( files );
			uploadFiles( files );
		});

		function uploadFiles(files) {
			var validFiles = [];
			Object.keys(files).forEach(function(key){
				var file = files[key];

				console.log( file );
				// file sample object:
				// lastModified: 1442898478000
				// lastModifiedDate: Tue Sep 22 2015 14:07:58 GMT+0900 (JST)
				// name: "credentials_1.csv"
				// size: 133
				// type: "text/csv"
				// webkitRelativePath: ""

				try {
					uploadFileCheck(file);
					console.log( "success file: " + file.name );
					validFiles.push( file );
				} catch (err) {
					console.log( err.message );
				}
			});

			console.log( "validFiles" );
			validFiles.forEach(function(file){
				upload(file);
			});
		}
		function upload(file) {
			var ajax = JqueryAjax();
			ajax.get({file: file});
		}
		function uploadFileCheck(file) {
			if ( file.size > 100 ) {
				throw Error("ファイルサイズ上限は100byteです。");
			}
		}

		function dragIn() {
			$("body").append( $("<div id=transparentView></div>") );
			self.isDragIn = true;
		}
		function dragOut() {
			$("#transparentView").remove();
			self.isDragIn = false;
		}
	}
	self.setButtonEvent = function() {
		$(document).on("click", "#showIsDragIn", function(e) {
			console.log( $(e.target).attr("id") );
			console.log( e.type );
			showIsDragIn()
		});
		function showIsDragIn() {
			alert( self.isDragIn );
		}
	}
	this.initialize();
}
