// see: http://qiita.com/candyrobot/items/1b99a577e1d58e2d7d4f

//----------------------------------------------
// static class
//----------------------------------------------
var A = {

	_bar: 'メンバ変数',

	hoge: function(){
		return this._foo( this._bar );
	},

	_foo: function( arg ){
		console.log( arg );
	}
};

//呼び出し方
A.hoge();

//----------------------------------------------
// dynamic class (instance, object)
//----------------------------------------------
var A = function(){

	var bar = 'メンバ変数';

	console.log( 'コンストラクタ' );

	this.hoge = function(){
		return foo( bar );
	}

	function foo( arg ){
		console.log( arg );
	}
}

//呼び出し方
var a = new A();
a.hoge();
