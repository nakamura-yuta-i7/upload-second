$(function(){
	new DndAction();
});

function DndAction() {
	var self = this;

	self.isDragIn = false;

	self.initialize = function() {
		self.setDndEvent();
	}
	self.setDndEvent = function () {

		$("body").on("dragenter", function(e){
			console.debug( e.type );
			dragIn();
		});

		$(document).on("drop dragleave", "#transparentView", function(e){
			console.debug( e.type );
			dragOut();
			e.preventDefault();

		}).on("drop dragover", function(e) {
			console.debug( e.type );
			e.preventDefault();

		}).on("drop", function(e) {
			console.debug( e.type );
			console.debug( e );

			var files = e.originalEvent.dataTransfer.files;
			uploadFiles( files );
		});

		function uploadFiles(files) {

			// １リクエスト複数ファイルアップロードサンプル:
			// var ajax = JqueryAjax();
			// ajax.uploadMulti( files, {
			// 	url : Settings.webPath + "/ajax_test.php",
			// 	data: {title:"nakamura",name:"yuta"},
			// 	success: function(data) {
			// 		console.debug( "#####" );
			// 		console.debug( data );
			// 		console.debug( "#####" );
			// 	}
			// });

			var validFiles = [];
			Object.keys(files).forEach(function(key){
				var file = files[key];
				// console.debug( file );
				// file sample object:
				// lastModified: 1442898478000
				// lastModifiedDate: Tue Sep 22 2015 14:07:58 GMT+0900 (JST)
				// name: "credentials_1.csv"
				// size: 133
				// type: "text/csv"
				// webkitRelativePath: ""

				try {
					uploadFileCheck(file);
					console.debug( "success file: " + file.name );
					validFiles.push( file );

				} catch (err) {
					console.debug( err.message );
				}
			});

			console.debug( "validFiles" );
			validFiles.forEach(function(file){
				upload(file);
			});
		}
		function upload(file) {

			var Settings = requirejs.config.settings;
			var ajax = JqueryAjax();
			ajax.uploadSingle( file, {
				url : Settings.webPath + "/ajax_test.php",
				data: {title:"nakamura",name:"yuta"},
				success: function(data) {
					console.debug( "!!!!!" );
					console.debug( data );
				}
			});
		}
		function uploadFileCheck(file) {
			if ( file.size > 100 ) {
				throw Error("ファイルサイズ上限は100byteです。");
			}
		}

		function dragIn() {
			if ( self.isDragIn ) {
				return false;
			}
			$("body").append( $("<div id=transparentView></div>") );
			self.isDragIn = true;
		}
		function dragOut() {
			$("#transparentView").remove();
			self.isDragIn = false;
		}
	}
	this.initialize();
}
