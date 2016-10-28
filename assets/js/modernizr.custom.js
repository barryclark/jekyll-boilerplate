/*
Last Updated: 2016年6月10日 11:07:01

COTA
http://cota.jp
*/
window.Modernizr=function(aw,av,au){function T(b){am.cssText=b}function S(d,c){return T(ai.join(d+";")+(c||""))}function R(d,c){return typeof d===c}function Q(d,c){return !!~(""+d).indexOf(c)}function P(f,c){for(var h in f){var g=f[h];if(!Q(g,"-")&&am[g]!==au){return c=="pfx"?g:!0}}return !1}function O(g,c,j){for(var i in g){var h=c[g[i]];if(h!==au){return j===!1?g[i]:R(h,"function")?h.bind(j||c):h}}return !1}function N(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+ag.join(i+" ")+i).split(" ");return R(f,"string")||R(f,"undefined")?P(h,f):(h=(g+" "+af.join(i+" ")+i).split(" "),O(h,f,j))}function M(){ar.input=function(f){for(var b=0,a=f.length;b<a;b++){ab[f[b]]=f[b] in al}return ab.list&&(ab.list=!!av.createElement("datalist")&&!!aw.HTMLDataListElement),ab}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ar.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;l<c;l++){al.setAttribute("type",j=b[l]),k=al.type!=="text",k&&(al.value=ak,al.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&al.style.WebkitAppearance!==au?(ap.appendChild(al),g=av.defaultView,k=g.getComputedStyle&&g.getComputedStyle(al,null).WebkitAppearance!=="textfield"&&al.offsetHeight!==0,ap.removeChild(al)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=al.checkValidity&&al.checkValidity()===!1:k=al.value!=ak)),ac[b[l]]=!!k}return ac}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var at="2.8.3",ar={},aq=!0,ap=av.documentElement,ao="modernizr",an=av.createElement(ao),am=an.style,al=av.createElement("input"),ak=":)",aj={}.toString,ai=" -webkit- -moz- -o- -ms- ".split(" "),ah="Webkit Moz O ms",ag=ah.split(" "),af=ah.toLowerCase().split(" "),ae={svg:"http://www.w3.org/2000/svg"},ad={},ac={},ab={},aa=[],Z=aa.slice,Y,X=function(v,u,t,s){var r,q,p,o,h=av.createElement("div"),g=av.body,b=g||av.createElement("body");if(parseInt(t,10)){while(t--){p=av.createElement("div"),p.id=s?s[t]:ao+(t+1),h.appendChild(p)}}return r=["&#173;",'<style id="s',ao,'">',v,"</style>"].join(""),h.id=ao,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=ap.style.overflow,ap.style.overflow="hidden",ap.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),ap.style.overflow=o),!!q},W=function(){function c(h,g){g=g||av.createElement(b[h]||"div"),h="on"+h;var a=h in g;return a||(g.setAttribute||(g=av.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=R(g[h],"function"),R(g[h],"undefined")||(g[h]=au),g.removeAttribute(h))),g=null,a}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return c}(),V={}.hasOwnProperty,U;!R(V,"undefined")&&!R(V.call,"undefined")?U=function(d,c){return V.call(d,c)}:U=function(d,c){return c in d&&R(d.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;if(typeof h!="function"){throw new TypeError}var g=Z.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};b.prototype=h.prototype;var d=new b,c=h.apply(d,g.concat(Z.call(arguments)));return Object(c)===c?c:d}return h.apply(a,g.concat(Z.call(arguments)))};return f}),ad.flexbox=function(){return N("flexWrap")},ad.flexboxlegacy=function(){return N("boxDirection")},ad.canvas=function(){var b=av.createElement("canvas");return !!b.getContext&&!!b.getContext("2d")},ad.canvastext=function(){return !!ar.canvas&&!!R(av.createElement("canvas").getContext("2d").fillText,"function")},ad.webgl=function(){return !!aw.WebGLRenderingContext},ad.touch=function(){var a;return"ontouchstart" in aw||aw.DocumentTouch&&av instanceof DocumentTouch?a=!0:X(["@media (",ai.join("touch-enabled),("),ao,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9}),a},ad.geolocation=function(){return"geolocation" in navigator},ad.postmessage=function(){return !!aw.postMessage},ad.websqldatabase=function(){return !!aw.openDatabase},ad.indexedDB=function(){return !!N("indexedDB",aw)},ad.hashchange=function(){return W("hashchange",aw)&&(av.documentMode===au||av.documentMode>7)},ad.history=function(){return !!aw.history&&!!history.pushState},ad.draganddrop=function(){var b=av.createElement("div");return"draggable" in b||"ondragstart" in b&&"ondrop" in b},ad.websockets=function(){return"WebSocket" in aw||"MozWebSocket" in aw},ad.rgba=function(){return T("background-color:rgba(150,255,150,.5)"),Q(am.backgroundColor,"rgba")},ad.hsla=function(){return T("background-color:hsla(120,40%,100%,.5)"),Q(am.backgroundColor,"rgba")||Q(am.backgroundColor,"hsla")},ad.multiplebgs=function(){return T("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(am.background)},ad.backgroundsize=function(){return N("backgroundSize")},ad.borderimage=function(){return N("borderImage")},ad.borderradius=function(){return N("borderRadius")},ad.boxshadow=function(){return N("boxShadow")},ad.textshadow=function(){return av.createElement("div").style.textShadow===""},ad.opacity=function(){return S("opacity:.55"),/^0.55$/.test(am.opacity)},ad.cssanimations=function(){return N("animationName")},ad.csscolumns=function(){return N("columnCount")},ad.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";return T((e+"-webkit- ".split(" ").join(d+e)+ai.join(f+e)).slice(0,-e.length)),Q(am.backgroundImage,"gradient")},ad.cssreflections=function(){return N("boxReflect")},ad.csstransforms=function(){return !!N("transform")},ad.csstransforms3d=function(){var b=!!N("perspective");return b&&"webkitPerspective" in ap.style&&X("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3}),b},ad.csstransitions=function(){return N("transition")},ad.fontface=function(){var b;return X('@font-face {font-family:"font";src:url("https://")}',function(k,j){var i=av.getElementById("smodernizr"),h=i.sheet||i.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";b=/src/i.test(a)&&a.indexOf(j.split(" ")[0])===0}),b},ad.generatedcontent=function(){var b;return X(["#",ao,"{font:0/0 a}#",ao,':after{content:"',ak,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3}),b},ad.video=function(){var b=av.createElement("video"),f=!1;try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(e){}return f},ad.audio=function(){var b=av.createElement("audio"),f=!1;try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return f},ad.localstorage=function(){try{return localStorage.setItem(ao,ao),localStorage.removeItem(ao),!0}catch(b){return !1}},ad.sessionstorage=function(){try{return sessionStorage.setItem(ao,ao),sessionStorage.removeItem(ao),!0}catch(b){return !1}},ad.webworkers=function(){return !!aw.Worker},ad.applicationcache=function(){return !!aw.applicationCache},ad.svg=function(){return !!av.createElementNS&&!!av.createElementNS(ae.svg,"svg").createSVGRect},ad.inlinesvg=function(){var b=av.createElement("div");return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==ae.svg},ad.smil=function(){return !!av.createElementNS&&/SVGAnimate/.test(aj.call(av.createElementNS(ae.svg,"animate")))},ad.svgclippaths=function(){return !!av.createElementNS&&/SVGClipPath/.test(aj.call(av.createElementNS(ae.svg,"clipPath")))};for(var L in ad){U(ad,L)&&(Y=L.toLowerCase(),ar[Y]=ad[L](),aa.push((ar[Y]?"":"no-")+Y))}return ar.input||M(),ar.addTest=function(e,c){if(typeof e=="object"){for(var f in e){U(e,f)&&ar.addTest(f,e[f])}}else{e=e.toLowerCase();if(ar[e]!==au){return ar}c=typeof c=="function"?c():c,typeof aq!="undefined"&&aq&&(ap.className+=" "+(c?"":"no-")+e),ar[e]=c}return ar},T(""),an=al=null,function(ax,K){function A(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)}function z(){var b=t.elements;return typeof b=="string"?b.split(" "):b}function y(d){var c=C[d[E]];return c||(c={},D++,d[E]=D,C[D]=c),c}function x(b,h,f){h||(h=K);if(B){return h.createElement(b)}f||(f=y(h));var e;return f.cache[b]?e=f.cache[b].cloneNode():G.test(b)?e=(f.cache[b]=f.createElem(b)).cloneNode():e=f.createElem(b),e.canHaveChildren&&!H.test(b)&&!e.tagUrn?f.frag.appendChild(e):e}function w(b,l){b||(b=K);if(B){return b.createDocumentFragment()}l=l||y(b);var k=l.frag.cloneNode(),j=0,i=z(),h=i.length;for(;j<h;j++){k.createElement(i[j])}return k}function v(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return t.shivMethods?x(a,d,c):c.createElem(a)},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'})+");return n}")(t,c.frag)}function u(b){b||(b=K);var d=y(b);return t.shivCSS&&!F&&!d.hasCSS&&(d.hasCSS=!!A(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),B||v(b,d),b}var J="3.7.0",I=ax.html5||{},H=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,G=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,F,E="_html5shiv",D=0,C={},B;(function(){try{var b=K.createElement("a");b.innerHTML="<xyz></xyz>",F="hidden" in b,B=b.childNodes.length==1||function(){K.createElement("a");var c=K.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()}catch(d){F=!0,B=!0}})();var t={elements:I.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:J,shivCSS:I.shivCSS!==!1,supportsUnknownElements:B,shivMethods:I.shivMethods!==!1,type:"default",shivDocument:u,createElement:x,createDocumentFragment:w};ax.html5=t,u(K)}(this,av),ar._version=at,ar._prefixes=ai,ar._domPrefixes=af,ar._cssomPrefixes=ag,ar.hasEvent=W,ar.testProp=function(b){return P([b])},ar.testAllProps=N,ar.testStyles=X,ap.className=ap.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(aq?" js "+aa.join(" "):""),ar}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};