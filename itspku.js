"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function dualstack(chars) {
    var urid = genrid(chars);
    setrid("4", urid);
    setrid("6", urid);
    return urid;
}
function setrid(IPtype, rid) {
    axios_1.default.request({
        method: "get",
        url: "https://its" + IPtype + ".pku.edu.cn/setrid.jsp?rid=" + rid,
        timeout: 2000
    }).then(function (d) { console.log(IPtype + "=d=" + d); })
        .catch(function (e) { console.log(IPtype + "=e=" + e); });
}
function genrid(charTem) {
    var chars = charTem;
    var string_length = 60;
    var rid = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        rid += chars.substring(rnum, rnum + 1);
    }
    rid = Date.now() + rid;
    return rid;
}
function getLoginConfig(rid) {
    var loginConfig = {
        url: '/cas/webLogin',
        method: 'post',
        baseURL: 'https://its.pku.edu.cn/',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.166 Safari/537.36',
            'Origin': 'https://its.pku.edu.cn',
            'Host': 'its.pku.edu.cn'
        },
        data: {
            'username': '1906390213',
            'password': 'q1w2e3r4t5',
            'iprange': 'yes',
            'rid': rid
        }
    };
    return loginConfig;
}
function login() {
    axios_1.default.request({ baseURL: 'https://its.pku.edu.cn/', url: '/js/getIPv4_IPv6.js', method: 'get' })
        .then(function (res) {
        var code = res.data.toString();
        var randomstr = code.match(/chars =(.*)/)[1];
        randomstr = randomstr.replace(/[\"|;]/g, "").trim();
        var rid = dualstack(randomstr);
        console.log(rid);
        axios_1.default.request(getLoginConfig(rid))
            .then(function (res) {
            console.log(res.headers);
        }).catch(function (err) {
            console.log("Filed when post usernam and passwd: " + err);
        });
    })
        .catch(function (err) {
        console.log("Filed when getting the rid: " + err);
    });
    return 0;
}
login();
