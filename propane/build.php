#!/usr/bin/php -q
<?php

$me = array_shift($_SERVER['argv']);
$location = array_shift($_SERVER['argv']);

if (empty($location)) {
  echo "Usage: " . $me . " <caveatPatchor.js location>\n\n";
  exit;
}

$location = str_replace('caveatPatchor.js', '', $location);
if (substr($location, -1) != '/') {
  $location .= DIRECTORY_SEPARATOR;
}

$sh = 'cat ' . __DIR__ . DIRECTORY_SEPARATOR . '*.js > "' . $location . 'caveatPatchor.js"';
exec($sh);

echo "Restart Propane to see any changes.\n";
