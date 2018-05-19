<?php

class ManifestLoader {
	protected static $manifestFilename = 'manifest.json';
	protected static $manifestCache = null;

	public static function load($manifestFilename = null) {
		self::$manifestFilename = is_null($manifestFilename) ? $_SERVER['DOCUMENT_ROOT'] . '/assets/manifest.json' : $manifestFilename;

		$manifest = file_get_contents(self::$manifestFilename);

		if($manifest === FALSE)
			return false;


		$manifestArray = json_decode($manifest, true);

		if(is_null($manifestArray)) {
			trigger_error('Failed decoding JSON output from ' . self::$manifestFilename . '! Please check file contents and or run webpack!', E_USER_ERROR);
			return false;
		}

		self::$manifestCache = $manifestArray;

		return true;
	}

	public static function getHashedFilename($filename) {
		if(is_null(self::$manifestCache))
			self::load();

		return (isset(self::$manifestCache[$filename])) ? self::$manifestCache[$filename] : false;
	}
}
