import * as vscode from "vscode";
const packageName = "assistant";

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage("欢迎使用，有问题随时联系小王子[QQ 774177933]");

	let cmdConfig = [
		{
			cmd: `${packageName}.openSell`,
			cb: () => {
				let site = 'https://store-my.cocos.com/#/seller/history';
				vscode.env.openExternal(vscode.Uri.parse(site));
			}
		},
		{
			cmd: `${packageName}.openForum`,
			cb: () => {
				vscode.window.showInputBox({
					placeHolder: '请输入论坛搜索内容',
					prompt: '无搜索内容可以忽略',
				}).then((msg) => {
					if (msg !== undefined) {
						let site = "https://forum.cocos.org";
						if (msg.length === 0) {
							vscode.env.openExternal(vscode.Uri.parse(site));
						} else {
							vscode.env.openExternal(vscode.Uri.parse(`${site}/search?q=${msg}`));
						}
					}
				});
			},
		},
		{
			cmd: `${packageName}.openDocs`,
			cb: () => {
				vscode.window.showInputBox({
					placeHolder: '请输入文档搜索内容',
					prompt: '无搜索内容可以忽略'
				}).then((msg) => {
					let site = "https://docs.cocos.com/creator/manual/zh";
					if (msg !== undefined) {
						if (msg.length === 0) {
							vscode.env.openExternal(vscode.Uri.parse(site));
						} else {
							vscode.env.openExternal(vscode.Uri.parse(`${site}/?q=${msg}`));
						}
					}
				});
			},
		},
	];
	cmdConfig.forEach(({ cmd, cb }) => {
		let disposable = vscode.commands.registerCommand(cmd, cb);
		context.subscriptions.push(disposable);
	});
}

export function deactivate() { }
