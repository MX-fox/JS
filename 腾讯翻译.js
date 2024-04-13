// ==UserScript==
// @name         fanyi
// @author       暮星
// @version      1.0.0
// @description  
// @timestamp    1713010934
// 2024-04-13 20:21:04
// @license      MIT
// @homepageURL  https://github.com/MX-fox/JS
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('fanyi');
if (!ext) {
    // 不存在，那么建立扩展，名为，作者“”，版本1.0.0
    ext = seal.ext.new('fanyi', '暮星', '1.0.0');
    // 注册扩展
    seal.ext.register(ext);
}

const cmdFANYI = seal.ext.newCmdItemInfo();
cmdFANYI.name = '翻译'; // 指令名字，可用中文
cmdFANYI.help = '自动识别内容并翻译，使用 .翻译/fy <内容> ';
cmdFANYI.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.rawArgs;
    switch (val) {
      case "help": {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        if (!val) val = 'Who are you?';
        let url = `https://api.oioweb.cn/api/txt/QQFanyi?sourceText=${val}`;
        // 发送 GET 请求
        fetch(url)
          .then((response) => {
            // 判断响应状态码是否为 200
            if (response.ok) {
              return response.text();
            } else {
              console.log(response.status);
              console.log("api失效！");
            }
          })
          .then((data) => {
            let resultJson = JSON.parse(data);
            let fanyiJson = resultJson["result"];
            let fanyianswer = fanyiJson["targetText"];
            seal.replyToSender(ctx, msg, fanyianswer);
          });
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

ext.cmdMap['翻译'] = cmdFANYI;
ext.cmdMap['fy'] = cmdFANYI;