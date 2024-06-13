// ==UserScript==
// @name         职场日历
// @author       暮星
// @version      1.0.0
// @description  职场日历，输入 职场日历 获得图片回复
// @timestamp    1713081755
// 2024-04-14 16:02:35
// @license      MIT
// @homepageURL  https://github.com/sealdice/javascript
// @updateUrl    https://mirror.ghproxy.com/https://raw.githubusercontent.com/MX-fox/JS/main/%E8%81%8C%E5%9C%BA%E6%97%A5%E5%8E%86.js
// @updateUrl    https://raw.githubusercontent.com/MX-fox/JS/main/%E8%81%8C%E5%9C%BA%E6%97%A5%E5%8E%86.js
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('zhichang');
if (!ext) {
    // 不存在，那么建立扩展，名为，作者“”，版本 1.0.0
    ext = seal.ext.new('zhichang', '暮星', '1.0.0');
    // 注册扩展
    seal.ext.register(ext);
}

ext.onNotCommandReceived = (ctx, msg) => {
    if(msg.message == '职场日历'){
        let url = "https://api.vvhan.com/api/zhichang?type=json";
        // 发送 GET 请求
        fetch(url)
          .then((response) => {
            // 判断响应状态码是否为 200
            if (response.ok) {
              return response.text();
            } else {
              console.log(response.status);
              seal.replyToSender(ctx, msg, "api 失效！");
            }
          })
          .then((data) => {
            //返回数据转换为 json 对象以可以访问
            let imgJson = JSON.parse(data);
            // 使用 [""] 方式访问 json 对象中的 tp 项 
            let imgUrl = imgJson["url"];
            // 拼装返回的图片消息
            let messageRet = "[CQ:image,file="+imgUrl+"]";
            // 发出去
            seal.replyToSender(ctx, msg, messageRet);
          })
          .catch((error) => {
            console.log("api 请求错误！错误原因：" + error);
          });
        return seal.ext.newCmdExecuteResult(true);
    }
}
