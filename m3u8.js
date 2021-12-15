"use strict";
// ==UserScript==
// @name         m3u8 Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://.com/*
// @match        https://www..com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    // 注入html
    var section = document.createElement('section');
    section.innerHTML = "<!doctype html>\n    <html lang=\"en\">\n\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <meta name=\"keywords\" content=\"m3u8 downloader for web\">\n    <meta name=\"description\" content=\"m3u8 downloader for web, Momo's Blog, LuckyMomo\">\n    <title>m3u8 downloader</title>\n    <style>\n    /*\u5168\u5C40\u8BBE\u7F6E*/\n    html, body {\n        margin: 0;\n        padding: 0;\n    }\n    body::-webkit-scrollbar { display: none}\n    p {\n        margin: 0;\n    }\n    [v-cloak] {\n        display: none;\n    }\n    #m-app {\n        height: 100%;\n        width: 100%;\n        text-align: center;\n        padding: 10px 50px 80px;\n        box-sizing: border-box;\n    }\n    .m-p-action {\n        margin: 20px auto;\n        max-width: 1100px;\n        width: 100%;\n        font-size: 35px;\n        text-align: center;\n        font-weight: bold;\n    }\n    .m-p-other, .m-p-tamper, .m-p-github, .m-p-language {\n        position: fixed;\n        right: 50px;\n        background-color: #eff3f6;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        color: #24292e;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        cursor: pointer;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 6px 12px;\n        z-index: 99;\n    }\n    .m-p-help {\n        position: fixed;\n        right: 50px;\n        top: 50px;\n        width: 30px;\n        height: 30px;\n        color: #666666;\n        z-index: 2;\n        line-height: 30px;\n        font-weight: bolder;\n        border-radius: 50%;\n        border: 1px solid rgba(27, 31, 35, .2);\n        cursor: pointer;\n        background-color: #eff3f6;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    }\n    .m-p-github:hover, .m-p-other:hover, .m-p-tamper:hover, .m-p-help:hover, .m-p-language:hover {\n        opacity: 0.9;\n    }\n    .m-p-language {\n        bottom: 30px;\n    }\n    .m-p-other {\n        bottom: 70px;\n    }\n    .m-p-tamper {\n        bottom: 110px;\n    }\n    .m-p-github {\n        bottom: 150px;\n    }\n    /*\u5E7F\u544A*/\n    .m-p-refer {\n        position: absolute;\n        left: 50px;\n        bottom: 50px;\n    }\n    .m-p-refer .text {\n        position: absolute;\n        top: -80px;\n        left: -40px;\n        animation-name: upAnimation;\n        transform-origin: center bottom;\n        animation-duration: 2s;\n        animation-fill-mode: both;\n        animation-iteration-count: infinite;\n        animation-delay: .5s;\n    }\n    .m-p-refer .close {\n        display: block;\n        position: absolute;\n        top: -110px;\n        right: -50px;\n        padding: 0;\n        margin: 0;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        border: none;\n        cursor: pointer;\n        z-index: 3;\n        transition: 0.3s all;\n        background-size: 30px 30px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url(https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/close.png);\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n    .m-p-refer .close:hover {\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n    .m-p-refer .link {\n        border-radius: 4px;\n        text-decoration: none;\n        background-color: #4E84E6;\n        transition: 0.3s all;\n    }\n    .m-p-refer .link:hover {\n        top: -10px;\n        color: #333333;\n        border: 1px solid transparent;\n        background: rgba(0, 0, 0, 0.6);\n        box-shadow: 2px 11px 20px 0 rgba(0, 0, 0, 0.6);\n    }\n    @keyframes upAnimation {\n        0% {\n        transform: rotate(0deg);\n        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)\n        }\n\n        10% {\n        transform: rotate(-12deg);\n        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)\n        }\n\n        20% {\n        transform: rotate(12deg);\n        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)\n        }\n\n        28% {\n        transform: rotate(-10deg);\n        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)\n        }\n\n        36% {\n        transform: rotate(10deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        42% {\n        transform: rotate(-8deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        48% {\n        transform: rotate(8deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        52% {\n        transform: rotate(-4deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        56% {\n        transform: rotate(4deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        60% {\n        transform: rotate(0deg);\n        transition-timing-function: cubic-bezier(0.755, .5, .855, .06)\n        }\n\n        100% {\n        transform: rotate(0deg);\n        transition-timing-function: cubic-bezier(0.215, .61, .355, 1)\n        }\n    }\n    /*\u9876\u90E8\u4FE1\u606F\u5F55\u5165*/\n    .m-p-temp-url {\n        padding-top: 50px;\n        padding-bottom: 10px;\n        width: 100%;\n        color: #999999;\n        text-align: left;\n        font-style: italic;\n        word-break: break-all;\n    }\n    .m-p-input-container {\n        display: flex;\n    }\n    .m-p-input-container input {\n        flex: 1;\n        margin-bottom: 30px;\n        display: block;\n        width: 280px;\n        padding: 16px;\n        font-size: 24px;\n        border-radius: 4px;\n        box-shadow: none;\n        color: #444444;\n        border: 1px solid #cccccc;\n    }\n    .m-p-input-container .range-input {\n        margin-left: 10px;\n        flex: 0 0 100px;\n        width: 100px;\n        box-sizing: border-box;\n    }\n    .m-p-input-container div {\n        position: relative;\n        display: inline-block;\n        margin-left: 10px;\n        height: 60px;\n        line-height: 60px;\n        font-size: 24px;\n        color: white;\n        cursor: pointer;\n        border-radius: 4px;\n        border: 1px solid #eeeeee;\n        background-color: #3D8AC7;\n        opacity: 1;\n        transition: 0.3s all;\n    }\n    .m-p-input-container div:hover {\n        opacity: 0.9;\n    }\n    .m-p-input-container div {\n        width: 200px;\n    }\n    .m-p-input-container .disable {\n        cursor: not-allowed;\n        background-color: #dddddd;\n    }\n    /*\u4E0B\u8F7D\u72B6\u6001*/\n    .m-p-line {\n        margin: 20px 0 50px;\n        vertical-align: top;\n        width: 100%;\n        height: 5px;\n        border-bottom: dotted;\n    }\n    .m-p-tips {\n        width: 100%;\n        color: #999999;\n        text-align: left;\n        font-style: italic;\n        word-break: break-all;\n    }\n    .m-p-tips p {\n        width: 100px;\n        display: inline-block;\n    }\n    .m-p-segment {\n        text-align: left;\n    }\n    .m-p-segment .item {\n        display: inline-block;\n        margin: 10px 6px;\n        width: 50px;\n        height: 40px;\n        color: white;\n        line-height: 40px;\n        text-align: center;\n        border-radius: 4px;\n        cursor: help;\n        border: solid 1px #eeeeee;\n        background-color: #dddddd;\n    }\n    .m-p-segment .finish {\n        background-color: #0ACD76;\n    }\n    .m-p-segment .error {\n        cursor: pointer;\n        background-color: #DC5350;\n    }\n    .m-p-cross, .m-p-final {\n        display: inline-block;\n        width: 100%;\n        height: 50px;\n        line-height: 50px;\n        font-size: 20px;\n        color: white;\n        cursor: pointer;\n        border-radius: 4px;\n        border: 1px solid #eeeeee;\n        background-color: #3D8AC7;\n        opacity: 1;\n        transition: 0.3s all;\n    }\n    .m-p-final {\n        margin-top: 10px;\n        text-decoration: none;\n    }\n    .m-p-force, .m-p-retry {\n        position: absolute;\n        right: 50px;\n        display: inline-block;\n        padding: 6px 12px;\n        font-size: 18px;\n        color: white;\n        cursor: pointer;\n        border-radius: 4px;\n        border: 1px solid #eeeeee;\n        background-color: #3D8AC7;\n        opacity: 1;\n        transition: 0.3s all;\n    }\n    .m-p-retry {\n        right: 250px;\n    }\n    .m-p-force:hover, .m-p-retry:hover {\n        opacity: 0.9;\n    }\n\n    </style>\n    </head>\n\n    <body>\n    <div id=\"loading\">\u9875\u9762\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85...</div>\n    <section id=\"m-app\" v-cloak>\n    <!--\u6587\u4EF6\u8F7D\u5165-->\n    <div class=\"m-p-temp-url\">\u6D4B\u8BD5\u94FE\u63A5\uFF1Ahttp://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8</div>\n    <section class=\"m-p-input-container\">\n        <input type=\"text\" v-model=\"url\" :disabled=\"downloading\" placeholder=\"\u8BF7\u8F93\u5165 m3u8 \u94FE\u63A5\">\n\n        <!--\u8303\u56F4\u67E5\u8BE2-->\n        <template v-if=\"!downloading || rangeDownload.isShowRange\">\n        <div v-if=\"!rangeDownload.isShowRange\" @click=\"getM3U8(true)\">\u7279\u5B9A\u8303\u56F4\u4E0B\u8F7D</div>\n        <template v-else>\n            <input class=\"range-input\" type=\"number\" v-model=\"rangeDownload.startSegment\" :disabled=\"downloading\" placeholder=\"\u8D77\u59CB\u7247\u6BB5\">\n            <input class=\"range-input\" type=\"number\" v-model=\"rangeDownload.endSegment\" :disabled=\"downloading\" placeholder=\"\u622A\u6B62\u7247\u6BB5\">\n        </template>\n        </template>\n\n        <!--\u8FD8\u672A\u5F00\u59CB\u4E0B\u8F7D-->\n        <template v-if=\"!downloading\">\n        <div @click=\"getM3U8(false)\">\u539F\u683C\u5F0F\u4E0B\u8F7D</div>\n        <div @click=\"getMP4\">\u8F6C\u7801\u4E3AMP4\u4E0B\u8F7D</div>\n        </template>\n        <div v-else-if=\"finishNum === rangeDownload.targetSegment && rangeDownload.targetSegment > 0\" class=\"disable\">\u4E0B\u8F7D\u5B8C\u6210</div>\n        <div v-else @click=\"togglePause\">{{ isPause ? '\u6062\u590D\u4E0B\u8F7D' : '\u6682\u505C\u4E0B\u8F7D' }}</div>\n    </section>\n\n    <div class=\"m-p-cross\" @click=\"copyCode\">\u5F53\u65E0\u6CD5\u4E0B\u8F7D\uFF0C\u8D44\u6E90\u53D1\u751F\u8DE8\u57DF\u9650\u5236\u65F6\uFF0C\u5728\u89C6\u9891\u6E90\u9875\u9762\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u6CE8\u5165\u4EE3\u7801\u89E3\u51B3\uFF0C\u70B9\u51FB\u672C\u6309\u94AE\u590D\u5236\u4EE3\u7801</div>\n    <a class=\"m-p-final\" target=\"_blank\" href=\"https://segmentfault.com/a/1190000025182822\">\u4E0B\u8F7D\u7684\u89C6\u9891\u770B\u4E0D\u4E86\uFF1F\u8BD5\u8BD5\u8FD9\u4E2A\u7EC8\u7ED3\u89E3\u51B3\u65B9\u6848\u300C\u65E0\u5DEE\u522B\u89C6\u9891\u63D0\u53D6\u5DE5\u5177\u300D\uFF0C\u6709\u914D\u5957\u300C\u6CB9\u7334\u300D\u63D2\u4EF6\u5566\uFF01\uFF01\uFF01</a>\n\n    <template v-if=\"finishList.length > 0\">\n        <div class=\"m-p-line\"></div>\n        <div class=\"m-p-retry\" v-if=\"errorNum && downloadIndex >= rangeDownload.targetSegment\" @click=\"retryAll\">\u91CD\u65B0\u4E0B\u8F7D\u9519\u8BEF\u7247\u6BB5</div>\n        <div class=\"m-p-force\" v-if=\"mediaFileList.length\" @click=\"forceDownload\">\u5F3A\u5236\u4E0B\u8F7D\u73B0\u6709\u7247\u6BB5</div>\n        <div class=\"m-p-tips\">\u5F85\u4E0B\u8F7D\u788E\u7247\u603B\u91CF\uFF1A{{ rangeDownload.targetSegment }}\uFF0C\u5DF2\u4E0B\u8F7D\uFF1A{{ finishNum }}\uFF0C\u9519\u8BEF\uFF1A{{ errorNum }}\uFF0C\u8FDB\u5EA6\uFF1A{{ (finishNum / rangeDownload.targetSegment * 100).toFixed(2) }}%</div>\n        <div class=\"m-p-tips\">\u82E5\u67D0\u89C6\u9891\u788E\u7247\u4E0B\u8F7D\u53D1\u751F\u9519\u8BEF\uFF0C\u5C06\u6807\u8BB0\u4E3A\u7EA2\u8272\uFF0C\u53EF\u70B9\u51FB\u76F8\u5E94\u56FE\u6807\u8FDB\u884C\u91CD\u8BD5</div>\n        <section class=\"m-p-segment\">\n        <div class=\"item\" v-for=\"(item, index) in finishList\" :class=\"[item.status]\" :title=\"item.title\" @click=\"retry(index)\">{{ index + 1 }}</div>\n        </section>\n    </template>\n    </section>\n    </body>\n\n    <script>\n    var _hmt = _hmt || [];\n    (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?1f12b0865d866ae1b93514870d93ce89\";\n    var s = document.getElementsByTagName(\"script\")[0];\n    s.parentNode.insertBefore(hm, s);\n    })();\n    </script>\n    ";
    section.style.width = '100%';
    section.style.height = '800px';
    section.style.top = '0';
    section.style.left = '0';
    section.style.position = 'relative';
    section.style.zIndex = '9999';
    section.style.backgroundColor = 'white';
    document.body.appendChild(section);
    // 加载 ASE 解密
    var $ase = document.createElement('script');
    $ase.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/aes-decryptor.js';
    // 加载 mp4 转码
    var $mp4 = document.createElement('script');
    $mp4.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/mux-mp4.js';
    // 加载 vue
    var $vue = document.createElement('script');
    $vue.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/vue.js';
    // 监听 vue 加载完成，执行业务代码
    // $vue.addEventListener('load', () => {
    // new Vue({
    // el: '#m-app',
    // data() {
    //     return {
    //     url: '',
    //     tips: 'm3u8 视频在线提取工具', // 顶部提示
    //     isPause: false, // 是否暂停下载
    //     isGetMP4: false, // 是否转码为 MP4 下载
    //     durationSecond: 0, // 视频持续时长
    //     isShowRefer: true, // 是否显示推送
    //     downloading: false, // 是否下载中
    //     beginTime: '', // 开始下载的时间
    //     errorNum: 0, // 错误数
    //     finishNum: 0, // 已下载数
    //     downloadIndex: 0, // 当前下载片段
    //     finishList: [], // 下载完成项目
    //     tsUrlList: [], // ts URL数组
    //     mediaFileList: [], // 下载的媒体数组
    //     rangeDownload: { // 特定范围下载
    //         isShowRange: false, // 是否显示范围下载
    //         startSegment: '', // 起始片段
    //         endSegment: '', // 截止片段
    //         targetSegment: 1, // 待下载片段
    //     },
    //     aesConf: { // AES 视频解密配置
    //         method: '', // 加密算法
    //         uri: '', // key 所在文件路径
    //         iv: '', // 偏移值
    //         key: '', // 秘钥
    //         decryptor: null, // 解码器对象
    //         stringToBuffer: function(str) {
    //         return new TextEncoder().encode(str)
    //         },
    //     },
    //     }
    // },
    // created() {
    //     this.getSource();
    //     document.getElementById('loading') && document.getElementById('loading').remove()
    //     window.addEventListener('keyup', this.onKeyup)
    // },
    // beforeDestroy() {
    //     window.removeEventListener('keyup', this.onKeyup)
    // },
    // methods: {
    //     // 获取链接中携带的资源链接
    //     getSource() {
    //     let { href } = location
    //     if (href.indexOf('?source=') > -1) {
    //         this.url = href.split('?source=')[1]
    //     }
    //     },
    //     // 退出弹窗
    //     onKeyup(event) {
    //     if (event.keyCode === 13) { // 键入ESC
    //         this.getM3U8()
    //     }
    //     },
    //     // ajax 请求
    //     ajax(options) {
    //     options = options || {};
    //     let xhr = new XMLHttpRequest();
    //     if (options.type === 'file') {
    //         xhr.responseType = 'arraybuffer';
    //     }
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4) {
    //         let status = xhr.status;
    //         if (status >= 200 && status < 300) {
    //             options.success && options.success(xhr.response);
    //         } else {
    //             options.fail && options.fail(status);
    //         }
    //         }
    //     };
    //     xhr.open("GET", options.url, true);
    //     xhr.send(null);
    //     },
    //     // 合成URL
    //     applyURL(targetURL, baseURL) {
    //     baseURL = baseURL || location.href
    //     if (targetURL.indexOf('http') === 0) {
    //         return targetURL
    //     } else if (targetURL[0] === '/') {
    //         let domain = baseURL.split('/')
    //         return domain[0] + '//' + domain[2] + targetURL
    //     } else {
    //         let domain = baseURL.split('/')
    //         domain.pop()
    //         return domain.join('/') + '/' + targetURL
    //     }
    //     },
    //     // 解析为 mp4 下载
    //     getMP4() {
    //     this.isGetMP4 = true
    //     this.getM3U8()
    //     },
    //     // 获取在线文件
    //     getM3U8(onlyGetRange) {
    //     if (!this.url) {
    //         alert('请输入链接')
    //         return
    //     }
    //     if (this.url.toLowerCase().indexOf('.m3u8') === -1) {
    //         alert('链接有误，请重新输入')
    //         return
    //     }
    //     if (this.downloading) {
    //         alert('资源下载中，请稍后')
    //         return
    //     }
    //     // 在下载页面才触发，代码注入的页面不需要校验
    //     // 当前协议不一致，切换协议
    //     if (location.href.indexOf('blog.luckly-mjw.cn') > -1 && this.url.indexOf(location.protocol) === -1) {
    //         alert('当前协议不一致，跳转至正确页面重新下载')
    //         location.href = `${this.url.split(':')[0]}://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html?source=${this.url}`
    //         return
    //     }
    //     // 在下载页面才触发，修改页面 URL，携带下载路径，避免刷新后丢失
    //     if (location.href.indexOf('blog.luckly-mjw.cn') > -1) {
    //         window.history.replaceState(null, '', `${location.href.split('?')[0]}?source=${this.url}`)
    //     }
    //     this.tips = 'm3u8 文件下载中，请稍后'
    //     this.beginTime = new Date()
    //     this.ajax({
    //         url: this.url,
    //         success: (m3u8Str) => {
    //         this.tsUrlList = []
    //         this.finishList = []
    //         // 提取 ts 视频片段地址
    //         m3u8Str.split('\n').forEach((item) => {
    //             if (item.toLowerCase().indexOf('.ts') > -1) {
    //             this.tsUrlList.push(this.applyURL(item, this.url))
    //             this.finishList.push({
    //                 title: item,
    //                 status: ''
    //             })
    //             }
    //         })
    //         // 仅获取视频片段数
    //         if (onlyGetRange) {
    //             this.rangeDownload.isShowRange = true
    //             this.rangeDownload.endSegment = this.tsUrlList.length
    //             this.rangeDownload.targetSegment = this.tsUrlList.length
    //             return
    //         } else {
    //             let startSegment = Math.max(this.rangeDownload.startSegment || 1, 1) // 最小为 1
    //             let endSegment = Math.max(this.rangeDownload.endSegment || this.tsUrlList.length, 1)
    //             startSegment = Math.min(startSegment, this.tsUrlList.length) // 最大为 this.tsUrlList.length
    //             endSegment = Math.min(endSegment, this.tsUrlList.length)
    //             this.rangeDownload.startSegment = Math.min(startSegment, endSegment)
    //             this.rangeDownload.endSegment = Math.max(startSegment, endSegment)
    //             this.rangeDownload.targetSegment = this.rangeDownload.endSegment - this.rangeDownload.startSegment + 1
    //             this.downloadIndex = this.rangeDownload.startSegment - 1
    //             this.downloading = true
    //         }
    //         // 获取需要下载的 MP4 视频长度
    //         if (this.isGetMP4) {
    //             let infoIndex = 0
    //             m3u8Str.split('\n').forEach(item => {
    //             if (item.toUpperCase().indexOf('#EXTINF:') > -1) { // 计算视频总时长，设置 mp4 信息时使用
    //                 infoIndex++
    //                 if (this.rangeDownload.startSegment <= infoIndex && infoIndex <= this.rangeDownload.endSegment) {
    //                 this.durationSecond += parseFloat(item.split('#EXTINF:')[1])
    //                 }
    //             }
    //             })
    //         }
    //         // 检测视频 AES 加密
    //         if (m3u8Str.indexOf('#EXT-X-KEY') > -1) {
    //             this.aesConf.method = (m3u8Str.match(/(.*METHOD=([^,\s]+))/) || ['', '', ''])[2]
    //             this.aesConf.uri = (m3u8Str.match(/(.*URI="([^"]+))"/) || ['', '', ''])[2]
    //             this.aesConf.iv = (m3u8Str.match(/(.*IV=([^,\s]+))/) || ['', '', ''])[2]
    //             this.aesConf.iv = this.aesConf.iv ? this.aesConf.stringToBuffer(this.aesConf.iv) : ''
    //             this.aesConf.uri = this.applyURL(this.aesConf.uri, this.url)
    //             // let params = m3u8Str.match(/#EXT-X-KEY:([^,]*,?METHOD=([^,]+))?([^,]*,?URI="([^,]+)")?([^,]*,?IV=([^,^\n]+))?/)
    //             // this.aesConf.method = params[2]
    //             // this.aesConf.uri = this.applyURL(params[4], this.url)
    //             // this.aesConf.iv = params[6] ? this.aesConf.stringToBuffer(params[6]) : ''
    //             this.getAES();
    //         } else if (this.tsUrlList.length > 0) { // 如果视频没加密，则直接下载片段，否则先下载秘钥
    //             this.downloadTS()
    //         } else {
    //             this.alertError('资源为空，请查看链接是否有效')
    //         }
    //         },
    //         fail: () => {
    //         this.alertError('链接不正确，请查看链接是否有效')
    //         }
    //     })
    //     },
    //     // 获取AES配置
    //     getAES() {
    //     alert('视频被 AES 加密，点击确认，进行视频解码')
    //     this.ajax({
    //         type: 'file',
    //         url: this.aesConf.uri,
    //         success: (key) => {
    //         // console.log('getAES', key)
    //         // this.aesConf.key = this.aesConf.stringToBuffer(key)
    //         this.aesConf.key = key
    //         this.aesConf.decryptor = new AESDecryptor()
    //         this.aesConf.decryptor.constructor()
    //         this.aesConf.decryptor.expandKey(this.aesConf.key);
    //         this.downloadTS()
    //         },
    //         fail: () => {
    //         this.alertError('AES 配置不正确')
    //         }
    //     })
    //     },
    //     // ts 片段的 AES 解码
    //     aesDecrypt(data, index) {
    //     let iv = this.aesConf.iv || new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, index])
    //     return this.aesConf.decryptor.decrypt(data, 0, iv.buffer || iv, true)
    //     },
    //     // 下载分片
    //     downloadTS() {
    //     this.tips = 'ts 视频碎片下载中，请稍后'
    //     let download = () => {
    //         let isPause = this.isPause // 使用另一个变量来保持下载前的暂停状态，避免回调后没修改
    //         let index = this.downloadIndex
    //         this.downloadIndex++
    //         if (this.finishList[index] && this.finishList[index].status === '') {
    //         this.ajax({
    //             url: this.tsUrlList[index],
    //             type: 'file',
    //             success: (file) => {
    //             this.dealTS(file, index, () => this.downloadIndex < this.rangeDownload.endSegment && !isPause && download())
    //             },
    //             fail: () => {
    //             this.errorNum++
    //             this.finishList[index].status = 'error'
    //             if (this.downloadIndex < this.rangeDownload.endSegment) {
    //                 !isPause && download()
    //             }
    //             }
    //         })
    //         } else if (this.downloadIndex < this.rangeDownload.endSegment) { // 跳过已经成功的片段
    //         !isPause && download()
    //         }
    //     }
    //     // 建立多少个 ajax 线程
    //     for (let i = 0; i < Math.min(10, this.rangeDownload.targetSegment - this.finishNum); i++) {
    //         download(i)
    //     }
    //     },
    //     // 处理 ts 片段，AES 解密、mp4 转码
    //     dealTS(file, index, callback) {
    //     const data = this.aesConf.uri ? this.aesDecrypt(file, index) : file
    //     this.conversionMp4(data, index, (afterData) => { // mp4 转码
    //         this.mediaFileList[index - this.rangeDownload.startSegment + 1] = afterData // 判断文件是否需要解密
    //         this.finishList[index].status = 'finish'
    //         this.finishNum++
    //         if (this.finishNum === this.rangeDownload.targetSegment) {
    //         this.downloadFile(this.mediaFileList, this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss'))
    //         }
    //         callback && callback()
    //     })
    //     },
    //     // 转码为 mp4
    //     conversionMp4(data, index, callback) {
    //     if (this.isGetMP4) {
    //         let transmuxer = new muxjs.Transmuxer({
    //         keepOriginalTimestamps: true,
    //         duration: parseInt(this.durationSecond),
    //         });
    //         transmuxer.on('data', segment => {
    //         if (index === this.rangeDownload.startSegment - 1) {
    //             let data = new Uint8Array(segment.initSegment.byteLength + segment.data.byteLength);
    //             data.set(segment.initSegment, 0);
    //             data.set(segment.data, segment.initSegment.byteLength);
    //             callback(data.buffer)
    //         } else {
    //             callback(segment.data)
    //         }
    //         })
    //         transmuxer.push(new Uint8Array(data));
    //         transmuxer.flush();
    //     } else {
    //         callback(data)
    //     }
    //     },
    //     // 暂停与恢复
    //     togglePause() {
    //     this.isPause = !this.isPause
    //     !this.isPause && this.retryAll()
    //     },
    //     // 重新下载某个片段
    //     retry(index) {
    //     if (this.finishList[index].status === 'error') {
    //         this.finishList[index].status = ''
    //         this.ajax({
    //         url: this.tsUrlList[index],
    //         type: 'file',
    //         success: (file) => {
    //             this.errorNum--
    //             this.dealTS(file, index)
    //         },
    //         fail: () => {
    //             this.finishList[index].status = 'error'
    //         }
    //         })
    //     }
    //     },
    //     // 重新下载所有错误片段
    //     retryAll() {
    //     this.finishList.forEach((item) => { // 重置所有片段状态
    //         if (item.status === 'error') {
    //         item.status = ''
    //         }
    //     })
    //     this.errorNum = 0
    //     this.downloadIndex = this.rangeDownload.startSegment - 1
    //     this.downloadTS()
    //     },
    //     // 下载整合后的TS文件
    //     downloadFile(fileDataList, fileName) {
    //     this.tips = 'ts 碎片整合中，请留意浏览器下载'
    //     let fileBlob = null
    //     let a = document.createElement('a')
    //     if (this.isGetMP4) {
    //         fileBlob = new Blob(fileDataList, { type: 'video/mp4' }) // 创建一个Blob对象，并设置文件的 MIME 类型
    //         a.download = fileName + '.mp4'
    //     } else {
    //         fileBlob = new Blob(fileDataList, { type: 'video/MP2T' }) // 创建一个Blob对象，并设置文件的 MIME 类型
    //         a.download = fileName + '.ts'
    //     }
    //     a.href = URL.createObjectURL(fileBlob)
    //     a.style.display = 'none'
    //     document.body.appendChild(a)
    //     a.click()
    //     a.remove()
    //     },
    //     // 格式化时间
    //     formatTime(date, formatStr) {
    //     const formatType = {
    //         Y: date.getFullYear(),
    //         M: date.getMonth() + 1,
    //         D: date.getDate(),
    //         h: date.getHours(),
    //         m: date.getMinutes(),
    //         s: date.getSeconds(),
    //     }
    //     return formatStr.replace(
    //         /Y+|M+|D+|h+|m+|s+/g,
    //         target => (new Array(target.length).join('0') + formatType[target[0]]).substr(-target.length)
    //     )
    //     },
    //     // 强制下载现有片段
    //     forceDownload() {
    //     if (this.mediaFileList.length) {
    //         this.downloadFile(this.mediaFileList, this.formatTime(this.beginTime, 'YYYY_MM_DD hh_mm_ss'))
    //     } else {
    //         alert('当前无已下载片段')
    //     }
    //     },
    //     // 发生错误，进行提示
    //     alertError(tips) {
    //     alert(tips)
    //     this.downloading = false
    //     this.tips = 'm3u8 视频在线提取工具';
    //     },
    //     // 拷贝本页面本身，解决跨域问题
    //     copyCode() {
    //     if (this.tips !== '代码下载中，请稍后') {
    //         this.tips = '代码下载中，请稍后';
    //         this.ajax({
    //         url: './index.html',
    //         success: (fileStr) => {
    //             let fileList = fileStr.split(`<!--vue 前端框架--\>`);
    //             let dom = fileList[0];
    //             let script = fileList[1] + fileList[2];
    //             script = script.split('');
    //             script = script[1] + script[2];
    //             if (this.url) {
    //             script = script.replace(`url: '', // 在线链接`, `url: '${this.url}',`);
    //             }
    //             let codeStr = `
    //         // 注入html
    //         let $section = document.createElement('section')
    //         $section.innerHTML = \`${dom}\`
    //         $section.style.width = '100%'
    //         $section.style.height = '800px'
    //         $section.style.top = '0'
    //         $section.style.left = '0'
    //         $section.style.position = 'relative'
    //         $section.style.zIndex = '9999'
    //         $section.style.backgroundColor = 'white'
    //         document.body.appendChild($section);
    //         // 加载 ASE 解密
    //         let $ase = document.createElement('script')
    //         $ase.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/aes-decryptor.js'
    //         // 加载 mp4 转码
    //         let $mp4 = document.createElement('script')
    //         $mp4.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/mux-mp4.js'
    //         // 加载 vue
    //         let $vue = document.createElement('script')
    //         $vue.src = 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/vue.js'
    //         // 监听 vue 加载完成，执行业务代码
    //         $vue.addEventListener('load', () => {${script}})
    //         document.body.appendChild($vue);
    //         document.body.appendChild($mp4);
    //         document.body.appendChild($ase);
    //         alert('注入成功，请滚动到页面底部，若白屏则等待资源加载')
    //         `;
    //             this.copyToClipboard(codeStr);
    //             this.tips = '复制成功，打开视频网页控制台，注入本代码';
    //         },
    //         fail: () => {
    //             this.alertError('链接不正确，请查看链接是否有效');
    //         },
    //         })
    //     }
    //     },
    //     // 拷贝剪切板
    //     copyToClipboard(content) {
    //     clearTimeout(this.timeouter)
    //     if (!document.queryCommandSupported('copy')) {
    //         return false
    //     }
    //     let $input = document.createElement('textarea')
    //     $input.style.opacity = '0'
    //     $input.value = content
    //     document.body.appendChild($input)
    //     $input.select()
    //     const result = document.execCommand('copy')
    //     document.body.removeChild($input)
    //     $input = null
    //     return result
    //     },
    // }
    // })
    // })
    // document.body.appendChild($vue);
    // document.body.appendChild($mp4);
    // document.body.appendChild($ase);
    // Your code here...
})();
