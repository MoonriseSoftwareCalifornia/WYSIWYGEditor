/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileLinkUI from './filelinkui';
import FileLinkEditing from './filelinkediting';

export default class FileLink extends Plugin {
    static get requires() {
        return [FileLinkUI, FileLinkEditing];
    }
}