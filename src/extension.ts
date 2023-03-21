// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "template-formatter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('template-formatter.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Template Formatter!');
	});

	const disposableFormatter = vscode.commands.registerCommand('template-formatter.formatTemplate', () => {
		const { activeTextEditor } = vscode.window;

		if (activeTextEditor?.document.languageId !== "template") { return; }

		const { document } = activeTextEditor;
		const firsLine = document.lineAt(0);

		if (firsLine.text !== '42') {
			const edit = new vscode.WorkspaceEdit();
			edit.insert(document.uri, firsLine.range.start, '42\n');

			return vscode.workspace.applyEdit(edit);
		}
	});

	vscode.languages.registerDocumentFormattingEditProvider('template', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			const firstLine = document.lineAt(0);
			if (firstLine.text !== '42') {
				return [vscode.TextEdit.insert(firstLine.range.start, '42\n')];
			} else {
				return [];
			}
		}
	});

	context.subscriptions.push(disposable, disposableFormatter);
}

// This method is called when your extension is deactivated
export function deactivate() { }
