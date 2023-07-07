/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import { Plugin, icons } from '@ckeditor/ckeditor5-core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import addPageLinkIcon from './theme/addPageLink.svg';

export default class PageLinkUI extends Plugin {
    init() {
        const editor = this.editor;
        const t = editor.t;

        this.editor.ui.componentFactory.add('pageLink', locale => {
            const button = new ButtonView(locale);

            button.set({
                label: t('Insert a link to a page on this website.'),
                icon: addPageLinkIcon,
                tooltip: true
            });

            // Insert a text into the editor after clicking the button.
            this.listenTo(button, 'execute', () => {
                if (window.parent.openPickPageModal) {
                    window.parent.openPickPageModal(this.editor);
                } else {
                    alert("Executed openPickPageModal()");
                }
            });

            return button;
        });
    }
}