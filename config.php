<?php
if ( isset($_SERVER['REQUEST_URI']) ) {
	define("WEB_PATH", substr(parse_url($_SERVER['REQUEST_URI'])["path"], 0, -1) );
}
