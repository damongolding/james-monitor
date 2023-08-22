var Gn=Object.defineProperty;var Jn=(e,n,l)=>n in e?Gn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l;var Ve=(e,n,l)=>(Jn(e,typeof n!="symbol"?n+"":n,l),l);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const f of i)if(f.type==="childList")for(const s of f.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(i){const f={};return i.integrity&&(f.integrity=i.integrity),i.referrerPolicy&&(f.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?f.credentials="include":i.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function t(i){if(i.ep)return;i.ep=!0;const f=l(i);fetch(i.href,f)}})();function W(){}function pn(e){return e()}function Be(){return Object.create(null)}function Z(e){e.forEach(pn)}function gn(e){return typeof e=="function"}function Ce(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Qn(e){return Object.keys(e).length===0}function Wn(e,...n){if(e==null){for(const t of n)t(void 0);return W}const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}function Ke(e){return e??""}const wn=typeof window<"u";let Ue=wn?()=>window.performance.now():()=>Date.now(),vn=wn?e=>requestAnimationFrame(e):W;const he=new Set;function kn(e){he.forEach(n=>{n.c(e)||(he.delete(n),n.f())}),he.size!==0&&vn(kn)}function Zn(e){let n;return he.size===0&&vn(kn),{promise:new Promise(l=>{he.add(n={c:e,f:l})}),abort(){he.delete(n)}}}function v(e,n){e.appendChild(n)}function L(e,n,l){e.insertBefore(n,l||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function yn(e,n){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(n)}function S(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function T(){return B(" ")}function Sn(){return B("")}function O(e,n,l,t){return e.addEventListener(n,l,t),()=>e.removeEventListener(n,l,t)}function Xe(e){return function(n){return n.preventDefault(),e.call(this,n)}}function o(e,n,l){l==null?e.removeAttribute(n):e.getAttribute(n)!==l&&e.setAttribute(n,l)}function xn(e){let n;return{p(...l){n=l,n.forEach(t=>e.push(t))},r(){n.forEach(l=>e.splice(e.indexOf(l),1))}}}function $n(e){return Array.from(e.childNodes)}function Q(e,n){n=""+n,e.data!==n&&(e.data=n)}function Oe(e,n){e.value=n??""}function k(e,n,l){e.classList.toggle(n,!!l)}function el(e,n,{bubbles:l=!1,cancelable:t=!1}={}){return new CustomEvent(e,{detail:n,bubbles:l,cancelable:t})}let ve;function we(e){ve=e}function An(){if(!ve)throw new Error("Function called outside component initialization");return ve}function nl(e){An().$$.on_mount.push(e)}function ll(){const e=An();return(n,l,{cancelable:t=!1}={})=>{const i=e.$$.callbacks[n];if(i){const f=el(n,l,{cancelable:t});return i.slice().forEach(s=>{s.call(e,f)}),!f.defaultPrevented}return!0}}const _e=[],Se=[];let be=[];const Le=[],il=Promise.resolve();let Me=!1;function tl(){Me||(Me=!0,il.then(En))}function He(e){be.push(e)}function fl(e){Le.push(e)}const Fe=new Set;let ce=0;function En(){if(ce!==0)return;const e=ve;do{try{for(;ce<_e.length;){const n=_e[ce];ce++,we(n),sl(n.$$)}}catch(n){throw _e.length=0,ce=0,n}for(we(null),_e.length=0,ce=0;Se.length;)Se.pop()();for(let n=0;n<be.length;n+=1){const l=be[n];Fe.has(l)||(Fe.add(l),l())}be.length=0}while(_e.length);for(;Le.length;)Le.pop()();Me=!1,Fe.clear(),we(e)}function sl(e){if(e.fragment!==null){e.update(),Z(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(He)}}function rl(e){const n=[],l=[];be.forEach(t=>e.indexOf(t)===-1?n.push(t):l.push(t)),l.forEach(t=>t()),be=n}const ke=new Set;let oe;function al(){oe={r:0,c:[],p:oe}}function ul(){oe.r||Z(oe.c),oe=oe.p}function pe(e,n){e&&e.i&&(ke.delete(e),e.i(n))}function Ae(e,n,l,t){if(e&&e.o){if(ke.has(e))return;ke.add(e),oe.c.push(()=>{ke.delete(e),t&&(l&&e.d(1),t())}),e.o(n)}else t&&t()}function Ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ol(e,n,l){const t=e.$$.props[n];t!==void 0&&(e.$$.bound[t]=l,l(e.$$.ctx[t]))}function Cn(e){e&&e.c()}function Te(e,n,l){const{fragment:t,after_update:i}=e.$$;t&&t.m(n,l),He(()=>{const f=e.$$.on_mount.map(pn).filter(gn);e.$$.on_destroy?e.$$.on_destroy.push(...f):Z(f),e.$$.on_mount=[]}),i.forEach(He)}function De(e,n){const l=e.$$;l.fragment!==null&&(rl(l.after_update),Z(l.on_destroy),l.fragment&&l.fragment.d(n),l.on_destroy=l.fragment=null,l.ctx=[])}function dl(e,n){e.$$.dirty[0]===-1&&(_e.push(e),tl(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Ie(e,n,l,t,i,f,s,a=[-1]){const _=ve;we(e);const d=e.$$={fragment:null,ctx:[],props:f,update:W,not_equal:i,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(_?_.$$.context:[])),callbacks:Be(),dirty:a,skip_bound:!1,root:n.target||_.$$.root};s&&s(d.root);let h=!1;if(d.ctx=l?l(e,n.props||{},(c,b,...y)=>{const g=y.length?y[0]:b;return d.ctx&&i(d.ctx[c],d.ctx[c]=g)&&(!d.skip_bound&&d.bound[c]&&d.bound[c](g),h&&dl(e,c)),b}):[],d.update(),h=!0,Z(d.before_update),d.fragment=t?t(d.ctx):!1,n.target){if(n.hydrate){const c=$n(n.target);d.fragment&&d.fragment.l(c),c.forEach(F)}else d.fragment&&d.fragment.c();n.intro&&pe(e.$$.fragment),Te(e,n.target,n.anchor),En()}we(_)}class je{constructor(){Ve(this,"$$");Ve(this,"$$set")}$destroy(){De(this,1),this.$destroy=W}$on(n,l){if(!gn(l))return W;const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(l),()=>{const i=t.indexOf(l);i!==-1&&t.splice(i,1)}}$set(n){this.$$set&&!Qn(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const cl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(cl);const me=[];function ml(e,n=W){let l;const t=new Set;function i(a){if(Ce(e,a)&&(e=a,l)){const _=!me.length;for(const d of t)d[1](),me.push(d,e);if(_){for(let d=0;d<me.length;d+=2)me[d][0](me[d+1]);me.length=0}}}function f(a){i(a(e))}function s(a,_=W){const d=[a,_];return t.add(d),t.size===1&&(l=n(i,f)||W),a(e),()=>{t.delete(d),t.size===0&&l&&(l(),l=null)}}return{set:i,update:f,subscribe:s}}function Ye(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ne(e,n,l,t){if(typeof l=="number"||Ye(l)){const i=t-l,f=(l-n)/(e.dt||1/60),s=e.opts.stiffness*i,a=e.opts.damping*f,_=(s-a)*e.inv_mass,d=(f+_)*e.dt;return Math.abs(d)<e.opts.precision&&Math.abs(i)<e.opts.precision?t:(e.settled=!1,Ye(l)?new Date(l.getTime()+d):l+d)}else{if(Array.isArray(l))return l.map((i,f)=>Ne(e,n[f],l[f],t[f]));if(typeof l=="object"){const i={};for(const f in l)i[f]=Ne(e,n[f],l[f],t[f]);return i}else throw new Error(`Cannot spring ${typeof l} values`)}}function _l(e,n={}){const l=ml(e),{stiffness:t=.15,damping:i=.8,precision:f=.01}=n;let s,a,_,d=e,h=e,c=1,b=0,y=!1;function g(A,p={}){h=A;const j=_={};return e==null||p.hard||m.stiffness>=1&&m.damping>=1?(y=!0,s=Ue(),d=A,l.set(e=h),Promise.resolve()):(p.soft&&(b=1/((p.soft===!0?.5:+p.soft)*60),c=0),a||(s=Ue(),y=!1,a=Zn(N=>{if(y)return y=!1,a=null,!1;c=Math.min(c+b,1);const E={inv_mass:c,opts:m,settled:!0,dt:(N-s)*60/1e3},x=Ne(E,d,e,h);return s=N,d=e,l.set(e=x),E.settled&&(a=null),!E.settled})),new Promise(N=>{a.promise.then(()=>{j===_&&N()})}))}const m={set:g,update:(A,p)=>g(A(h,e),p),subscribe:l.subscribe,stiffness:t,damping:i,precision:f};return m}function Ge(e,n,l){const t=e.slice();return t[37]=n[l],t[39]=l,t}function Je(e){let n,l,t,i,f=(e[6]==="label"||e[7]==="label")&&Qe(e);return{c(){n=S("span"),f&&f.c(),o(n,"class","pip first"),o(n,"style",l=e[14]+": 0%;"),k(n,"selected",e[18](e[0])),k(n,"in-range",e[17](e[0]))},m(s,a){L(s,n,a),f&&f.m(n,null),t||(i=[O(n,"pointerdown",e[30]),O(n,"pointerup",e[31])],t=!0)},p(s,a){s[6]==="label"||s[7]==="label"?f?f.p(s,a):(f=Qe(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null),a[0]&16384&&l!==(l=s[14]+": 0%;")&&o(n,"style",l),a[0]&262145&&k(n,"selected",s[18](s[0])),a[0]&131073&&k(n,"in-range",s[17](s[0]))},d(s){s&&F(n),f&&f.d(),t=!1,Z(i)}}}function Qe(e){let n,l=e[12](e[16](e[0]),0,0)+"",t,i=e[10]&&We(e),f=e[11]&&Ze(e);return{c(){n=S("span"),i&&i.c(),t=B(l),f&&f.c(),o(n,"class","pipVal")},m(s,a){L(s,n,a),i&&i.m(n,null),v(n,t),f&&f.m(n,null)},p(s,a){s[10]?i?i.p(s,a):(i=We(s),i.c(),i.m(n,t)):i&&(i.d(1),i=null),a[0]&69633&&l!==(l=s[12](s[16](s[0]),0,0)+"")&&Q(t,l),s[11]?f?f.p(s,a):(f=Ze(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},d(s){s&&F(n),i&&i.d(),f&&f.d()}}}function We(e){let n,l;return{c(){n=S("span"),l=B(e[10]),o(n,"class","pipVal-prefix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&1024&&Q(l,t[10])},d(t){t&&F(n)}}}function Ze(e){let n,l;return{c(){n=S("span"),l=B(e[11]),o(n,"class","pipVal-suffix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&2048&&Q(l,t[11])},d(t){t&&F(n)}}}function xe(e){let n,l=Ee(Array(e[20]+1)),t=[];for(let i=0;i<l.length;i+=1)t[i]=tn(Ge(e,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();n=Sn()},m(i,f){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(i,f);L(i,n,f)},p(i,f){if(f[0]&8314435){l=Ee(Array(i[20]+1));let s;for(s=0;s<l.length;s+=1){const a=Ge(i,l,s);t[s]?t[s].p(a,f):(t[s]=tn(a),t[s].c(),t[s].m(n.parentNode,n))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(i){i&&F(n),yn(t,i)}}}function $e(e){let n,l,t,i,f,s=(e[6]==="label"||e[9]==="label")&&en(e);function a(..._){return e[33](e[39],..._)}return{c(){n=S("span"),s&&s.c(),l=T(),o(n,"class","pip"),o(n,"style",t=e[14]+": "+e[15](e[19](e[39]))+"%;"),k(n,"selected",e[18](e[19](e[39]))),k(n,"in-range",e[17](e[19](e[39])))},m(_,d){L(_,n,d),s&&s.m(n,null),v(n,l),i||(f=[O(n,"pointerdown",e[32]),O(n,"pointerup",a)],i=!0)},p(_,d){e=_,e[6]==="label"||e[9]==="label"?s?s.p(e,d):(s=en(e),s.c(),s.m(n,l)):s&&(s.d(1),s=null),d[0]&573440&&t!==(t=e[14]+": "+e[15](e[19](e[39]))+"%;")&&o(n,"style",t),d[0]&786432&&k(n,"selected",e[18](e[19](e[39]))),d[0]&655360&&k(n,"in-range",e[17](e[19](e[39])))},d(_){_&&F(n),s&&s.d(),i=!1,Z(f)}}}function en(e){let n,l=e[12](e[19](e[39]),e[39],e[15](e[19](e[39])))+"",t,i=e[10]&&nn(e),f=e[11]&&ln(e);return{c(){n=S("span"),i&&i.c(),t=B(l),f&&f.c(),o(n,"class","pipVal")},m(s,a){L(s,n,a),i&&i.m(n,null),v(n,t),f&&f.m(n,null)},p(s,a){s[10]?i?i.p(s,a):(i=nn(s),i.c(),i.m(n,t)):i&&(i.d(1),i=null),a[0]&561152&&l!==(l=s[12](s[19](s[39]),s[39],s[15](s[19](s[39])))+"")&&Q(t,l),s[11]?f?f.p(s,a):(f=ln(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},d(s){s&&F(n),i&&i.d(),f&&f.d()}}}function nn(e){let n,l;return{c(){n=S("span"),l=B(e[10]),o(n,"class","pipVal-prefix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&1024&&Q(l,t[10])},d(t){t&&F(n)}}}function ln(e){let n,l;return{c(){n=S("span"),l=B(e[11]),o(n,"class","pipVal-suffix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&2048&&Q(l,t[11])},d(t){t&&F(n)}}}function tn(e){let n=e[19](e[39])!==e[0]&&e[19](e[39])!==e[1],l,t=n&&$e(e);return{c(){t&&t.c(),l=Sn()},m(i,f){t&&t.m(i,f),L(i,l,f)},p(i,f){f[0]&524291&&(n=i[19](i[39])!==i[0]&&i[19](i[39])!==i[1]),n?t?t.p(i,f):(t=$e(i),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(i){i&&F(l),t&&t.d(i)}}}function fn(e){let n,l,t,i,f=(e[6]==="label"||e[8]==="label")&&sn(e);return{c(){n=S("span"),f&&f.c(),o(n,"class","pip last"),o(n,"style",l=e[14]+": 100%;"),k(n,"selected",e[18](e[1])),k(n,"in-range",e[17](e[1]))},m(s,a){L(s,n,a),f&&f.m(n,null),t||(i=[O(n,"pointerdown",e[34]),O(n,"pointerup",e[35])],t=!0)},p(s,a){s[6]==="label"||s[8]==="label"?f?f.p(s,a):(f=sn(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null),a[0]&16384&&l!==(l=s[14]+": 100%;")&&o(n,"style",l),a[0]&262146&&k(n,"selected",s[18](s[1])),a[0]&131074&&k(n,"in-range",s[17](s[1]))},d(s){s&&F(n),f&&f.d(),t=!1,Z(i)}}}function sn(e){let n,l=e[12](e[16](e[1]),e[20],100)+"",t,i=e[10]&&rn(e),f=e[11]&&an(e);return{c(){n=S("span"),i&&i.c(),t=B(l),f&&f.c(),o(n,"class","pipVal")},m(s,a){L(s,n,a),i&&i.m(n,null),v(n,t),f&&f.m(n,null)},p(s,a){s[10]?i?i.p(s,a):(i=rn(s),i.c(),i.m(n,t)):i&&(i.d(1),i=null),a[0]&1118210&&l!==(l=s[12](s[16](s[1]),s[20],100)+"")&&Q(t,l),s[11]?f?f.p(s,a):(f=an(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},d(s){s&&F(n),i&&i.d(),f&&f.d()}}}function rn(e){let n,l;return{c(){n=S("span"),l=B(e[10]),o(n,"class","pipVal-prefix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&1024&&Q(l,t[10])},d(t){t&&F(n)}}}function an(e){let n,l;return{c(){n=S("span"),l=B(e[11]),o(n,"class","pipVal-suffix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&2048&&Q(l,t[11])},d(t){t&&F(n)}}}function hl(e){let n,l,t,i=(e[6]&&e[7]!==!1||e[7])&&Je(e),f=(e[6]&&e[9]!==!1||e[9])&&xe(e),s=(e[6]&&e[8]!==!1||e[8])&&fn(e);return{c(){n=S("div"),i&&i.c(),l=T(),f&&f.c(),t=T(),s&&s.c(),o(n,"class","rangePips"),k(n,"disabled",e[5]),k(n,"hoverable",e[4]),k(n,"vertical",e[2]),k(n,"reversed",e[3]),k(n,"focus",e[13])},m(a,_){L(a,n,_),i&&i.m(n,null),v(n,l),f&&f.m(n,null),v(n,t),s&&s.m(n,null)},p(a,_){a[6]&&a[7]!==!1||a[7]?i?i.p(a,_):(i=Je(a),i.c(),i.m(n,l)):i&&(i.d(1),i=null),a[6]&&a[9]!==!1||a[9]?f?f.p(a,_):(f=xe(a),f.c(),f.m(n,t)):f&&(f.d(1),f=null),a[6]&&a[8]!==!1||a[8]?s?s.p(a,_):(s=fn(a),s.c(),s.m(n,null)):s&&(s.d(1),s=null),_[0]&32&&k(n,"disabled",a[5]),_[0]&16&&k(n,"hoverable",a[4]),_[0]&4&&k(n,"vertical",a[2]),_[0]&8&&k(n,"reversed",a[3]),_[0]&8192&&k(n,"focus",a[13])},i:W,o:W,d(a){a&&F(n),i&&i.d(),f&&f.d(),s&&s.d()}}}function bl(e,n,l){let t,i,f,s,a,{range:_=!1}=n,{min:d=0}=n,{max:h=100}=n,{step:c=1}=n,{values:b=[(h+d)/2]}=n,{vertical:y=!1}=n,{reversed:g=!1}=n,{hoverable:m=!0}=n,{disabled:A=!1}=n,{pipstep:p=void 0}=n,{all:j=!0}=n,{first:N=void 0}=n,{last:E=void 0}=n,{rest:x=void 0}=n,{prefix:M=""}=n,{suffix:fe=""}=n,{formatter:I=(u,H)=>u}=n,{focus:z=void 0}=n,{orientationStart:le=void 0}=n,{percentOf:se=void 0}=n,{moveHandle:K=void 0}=n,{fixFloat:U=void 0}=n,{normalisedClient:$=void 0}=n,R;function X(u){u=$(u),R={x:u.clientX,y:u.clientY}}function J(u,H){if(H=$(H),!A){const ue=Math.sqrt(Math.pow(R.x-H.clientX,2)+Math.pow(R.y-H.clientY,2));R&&ue<=5&&K(void 0,u)}}const re=u=>{X(u)},ee=u=>{J(f(d),u)},ae=u=>{X(u)},ne=(u,H)=>{J(f(u),H)},Y=u=>{X(u)},G=u=>{J(f(h),u)};return e.$$set=u=>{"range"in u&&l(23,_=u.range),"min"in u&&l(0,d=u.min),"max"in u&&l(1,h=u.max),"step"in u&&l(24,c=u.step),"values"in u&&l(25,b=u.values),"vertical"in u&&l(2,y=u.vertical),"reversed"in u&&l(3,g=u.reversed),"hoverable"in u&&l(4,m=u.hoverable),"disabled"in u&&l(5,A=u.disabled),"pipstep"in u&&l(26,p=u.pipstep),"all"in u&&l(6,j=u.all),"first"in u&&l(7,N=u.first),"last"in u&&l(8,E=u.last),"rest"in u&&l(9,x=u.rest),"prefix"in u&&l(10,M=u.prefix),"suffix"in u&&l(11,fe=u.suffix),"formatter"in u&&l(12,I=u.formatter),"focus"in u&&l(13,z=u.focus),"orientationStart"in u&&l(14,le=u.orientationStart),"percentOf"in u&&l(15,se=u.percentOf),"moveHandle"in u&&l(27,K=u.moveHandle),"fixFloat"in u&&l(16,U=u.fixFloat),"normalisedClient"in u&&l(28,$=u.normalisedClient)},e.$$.update=()=>{e.$$.dirty[0]&83886087&&l(29,t=p||((h-d)/c>=(y?50:100)?(h-d)/(y?10:20):1)),e.$$.dirty[0]&553648131&&l(20,i=parseInt((h-d)/(c*t),10)),e.$$.dirty[0]&553713665&&l(19,f=function(u){return U(d+u*c*t)}),e.$$.dirty[0]&33619968&&l(18,s=function(u){return b.some(H=>U(H)===U(u))}),e.$$.dirty[0]&41943040&&l(17,a=function(u){if(_==="min")return b[0]>u;if(_==="max")return b[0]<u;if(_)return b[0]<u&&b[1]>u})},[d,h,y,g,m,A,j,N,E,x,M,fe,I,z,le,se,U,a,s,f,i,X,J,_,c,b,p,K,$,t,re,ee,ae,ne,Y,G]}class pl extends je{constructor(n){super(),Ie(this,n,bl,hl,Ce,{range:23,min:0,max:1,step:24,values:25,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:26,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:27,fixFloat:16,normalisedClient:28},null,[-1,-1])}}function un(e,n,l){const t=e.slice();return t[65]=n[l],t[67]=l,t}function on(e){let n,l=e[21](e[65],e[67],e[24](e[65]))+"",t,i=e[18]&&dn(e),f=e[19]&&cn(e);return{c(){n=S("span"),i&&i.c(),t=B(l),f&&f.c(),o(n,"class","rangeFloat")},m(s,a){L(s,n,a),i&&i.m(n,null),v(n,t),f&&f.m(n,null)},p(s,a){s[18]?i?i.p(s,a):(i=dn(s),i.c(),i.m(n,t)):i&&(i.d(1),i=null),a[0]&18874369&&l!==(l=s[21](s[65],s[67],s[24](s[65]))+"")&&Q(t,l),s[19]?f?f.p(s,a):(f=cn(s),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},d(s){s&&F(n),i&&i.d(),f&&f.d()}}}function dn(e){let n,l;return{c(){n=S("span"),l=B(e[18]),o(n,"class","rangeFloat-prefix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&262144&&Q(l,t[18])},d(t){t&&F(n)}}}function cn(e){let n,l;return{c(){n=S("span"),l=B(e[19]),o(n,"class","rangeFloat-suffix")},m(t,i){L(t,n,i),v(n,l)},p(t,i){i[0]&524288&&Q(l,t[19])},d(t){t&&F(n)}}}function mn(e){let n,l,t,i,f,s,a,_,d,h,c,b,y,g=e[7]&&on(e);return{c(){n=S("span"),l=S("span"),t=T(),g&&g.c(),o(l,"class","rangeNub"),o(n,"role","slider"),o(n,"class","rangeHandle"),o(n,"data-handle",e[67]),o(n,"style",i=e[29]+": "+e[30][e[67]]+"%; z-index: "+(e[27]===e[67]?3:2)+";"),o(n,"aria-label",f=e[22][e[67]]),o(n,"aria-valuemin",s=e[2]===!0&&e[67]===1?e[0][0]:e[3]),o(n,"aria-valuemax",a=e[2]===!0&&e[67]===0?e[0][1]:e[4]),o(n,"aria-valuenow",_=e[65]),o(n,"aria-valuetext",d=""+(e[18]+e[21](e[65],e[67],e[24](e[65]))+e[19])),o(n,"aria-orientation",h=e[6]?"vertical":"horizontal"),o(n,"aria-disabled",e[10]),o(n,"disabled",e[10]),o(n,"tabindex",c=e[10]?-1:0),k(n,"active",e[25]&&e[27]===e[67]),k(n,"press",e[26]&&e[27]===e[67])},m(m,A){L(m,n,A),v(n,l),v(n,t),g&&g.m(n,null),b||(y=[O(n,"blur",e[35]),O(n,"focus",e[36]),O(n,"keydown",e[37])],b=!0)},p(m,A){m[7]?g?g.p(m,A):(g=on(m),g.c(),g.m(n,null)):g&&(g.d(1),g=null),A[0]&1744830464&&i!==(i=m[29]+": "+m[30][m[67]]+"%; z-index: "+(m[27]===m[67]?3:2)+";")&&o(n,"style",i),A[0]&4194304&&f!==(f=m[22][m[67]])&&o(n,"aria-label",f),A[0]&13&&s!==(s=m[2]===!0&&m[67]===1?m[0][0]:m[3])&&o(n,"aria-valuemin",s),A[0]&21&&a!==(a=m[2]===!0&&m[67]===0?m[0][1]:m[4])&&o(n,"aria-valuemax",a),A[0]&1&&_!==(_=m[65])&&o(n,"aria-valuenow",_),A[0]&19660801&&d!==(d=""+(m[18]+m[21](m[65],m[67],m[24](m[65]))+m[19]))&&o(n,"aria-valuetext",d),A[0]&64&&h!==(h=m[6]?"vertical":"horizontal")&&o(n,"aria-orientation",h),A[0]&1024&&o(n,"aria-disabled",m[10]),A[0]&1024&&o(n,"disabled",m[10]),A[0]&1024&&c!==(c=m[10]?-1:0)&&o(n,"tabindex",c),A[0]&167772160&&k(n,"active",m[25]&&m[27]===m[67]),A[0]&201326592&&k(n,"press",m[26]&&m[27]===m[67])},d(m){m&&F(n),g&&g.d(),b=!1,Z(y)}}}function _n(e){let n,l;return{c(){n=S("span"),o(n,"class","rangeBar"),o(n,"style",l=e[29]+": "+e[33](e[30])+"%; "+e[28]+": "+e[34](e[30])+"%;")},m(t,i){L(t,n,i)},p(t,i){i[0]&1879048192&&l!==(l=t[29]+": "+t[33](t[30])+"%; "+t[28]+": "+t[34](t[30])+"%;")&&o(n,"style",l)},d(t){t&&F(n)}}}function hn(e){let n,l;return n=new pl({props:{values:e[0],min:e[3],max:e[4],step:e[5],range:e[2],vertical:e[6],reversed:e[8],orientationStart:e[29],hoverable:e[9],disabled:e[10],all:e[13],first:e[14],last:e[15],rest:e[16],pipstep:e[12],prefix:e[18],suffix:e[19],formatter:e[20],focus:e[25],percentOf:e[24],moveHandle:e[32],fixFloat:e[31],normalisedClient:ye}}),{c(){Cn(n.$$.fragment)},m(t,i){Te(n,t,i),l=!0},p(t,i){const f={};i[0]&1&&(f.values=t[0]),i[0]&8&&(f.min=t[3]),i[0]&16&&(f.max=t[4]),i[0]&32&&(f.step=t[5]),i[0]&4&&(f.range=t[2]),i[0]&64&&(f.vertical=t[6]),i[0]&256&&(f.reversed=t[8]),i[0]&536870912&&(f.orientationStart=t[29]),i[0]&512&&(f.hoverable=t[9]),i[0]&1024&&(f.disabled=t[10]),i[0]&8192&&(f.all=t[13]),i[0]&16384&&(f.first=t[14]),i[0]&32768&&(f.last=t[15]),i[0]&65536&&(f.rest=t[16]),i[0]&4096&&(f.pipstep=t[12]),i[0]&262144&&(f.prefix=t[18]),i[0]&524288&&(f.suffix=t[19]),i[0]&1048576&&(f.formatter=t[20]),i[0]&33554432&&(f.focus=t[25]),i[0]&16777216&&(f.percentOf=t[24]),n.$set(f)},i(t){l||(pe(n.$$.fragment,t),l=!0)},o(t){Ae(n.$$.fragment,t),l=!1},d(t){De(n,t)}}}function gl(e){let n,l,t,i,f,s,a=Ee(e[0]),_=[];for(let c=0;c<a.length;c+=1)_[c]=mn(un(e,a,c));let d=e[2]&&_n(e),h=e[11]&&hn(e);return{c(){n=S("div");for(let c=0;c<_.length;c+=1)_[c].c();l=T(),d&&d.c(),t=T(),h&&h.c(),o(n,"id",e[17]),o(n,"class","rangeSlider"),k(n,"range",e[2]),k(n,"disabled",e[10]),k(n,"hoverable",e[9]),k(n,"vertical",e[6]),k(n,"reversed",e[8]),k(n,"focus",e[25]),k(n,"min",e[2]==="min"),k(n,"max",e[2]==="max"),k(n,"pips",e[11]),k(n,"pip-labels",e[13]==="label"||e[14]==="label"||e[15]==="label"||e[16]==="label")},m(c,b){L(c,n,b);for(let y=0;y<_.length;y+=1)_[y]&&_[y].m(n,null);v(n,l),d&&d.m(n,null),v(n,t),h&&h.m(n,null),e[51](n),i=!0,f||(s=[O(window,"mousedown",e[40]),O(window,"touchstart",e[40]),O(window,"mousemove",e[41]),O(window,"touchmove",e[41]),O(window,"mouseup",e[42]),O(window,"touchend",e[43]),O(window,"keydown",e[44]),O(n,"mousedown",e[38]),O(n,"mouseup",e[39]),O(n,"touchstart",Xe(e[38])),O(n,"touchend",Xe(e[39]))],f=!0)},p(c,b){if(b[0]&1869350109|b[1]&112){a=Ee(c[0]);let y;for(y=0;y<a.length;y+=1){const g=un(c,a,y);_[y]?_[y].p(g,b):(_[y]=mn(g),_[y].c(),_[y].m(n,l))}for(;y<_.length;y+=1)_[y].d(1);_.length=a.length}c[2]?d?d.p(c,b):(d=_n(c),d.c(),d.m(n,t)):d&&(d.d(1),d=null),c[11]?h?(h.p(c,b),b[0]&2048&&pe(h,1)):(h=hn(c),h.c(),pe(h,1),h.m(n,null)):h&&(al(),Ae(h,1,1,()=>{h=null}),ul()),(!i||b[0]&131072)&&o(n,"id",c[17]),(!i||b[0]&4)&&k(n,"range",c[2]),(!i||b[0]&1024)&&k(n,"disabled",c[10]),(!i||b[0]&512)&&k(n,"hoverable",c[9]),(!i||b[0]&64)&&k(n,"vertical",c[6]),(!i||b[0]&256)&&k(n,"reversed",c[8]),(!i||b[0]&33554432)&&k(n,"focus",c[25]),(!i||b[0]&4)&&k(n,"min",c[2]==="min"),(!i||b[0]&4)&&k(n,"max",c[2]==="max"),(!i||b[0]&2048)&&k(n,"pips",c[11]),(!i||b[0]&122880)&&k(n,"pip-labels",c[13]==="label"||c[14]==="label"||c[15]==="label"||c[16]==="label")},i(c){i||(pe(h),i=!0)},o(c){Ae(h),i=!1},d(c){c&&F(n),yn(_,c),d&&d.d(),h&&h.d(),e[51](null),f=!1,Z(s)}}}function bn(e){if(!e)return-1;for(var n=0;e=e.previousElementSibling;)n++;return n}function ye(e){return e.type.includes("touch")?e.touches[0]||e.changedTouches[0]:e}function wl(e,n,l){let t,i,f,s,a,_,d=W,h=()=>(d(),d=Wn(ie,r=>l(30,_=r)),ie);e.$$.on_destroy.push(()=>d());let{slider:c=void 0}=n,{range:b=!1}=n,{pushy:y=!1}=n,{min:g=0}=n,{max:m=100}=n,{step:A=1}=n,{values:p=[(m+g)/2]}=n,{vertical:j=!1}=n,{float:N=!1}=n,{reversed:E=!1}=n,{hoverable:x=!0}=n,{disabled:M=!1}=n,{pips:fe=!1}=n,{pipstep:I=void 0}=n,{all:z=void 0}=n,{first:le=void 0}=n,{last:se=void 0}=n,{rest:K=void 0}=n,{id:U=void 0}=n,{prefix:$=""}=n,{suffix:R=""}=n,{formatter:X=(r,w,P)=>r}=n,{handleFormatter:J=X}=n,{ariaLabels:re=[]}=n,{precision:ee=2}=n,{springValues:ae={stiffness:.15,damping:.4}}=n;const ne=ll();let Y=0,G=!1,u=!1,H=!1,ue=!1,q=p.length-1,V,D,ie;const ge=r=>parseFloat(r.toFixed(ee));function Pn(r){const w=c.querySelectorAll(".handle"),P=Array.prototype.includes.call(w,r),C=Array.prototype.some.call(w,te=>te.contains(r));return P||C}function Vn(r){return b==="min"||b==="max"?r.slice(0,1):b?r.slice(0,2):r}function ze(){return c.getBoundingClientRect()}function On(r){const w=ze();let P=0,C=0,te=0;j?(P=r.clientY-w.top,C=P/w.height*100,C=E?C:100-C):(P=r.clientX-w.left,C=P/w.width*100,C=E?100-C:C),te=(m-g)/100*C+g;let qe;return b===!0&&p[0]===p[1]?te>p[1]?1:0:(qe=p.indexOf([...p].sort((Xn,Yn)=>Math.abs(te-Xn)-Math.abs(te-Yn))[0]),qe)}function Pe(r){const w=ze();let P=0,C=0,te=0;j?(P=r.clientY-w.top,C=P/w.height*100,C=E?C:100-C):(P=r.clientX-w.left,C=P/w.width*100,C=E?100-C:C),te=(m-g)/100*C+g,de(q,te)}function de(r,w){return w=f(w),typeof r>"u"&&(r=q),b&&(r===0&&w>p[1]?y?l(0,p[1]=w,p):w=p[1]:r===1&&w<p[0]&&(y?l(0,p[0]=w,p):w=p[0])),p[r]!==w&&l(0,p[r]=w,p),D!==w&&(Kn(),D=w),w}function Fn(r){return b==="min"?0:r[0]}function Ln(r){return b==="max"?0:b==="min"?100-r[0]:100-r[1]}function Mn(r){ue&&(l(25,G=!1),u=!1,l(26,H=!1))}function Hn(r){M||(l(27,q=bn(r.target)),l(25,G=!0))}function Nn(r){if(!M){const w=bn(r.target);let P=r.ctrlKey||r.metaKey||r.shiftKey?A*10:A,C=!1;switch(r.key){case"PageDown":P*=10;case"ArrowRight":case"ArrowUp":de(w,p[w]+P),C=!0;break;case"PageUp":P*=10;case"ArrowLeft":case"ArrowDown":de(w,p[w]-P),C=!0;break;case"Home":de(w,g),C=!0;break;case"End":de(w,m),C=!0;break}C&&(r.preventDefault(),r.stopPropagation())}}function Tn(r){if(!M){const w=r.target,P=ye(r);l(25,G=!0),u=!0,l(26,H=!0),l(27,q=On(P)),V=D=f(p[q]),Bn(),r.type==="touchstart"&&!w.matches(".pipVal")&&Pe(P)}}function Dn(r){r.type==="touchend"&&Re(),l(26,H=!1)}function In(r){ue=!1,G&&r.target!==c&&!c.contains(r.target)&&l(25,G=!1)}function jn(r){M||u&&Pe(ye(r))}function zn(r){if(!M){const w=r.target;u&&((w===c||c.contains(w))&&(l(25,G=!0),!Pn(w)&&!w.matches(".pipVal")&&Pe(ye(r))),Re())}u=!1,l(26,H=!1)}function Rn(r){u=!1,l(26,H=!1)}function qn(r){M||(r.target===c||c.contains(r.target))&&(ue=!0)}function Bn(){!M&&ne("start",{activeHandle:q,value:V,values:p.map(r=>f(r))})}function Re(){!M&&ne("stop",{activeHandle:q,startValue:V,value:p[q],values:p.map(r=>f(r))})}function Kn(){!M&&ne("change",{activeHandle:q,startValue:V,previousValue:typeof D>"u"?V:D,value:p[q],values:p.map(r=>f(r))})}function Un(r){Se[r?"unshift":"push"](()=>{c=r,l(1,c)})}return e.$$set=r=>{"slider"in r&&l(1,c=r.slider),"range"in r&&l(2,b=r.range),"pushy"in r&&l(45,y=r.pushy),"min"in r&&l(3,g=r.min),"max"in r&&l(4,m=r.max),"step"in r&&l(5,A=r.step),"values"in r&&l(0,p=r.values),"vertical"in r&&l(6,j=r.vertical),"float"in r&&l(7,N=r.float),"reversed"in r&&l(8,E=r.reversed),"hoverable"in r&&l(9,x=r.hoverable),"disabled"in r&&l(10,M=r.disabled),"pips"in r&&l(11,fe=r.pips),"pipstep"in r&&l(12,I=r.pipstep),"all"in r&&l(13,z=r.all),"first"in r&&l(14,le=r.first),"last"in r&&l(15,se=r.last),"rest"in r&&l(16,K=r.rest),"id"in r&&l(17,U=r.id),"prefix"in r&&l(18,$=r.prefix),"suffix"in r&&l(19,R=r.suffix),"formatter"in r&&l(20,X=r.formatter),"handleFormatter"in r&&l(21,J=r.handleFormatter),"ariaLabels"in r&&l(22,re=r.ariaLabels),"precision"in r&&l(46,ee=r.precision),"springValues"in r&&l(47,ae=r.springValues)},e.$$.update=()=>{e.$$.dirty[0]&24&&l(50,i=function(r){return r<=g?g:r>=m?m:r}),e.$$.dirty[0]&56|e.$$.dirty[1]&524288&&l(49,f=function(r){if(r<=g)return ge(g);if(r>=m)return ge(m);let w=(r-g)%A,P=r-w;return Math.abs(w)*2>=A&&(P+=w>0?A:-A),P=i(P),ge(P)}),e.$$.dirty[0]&24&&l(24,t=function(r){let w=(r-g)/(m-g)*100;return isNaN(w)||w<=0?0:w>=100?100:ge(w)}),e.$$.dirty[0]&29360153|e.$$.dirty[1]&458752&&(Array.isArray(p)||(l(0,p=[(m+g)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),l(0,p=Vn(p.map(r=>f(r)))),Y!==p.length?h(l(23,ie=_l(p.map(r=>t(r)),ae))):ie.set(p.map(r=>t(r))),l(48,Y=p.length),p.length>1&&!Array.isArray(re)&&console.warn("'ariaLabels' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),e.$$.dirty[0]&320&&l(29,s=j?E?"top":"bottom":E?"right":"left"),e.$$.dirty[0]&320&&l(28,a=j?E?"bottom":"top":E?"left":"right")},[p,c,b,g,m,A,j,N,E,x,M,fe,I,z,le,se,K,U,$,R,X,J,re,ie,t,G,H,q,a,s,_,ge,de,Fn,Ln,Mn,Hn,Nn,Tn,Dn,In,jn,zn,Rn,qn,y,ee,ae,Y,f,i,Un]}class vl extends je{constructor(n){super(),Ie(this,n,wl,gl,Ce,{slider:1,range:2,pushy:45,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,ariaLabels:22,precision:46,springValues:47},null,[-1,-1,-1])}}function kl(e){let n,l,t,i,f,s,a,_,d,h,c,b,y,g,m,A,p,j,N,E,x,M,fe,I,z,le,se,K,U,$,R,X,J,re,ee,ae,ne,Y,G,u,H;function ue(V){e[7](V)}let q={min:0,max:24,range:!0,float:!0,pips:!0,hoverable:!0,all:"label",suffix:":00",disabled:e[0]};return e[1]!==void 0&&(q.values=e[1]),z=new vl({props:q}),Se.push(()=>ol(z,"values",ue)),G=xn(e[4][0]),{c(){n=S("main"),l=S("h1"),l.textContent="Air Monitor Settings",t=T(),i=S("form"),f=S("div"),s=S("div"),a=S("h2"),a.textContent="Temperature",_=T(),d=S("div"),h=S("input"),c=T(),b=S("label"),b.textContent="Celsius",y=T(),g=S("div"),m=S("input"),A=T(),p=S("label"),p.textContent="Fahrenheit",j=T(),N=S("div"),E=S("input"),x=T(),M=S("label"),M.innerHTML='<h2 class="text-xl">On all day</h2>',fe=T(),I=S("div"),Cn(z.$$.fragment),se=T(),K=S("input"),$=T(),R=S("input"),re=T(),ee=S("div"),ee.innerHTML="<hr/>",ae=T(),ne=S("div"),ne.innerHTML='<button class="rounded-md mr-8 py-2 px-12 bg-green-600 text-white font-bold text-xl">Save</button>',o(l,"class","text-4xl my-12"),o(a,"class","text-xl mb-2"),o(h,"type","radio"),o(h,"class","cursor-pointer"),o(h,"name","use-celsius"),o(h,"id","c"),h.__value=!0,Oe(h,h.__value),o(b,"for","c"),o(b,"class","pl-2 cursor-pointer"),o(d,"class","pl-4 mb-2 cursor-pointer flex items-center"),o(m,"type","radio"),o(m,"class","cursor-pointer"),o(m,"name","use-celsius"),o(m,"id","f"),m.__value=!1,Oe(m,m.__value),o(p,"for","f"),o(p,"class","pl-2 cursor-pointer"),o(g,"class","pl-4 mb-2 cursor-pointer flex items-center"),o(E,"type","checkbox"),o(E,"id","on-continually"),o(E,"name","on-continually"),o(E,"class","cursor-pointer"),E.__value="true",Oe(E,E.__value),o(M,"for","on-continually"),o(M,"class","pl-2 cursor-pointer"),o(N,"class","flex items-center"),o(K,"type","hidden"),o(K,"name","start-time"),K.value=U=e[1][0],o(R,"type","hidden"),o(R,"name","end-time"),R.value=X=e[1][1],o(I,"class",J=Ke(e[0]?"disabled":"")+" svelte-1tr2fev"),o(ee,"class","pt-24 pb-2"),o(ne,"class","flex items-center"),o(f,"class","space-y-8"),o(i,"method","POST"),o(n,"class","container mx-auto p-8"),G.p(h,m)},m(V,D){L(V,n,D),v(n,l),v(n,t),v(n,i),v(i,f),v(f,s),v(s,a),v(s,_),v(s,d),v(d,h),h.checked=h.__value===e[2],v(d,c),v(d,b),v(s,y),v(s,g),v(g,m),m.checked=m.__value===e[2],v(g,A),v(g,p),v(f,j),v(f,N),v(N,E),E.checked=e[0],v(N,x),v(N,M),v(f,fe),v(f,I),Te(z,I,null),v(I,se),v(I,K),v(I,$),v(I,R),v(f,re),v(f,ee),v(f,ae),v(f,ne),Y=!0,u||(H=[O(h,"change",e[3]),O(m,"change",e[5]),O(E,"change",e[6])],u=!0)},p(V,[D]){D&4&&(h.checked=h.__value===V[2]),D&4&&(m.checked=m.__value===V[2]),D&1&&(E.checked=V[0]);const ie={};D&1&&(ie.disabled=V[0]),!le&&D&2&&(le=!0,ie.values=V[1],fl(()=>le=!1)),z.$set(ie),(!Y||D&2&&U!==(U=V[1][0]))&&(K.value=U),(!Y||D&2&&X!==(X=V[1][1]))&&(R.value=X),(!Y||D&1&&J!==(J=Ke(V[0]?"disabled":"")+" svelte-1tr2fev"))&&o(I,"class",J)},i(V){Y||(pe(z.$$.fragment,V),Y=!0)},o(V){Ae(z.$$.fragment,V),Y=!1},d(V){V&&F(n),De(z),G.r(),u=!1,Z(H)}}}function yl(e,n,l){let t=!1,i=[7,18],f=!0;nl(async()=>{const b=await(await fetch("/settings")).json();l(2,f=b.useCelsius),l(0,t=b.onContinually),l(1,i=[b.startTime,b.endTime])});const s=[[]];function a(){f=this.__value,l(2,f)}function _(){f=this.__value,l(2,f)}function d(){t=this.checked,l(0,t)}function h(c){i=c,l(1,i)}return[t,i,f,a,s,_,d,h]}class Sl extends je{constructor(n){super(),Ie(this,n,yl,kl,Ce,{})}}new Sl({target:document.getElementById("app")});