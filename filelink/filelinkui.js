/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import { Plugin } from '@ckeditor/ckeditor5-core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import browseFileIcon from './theme/browse-file.svg';

export default class FileLinkUI extends Plugin {
	static get pluginName() {
		return 'FileLink';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		const model = editor.model;

		// Add the "cosmoswpspagelinkButton" to feature components.
		editor.ui.componentFactory.add( 'fileLink', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Link to a file.' ),
				icon: browseFileIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
                if (window.parent.openInsertFileLinkModel) {
                    window.parent.openInsertFileLinkModel(editor);
                } else {
                    alert("Executed window.parent.openInsertFileLinkModel()");
                }
			} );

			return view;
		} );
	}
}