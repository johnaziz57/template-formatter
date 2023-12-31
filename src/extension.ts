// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Range } from "vscode";
import JSONLexer from "./antlr/JSONLexer";
import JSONParser from "./antlr/JSONParser";
import { CharStreams, CommonTokenStream, Lexer, ParseTreeWalker } from "antlr4";
import { TemplateWalker } from "./TemplateWalker";

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
    "template-formatter.formatJSONTemplate",
    () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) return

      const edit = new vscode.WorkspaceEdit();
      const document = editor.document;
      const formattedText = formatDocument(document)
      const range = document.validateRange(new Range(0, 0, Infinity, Infinity));
      edit.replace(document.uri, range, formattedText)
      vscode.workspace.applyEdit(edit);
    }
  );

  vscode.languages.registerDocumentFormattingEditProvider("template", {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.TextEdit[] {
      const formattedText = formatDocument(document)
      const range = document.validateRange(new Range(0, 0, Infinity, Infinity));
      return [vscode.TextEdit.replace(range, formattedText)];
      },
  });

  const formatDocument = (document: vscode.TextDocument): string => {
    const text = document.getText();
    const lexer = new JSONLexer(CharStreams.fromString(text));
    const tokens = new CommonTokenStream(lexer as Lexer);
    const parser = new JSONParser(tokens);
    const tree = parser.json();
    if (parser.syntaxErrorsCount > 0) {
      return text
    }
    const templateWalker = new TemplateWalker();
    ParseTreeWalker.DEFAULT.walk(templateWalker, tree);
    return templateWalker.getOutput();
  }

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
