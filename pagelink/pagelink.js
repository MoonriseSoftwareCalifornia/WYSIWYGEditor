/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import PageLinkEditing from './pagelinkediting';
import PageLinkUI from './pagelinkui';

export default class PageLink extends Plugin {
    static get requires() {
        return [PageLinkEditing, PageLinkUI];
    }
}