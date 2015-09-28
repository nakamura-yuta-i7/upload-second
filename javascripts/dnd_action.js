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
					uploadFileCheck( file );
					validFiles.push( file );
				} catch (err) {
					console.debug( err.message );
				}
			});
			console.log( "async" );
			async.forEachSeries(validFiles, function(file, next){
				console.log( "!!!!!!!!!!!" + file );
				upload(file, function(){
					console.log( "#########" );
					next();
				});
			}, function(err) {
				console.log( "$$$$$$$$$$" );
			});
		}
		function upload(file, callback) {
			
			var uid = uid();
			appendProgreItem();
			
			var Settings = requirejs.config.settings;
			var ajax = JqueryAjax();
			ajax.uploadSingle( file, {
				url : Settings.webPath + "/ajax_upload.php",
				data: {title:"nakamura",name:"yuta"},
				success: function(data) {
					console.debug( data );
					callback();
				},
				xhr : function(){
					XHR = $.ajaxSettings.xhr();
					if( XHR.upload ){
						XHR.upload.addEventListener('progress',function(e){
							progre = parseInt( e.loaded / e.total * 10000 ) / 100;
							console.debug(progre+"% !!!!!!");
							$("#"+ uid ).find(".progre").html(progre + "%");
						}, false);
					}
					return XHR;
				}
			});
			
			function uid() {
				return Math.random().toString(36).substr(2, 9);
			}
			function appendProgreItem() {
				var ul = $("<ul>");
				var li = $("<li>");
				ul.append( li );
				li.append( file.name ).attr("id",uid);
				li.append( $("<span class=progre></span>") );
				$("#progress-area").append( ul );
			}
		}
		function uploadFileCheck(file) {
			var mb = 100;
			if ( file.size > 1000 * 1000 * mb ) {
				throw Error("ファイルサイズ上限は"+ mb +"mbです。");
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
