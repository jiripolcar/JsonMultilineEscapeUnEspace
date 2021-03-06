import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Multiline JSON Escaper and UnEscaper active');
	

	let disposableEscape = vscode.commands.registerCommand('extension.jsonMultilineEscape', () => {

		if (vscode.window.activeTextEditor) {
			var lines = 0;
			var json = vscode.window.activeTextEditor.document.getText();

			var betweenQuotes = json.split('\"');
			for (var i = 1; i < betweenQuotes.length; i = i + 2) {
				if (betweenQuotes[i].includes('\n')) {
					lines++;
					betweenQuotes[i] = betweenQuotes[i].replace(/\n/g, '\\n');
				}
			}

			var result = betweenQuotes[0];
			for (i = 1; i < betweenQuotes.length; i++) {
				result += "\"" + betweenQuotes[i];
			}
			vscode.window.activeTextEditor.edit(editBuilder => {
				if (!vscode.window.activeTextEditor) { return; }
				editBuilder.replace(new vscode.Range(0, 0, vscode.window.activeTextEditor.document.lineCount, 0), result);
			});
			vscode.window.showInformationMessage("Escaped " + lines + " values");
		}
	});

	let disposableUnEscape = vscode.commands.registerCommand('extension.jsonMultilineUnEscape', () => {

		if (vscode.window.activeTextEditor) {
			var lines = 0;
			var json = vscode.window.activeTextEditor.document.getText();

			var betweenQuotes = json.split('\"');
			for (var i = 1; i < betweenQuotes.length; i = i + 2) {
				lines++;
				betweenQuotes[i] = betweenQuotes[i].replace(/\\n/g, '\n');
			}

			var result = betweenQuotes[0];
			for (i = 1; i < betweenQuotes.length; i++) {
				result += "\"" + betweenQuotes[i];
			}
			vscode.window.activeTextEditor.edit(editBuilder => {
				if (!vscode.window.activeTextEditor) { return; }
				editBuilder.replace(new vscode.Range(0, 0, vscode.window.activeTextEditor.document.lineCount, 0), result);
			});
			vscode.window.showInformationMessage("UnEscaped " + lines + " lines");
		}
	});

}

// this method is called when your extension is deactivated
export function deactivate() { }

