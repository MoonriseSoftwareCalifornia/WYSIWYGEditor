/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import { Plugin } from '@ckeditor/ckeditor5-core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import addImageIcon from './theme/add-image.svg';

export default class InsertImageUI extends Plugin {
	static get pluginName() {
		return 'InsertImage';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		const model = editor.model;

		// Add the "cosmoswpspagelinkButton" to feature components.
		editor.ui.componentFactory.add( 'insertImage', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Insert image uploaded to this website.' ),
				icon: addImageIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
                if (window.parent.openInsertImageModel) {
                    window.parent.openInsertImageModel(editor);
                } else {
                    alert("Executed openInsertImageModel()");
                }
			} );

			return view;
		} );
	}
}