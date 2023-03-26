// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStreams, CommonTokenStream } from "antlr4ts";
import * as vscode from "vscode";
import { Range } from "vscode";
import { JSONLexer } from "./antlr/JSONLexer";
import { JsonContext, JSONParser, ValueContext } from "./antlr/JSONParser";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "template-formatter" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "template-formatter.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from Template Formatter!"
      );
    }
  );

  vscode.languages.registerDocumentFormattingEditProvider("template", {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.TextEdit[] {
      const text = document.getText();
      const lexer = new JSONLexer(CharStreams.fromString(text));
      const tokens = new CommonTokenStream(lexer);
      const parser = new JSONParser(tokens);
      const tree = parser.json();
      const formattedText = tree.toStringTree(parser.ruleNames);
      const range = document.validateRange(new Range(0, 0, Infinity, Infinity));
      return [vscode.TextEdit.replace(range, formattedText)];
    },
  });

  context.subscriptions.push(disposable);
}

// const traverseJson = (json: JsonContext): string =>{
// 	let output = ""
	
// 	for (let index = 0; index < json.childCount; index++) {
// 		const element = json.getChild(index);
// 		switch 
		
// 	}

// 	return output;
// };

// const traverseValue = (value: () => ValueContext): string  => {

// }

// This method is called when your extension is deactivated
export function deactivate() {}
