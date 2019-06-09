"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    console.log('Multiline JSON Escaper and UnEscaper active');
    let disposableEscape = vscode.commands.registerCommand('extension.jsonMultilineEscape', () => {
        if (vscode.window.activeTextEditor) {
            var lines = 0;
            var json = vscode.window.activeTextEditor.document.getText();
            var betweenQuotes = json.split('\"');
            for (var i = 1; i < betweenQuotes.length; i = i + 2) {
                if (betweenQuotes[i].includes('\n')) {
                    var entry = betweenQuotes[i].split('\n');
                    betweenQuotes[i] = "";
                    lines++;
                    for (var j = 0; j < entry.length; j++) {
                        betweenQuotes[i] += entry[j];
                        if (j < entry.length - 1) {
                            betweenQuotes[i] += "\\n";
                        }
                    }
                    betweenQuotes[i] = betweenQuotes[i];
                }
            }
            var result = betweenQuotes[0];
            for (i = 1; i < betweenQuotes.length; i++) {
                result += "\"" + betweenQuotes[i];
            }
            vscode.window.activeTextEditor.edit(editBuilder => {
                if (!vscode.window.activeTextEditor) {
                    return;
                }
                editBuilder.replace(new vscode.Range(0, 0, vscode.window.activeTextEditor.document.lineCount, 0), result);
            });
            vscode.window.showInformationMessage("Escaped " + lines + " lines");
        }
    });
    let disposableUnEscape = vscode.commands.registerCommand('extension.jsonMultilineUnEscape', () => {
        if (vscode.window.activeTextEditor) {
            var lines = 0;
            var json = vscode.window.activeTextEditor.document.getText();
            var betweenQuotes = json.split('\"');
            for (var i = 1; i < betweenQuotes.length; i = i + 2) {
                if (betweenQuotes[i].includes('\\n')) {
                    var entry = betweenQuotes[i].split('\\n');
                    lines++;
                    betweenQuotes[i] = "";
                    for (var j = 0; j < entry.length; j++) {
                        betweenQuotes[i] += entry[j];
                        if (j < entry.length - 1) {
                            betweenQuotes[i] += "\n";
                        }
                    }
                    betweenQuotes[i] = betweenQuotes[i];
                }
            }
            var result = betweenQuotes[0];
            for (i = 1; i < betweenQuotes.length; i++) {
                result += "\"" + betweenQuotes[i];
            }
            vscode.window.activeTextEditor.edit(editBuilder => {
                if (!vscode.window.activeTextEditor) {
                    return;
                }
                editBuilder.replace(new vscode.Range(0, 0, vscode.window.activeTextEditor.document.lineCount, 0), result);
            });
            vscode.window.showInformationMessage("UnEscaped " + lines + " lines");
        }
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map