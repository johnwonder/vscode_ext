/**
 * HeaderGenerator
 */
import {window,commands,Disposable,ExtensionContext,TextDocument} from 'vscode';

class HeaderGenerator {
    private _disposable:Disposable;
    
    /**
     * insertHeader
     */
    public insertHeader() {
        let editor = window.activeTextEditor;
        if(!editor)
            return;

        var header = "License Header";

        var doc = editor.document;

        editor.edit((eb) =>{
            eb.insert(doc.positionAt(0),header);
        })
    }


    dispose(){
        this._disposable.dispose();
    }

};

export default HeaderGenerator;