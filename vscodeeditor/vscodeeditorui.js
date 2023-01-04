/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import { Plugin } from '@ckeditor/ckeditor5-core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import editCodeIcon from './theme/vscodeicon.svg';

export default class VSCodeEditorUI extends Plugin {
	static get pluginName() {
		return 'VSCodeEditor';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		const model = editor.model;

		// Add the "cosmoswpspagelinkButton" to feature components.
		editor.ui.componentFactory.add( 'vsCodeEditor', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Open code editor.' ),
				icon: editCodeIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
                if (window.parent.openVsCodeBlockEditor) {
                    window.parent.openVsCodeBlockEditor(editor);
                }
                else {
                    alert("Executed openVsCodeBlockEditor()");
                }
			} );

			return view;
		} );
	}
}