
// Include main chrome manifest
require( 'file?name=manifest.json!./chrome/manifest.json' );

// Chrome requires extension icons
require( 'file?name=icon48.png!../assets/icon48.png' );
require( 'file?name=icon128.png!../assets/icon128.png' );

export function loadSettings( callback ) {
	chrome.storage.sync.get( null, ( data ) => {
		callback( data );
	} );
};

export function saveSettings( data ) {
	chrome.storage.sync.set( data );
};
