// 組み込みクラス拡張
var Settings = requirejs.config.settings;
if ( ! Settings.debugging ) {
	console.debug = function(arg) {
		
	}
}
