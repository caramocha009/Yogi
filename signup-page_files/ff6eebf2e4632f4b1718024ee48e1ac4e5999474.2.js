/* Kissmetrics tracking script for Thinkful. Generated: 2017-11-21 02:51:22 +0000 */if(typeof(KM)=='undefined'){var KM_KEY="ff6eebf2e4632f4b1718024ee48e1ac4e5999474";var KM_SKIP_PAGE_VIEW=1;var KM_HANDLE_PRERENDER=1;var KM={_i:null,dr:!1,rq:[],td:"http://trc.kissmetrics.com",tds:"https://trc.kissmetrics.com",dbd:"http://app.kissmetrics.com/debugger.msg",lc:{},cp:"km_"};"undefined"==typeof window._kmq&&(window._kmq=[]);var KMQ=function(a){this.r=1;if(a&&a.length)for(var b=0;b<a.length;b++)this.push(a[b])};KMQ.prototype.push=function(a){if(a)if("object"==typeof a&&a.length){var b=a.splice(0,1);KM[b]&&KM[b].apply(KM,a)}else"function"==typeof a&&a()};
KM.ikmq=function(){function a(){window._kmq.r||(KM.rq(),window._kmq=new KMQ(window._kmq))}if(!KM.dnt()&&!KM.bt())if(KM.gc("ai"),KM.gc("ni"),"undefined"!==typeof KM_HANDLE_PRERENDER&&KM_HANDLE_PRERENDER&&"prerender"===document.visibilityState){var b=function(c){"prerender"!==document.visibilityState&&(a(),document.removeEventListener?document.removeEventListener("visibilitychange",b):document.detachEvent&&document.detachEvent("onvisibilitychange",b))};KM.ev(document,"visibilitychange",b)}else a()};KM.browser=function(){var a=navigator.userAgent;return window.opera?"opera":/msie/i.test(a)?"ie":/AppleWebKit/.test(navigator.appVersion)?"safari":/mozilla/i.test(a)&&!/compatible|webkit/i.test(a)?"firefox":"unknown"}();KM.e=function(a){return document.createElement(a)};KM.ts=function(){return Math.round((new Date).getTime()/1E3)};KM.ia=function(a,b){if(!b)return!1;for(var c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};KM.aa=function(a,b){for(var c=0;c<b.length;c++)a.push(b[c]);return a};
KM.mg=function(a,b){a||(a={});if(!b)return a;for(var c in b)a[c]=b[c];return a};KM.nh=function(a){var b={},c;for(c in a)"function"!==typeof a[c]&&"object"!==typeof a[c]&&null!==a[c]&&""!==a[c]&&(b[c]=a[c]);return b};KM.$$=function(a,b,c){KM.$$=document.getElementsByClassName?function(a,b,c){c=c||document;a=c.getElementsByClassName(a);b=b?new RegExp("\\b"+b+"\\b","i"):null;c=[];for(var g,h=0,k=a.length;h<k;h+=1)g=a[h],b&&!b.test(g.nodeName)||c.push(g);return c}:document.evaluate?function(a,b,c){b=b||"*";c=c||document;var g=a.split(" "),h="",k="http://www.w3.org/1999/xhtml"===document.documentElement.namespaceURI?"http://www.w3.org/1999/xhtml":null;a=[];for(var l,n=0,p=g.length;n<p;n+=1)h+="[contains(concat(' ', @class, ' '), ' "+
g[n]+" ')]";try{l=document.evaluate(".//"+b+h,c,k,0,null)}catch(q){l=document.evaluate(".//"+b+h,c,null,0,null)}for(;b=l.iterateNext();)a.push(b);return a}:function(a,b,c){b=b||"*";c=c||document;var g=a.split(" ");a=[];b="*"===b&&c.all?c.all:c.getElementsByTagName(b);c=[];var h;h=0;for(var k=g.length;h<k;h+=1)a.push(new RegExp("(^|\\s)"+g[h]+"(\\s|$)"));for(var k=0,l=b.length;k<l;k+=1){g=b[k];h=!1;for(var n=0,p=a.length;n<p&&(h=a[n].test(g.className),h);n+=1);h&&c.push(g)}return c};return KM.$$(a,
b,c)};KM.e$=function(a,b){var c=[];if("string"==typeof a&&"."==a.substring(0,1))c=KM.$$(a.substring(1));else{var d=KM.$(a);d&&(c=[d])}for(d=0;d<c.length;d++)b(c[d])};KM.ev=function(a,b,c,d){(a=KM.$(a))&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c))};KM.sre=function(a){if(a&&(a=a.target?a.target:a.srcElement))return 3==a.nodeType?a.parentNode:a};KM.pdft=function(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1)};
KM.trackClickOnOutboundLink=function(a,b,c){KM.e$(a,function(a){KM.ev(a,"click",function(a){try{KM._ensureNext(),KM.record(b,c)}catch(d){}for(var f=KM.sre(a);f&&(!f.href||"a"!=f.nodeName.toLowerCase());)f=f.parentNode;!f||f.target||a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||(KM.pdft(a),setTimeout(function(){document.location=f.href},250))})})};KM.trackClick=function(a,b,c){KM.e$(a,function(a){KM.ev(a,"mousedown",function(a){KM._ensureNext();KM.record(b,c)})})};KM.fn=function(a){return(a.name||"").replace(/(^.+?)\[(.+?)\]/,"$1_$2")};KM.iif=function(a){return KM.fn(a).replace(/[_\-]/g,"").match(/userid|login|username|email/i)?!0:!1};
KM.iff=function(a){return KM.hc(a,"km_include")?!0:KM.hc(a,"km_ignore")||!a.nodeName.match(/input|select/i)||a.nodeName.match(/input/i)&&a.type.match(/button|file|hidden|image|password|reset|submit/i)||!a.name||KM.fn(a).replace(/[_\-]/g,"").match(/pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i)||a.type.match(/radio|checkbox/)&&!a.checked&&!a.selected?!1:!0};
KM.fp=function(a){var b={};if(!a)return b;var c=[];KM.aa(c,a.getElementsByTagName("input"));KM.aa(c,a.getElementsByTagName("textarea"));KM.aa(c,a.getElementsByTagName("select"));for(a=0;a<c.length;a++){var d=c[a];if(KM.iff(d)){var e=d.value;e||"SELECT"!=d.nodeName||(e=d.options[d.selectedIndex].text);KM.iif(d)&&!KM.gc("ni")&&KM.identify(e);d=KM.fn(d);if(d.match(/\[\]$/)){var d=d.replace(/\[\]$/,""),f=b[d]?b[d].split(","):[];f.push(e.replace(/,/g," "));f.sort();b[d]=f.join(",")}else b[d]=e}}return b};
KM.trackFormOn=function(a,b,c,d){KM.e$(b,function(b){KM.ev(b,a,function(a){"function"===typeof d&&(d=d());if("undefined"==typeof KM_SKIP_FORM_FIELDS||!KM_SKIP_FORM_FIELDS)if(a=KM.sre(a))d=KM.mg(d,KM.fp(a));KM._ensureNext();KM.record(c,d)})})};KM.trackSubmit=function(a,b,c){KM.trackFormOn("submit",a,b,c)};KM.trackForm=KM.trackSubmit;KM.$=function(a){return"object"==typeof a?a:document.getElementById(a.replace("#",""))};KM.hc=function(a,b){return a&&a.className?KM.ia(b,a.className.split(" ")):!1};KM.abi=function(){if(KM._abi||(KM._abi=KM.gc("abi")))return KM._abi;KM._abi=KM.npid();KM.sc("abi",KM._abi);return KM._abi};KM.abv={};
KM.ab=function(a,b,c){if(null==a||void 0==a||null==b||void 0==b||"array"==typeof b&&0==b.length)return null;var d=function(a){for(key in a)return!1;return!0};if("object"==typeof b&&d(b))return null;if("undefined"!=typeof KM.abv[a])return c&&c(KM.abv[a]),KM.abv[a];if("object"==typeof b&&b.length){for(var d={},e=b.length,f=0;f<e;f++)d[b[f]]=1/b.length;b=d}e=0;for(f in b)e+=b[f];var g=null,d=[];for(f in b)if("function"!=typeof b[f])for(var h=0;h<b[f]/e*100;h++)d.push(f);b=KM.sha1_b64(KM.abi()+a);for(f=
e=0;f<b.length;f++)e+=b.charCodeAt(f);e%=d.length;g=d[e];kmval={};kmval[a]=g;KM.abv[a]=g;KM.set(kmval,c?function(){c(g)}:null);return g};KM.sm=function(a,b){if(-1==a.indexOf("*"))return a==b;if(a==b)return!0;if(0==a.length)return!1;for(var c="*"==a.substr(0,1),d="*"==a.substr(a.length-1,1),e=a.split("*"),f=0;f<e.length;f++)if(e[f]){var g=c||0<f?b.lastIndexOf(e[f]):b.indexOf(e[f]);if(-1!=g){if(0==f&&!c&&0!=g)return!1;b=b.substring(g+e[f].length)}else return!1}return d?!0:b?!1:!0};KM.UES={"'":"%27","(":"%28",")":"%29","*":"%2A","~":"%7E","!":"%21","%20":"+"};KM.um=function(a,b){return KM.umf(a,b,"undefined"!=typeof KM_INCLUDE_HOSTNAME&&KM_INCLUDE_HOSTNAME)};KM.ue=function(a){if(a){for(var b in KM.UES)"string"==typeof KM.UES[b]&&(a=a.split(KM.UES[b]).join(b));a=decodeURIComponent(a)}return a};
KM.umf=function(a,b,c){b||(b=KM.u());c?0==a.indexOf("/")||0==b.indexOf("/")?(a=KM.ushnh(a.toLowerCase()),b=KM.ushnh(b.toLowerCase())):(c=/^https?:\/\//i,a.match(c)&&b.match(c)||(a=KM.usp(a.toLowerCase()),b=KM.usp(b.toLowerCase())),KM.ushash(a).replace(/^www\./,""),KM.ushash(b).replace(/^www\./,"")):(a=KM.ushnh(a.toLowerCase()),b=KM.ushnh(b.toLowerCase()));if(a==b)return!0;a=a.split("?");c=b.split("?");if(!KM.sm(KM.usi(a[0]),KM.usi(c[0])))return!1;b=KM.uqp(a[1]);a=KM.uqp(c[1]);for(var d in b)if(c=
b[d],"function"!=typeof c)if("*"==c){if(!a[d])return!1}else if(a[d]!=c)return!1;return!0};KM.uqp=function(a){if(!a)return{};a=a.split("&");for(var b=a.length,c={},d=0;d<b;d++){var e=a[d].split("=");c[KM.ue(e[0])]=KM.ue(e[1])}return c};KM.ushash=function(a){return a.replace(/\#.*/,"")};KM.ushnh=function(a){a=a.replace(/^https?/i,"");a=a.replace(/^:\/\//i,"");a=a.match(/\//)?a.replace(/^.*?\//,"/"):"";0!=a.indexOf("/")&&(a="/"+a);return KM.ushash(a)};
KM.usi=function(a){a=a.replace(/\/(index|home)(.html|$)/,"/");return"/"==a.charAt(a.length-1)||"*"==a.charAt(a.length-1)?a:a+"/"};KM.usp=function(a){a=a.replace(/^https?:\/\//i,"");return KM.ushash(a)};KM.uprts=function(a,b){if(!a)return{};var c=KM.pu(a);if(!c)return[];var d={},e=!1,f=[];c.query&&f.push(c.query.split("&"));b&&c.path&&f.push(c.path.split("/"));for(var g=0;g<f.length;g++)for(var h=f[g],k=0;k<h.length;k++)if(-1!=h[k].indexOf("=")){var l=h[k].split("="),e=l[0],l=l[1],e=KM.ue(e),l=KM.ue(l);d[e]=l;e=!0}c.params=e?d:[];return c};
KM.pu=function(a){a+="";var b,c,d={};d.src=a;c=/^(.*?):\/\//;if(b=c.exec(a))d.scheme=d.protocol=b[1],a=a.replace(c,"");c=/(.*?)(\/|$)/;if(b=c.exec(a))b=b[1].split(":"),d.host=b[0],d.port=b[1],a=a.replace(c,"/");c=/(.*?)(\?|$|\#)/;if(b=c.exec(a))d.path=b[1],a=a.replace(c,b[2]);c=/^\?(.*?)($|\#)/;if(b=c.exec(a))d.query=b[1],a=a.replace(c,b[2]);c=/^#(.*)/;if(b=c.exec(a))d.anchor=b[1];return d};KM.urm=function(a,b){b||(b=KM.u());if(!a||0===a.length)return!1;try{return b.match(new RegExp(a))?!0:!1}catch(c){return!1}};
KM.ush=function(a){a.match(/\//)&&(a=a.replace(/^.*?(\/|$)/,"/"));return a};KM.au=function(){var a=KM.u();if(a&&(a=KM.uprts(a).params)){var b=null,c=null,d={},e=!1,f;for(f in a)if(f.match(/^km/)){var g=f.replace(/^km_?/,""),h=a[f];switch(g){case "i":case "kmix":case "kmmi":case "kmmix":c="x"===g.slice(-1)?KM.unobfus(h):h;break;case "e":b=h;e=!0;break;default:d[g]=h,e=!0}}c&&KM.identify(c);e&&KM.record(b,d)}};"undefined"!=typeof KM_SKIP_URL&&KM_SKIP_URL||window._kmq.push(["au"]);
KM.bd=function(a){a=a.toLowerCase().replace(/^www\./,"").split(".");for(var b=[],c=a.length-1;0<=c&&(b.push(a[c]),-1!=" ac ad ae aero af ag ai al am an ao aq ar arpa as asia at au aw ax az ba bb bd be bf bg bh bi biz bj bm bn bo br bs bt bv bw by bz ca cat cc cd cf cg ch ci ck cl cm cn co com coop cr cu cv cx cy cz de dj dk dm do dz ec edu ee eg er es et eu fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gov gp gq gr gs gt gu gw gy hk hm hn hr ht hu id ie il im in info int io iq ir is it je jm jo jobs jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mg mh mil mk ml mm mn mo mobi mp mq mr ms mt mu museum mv mw mx my mz na name nc ne net nf ng ni nl no np nr nu nz om org pa pe pf pg ph pk pl pm pn pr pro ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sv sy sz tc td tel tf tg th tj tk tl tm tn to tp tr travel tt tv tw tz ua ug uk us uy uz va vc ve vg vi vn vu wf ws xxx ye yt za zm zw ".indexOf(" "+
a[c]+" "));c--);return b.reverse().join(".")};KM.gdc=function(a){if(document.cookie){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a)){a=decodeURIComponent(d.substring(a.length,d.length));if("null"==a||"undefined"==a||void 0===a||null===a)break;else if("false"==a)return!1;return a}}}return null};KM.gc=function(a,b){return KM.gdc(KM.cp+a)||KM.lc[a]};
KM.vcd=function(a){var b=(new Date).getTime();document.cookie="kvcd="+b+"; domain="+a+"; path=/;";return-1!=(document.cookie+"").indexOf("kvcd="+b)};KM.gcd=function(){if("undefined"==typeof KM_COOKIE_DOMAIN||!KM_COOKIE_DOMAIN){for(var a=document.location.host.toLowerCase().split(":")[0],b=a.split("."),c=[],d=b.length-1;0<=d;d--){c.unshift(b[d]);var e="."+c.join(".");if(KM.vcd(e)){KM_COOKIE_DOMAIN=e;break}}"undefined"!=typeof KM_COOKIE_DOMAIN&&KM_COOKIE_DOMAIN||(KM_COOKIE_DOMAIN="."+KM.bd(a))}return KM_COOKIE_DOMAIN};
KM.sc=function(a,b,c,d){KM.lc[a]=b;KM.sdc(KM.cp+a,b,c)};KM.sdc=function(a,b,c){void 0===c&&(c=15768E7);15768E7<c&&(c=15768E7);void 0===b&&(b="");if(c){var d=new Date;d.setTime(d.getTime()+c);c="; expires="+d.toGMTString()}else c="";a=a+"="+encodeURIComponent(b)+c+";";(b=KM.gcd())&&(a+=" domain="+b+";");document.cookie=a+" path=/"};KM.chrsz=8;KM.b64pad="=";
KM.core_sha1=function(a,b){a[b>>5]|=128<<24-b%32;a[(b+64>>9<<4)+15]=b;for(var c=Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,k=0;k<a.length;k+=16){for(var l=d,n=e,p=f,q=g,r=h,m=0;80>m;m++){c[m]=16>m?a[k+m]:KM.rol(c[m-3]^c[m-8]^c[m-14]^c[m-16],1);var t=KM.safe_add(KM.safe_add(KM.rol(d,5),KM.sha1_ft(m,e,f,g)),KM.safe_add(KM.safe_add(h,c[m]),KM.sha1_kt(m))),h=g,g=f,f=KM.rol(e,30),e=d,d=t}d=KM.safe_add(d,l);e=KM.safe_add(e,n);f=KM.safe_add(f,p);g=KM.safe_add(g,q);h=KM.safe_add(h,
r)}return[d,e,f,g,h]};KM.sha1_ft=function(a,b,c,d){return 20>a?b&c|~b&d:40>a?b^c^d:60>a?b&c|b&d|c&d:b^c^d};KM.sha1_kt=function(a){return 20>a?1518500249:40>a?1859775393:60>a?-1894007588:-899497514};KM.safe_add=function(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535};KM.rol=function(a,b){return a<<b|a>>>32-b};KM._b64tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
KM.b64enc=function(a){var b=0,c="";do var d=a[b++],e=a[b++],f=a[b++],d=d<<16|e<<8|f,e=d>>12&63,f=d>>6&63,g=d&63,c=c+(KM._b64tab.charAt(d>>18&63)+KM._b64tab.charAt(e)+KM._b64tab.charAt(f)+KM._b64tab.charAt(g));while(b<a.length);a=a.length%3;return(a?c.slice(0,a-3):c)+"===".slice(a||3)};
KM.b64dec=function(a){var b=0,c=[];do{var d=KM._b64tab.indexOf(a.charAt(b++)),e=KM._b64tab.indexOf(a.charAt(b++)),f=KM._b64tab.indexOf(a.charAt(b++)),g=KM._b64tab.indexOf(a.charAt(b++)),d=d<<18|e<<12|f<<6|g,e=d>>8&255,h=d&255;c.push(d>>16&255);64!==f&&(c.push(e),64!==g&&c.push(h))}while(b<a.length);return c};KM.binb2b64=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]>>24&255),b.push(a[c]>>16&255),b.push(a[c]>>8&255),b.push(a[c]&255);return KM.b64enc(b)};
KM.str2binb=function(a){for(var b=[],c=(1<<KM.chrsz)-1,d=0;d<a.length*KM.chrsz;d+=KM.chrsz)b[d>>5]|=(a.charCodeAt(d/KM.chrsz)&c)<<32-KM.chrsz-d%32;return b};KM.sha1_b64=function(a){return KM.binb2b64(KM.core_sha1(KM.str2binb(a),a.length*KM.chrsz))};KM.obfus=function(a){a=unescape(encodeURIComponent(a));for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c)^KM_KEY.charCodeAt(c%KM_KEY.length));return KM.b64enc(b)};
KM.unobfus=function(a){a=KM.b64dec(a);for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]^KM_KEY.charCodeAt(c%KM_KEY.length));return decodeURIComponent(escape(b))};KM.p=function(a){var b=[],c,d,e;for(e in a)c=a[e],d=!1,"function"!=typeof c&&(null===c?c="":"object"==typeof c&&("function"==typeof c.join?c=c.join(","):d=!0),d||b.push(encodeURIComponent(e)+"="+encodeURIComponent(c)));return b.join("&")};KM.x=function(a,b,c){if("undefined"!=typeof KM_KEY&&KM_KEY){b&&"object"==typeof b||(b={});b._k=KM_KEY;b._p||(b._p=KM.i());b._t=b._t||KM.ts();b=KM.p(b);var d=0==KM.u().toLowerCase().indexOf("https")?KM.tds:KM.td;KM.r(d+"/"+a+"?"+b,c)}};
KM._ensureNext=function(){KM._isEnsured=!0};
KM.r=function(a,b){if(!KM.dnt()&&!KM.bt()){var c=!!KM._isEnsured;delete KM._isEnsured;var d=!1;if("function"===typeof window.navigator.sendBeacon){var d=KM.pu(a),e=d.scheme+"://"+d.host+d.path;(d=window.navigator.sendBeacon(e,d.query))&&b&&b()}if(!d)if("string"===typeof a&&4E3<=a.length){var d=KM.pu(a),e=d.scheme+"://"+d.host+d.path,f=new XMLHttpRequest;f.open("POST",e,!0);f.setRequestHeader("Content-type","application/x-www-form-urlencoded");"function"===typeof b&&(f.onreadystatechange=function(){4===
f.readyState&&200===f.status&&b()});f.send(d.query)}else{var g=new Image(1,1);g._cb=b;d="undefined"!==typeof KM_SKIP_URL_QUEUE&&KM_SKIP_URL_QUEUE;c&&!d&&KM.aq(a);KM.ev(g,"load",function(a){g&&(KM.xq(g.src),g._cb&&g._cb())});g.src=a}}};KM.i=function(){if(KM._i||(KM._i=KM.gc("ni"))||(KM._i=KM.gc("ai")))return KM._i;KM._i=KM.npid();KM.sc("ai",KM._i);return KM._i};KM.npid=function(){var a=new Date,b="";if(navigator.plugins)for(var c=navigator.plugins.length,d=0;d<c;d++)navigator.plugins[d]&&(b+=[navigator.plugins[d].name,navigator.plugins[d].description,navigator.plugins[d].filename].join("/"));return KM.sha1_b64([Math.random(),a.getTime(),navigator.userAgent,navigator.vendor,b,document.referrer].join("|"))};
KM.identify=function(a){return KM._doIdentify(a,!1)};KM.mergeIdentify=function(a){return KM._doIdentify(a,!0)};KM._doIdentify=function(a,b){for(var c="null nil 'null' 'nil' \"null\" \"nil\" '' \"\" anonymous Anonymous guest Guest undefined Undefined".split(" "),d=0;d<c.length;d++)if(a==c[d]){a=null;break}if(a){if(c=KM.gc("ni"))b?KM.alias(a,c):KM.sc("ai",a);else{var e;(e=KM.gc("ai"))&&KM.alias(a,e)}KM.sc("ni",a);KM._i=a}else KM.clearIdentity()};
KM.clearIdentity=function(){KMCID=null;KM._i=null;KM.gc("ni")&&KM.sc("ai",null,-1E3);KM.sc("ni",null,-1E3)};KM.alias=function(a,b){a!=b&&KM.x("a",{_n:a,_p:b})};KM.set=function(a,b){if(a){"object"!=typeof a&&(a="function"==typeof a?a()||{}:{});for(var c in a)if("function"!=typeof a[c]){KM.x("s",a,b);break}}};KM.record=function(a,b,c){var d,e;a&&b?(e=a,d=b):a&&!b?"string"==typeof a?(e=a,d={}):d=a:!a&&b&&(d=b);"function"===typeof d&&(d=d());"object"!=typeof d&&(d={});e?KM.ar(e,d,c):d&&KM.set(d,c)};KM.ar=function(a,b,c){window.KM_EVENT_PROPERTIES&&"function"===typeof KM_EVENT_PROPERTIES[a]&&KM.mg(b,KM_EVENT_PROPERTIES[a]());b._n=a;KM.x("e",b,c)};KM.rf=function(){return"undefined"!=typeof KM_REFERRER?KM_REFERRER:document.referrer};KM.u=function(){return document.location+""};KM.pageView=function(){window._kmq.push(["record","Page View",{"Viewed URL":KM.u(),Referrer:KM.rf()||"Direct"}])};"undefined"!=typeof KM_SKIP_PAGE_VIEW&&KM_SKIP_PAGE_VIEW||KM.pageView();KM.signedUp=function(a,b){KM.record("Signed Up",KM.nh(KM.mg({"Plan Name":a},b)))};KM.upgraded=function(a,b){KM.record("Upgraded",KM.nh(KM.mg({"Plan Name":a},b)))};KM.downgraded=function(a,b){KM.record("Downgraded",KM.nh(KM.mg({"Plan Name":a},b)))};KM.billed=function(a,b,c){KM.record("Billed",KM.nh(KM.mg({"Billing Amount":a,"Billing Description":b},c)))};KM.cancelled=function(a){KM.record("Canceled",a)};KM.canceled=KM.cancelled;
KM.rvs=function(){var a=18E5,b;KM.gc("vs",!0)||(b={URL:KM.u(),Referrer:KM.rf()||"Direct"},window.screen&&screen.width&&screen.height&&(b["KM Screen Resolution"]=screen.width+"x"+screen.height),KM.record("Visited Site",b));"number"==typeof KM_SESSION_TIMEOUT&&(a=KM_SESSION_TIMEOUT);KM.sc("vs","1",a,!0)};"undefined"!=typeof KM_SKIP_VISITED_SITE&&KM_SKIP_VISITED_SITE||window._kmq.push(["rvs"]);KM.trackSearchHits=function(){if(KM.rf()){var a={Google:{d:/^((?!accounts).*)\.?google\.\S{2,3}(.\S{2,3})?$/,q:"q"},Yahoo:{d:/search\.yahoo\.\S{2,3}(.\S{2,3})?$/,q:"p"},Ask:{d:/ask\.\S{2,3}(.\S{2,3})?$/,q:"q"},MSN:{d:/search\.msn\.\S{2,3}(.\S{2,3})?$/,q:"q"},Live:{d:/search\.live\.\S{2,3}(.\S{2,3})?$/,q:"q"},AOL:{d:/search\.aol\.\S{2,3}(.\S{2,3})?$/,q:"query"},Netscape:{d:/search\.netscape\.\S{2,3}(.\S{2,3})?$/,q:"query"},AltaVista:{d:/altavista\.\S{2,3}(.\S{2,3})?$/,q:"q"},Lycos:{d:/search.lycos\.\S{2,3}(.\S{2,3})?$/,
q:"q"},Dogpile:{d:/dogpile\.\S{2,3}(.\S{2,3})?$/,q:"/dogpile/ws/results/Web/",t:"path"},A9:{d:/a9\.\S{2,3}(.\S{2,3})?$/,q:"/"},Bing:{d:/bing\.\S{2,3}(.\S{2,3})?$/,q:"q"},Yandex:{d:/yandex\.\S{2,3}(.\S{2,3})?$/,q:"text"}},b=null,c;for(c in a){var d=a[c];if("object"==typeof d){var e=KM.uprts(KM.rf(),d.t&&"path"==d.t),f=e.params?e.params:[],g=d.d,h=e.host;h&&(h=h.toLowerCase().replace(/www\./gi,""));h&&null!==h.match(g)&&(g=null,"/"==d.q.substr(0,1)?e.path&&0===e.path.indexOf(d.q)&&(g=e.path.substr(d.q.length),
d=g.indexOf("/"),-1!==d&&(g=g.substr(0,d)),g=KM.ue(g)):g=f[d.q],null!==g&&(b={name:c,terms:g||"not provided"}))}}b&&window._kmq.push(["record","Search Engine Hit",{"Search Engine":b.name,"Search Terms":b.terms}])}};"undefined"!=typeof KM_SKIP_SEARCH_ENGINE&&KM_SKIP_SEARCH_ENGINE||KM.trackSearchHits();KM.checkForUTM=function(){var a=KM.u();if(a){var b=KM.uprts(a);if(b.params){var c={},d=!1;b.params.utm_source&&(c["Campaign Source"]=b.params.utm_source,d=!0);b.params.utm_medium&&(c["Campaign Medium"]=b.params.utm_medium,d=!0);b.params.utm_campaign&&(c["Campaign Name"]=b.params.utm_campaign,d=!0);b.params.utm_term&&(c["Campaign Terms"]=b.params.utm_term,d=!0);b.params.utm_content&&(c["Campaign Content"]=b.params.utm_content,d=!0);b.params.gclid&&(d=!0,b.params.utm_medium||(c["Campaign Medium"]="paid"),
b.params.utm_source||(c["Campaign Source"]="google"));d&&(c.URL=a,window._kmq.push(["record","Ad Campaign Hit",c]))}}};"undefined"!=typeof KM_SKIP_UTM&&KM_SKIP_UTM||KM.checkForUTM();KM.ir=function(){var a=KM.gc("lv");if(a){if("x"==a)return!0;a=parseInt(a,10);if(0<a&&1800<=KM.ts()-a)return!0}else if(KM.gc("ni"))return!0;if(a=KM.gdc("__utma"))if(a=a.split("."),0<a.length&&1<parseInt(a[a.length-1],10))return!0;return!1};KM.tr=function(){"x"!=KM.gc("lv")&&(KM.ir()?(KM.set({returning:1}),KM.sc("lv","x")):KM.sc("lv",KM.ts()))};"undefined"!=typeof KM_SKIP_RETURNING&&KM_SKIP_RETURNING||window._kmq.push(["tr"]);KM.dnt=function(){try{if("undefined"!=typeof KM_DNT&&KM_DNT){if("undefined"!=typeof KMDNTH&&KMDNTH)return 1;var a=document.navigator;if(a&&a.doNotTrack)return 1;var b=window.external;if(b&&(b.InPrivateFilteringEnabled()||b.msTrackingProtectionEnabled()))return 1}}catch(c){}return 0};KM.bt=function(a){a||(a=navigator.userAgent);return a.match(/bot|spider|crawl|mediapartners|archive|slurp|agent|grab/i)?!0:!1};KM.aq=function(a){a=KM.cqu(a);for(var b=KM.gq(),c=0;c<b.length;c++)if(a==b[c].u)return!1;b.push({u:a,t:KM.ts()});KM.sq(b)};KM.cqu=function(a){a=a.replace(/ /g,"+").replace(/\|/g,"%7C").replace(KM.tds,"").replace(KM.td,"");0!=a.indexOf("/")&&(a="/"+a);return a};KM.sq=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c].t+" "+a[c].u);for(;2048<b.join("|").length;)b=b.slice(1);KM.sc("uq",b.join("|"))};
KM.xq=function(a){a=KM.cqu(a);for(var b=KM.gq(),c=[],d=0;d<b.length;d++)a!=b[d].u&&c.push(b[d]);KM.sq(c)};KM.gq=function(){var a=KM.gc("uq");if(!a)return[];for(var b=[],a=a.split("|"),c=KM.ts()-300,d=0;d<a.length;d++){var e=a[d].split(" ");2==e.length&&(e={t:parseInt(e[0],10),u:e[1]},e.t>c&&b.push(e))}return b};KM.rq=function(){for(var a=KM.gq(),b=0==KM.u().toLowerCase().indexOf("https")?KM.tds:KM.td,c=0;c<a.length;c++)KM.r(b+a[c].u)};KM.ce=function(a,b,c){var d=document;a="undefined"!=typeof b&&d.getElementById(b)?d.getElementById(b):d.createElement(a);a.style.visibility="hidden";a.style.position="absolute";b&&a.setAttribute("id",b);c&&d.body.appendChild(a);return a};KM.iud=function(){KM.ud=0;if(!("undefined"!=typeof KM_COOKIES_ONLY&&KM_COOKIES_ONLY||KM.ls))try{KM.ude=KM.ce("div","userdata_el",1),KM.ud=KM.ude.addBehavior?1:0,KM.ud&&(KM.ude.style.behavior="url(#default#userData)",KM_NO_SWF=1)}catch(a){}};
KM.uds=function(a,b){try{KM.ud&&KM.ude&&(null===b?b="null":!1===b&&(b="false"),KM.ude.setAttribute(a,b),KM.ude.save(a))}catch(c){}};KM.udg=function(a){try{if(KM.ud&&KM.ude){KM.ude.load(a);var b=KM.ude.getAttribute(a);return"null"==b||"undefined"==b||void 0===b||null===b?null:"false"==b?!1:b+""}}catch(c){}};KM.drdy=!1;KM.odr=function(){KM.drdy||(KM.drdy=!0,setTimeout(function(){KM.ikmq()},1E3))};KM.cdr=function(){var a=document;return"complete"==a.readyState||a.addEventListener&&"loaded"==a.readyState?(KM.odr(),!0):!1};
KM.cdr()||(KM.idr=function(){var a=document,b=window;a.addEventListener?(a.addEventListener("DOMContentLoaded",KM.odr,!0),a.addEventListener("readystatechange",KM.cdr,!0),b.addEventListener("load",KM.odr,!0)):a.attachEvent&&(a.attachEvent("onreadystatechange",KM.cdr),b.attachEvent("onload",KM.odr))},KM.idr());window.addEventListener&&window.addEventListener("message",function(a){a.origin&&a.origin.match(/\.kissmetrics\.com$/)&&a.data=="KM_HELLO:"+KM_KEY&&window.opener&&window.opener.postMessage&&window.opener.postMessage("KM_IDENTITY="+KM.i(),"*")},!1);var KMCTT_SOURCE,KMCTT_ORIGIN="https://app.kissmetrics.com";
(function(){function a(a){var c=a.data;a.origin===KMCTT_ORIGIN&&"object"===typeof c&&(KMCTT_SOURCE||(KMCTT_SOURCE=a.source),"function"===typeof b[c.method]&&(b[c.method].apply(null,c.args),c.responseId&&KMCTT_SOURCE.postMessage({method:"_response",message:{responseId:c.responseId}},KMCTT_ORIGIN)))}var b={},c={},d=/^https:\/\/(16kmassets.global.ssl.fastly.net|app.kissmetrics.com)\//;window.KMCTT_PROXY||(b.loadScript=function(a){var b,g;c[a]||window.KMCTT_PROXY||!d.test(a)||(b=document.getElementById("kmc"),
window.KM_DISABLE_ENGAGE=!0,b&&(b.style.display="none"),c[a]=!0,b=document.getElementsByTagName("script")[0],g=document.createElement("script"),g.type="text/javascript",g.async=!0,g.src=a,b.parentNode.insertBefore(g,b))},window.addEventListener&&window.addEventListener("message",a,!1),window.top&&window!==window.top&&top.postMessage&&top.postMessage({method:"frameLoaded"},KMCTT_ORIGIN))})();KM.triggerEventTypes={ClickTrigger:"mousedown",SubmitTrigger:"submit"};KM._eventTriggers={};KM.listenForTrigger=function(a,b){KM._eventTriggers[a]||(KM._eventTriggers[a]=[],KM.ev(window,a,function(b){try{KM._processEvent(a,b)}catch(d){}},!0));KM._eventTriggers[a].push(b)};
KM._processEvent=function(a,b){var c,d,e,f=KM.sre(b),g=KM._eventTriggers[a];if(f&&g)for(c=0;c<g.length;c++)d=g[c],KM._selectorMatchesElement(d.selector,f)&&KM._triggerOnThisPage(d)&&(e=KM.calculateProps(d.props),"submit"===a&&(e=KM.mg(e,KM.fp(f))),KM._ensureNext(),KM.record(d.name,e))};
KM._selectorMatchesElement=function(a,b){var c,d;try{if(b)if(c=b.matches||b.matchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector)for(;b;){if(c.call(b,a))return!0;b=b.parentNode}else for(d=(b.document||b.ownerDocument).querySelectorAll(a),d=Array.prototype.slice.call(d);b;){if(-1!==d.indexOf(b))return!0;b=b.parentNode}}catch(e){}return!1};
KM.trackVisualTrigger=function(a){var b=KM.triggerEventTypes[a.type],c=a.selector,d=a.name;b&&c&&d&&KM.listenForTrigger(b,a)};KM._triggerOnThisPage=function(a){return a.limit_url&&a.url?a.url_is_regex?KM.urm(a.url):KM.um(a.url):!0};KM.calculateProps=function(a){var b,c={};if(a&&a.length)for(b=0;b<a.length;b++)try{c[a[b].name]=KM._calculateProp(a[b])}catch(d){}return c};
KM._calculateProp=function(a){var b;switch(a.type){case "DynamicTriggerProperty":a=KM._getDynamicPropInfo(a.value);b=a.value;break;case "StaticTriggerProperty":b=a.value}return b};KM._getDynamicPropInfo=function(a){var b;b="";var c=document.querySelectorAll(a);c.length&&(b=c[0],b=String(b.textContent||b.innerText),b=b.replace(/^\s+|\s+$/g,"").replace(/\n/," ").substring(0,300));return{selector:a,value:b,matchCount:c.length}};function _kmil(){KM.ikmq()};
_kmil();
_kmq.push(['trackVisualTrigger',{"type":"ClickTrigger","name":"Learn More","props":[],"selector":"#tab-link"}]);if(KM.um("https://www.thinkful.com/register/syllabus*"))_kmq.push(['record',"View syllabus overview",KM.calculateProps([])]);if(KM.um("https://www.thinkful.com/register/signup"))_kmq.push(['record',"Sign up form",KM.calculateProps([])]);}