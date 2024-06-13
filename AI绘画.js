// ==UserScript==
// @name         AI 绘画
// @author       暮星
// @version      1.0.0
// @description  指令:\n.画画 <内容>（内容仅可用英文）
// @timestamp    1718245670
// 2024-06-13 10:27:50
// @license      MIT
// @homepageURL  https://github.com/sealdice/javascript
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('aidraw');
if (!ext) {
    // 不存在，那么建立扩展，名为aidraw，作者“”，版本1.0.0
    ext = seal.ext.new('aidraw', '暮星', '1.0.0');
    // 注册扩展
    seal.ext.register(ext);
}

const cmd = seal.ext.newCmdItemInfo();
cmd.name = '画画'; // 指令名字，可用中文
cmd.help = '指令:\n.画画 <内容>（内容仅可用英文）';
cmd.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.rawArgs;
    switch (val) {
        case 'help': {
            const ret = seal.ext.newCmdExecuteResult(true);
            ret.showHelp = true;
            return ret;
        }
        default: {
            seal.replyToSender(ctx, msg, `[图:https://ai.cloudroo.top/draw/?t=${val}]`);
            return seal.ext.newCmdExecuteResult(true);
        }
    }
};
// 将命令注册到扩展中
ext.cmdMap['画画'] = cmd;   