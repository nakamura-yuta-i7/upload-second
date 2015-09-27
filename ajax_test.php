<?php
$data = [];
$data = array_merge( $_REQUEST, ( isset($_FILES) ? $_FILES : [] ) );
echo json_encode( $data, true );
