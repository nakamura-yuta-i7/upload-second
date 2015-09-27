// 組み込みクラス拡張
console.debug = function(arg) {
	var Settings = requirejs.config.settings;
	if ( Settings.debugging ) {
		console.log( arg );
	}
}
