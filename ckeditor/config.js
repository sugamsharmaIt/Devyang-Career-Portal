/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
		
	];

	//config.disallowedContent = 'script; *[on*]';
	//config.removePlugins = 'flashupload';

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	
	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	//for word count
	config.extraPlugins = 'wordcount';
	//config.autoParagraph = false;
	//CKEDITOR.editorConfig = function (config) {
	//	config.extraPlugins = 'wordcount';
	//	config.toolbar[
	//		et cetera. . .
 //     ];
	//};

	//config.wordcount = {

	//	// Whether or not you Show Remaining Count (if Maximum Word/Char/Paragraphs Count is set)
	//	showRemaining: true,

	//	// Whether or not you want to show the Paragraphs Count
	//	showParagraphs: true,

	//	// Whether or not you want to show the Word Count
	//	showWordCount: false,

	//	// Whether or not you want to show the Char Count
	//	showCharCount: true,

	//	// Whether or not you want to Count Bytes as Characters (needed for Multibyte languages such as Korean and Chinese)
	//	countBytesAsChars: false,

	//	// Whether or not you want to count Spaces as Chars
	//	countSpacesAsChars: false,

	//	// Whether or not to include Html chars in the Char Count
	//	countHTML: false,

	//	// Whether or not to include Line Breaks in the Char Count
	//	countLineBreaks: false,

	//	// Whether or not to prevent entering new Content when limit is reached.
	//	hardLimit: true,

	//	// Whether or not to to Warn only When limit is reached. Otherwise content above the limit will be deleted on paste or entering
	//	warnOnLimitOnly: true,

	//	// Maximum allowed Word Count, -1 is default for unlimited
	//	maxWordCount: 100,

	//	// Maximum allowed Char Count, -1 is default for unlimited
	//	maxCharCount: 1000,

	//	// Maximum allowed Paragraphs Count, -1 is default for unlimited
	//	maxParagraphs: -1,

	//	// How long to show the 'paste' warning, 0 is default for not auto-closing the notification
	//	pasteWarningDuration: 0,

	//	charLimit: 1000,
	
	//	// Add filter to add or remove element before counting (see CKEDITOR.htmlParser.filter), Default value : null (no filter)
	//	filter: new CKEDITOR.htmlParser.filter({
	//		elements: {
	//			div: function (element) {
	//				if (element.attributes.class == 'mediaembed') {
	//					return false;
	//				}
	//			}
	//		}
	//	})
	//};
	//CKEDITOR.instances.editor1.wordCount.charCount;
};
