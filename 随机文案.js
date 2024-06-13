// ==UserScript==
// @name         随机文案
// @author       暮星
// @version      1.0.1
// @description  使用 .随机文案 help 查看帮助（骚话内容尺度不确定，请自行决定是否开启）
// @timestamp    1713084220
// 2024-04-14 16:43:40
// @license      MIT
// @homepageURL  https://github.com/MX-fox/JS
// @updateUrl    https://ghproxy.com/https://raw.githubusercontent.com/MX-fox/JS/main/%E9%9A%8F%E6%9C%BA%E6%96%87%E6%A1%88.js
// @updateUrl    https://raw.githubusercontent.com/MX-fox/JS/main/%E9%9A%8F%E6%9C%BA%E6%96%87%E6%A1%88.js
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('Rand');
if (!ext) {
    // 不存在，那么建立扩展，名为 Rand，作者“”，版本 1.0.0
    ext = seal.ext.new('Rand', '暮星', '1.0.1');
    // 注册扩展
    seal.ext.register(ext);
}

const cmdRand = seal.ext.newCmdItemInfo();
cmdRand.name = '一言'; // 指令名字，可用中文
cmdRand.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdRand.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/ian/rand");
};

const cmddongman = seal.ext.newCmdItemInfo();
cmddongman.name = '动漫'; // 指令名字，可用中文
cmddongman.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmddongman.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/ian/dongman");
};

const cmdwenxue = seal.ext.newCmdItemInfo();
cmdwenxue.name = '文学'; // 指令名字，可用中文
cmdwenxue.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdwenxue.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/ian/wenxue");
};

const cmdshici = seal.ext.newCmdItemInfo();
cmdshici.name = '诗词'; // 指令名字，可用中文
cmdshici.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdshici.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/ian/shici");
};

const cmdsexy = seal.ext.newCmdItemInfo();
cmdsexy.name = '骚话'; // 指令名字，可用中文
cmdsexy.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdsexy.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/text/sexy");
};

const cmdlove = seal.ext.newCmdItemInfo();
cmdlove.name = '情话'; // 指令名字，可用中文
cmdlove.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdlove.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/text/love");
};

const cmdjoke = seal.ext.newCmdItemInfo();
cmdjoke.name = '笑话'; // 指令名字，可用中文
cmdjoke.help = '指令：\n.一言\n.文学\n.动漫\n.诗词\n.情话\n.笑话\n.骚话';
cmdjoke.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.vvhan.com/api/text/joke");
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
                    // 判断响应状态码是否为 200
                    if (response.ok) {
                        return response.text();
                    } else {
                    console.log("api 失效！请联系作者。");
                    }
                })
                .then((data) => {
                    result = data.toString();
                    seal.replyToSender(ctx, msg,  result);
                })
        }
    }
}
// 将命令注册到扩展中
ext.cmdMap['随机文案'] = cmdRand;
ext.cmdMap['一言'] = cmdRand;
ext.cmdMap['动漫'] = cmddongman;   
ext.cmdMap['文学'] = cmdwenxue;   
ext.cmdMap['诗词'] = cmdshici;   
ext.cmdMap['骚话'] = cmdsexy;   
ext.cmdMap['情话'] = cmdlove;   
ext.cmdMap['笑话'] = cmdjoke;