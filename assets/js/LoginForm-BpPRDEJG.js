import{g as U,e as H,u as z,f as S,h as k,i as M,c as L,F as q,a as F,d as O,r as x,w as h,j as A,k as $,l as D,m as G,n as K,p as W,H as Z,E as J,q as P,o as Q,b as C}from"./index-D0Uwzysj.js";import{u as X,a as Y}from"./tabs-CsZueCTP.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";var V={exports:{}},R={exports:{}};(function(){var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m={rotl:function(a,i){return a<<i|a>>>32-i},rotr:function(a,i){return a<<32-i|a>>>i},endian:function(a){if(a.constructor==Number)return m.rotl(a,8)&16711935|m.rotl(a,24)&4278255360;for(var i=0;i<a.length;i++)a[i]=m.endian(a[i]);return a},randomBytes:function(a){for(var i=[];a>0;a--)i.push(Math.floor(Math.random()*256));return i},bytesToWords:function(a){for(var i=[],l=0,s=0;l<a.length;l++,s+=8)i[s>>>5]|=a[l]<<24-s%32;return i},wordsToBytes:function(a){for(var i=[],l=0;l<a.length*32;l+=8)i.push(a[l>>>5]>>>24-l%32&255);return i},bytesToHex:function(a){for(var i=[],l=0;l<a.length;l++)i.push((a[l]>>>4).toString(16)),i.push((a[l]&15).toString(16));return i.join("")},hexToBytes:function(a){for(var i=[],l=0;l<a.length;l+=2)i.push(parseInt(a.substr(l,2),16));return i},bytesToBase64:function(a){for(var i=[],l=0;l<a.length;l+=3)for(var s=a[l]<<16|a[l+1]<<8|a[l+2],c=0;c<4;c++)l*8+c*6<=a.length*8?i.push(f.charAt(s>>>6*(3-c)&63)):i.push("=");return i.join("")},base64ToBytes:function(a){a=a.replace(/[^A-Z0-9+\/]/ig,"");for(var i=[],l=0,s=0;l<a.length;s=++l%4)s!=0&&i.push((f.indexOf(a.charAt(l-1))&Math.pow(2,-2*s+8)-1)<<s*2|f.indexOf(a.charAt(l))>>>6-s*2);return i}};R.exports=m})();var b=R.exports,B={utf8:{stringToBytes:function(f){return B.bin.stringToBytes(unescape(encodeURIComponent(f)))},bytesToString:function(f){return decodeURIComponent(escape(B.bin.bytesToString(f)))}},bin:{stringToBytes:function(f){for(var m=[],a=0;a<f.length;a++)m.push(f.charCodeAt(a)&255);return m},bytesToString:function(f){for(var m=[],a=0;a<f.length;a++)m.push(String.fromCharCode(f[a]));return m.join("")}}},E=B;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var rr=function(f){return f!=null&&(I(f)||er(f)||!!f._isBuffer)};function I(f){return!!f.constructor&&typeof f.constructor.isBuffer=="function"&&f.constructor.isBuffer(f)}function er(f){return typeof f.readFloatLE=="function"&&typeof f.slice=="function"&&I(f.slice(0,0))}(function(){var f=b,m=E.utf8,a=rr,i=E.bin,l=function(s,c){s.constructor==String?c&&c.encoding==="binary"?s=i.stringToBytes(s):s=m.stringToBytes(s):a(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var o=f.bytesToWords(s),p=s.length*8,n=1732584193,t=-271733879,e=-1732584194,r=271733878,u=0;u<o.length;u++)o[u]=(o[u]<<8|o[u]>>>24)&16711935|(o[u]<<24|o[u]>>>8)&4278255360;o[p>>>5]|=128<<p%32,o[(p+64>>>9<<4)+14]=p;for(var d=l._ff,_=l._gg,v=l._hh,g=l._ii,u=0;u<o.length;u+=16){var T=n,w=t,y=e,N=r;n=d(n,t,e,r,o[u+0],7,-680876936),r=d(r,n,t,e,o[u+1],12,-389564586),e=d(e,r,n,t,o[u+2],17,606105819),t=d(t,e,r,n,o[u+3],22,-1044525330),n=d(n,t,e,r,o[u+4],7,-176418897),r=d(r,n,t,e,o[u+5],12,1200080426),e=d(e,r,n,t,o[u+6],17,-1473231341),t=d(t,e,r,n,o[u+7],22,-45705983),n=d(n,t,e,r,o[u+8],7,1770035416),r=d(r,n,t,e,o[u+9],12,-1958414417),e=d(e,r,n,t,o[u+10],17,-42063),t=d(t,e,r,n,o[u+11],22,-1990404162),n=d(n,t,e,r,o[u+12],7,1804603682),r=d(r,n,t,e,o[u+13],12,-40341101),e=d(e,r,n,t,o[u+14],17,-1502002290),t=d(t,e,r,n,o[u+15],22,1236535329),n=_(n,t,e,r,o[u+1],5,-165796510),r=_(r,n,t,e,o[u+6],9,-1069501632),e=_(e,r,n,t,o[u+11],14,643717713),t=_(t,e,r,n,o[u+0],20,-373897302),n=_(n,t,e,r,o[u+5],5,-701558691),r=_(r,n,t,e,o[u+10],9,38016083),e=_(e,r,n,t,o[u+15],14,-660478335),t=_(t,e,r,n,o[u+4],20,-405537848),n=_(n,t,e,r,o[u+9],5,568446438),r=_(r,n,t,e,o[u+14],9,-1019803690),e=_(e,r,n,t,o[u+3],14,-187363961),t=_(t,e,r,n,o[u+8],20,1163531501),n=_(n,t,e,r,o[u+13],5,-1444681467),r=_(r,n,t,e,o[u+2],9,-51403784),e=_(e,r,n,t,o[u+7],14,1735328473),t=_(t,e,r,n,o[u+12],20,-1926607734),n=v(n,t,e,r,o[u+5],4,-378558),r=v(r,n,t,e,o[u+8],11,-2022574463),e=v(e,r,n,t,o[u+11],16,1839030562),t=v(t,e,r,n,o[u+14],23,-35309556),n=v(n,t,e,r,o[u+1],4,-1530992060),r=v(r,n,t,e,o[u+4],11,1272893353),e=v(e,r,n,t,o[u+7],16,-155497632),t=v(t,e,r,n,o[u+10],23,-1094730640),n=v(n,t,e,r,o[u+13],4,681279174),r=v(r,n,t,e,o[u+0],11,-358537222),e=v(e,r,n,t,o[u+3],16,-722521979),t=v(t,e,r,n,o[u+6],23,76029189),n=v(n,t,e,r,o[u+9],4,-640364487),r=v(r,n,t,e,o[u+12],11,-421815835),e=v(e,r,n,t,o[u+15],16,530742520),t=v(t,e,r,n,o[u+2],23,-995338651),n=g(n,t,e,r,o[u+0],6,-198630844),r=g(r,n,t,e,o[u+7],10,1126891415),e=g(e,r,n,t,o[u+14],15,-1416354905),t=g(t,e,r,n,o[u+5],21,-57434055),n=g(n,t,e,r,o[u+12],6,1700485571),r=g(r,n,t,e,o[u+3],10,-1894986606),e=g(e,r,n,t,o[u+10],15,-1051523),t=g(t,e,r,n,o[u+1],21,-2054922799),n=g(n,t,e,r,o[u+8],6,1873313359),r=g(r,n,t,e,o[u+15],10,-30611744),e=g(e,r,n,t,o[u+6],15,-1560198380),t=g(t,e,r,n,o[u+13],21,1309151649),n=g(n,t,e,r,o[u+4],6,-145523070),r=g(r,n,t,e,o[u+11],10,-1120210379),e=g(e,r,n,t,o[u+2],15,718787259),t=g(t,e,r,n,o[u+9],21,-343485551),n=n+T>>>0,t=t+w>>>0,e=e+y>>>0,r=r+N>>>0}return f.endian([n,t,e,r])};l._ff=function(s,c,o,p,n,t,e){var r=s+(c&o|~c&p)+(n>>>0)+e;return(r<<t|r>>>32-t)+c},l._gg=function(s,c,o,p,n,t,e){var r=s+(c&p|o&~p)+(n>>>0)+e;return(r<<t|r>>>32-t)+c},l._hh=function(s,c,o,p,n,t,e){var r=s+(c^o^p)+(n>>>0)+e;return(r<<t|r>>>32-t)+c},l._ii=function(s,c,o,p,n,t,e){var r=s+(o^(c|~p))+(n>>>0)+e;return(r<<t|r>>>32-t)+c},l._blocksize=16,l._digestsize=16,V.exports=function(s,c){if(s==null)throw new Error("Illegal argument "+s);var o=f.wordsToBytes(l(s,c));return c&&c.asBytes?o:c&&c.asString?i.bytesToString(o):f.bytesToHex(o)}})();var tr=V.exports;const nr=U(tr),or={class:"login-btn"},ur=H({__name:"LoginForm",setup(f){const m=W(),a=z(),i=X(),l=Y(),s=S(),c=k({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),o=S(!1),p=k({username:"",password:""}),n=e=>{e&&e.validate(async r=>{if(r){o.value=!0;try{const{data:u}=await G({...p,password:nr(p.password)});a.setToken(u.access_token),await K(),i.setTabs([]),l.setKeepAliveName([]),m.push(Z),J({title:P(),message:"欢迎登录 示例项目管理后台",type:"success",duration:3e3})}finally{o.value=!1}}})},t=e=>{e&&e.resetFields()};return M(()=>{document.onkeydown=e=>{if(e=window.event||e,e.code==="Enter"||e.code==="enter"||e.code==="NumpadEnter"){if(o.value)return;n(s.value)}}}),(e,r)=>{const u=x("user"),d=x("el-icon"),_=x("el-input"),v=x("el-form-item"),g=x("lock"),T=x("el-form"),w=x("el-button");return Q(),L(q,null,[F(T,{ref_key:"loginFormRef",ref:s,model:p,rules:c,size:"large"},{default:h(()=>[F(v,{prop:"username"},{default:h(()=>[F(_,{modelValue:p.username,"onUpdate:modelValue":r[0]||(r[0]=y=>p.username=y),placeholder:"用户名：admin / user"},{prefix:h(()=>[F(d,{class:"el-input__icon"},{default:h(()=>[F(u)]),_:1})]),_:1},8,["modelValue"])]),_:1}),F(v,{prop:"password"},{default:h(()=>[F(_,{modelValue:p.password,"onUpdate:modelValue":r[1]||(r[1]=y=>p.password=y),type:"password",placeholder:"密码：123456","show-password":"",autocomplete:"new-password"},{prefix:h(()=>[F(d,{class:"el-input__icon"},{default:h(()=>[F(g)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),O("div",or,[F(w,{icon:A($),round:"",size:"large",onClick:r[2]||(r[2]=y=>t(s.value))},{default:h(()=>r[4]||(r[4]=[C(" 重置 ")])),_:1},8,["icon"]),F(w,{icon:A(D),round:"",size:"large",type:"primary",loading:o.value,onClick:r[3]||(r[3]=y=>n(s.value))},{default:h(()=>r[5]||(r[5]=[C(" 登录 ")])),_:1},8,["icon","loading"])])],64)}}}),ir=j(ur,[["__scopeId","data-v-a583349b"]]);export{ir as default};
