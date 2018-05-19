<?php require_once('manifestLoader.class.php'); ?>
<!doctype html>
<html lang="en">
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Preact Test PHP App</title>
	</head>
	<body>
		<script src="<?php echo ManifestLoader::getHashedFilename('main.js'); ?>" ></script>
	</body>
</html>
