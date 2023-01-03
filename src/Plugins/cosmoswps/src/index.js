
import { Plugin, icons } from 'ckeditor5/src/core';
import editCodeIcon from '../theme/icons/vscodeicon.svg';
import browseFileIcon from '../theme/icons/browse-file.svg';
import addImageIcon from '../theme/icons/add-image.svg';
import { ButtonView } from 'ckeditor5/src/ui';

export  class PageLink extends Plugin {
	static get pluginName() {
		return 'PageLink';
	}

	init() {
		
		const t = editor.t;
		const model = editor.model;

		// Add the "cosmoswpspagelinkButton" to feature components.
		this.editor.ui.componentFactory.add( 'pageLink', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Insert link to page on this website.' ),
				icon: icons.plus,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				window.parent.openPickPageModal(this.editor);
			} );

			return view;
		} );
	}
}

export  class VSCodeEditor extends Plugin {
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
				label: t( 'Open Visual Studio Code editor.' ),
				icon: editCodeIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				window.parent.openVsCodeBlockEditor(editor);
			} );

			return view;
		} );
	}
}

export  class FileLink extends Plugin {
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
				label: t( 'LInk to file on this website.' ),
				icon: browseFileIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				window.parent.openInsertFileLinkModel(editor);
			} );

			return view;
		} );
	}
}

export  class InsertImage extends Plugin {
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
				label: t( 'Insert image from this ebsite.' ),
				icon: addImageIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				window.parent.openInsertImageModel(editor);
			} );

			return view;
		} );
	}
}