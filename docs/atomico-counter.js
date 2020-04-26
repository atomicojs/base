import{_ as t,M as n,K as e}from"./chunks/520807a2.js";var o=function(t,n,e,r){var s;n[0]=0;for(var u=1;u<n.length;u++){var h=n[u++],a=n[u]?(n[0]|=h?1:2,e[n[u++]]):n[++u];3===h?r[0]=a:4===h?r[1]=Object.assign(r[1]||{},a):5===h?(r[1]=r[1]||{})[n[++u]]=a:6===h?r[1][n[++u]]+=a+"":h?(s=t.apply(a,o(t,a,e,["",null])),r.push(s),a[0]?n[0]|=2:(n[u-2]=0,n[u]=s)):r.push(a)}return r},r=new Map;const s=function(t){var n=r.get(this);return n||(n=new Map,r.set(this,n)),(n=o(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,o=1,r="",s="",u=[0],h=function(t){1===o&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,t,r):3===o&&(t||r)?(u.push(3,t,r),o=2):2===o&&"..."===r&&t?u.push(4,t,0):2===o&&r&&!t?u.push(5,0,!0,r):o>=5&&((r||!t&&5===o)&&(u.push(o,0,r,e),o=6),t&&(u.push(o,t,0,e),o=6)),r=""},a=0;a<t.length;a++){a&&(1===o&&h(),h(a));for(var p=0;p<t[a].length;p++)n=t[a][p],1===o?"<"===n?(h(),u=[u],o=3):r+=n:4===o?"--"===r&&">"===n?(o=1,r=""):r=n+r[0]:s?n===s?s="":r+=n:'"'===n||"'"===n?s=n:">"===n?(h(),o=1):o&&("="===n?(o=5,e=r,r=""):"/"===n&&(o<5||">"===t[a][p+1])?(h(),3===o&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(h(),o=2):r+=n),3===o&&"!--"===r&&(o=4,u=u[0])}return h(),u}(t)),n),arguments,[])).length>1?n:n[0]}.bind(t);function u(){let[t,n]=e("count");return s`<host shadowDom>
    <style>
      ${"*{font-size:200%}span{width:4rem;display:inline-block;text-align:center}button{width:4rem;height:4rem;border:none;border-radius:10px;background-color:#2e8b57;color:#fff}"}
    </style>
    <button onclick=${()=>n(t-1)}>-</button>
    <span>${t}</span>
    <button onclick=${()=>n(t+1)}>+</button>
  </host>`}u.props={count:{type:Number,reflect:!0,value:0,event:{type:"ChangeCount"}}},n("atomico-counter",u);
//# sourceMappingURL=atomico-counter.js.map
