import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('插件激活了');
	let disposable = vscode.commands.registerCommand('kitty.helloWorld', () => {
		console.log('3333333333333333300033');
		vscode.window.showInformationMessage('Hello World from kitty! 66666');
	});
	context.subscriptions.push(disposable);

	let dd = vscode.commands.registerCommand('kitty.go', () => {
		console.log("kitty go"); 
	})
	context.subscriptions.push(dd)
}

// this method is called when your extension is deactivated
export function deactivate() { }
