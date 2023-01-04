/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import InsertImageUI from './insertimageui';
import InsertImageEditing from './insertimageediting';

export default class InsertImage extends Plugin {
    static get requires() {
        return [InsertImageUI, InsertImageEditing];
    }
}