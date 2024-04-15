// ==UserScript==
// @name         藏头诗
// @author       暮星
// @version      1.0.0
// @description  使用 .藏头 help 查看帮助，api 比较智障，经常缺词漏字（可能全部都缺）
// @timestamp    1713189812
// 2024-04-15 22:03:32
// @license      MIT
// @homepageURL  https://github.com/MX/JS
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('betan');
if (!ext) {
    // 不存在，那么建立扩展，名为，作者“”，版本 1.0.0
    ext = seal.ext.new('betan', '暮星', '1.0.0');
    // 注册扩展
    seal.ext.register(ext);
}

const cmdCantou = seal.ext.newCmdItemInfo();
cmdCantou.name = '藏头'; // 指令名字，可用中文
cmdCantou.help = '指令：\n.藏头/藏尾 <内容> (7/5)\n括号内代表七言/五言，若不填默认五言\napi 比较智障，经常缺词漏字（可能全部都缺）';
cmdCantou.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    let b = cmdArgs.getArgN(2);
    if (!b|b!='7'&&b!='5'){b='5'};
    return solve(ctx, msg, cmdArgs, `http://api.shenke.love/API/other/betan.php?msg=${val}&a=1&b=${b}`);
};

const cmdCanwei = seal.ext.newCmdItemInfo();
cmdCanwei.name = '藏尾'; // 指令名字，可用中文
cmdCanwei.help = '指令：\n.藏头/藏尾 <内容> (7/5)\n括号内代表七言/五言，若不填默认五言\napi 比较智障，经常缺词漏字（可能全部都缺）';
cmdCanwei.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    let b = cmdArgs.getArgN(2);
    if (!b|b!='7'&&b!='5'){b='5'};
    return solve(ctx, msg, cmdArgs, `http://api.shenke.love/API/other/betan.php?msg=${val}&a=0&b=${b}`);
};

function solve(ctx, msg, cmdArgs, url) {
    let val = cmdArgs.getArgN(1);
    switch (val) {
        case 'help': {
            const ret = seal.ext.newCmdExecuteResult(true);
            ret.showHelp = true;
            return ret;
        }
        default: {
            fetch(url)
                .then((response) => {
                        return response.text();
                })
                .then((data) => {
                    result = data.toString();
                    seal.replyToSender(ctx, msg, result);
                })
        }
    }
}
// 将命令注册到扩展中
ext.cmdMap['藏头'] = cmdCantou;
ext.cmdMap['藏尾'] = cmdCanwei;


