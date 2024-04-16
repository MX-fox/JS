// ==UserScript==
// @name         表情包
// @author       暮星 (步棋改)
// @version      1.0.2
// @description  使用 .吃 help 查看帮助
// @timestamp    1696155071
// 2023-10-01 18:11:19
// @license      MIT
// @homepageURL  https://github.com/MX-fox/JS
// @updateUrl    https://ghproxy.com/https://raw.githubusercontent.com/MX-fox/JS/main/%E8%A1%A8%E6%83%85%E5%8C%85.js
// @updateUrl    https://raw.githubusercontent.com/MX-fox/JS/main/%E8%A1%A8%E6%83%85%E5%8C%85.js
// ==/UserScript==
 
// 首先检查是否已经存在
let ext = seal.ext.find('sticker');
if (!ext) {
    // 不存在，那么建立扩展，名为，作者“”，版本 1.0.0
    ext = seal.ext.new('sticker', '暮星', '1.0.2');
    // 注册扩展
    seal.ext.register(ext);
}

function solve(ctx, msg, cmdArgs, url) {
    if (msg.platform !== "QQ") {
        seal.replyToSender(ctx, msg, "只在 QQ 可用");
        return seal.ext.newCmdExecuteResult(true);
    }

    let mctx = seal.getCtxProxyFirst(ctx, cmdArgs);
    let val = cmdArgs.getArgN(1);
    switch (val) {
        case 'help': {
            const ret = seal.ext.newCmdExecuteResult(true);
            ret.showHelp = true;
            return ret;
        }
        default: {
            ctx.delegateText = "";
            let userId = mctx.player.userId.split(":")[1];
            const text = `[CQ:image,file=${url}` + userId + `,cache=0]`;
            seal.replyToSender(ctx, msg, text);
            return seal.ext.newCmdExecuteResult(true);
        }
    }
}

const cmdEat = seal.ext.newCmdItemInfo();
cmdEat.name = '吃';
cmdEat.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdEat.allowDelegate = true;
cmdEat.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_klee_eat.php?qq=");
};

const cmdDao = seal.ext.newCmdItemInfo();
cmdDao.name = '捣';
cmdDao.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdDao.allowDelegate = true;
cmdDao.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_dao.php?qq=");
};

const cmdChui = seal.ext.newCmdItemInfo();
cmdChui.name = '捶';
cmdChui.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdChui.allowDelegate = true;
cmdChui.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_thump.php?qq=");
};

const cmdTui = seal.ext.newCmdItemInfo();
cmdTui.name = '推';
cmdTui.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdTui.allowDelegate = true;
cmdTui.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_tui.php?qq=");
};

const cmdPai = seal.ext.newCmdItemInfo();
cmdPai.name = '拍';
cmdPai.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdPai.allowDelegate = true;
cmdPai.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_pai.php?qq=");
};

const cmdTie = seal.ext.newCmdItemInfo();
cmdTie.name = '贴贴';
cmdTie.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdTie.allowDelegate = true;
cmdTie.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.andeer.top/API/gif_tietie.php?qq=");
};

const cmdYao = seal.ext.newCmdItemInfo();
cmdYao.name = '咬';
cmdYao.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdYao.allowDelegate = true;
cmdYao.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "http://api.311i.cn/api/face_suck.php?QQ=");
};

const cmdWan = seal.ext.newCmdItemInfo();
cmdWan.name = '玩';
cmdWan.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdWan.allowDelegate = true;
cmdWan.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/dingqiu/?qq=");
};

const cmdDiu = seal.ext.newCmdItemInfo();
cmdDiu.name = '丢';
cmdDiu.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdDiu.allowDelegate = true;
cmdDiu.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "http://api.311i.cn/api/diu.php?QQ=");
};


const cmdPa = seal.ext.newCmdItemInfo();
cmdPa.name = '爬';
cmdPa.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdPa.allowDelegate = true;
cmdPa.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "http://api.311i.cn/api/pa.php?qq=");
};

const cmdNao = seal.ext.newCmdItemInfo();
cmdNao.name = '挠';
cmdNao.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdNao.allowDelegate = true;
cmdNao.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/FortuneCat/?qq=");
};

const cmdZhua = seal.ext.newCmdItemInfo();
cmdZhua.name = '抓';
cmdZhua.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdZhua.allowDelegate = true;
cmdZhua.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/grab/?qq=");
};

const cmdZhi = seal.ext.newCmdItemInfo();
cmdZhi.name = '指';
cmdZhi.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdZhi.allowDelegate = true;
cmdZhi.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/Lookatthis/?qq=");
};

const cmdCeng = seal.ext.newCmdItemInfo();
cmdCeng.name = '蹭';
cmdCeng.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdCeng.allowDelegate = true;
cmdCeng.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/LaughTogether/?qq=");
};


const cmdShan = seal.ext.newCmdItemInfo();
cmdShan.name = '扇';
cmdShan.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdShan.allowDelegate = true;
cmdShan.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/DanceChickenLeg/?qq=");
};


const cmdbql = seal.ext.newCmdItemInfo();
cmdbql.name = '冰淇淋';
cmdbql.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdbql.allowDelegate = true;
cmdbql.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/bql/?qq=");
};

const cmdwjt = seal.ext.newCmdItemInfo();
cmdwjt.name = '舞鸡腿';
cmdwjt.help = '指令：\n.吃 @某人\n.捣 @某人\n.捶 @某人\n.推 @某人\n.拍 @某人\n.贴贴 @某人\n.咬 @某人\n.丢 @某人\n.玩 @某人\n.爬 @某人\n.抓 @某人\n.指 @某人\n.蹭 @某人\n.扇 @某人\n.挠 @某人\n.冰淇淋 @某人\n.舞鸡腿 @某人';
cmdwjt.allowDelegate = true;
cmdwjt.solve = (ctx, msg, cmdArgs) => {
    return solve(ctx, msg, cmdArgs, "https://api.xingzhige.com/API/DanceChickenLeg/?qq=");
};

// 将命令注册到扩展中
ext.cmdMap['吃'] = cmdEat;
ext.cmdMap['捣'] = cmdDao;
ext.cmdMap['捶'] = cmdChui;
ext.cmdMap['锤'] = cmdChui;
ext.cmdMap['推'] = cmdTui;
ext.cmdMap['拍'] = cmdPai;
ext.cmdMap['贴贴'] = cmdTie;
ext.cmdMap['贴'] = cmdTie;  
ext.cmdMap['咬'] = cmdYao;  
ext.cmdMap['丢'] = cmdDiu;  
ext.cmdMap['玩'] = cmdWan;  
ext.cmdMap['爬'] = cmdPa;  
ext.cmdMap['抓'] = cmdZhua;  
ext.cmdMap['指'] = cmdZhi;  
ext.cmdMap['蹭'] = cmdCeng;  
ext.cmdMap['扇'] = cmdShan;
ext.cmdMap['挠'] = cmdNao;
ext.cmdMap['冰淇淋'] = cmdbql;
ext.cmdMap['舞鸡腿'] = cmdwjt;