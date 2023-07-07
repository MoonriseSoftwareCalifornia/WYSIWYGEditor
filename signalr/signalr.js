/*
* @license MIT
* @copyright Copyright (c) 2022-2023 Moonrise Software LLC.
*/

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SignalRUI from './signalrui';
//import SignalREditing from "./signalrediting";

export default class InsertImage extends Plugin {
    static get requires() {
        return [SignalRUI];
    }
}