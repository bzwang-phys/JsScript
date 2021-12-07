import axios from "axios";
import cheerio from "cheerio";


function dualstack(chars:string){
	let urid = genrid(chars);
	setrid("4", urid);
	setrid("6", urid);
	return urid;
}
function setrid(IPtype:string, rid:string){
	axios.request({
		method: "get",
		url: "https://its"+IPtype+".pku.edu.cn/setrid.jsp?rid="+rid,
		timeout:2000
	}).then(function(d){console.log(IPtype+"=d="+d);})
    .catch(function(e){console.log(IPtype+"=e="+e);});
}
function genrid(charTem:string) {
	let chars = charTem;
	let string_length = 60;
	let rid = '';
	for (let i=0; i<string_length; i++) {
		let rnum = Math.floor(Math.random()*chars.length);
		rid += chars.substring(rnum,rnum+1);
	}
	rid = Date.now()+rid ;
	return rid;
}


function getLoginConfig(rid:string):object {
    const loginConfig = {
        url: '/cas/webLogin',
        method: 'post',
        baseURL: 'https://its.pku.edu.cn/',
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.166 Safari/537.36',
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


function login():number{
    

    axios.request({baseURL: 'https://its.pku.edu.cn/', url:'/js/getIPv4_IPv6.js', method:'get'})
    .then((res)=>{
        let code:string = res.data.toString();
        let randomstr:string = code.match(/chars =(.*)/)![1];
        randomstr = randomstr.replace(/[\"|;]/g, "").trim();
        let rid:string = dualstack(randomstr);
        console.log(rid);

        axios.request(getLoginConfig(rid))
        .then((res)=>{
            console.log(res.headers);
        }).catch((err)=>{
            console.log("Filed when post usernam and passwd: " + err)
        })
    })
    .catch((err) => {
        console.log("Filed when getting the rid: " + err);
    });
    return 0;
}





login();

