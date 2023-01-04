/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VSCodeEditorEditing from './vscodeeditorediting';
import VSCodeEditorUI from './vscodeeditorui';

export default class VSCodeEditor extends Plugin {
    static get requires() {
        return [VSCodeEditorEditing, VSCodeEditorUI];
    }
}