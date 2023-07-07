/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
// Watchdog to restore editor when it crashes
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import AutoSave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

// START Cosmos WPS plugins
import PageLink from '../pagelink/pagelink';
import VSCodeEditor from '../vscodeeditor/vscodeeditor';
import FileLink from '../filelink/filelink';
import InsertImage from '../insertimage/insertimage';
import SignalR from '../signalr/signalr';
// END Cosmos WPS plugins

import '../theme/theme.css';

class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	AutoSave,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	BlockToolbar,
	Bold,
	CloudServices,
	CodeBlock,
	Essentials,
	FileLink,
	FindAndReplace,
	FontColor,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	InsertImage,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	MediaEmbedToolbar,
	PageLink,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SimpleUploadAdapter,
	SignalR,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	VSCodeEditor
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'pageLink',
		'fileLink',
		'link',
		'|',
		'insertImage',
		'imageInsert',
		'mediaEmbed',
		'|',
		'vsCodeEditor',
		'findAndReplace',
		'codeBlock',
		'|',
		'heading',
		'|',
		'bold',
		'italic',
		'fontColor',
		'underline',
		'fontSize',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent',
		'alignment',
		'|',
		'undo',
		'redo',
		'horizontalLine',
		'highlight',
		'blockQuote',
		'insertTable',
		'removeFormat'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link'
		]
	},
	image: {
		resizeUnit: "%",
		resizeOptions: [{
			name: 'resizeImage:original',
			value: null
		},
		{
			name: 'resizeImage:66',
			value: '6'
		},
		{
			name: 'resizeImage:15',
			value: '15'
		},
		{
			name: 'resizeImage:25',
			value: '25'
		},
		{
			name: 'resizeImage:33',
			value: '33'
		},
		{
			name: 'resizeImage:50',
			value: '50'
		},
		{
			name: 'resizeImage:75',
			value: '75'
		}],
		toolbar: [
			'resizeImage',
			'imageTextAlternative',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'linkImage',
			'toggleImageCaption'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default { BalloonEditor, EditorWatchdog };