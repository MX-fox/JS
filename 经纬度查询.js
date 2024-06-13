// ==UserScript==
// @name         经纬度查询
// @author       暮星
// @version      1.0.0
// @description  使用 .jw help 查看帮助
// @timestamp    1713026685
// 2024-04-14 00:44:45
// @license      MIT
// @homepageURL  https://github.com/MX-fox/JS
// @updateUrl    https://mirror.ghproxy.com/https://raw.githubusercontent.com/MX-fox/JS/main/%E7%BB%8F%E7%BA%AC%E5%BA%A6%E6%9F%A5%E8%AF%A2.js
// @updateUrl    https://raw.githubusercontent.com/MX-fox/JS/main/%E7%BB%8F%E7%BA%AC%E5%BA%A6%E6%9F%A5%E8%AF%A2.js
// ==/UserScript==

// 首先检查是否已经存在
let ext = seal.ext.find('geocoder');
if (!ext) {
    // 不存在，那么建立扩展，名为，作者“”，版本 1.0.0
    ext = seal.ext.new('geocoder', '暮星', '1.0.0');
    // 注册扩展
    seal.ext.register(ext);
}

const cmdgeocoder = seal.ext.newCmdItemInfo();
cmdgeocoder.name = '经纬'; // 指令名字，可用中文
cmdgeocoder.help = '查询经纬线详细信息\n指令： .经纬/jw <经度> <维度>\n经度最大为 180，纬度最大为 90\n东西经度和南北维度通过正负值区分 ';
cmdgeocoder.solve = (ctx, msg, cmdArgs) => {
    let lng = cmdArgs.getArgN(1);
    let lat = cmdArgs.getArgN(2);
    switch (lng) {
      case "help": {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
          if (!lng) {
            const ret = seal.ext.newCmdExecuteResult(true);
            ret.showHelp = true;
            return ret;
          }
        if (lng>180|lng<-180) {
          seal.replyToSender(ctx, msg, "经度应小于等于180且大于等于-180，请重新发送指令");
        }
        if (lat>90|lat<-90) {
          seal.replyToSender(ctx, msg, "纬度应小于等于90且大于等于-90，请重新发送指令");
        }
        let url = `https://api.oioweb.cn/api/ip/geocoder?lng=${lng}&lat=${lat}`;
        // 发送 GET 请求
        fetch(url)
          .then((response) => {
            // 判断响应状态码是否为 200
            if (response.ok) {
              return response.text();
            } else {
              seal.replyToSender(ctx, msg, `api 已失效`);
              return seal.ext.newCmdExecuteResult(false);
            }
          })
          .then((data) => {
            let resultJson = JSON.parse(data);
            let geocoderJson = resultJson["result"];
            let geocoderanswer = geocoderJson["address"];
            seal.replyToSender(ctx, msg, geocoderanswer);
          });
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

ext.cmdMap['经纬'] = cmdgeocoder;
ext.cmdMap['jw'] = cmdgeocoder;