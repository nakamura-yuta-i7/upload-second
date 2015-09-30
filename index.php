<?php require_once './config.php'; ?><!DOCTYPE html>
<html>
<head>
<!-- IE8+に対して「IE=edge」と指定することで、利用できる最も互換性の高い最新のエンジンを使用するよう指示できます
     参考: https://www.modern.ie/en-us/performance/how-to-use-x-ua-compatible -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- ページのタイトルを記述 -->
<title>ファイルアップロード</title>
<!-- パフォーマンスのために使用する文字のエンコーディングを記述
     参考: https://developers.google.com/speed/docs/best-practices/rendering#SpecifyCharsetEarly -->
<meta charset="utf-8">
<!-- content属性にページの紹介文を記述 -->
<meta name="description" content="">
<!-- content属性にページの著者情報を記述 -->
<meta name="author" content="">
<!-- モバイル端末への対応、ページをビューポートの幅に合わせてレンダリング（Android, iOS6以降）
     ズームを許可しない設定「user-scalable=no」は加えない -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- IE8以下用に2つのスクリプトを記述
     html5shiv.js: IE8以下にHTML5の要素を認識するようにさせる
     respond.js: IE8以下にMedia Queriesの代替え機能を提供 -->
<!--&#91;if lt IE 9&#93;>
<script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<!&#91;endif&#93;-->
<!-- href属性にファビコンファイルのURIを記述 -->
<!-- <link rel="shortcut icon" href=""> -->
<!-- コメントアウトしてあるコードは、iOS/Android用のアイコン指定 -->
<!--
<meta name="mobile-web-app-capable" content="yes">
<link rel="icon" sizes="196x196" href="">
<link rel="apple-touch-icon" sizes="152x152" href="">
-->
<!-- スクリプトでブロッキングを起こさないものはここに記述
     可能であれば「async（文書の読み込みが完了した時点でスクリプトを実行）」を使用
     Example: <script src="" async></script> -->
	 
 <script src="<?php echo WEB_PATH; ?>/libs/jquery/jquery-1.11.3.min.js"></script>
 <script src="<?php echo WEB_PATH; ?>/libs/jquery/jquery.easing.1.3.js"></script>
<script src="<?php echo WEB_PATH; ?>/libs/async.js" async></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" async></script>
<!-- スタイルシートはできるだけ早くレンダリングされるため、HTMLドキュメントの上の方に記述
     href属性にスタイルシートファイルのURIを記述 -->
<link rel="stylesheet" href="<?php echo WEB_PATH; ?>/styles/basic.css">
</head>
<body>


<div class="container text-center">

	<h1 style="margin:2em;">
		<span class="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span>
		DnD Demo
	</h1>
	<p style="margin-bottom:2em;">ドラッグアンドドロップの検証です。</p>

	<div class="row clearfix">
		<div class="col-xs-2">.col-xs-2</div>
		<div class="col-xs-2">.col-xs-2</div>
		<div class="col-xs-2">.col-xs-2</div>
		<div class="col-xs-2">.col-xs-2</div>
		<div class="col-xs-2">.col-xs-2</div>
		<div class="col-xs-2">.col-xs-2</div>
	</div>
	
	<div id="progress-area"></div>
</div>

<!-- スクリプトでブロッキングを起こすものはここに記述
ブロッキングを起こす原因としては、CSSのセレクタ操作（IE）、負荷の高いDOM操作、多数のスクリプトなど -->
<script
	src="<?php echo WEB_PATH; ?>/libs/require/require-2.1.20.js"
	data-main="<?php echo WEB_PATH; ?>/javascripts/main.js"></script>
<!-- <script src="<?php echo WEB_PATH; ?>/javascripts/extension.js"></script>
<script src="<?php echo WEB_PATH; ?>/javascripts/errors.js"></script>
<script src="<?php echo WEB_PATH; ?>/javascripts/jquery_ajax.js"></script>
<script src="<?php echo WEB_PATH; ?>/javascripts/dnd_action.js"></script> -->
</body>
</html>
