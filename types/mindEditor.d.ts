import * as vscode from 'vscode';
export declare class MindEditorProvider implements vscode.CustomEditorProvider {
    context: vscode.ExtensionContext;
    constructor(context: vscode.ExtensionContext);
    static register(context: vscode.ExtensionContext): vscode.Disposable;
    revertCustomDocument(_document: vscode.CustomDocument, _cancellation: vscode.CancellationToken): Thenable<void>;
    backupCustomDocument(_document: vscode.CustomDocument, _context: vscode.CustomDocumentBackupContext, _cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup>;
    private readonly _onDidChangeCustomDocument;
    readonly onDidChangeCustomDocument: vscode.Event<vscode.CustomDocumentEditEvent<vscode.CustomDocument>>;
    saveCustomDocumentAs(_document: vscode.CustomDocument, _destination: vscode.Uri, _cancellation: vscode.CancellationToken): Thenable<void>;
    openCustomDocument(uri: vscode.Uri): Promise<vscode.CustomDocument>;
    saveCustomDocument(_document: vscode.CustomDocument): Thenable<void>;
    resolveCustomEditor(document: vscode.CustomDocument, webviewPanel: vscode.WebviewPanel): Promise<void>;
    private notifyExternalExtensions;
    private updateDocument;
    private getContent;
    get extensionChannels(): any[];
}
//# sourceMappingURL=mindEditor.d.ts.map