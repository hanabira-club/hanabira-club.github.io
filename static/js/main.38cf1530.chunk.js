(this.webpackJsonpf=this.webpackJsonpf||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"name":"Hiragana","code":"h","group":"ABC","data":[{"jp":"\u3042","en":"a"},{"jp":"\u304b","en":"ka"},{"jp":"\u3055","en":"sa"},{"jp":"\u305f","en":"ta"},{"jp":"\u306a","en":"na"},{"jp":"\u306f","en":"ha"},{"jp":"\u307e","en":"ma"},{"jp":"\u3084","en":"ya"},{"jp":"\u3089","en":"ra"},{"jp":"\u308f","en":"wa"},{"jp":"\u3093","en":"n"},{"jp":"\u3044","en":"i"},{"jp":"\u304d","en":"ki"},{"jp":"\u3057","en":"shi"},{"jp":"\u3061","en":"chi"},{"jp":"\u306b","en":"ni"},{"jp":"\u3072","en":"hi"},{"jp":"\u307f","en":"mi"},{"jp":"\u308a","en":"ri"},{"jp":"\u3046","en":"u"},{"jp":"\u304f","en":"ku"},{"jp":"\u3059","en":"su"},{"jp":"\u3064","en":"tsu"},{"jp":"\u306c","en":"nu"},{"jp":"\u3075","en":"fu"},{"jp":"\u3080","en":"mu"},{"jp":"\u3086","en":"yu"},{"jp":"\u308b","en":"ru"},{"jp":"\u3048","en":"e"},{"jp":"\u3051","en":"ke"},{"jp":"\u305b","en":"se"},{"jp":"\u3066","en":"te"},{"jp":"\u306d","en":"ne"},{"jp":"\u3078","en":"he"},{"jp":"\u3081","en":"me"},{"jp":"\u308c","en":"re"},{"jp":"\u304a","en":"o"},{"jp":"\u3053","en":"ko"},{"jp":"\u305d","en":"so"},{"jp":"\u3068","en":"to"},{"jp":"\u306e","en":"no"},{"jp":"\u307b","en":"ho"},{"jp":"\u3082","en":"mo"},{"jp":"\u3088","en":"yo"},{"jp":"\u308d","en":"ro"},{"jp":"\u3092","en":"wo"}]}')},31:function(e){e.exports=JSON.parse('{"name":"Katakana","code":"k","group":"ABC","data":[{"jp":"\u30a2","en":"a"},{"jp":"\u30ab","en":"ka"},{"jp":"\u30b5","en":"sa"},{"jp":"\u30bf","en":"ta"},{"jp":"\u30ca","en":"na"},{"jp":"\u30cf","en":"ha"},{"jp":"\u30de","en":"ma"},{"jp":"\u30e4","en":"ya"},{"jp":"\u30e9","en":"ra"},{"jp":"\u30ef","en":"wa"},{"jp":"\u30f3","en":"n"},{"jp":"\u30a4","en":"i"},{"jp":"\u30ad","en":"ki"},{"jp":"\u30b7","en":"shi"},{"jp":"\u30c1","en":"chi"},{"jp":"\u30cb","en":"ni"},{"jp":"\u30d2","en":"hi"},{"jp":"\u30df","en":"mi"},{"jp":"\u30ea","en":"ri"},{"jp":"\u30a6","en":"u"},{"jp":"\u30af","en":"ku"},{"jp":"\u30b9","en":"su"},{"jp":"\u30c4","en":"tsu"},{"jp":"\u30cc","en":"nu"},{"jp":"\u30d5","en":"fu"},{"jp":"\u30e0","en":"mu"},{"jp":"\u30e6","en":"yu"},{"jp":"\u30eb","en":"ru"},{"jp":"\u30a8","en":"e"},{"jp":"\u30b1","en":"ke"},{"jp":"\u30bb","en":"se"},{"jp":"\u30c6","en":"te"},{"jp":"\u30cd","en":"ne"},{"jp":"\u30d8","en":"he"},{"jp":"\u30e1","en":"me"},{"jp":"\u30ec","en":"re"},{"jp":"\u30aa","en":"o"},{"jp":"\u30b3","en":"ko"},{"jp":"\u30bd","en":"so"},{"jp":"\u30c8","en":"to"},{"jp":"\u30ce","en":"no"},{"jp":"\u30db","en":"ho"},{"jp":"\u30e2","en":"mo"},{"jp":"\u30e8","en":"yo"},{"jp":"\u30ed","en":"ro"},{"jp":"\u30f2","en":"wo"}]}')},32:function(e){e.exports=JSON.parse('{"name":"Numbers","code":"k_numbers","group":"Kanji","data":[{"jp":"\u4e00","onyomi":"ichi, itsu","kunyomi":"hito(tsu), hito","en":"One"},{"jp":"\u4e8c","onyomi":"ni","kunyomi":"futa(tsu), futa","en":"Two"},{"jp":"\u4e09","onyomi":"san","kunyomi":"mit(tsu), mi","en":"Three"},{"jp":"\u56db","onyomi":"shi","kunyomi":"yo(tsu), yo, yon","en":"Four"},{"jp":"\u4e94","onyomi":"go","kunyomi":"itsu(tsu), itsu","en":"Five"},{"jp":"\u516d","onyomi":"roku","kunyomi":"mut(tsu), mu","en":"Six"},{"jp":"\u4e03","onyomi":"shichi","kunyomi":"nana(tsu), nana","en":"Seven"},{"jp":"\u516b","onyomi":"hachi","kunyomi":"yat(tsu), ya","en":"Eight"},{"jp":"\u4e5d","onyomi":"kyuu, ku","kunyomi":"kokono(tsu), kokono","en":"Nine"},{"jp":"\u5341","onyomi":"juu, ji","kunyomi":"tou, to","en":"Ten"},{"jp":"\u767e","onyomi":"hyaku","kunyomi":"","en":"Hundred"},{"jp":"\u5343","onyomi":"sen","kunyomi":"chi","en":"Thousand"},{"jp":"\u4e07","onyomi":"man, ban","kunyomi":"","en":"Ten thousand"}]}')},73:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),a=t(12),r=t.n(a),s=t(4),j=t(14),o=t(13),l=t.n(o),d=t(10),u=t(30),p=t(31),b=t(32),m=t(1),h=c.a.createContext();var x=function(){return Object(i.useContext)(h)},O=function(e){var n=e.children,t=Object(i.useState)([]),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){r(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,n){var t=e.index.findIndex((function(e){return e.label===n.group}));return-1===t?e.index.push({label:n.group,options:[{label:n.name,value:n.code}]}):e.index[t].options.push({label:n.name,value:n.code}),e.data[n.code]=n.data,e}),{index:[],data:{}})}([u,p,b]))}),[]),Object(m.jsx)(h.Provider,{value:a,children:n})};var f=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"mb-8",children:"\u6b63\u89e3 (Seikai)"}),Object(m.jsxs)("p",{className:"mb-4",children:["Here you can learn kana here: ",">>>",Object(m.jsx)(j.b,{to:"/learning",children:"Learning"}),"<<<"]}),Object(m.jsxs)("p",{children:["Or you can practice here: ",">>>",Object(m.jsx)(j.b,{to:"/training",children:"Training"}),"<<<"]})]})},y=t(21),g=t(90),v=t(89);function N(e){var n=e.data,t=void 0===n?[]:n,i=e.checkAnswerHandler;return Object(m.jsxs)("div",{className:"border border-indigo-600 rounded w-full",children:[Object(m.jsx)("div",{className:"flex justify-center items-center h-60 text-8xl m-4 p-1",children:t.jp}),Object(m.jsx)("div",{className:"flex border-t border-indigo-600",children:t.options.map((function(e,n){return Object(m.jsxs)("div",{className:l()("w-full text-center cursor-pointer hover:bg-indigo-100",{"border-l border-indigo-600":n>0}),onClick:function(){return i(e.isCorrect)},children:[(e.onyomi||e.kunyomi)&&Object(m.jsxs)("div",{className:"flex flex-col justify-center items-center h-40 border-b border-indigo-600",children:[Object(m.jsxs)("div",{className:"mb-4",children:["Onyomi:",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:e.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]}),Object(m.jsxs)("div",{children:["Kunyomi:",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:e.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]}),Object(m.jsx)("div",{className:"flex justify-center items-center h-10",children:Object(m.jsx)("b",{children:e.en})})]},n)}))})]})}function k(e,n){if(0===e.length)return null;if(Array.isArray(n)){var t=e[Math.floor(Math.random()*e.length)];return-1===n.indexOf(t)?t:k(e,n)}return e[Math.floor(Math.random()*e.length)]}function w(){var e=Object(i.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(0),r=Object(d.a)(a,2),s=r[0],j=r[1],o=Object(i.useState)(2),l=Object(d.a)(o,2),u=l[0],p=l[1],b=Object(i.useState)({options:[]}),h=Object(d.a)(b,2),O=h[0],f=h[1],w=Object(i.useState)([]),S=Object(d.a)(w,2),C=S[0],F=S[1],M=x();return Object(i.useEffect)((function(){if(C.length>0){for(var e=k(C),n=[e],t=0;t<u-1;t++)n.push(k(C,n));n=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}(n=n.map((function(e,n){return{onyomi:e.onyomi,kunyomi:e.kunyomi,en:e.en,isCorrect:!n}}))),f({jp:e.jp,options:n})}}),[t,C,u]),console.log(O),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:["Total answers count: ",Object(m.jsx)("b",{children:t})]}),Object(m.jsxs)("div",{className:"mb-8 text-green-600",children:["Correct answers count: ",Object(m.jsx)("b",{children:s})]}),Object(m.jsx)("div",{className:"flex justify-center mb-4",children:Object(m.jsxs)(g.a,{value:u,exclusive:!0,onChange:function(e,n){return p(n)},"aria-label":"difficulty",className:"w-full md:w-1/2 lg:w-1/3",children:[Object(m.jsx)(v.a,{value:2,"aria-label":"easy",className:"w-full",children:Object(m.jsx)("div",{className:"",children:"Easy"})}),Object(m.jsx)(v.a,{value:3,"aria-label":"medium",className:"w-full",children:Object(m.jsx)("div",{className:"",children:"Medium"})}),Object(m.jsx)(v.a,{value:4,"aria-label":"hard",className:"w-full",children:Object(m.jsx)("div",{className:"",children:"Hard"})})]})}),Object(m.jsx)("div",{className:"flex justify-center items-center mb-8",children:Object(m.jsx)("div",{className:"w-full md:w-1/2 lg:w-1/3",children:Object(m.jsx)(y.a,{placeholder:"Select collection...",options:M.index,onChange:function(e){F(M.data[e.value])}})})}),0===O.options.length&&Object(m.jsx)("div",{className:"text-3xl italic text-center text-gray-400",children:"Please, select collection to practice"}),O.options.length>0&&Object(m.jsx)("div",{className:"flex justify-center",children:Object(m.jsx)("div",{className:"w-full md:w-1/2 lg:w-1/3",children:Object(m.jsx)(N,{data:O,checkAnswerHandler:function(e){c(t+1),e&&j(s+1)}})})})]})}var S=t(37),C=t.n(S);t(72);function F(e){var n=e.data,t=e.blind;return Object(m.jsxs)("div",{className:"group border border-indigo-600 rounded hover:bg-indigo-100 w-full p-1 cursor-pointer",children:[Object(m.jsx)("div",{className:l()({"opacity-0":t},"group-hover:opacity-100 transition-all duration-200 flex justify-center text-8xl m-4"),style:{willChange:"opacity"},children:n.jp}),(n.onyomi||n.kunyomi)&&Object(m.jsxs)("div",{className:"border-t border-b border-indigo-600",children:[Object(m.jsxs)("div",{children:["Onyomi: ",n.onyomi]}),Object(m.jsxs)("div",{children:["Kunyomi: ",n.kunyomi]})]}),Object(m.jsx)("div",{className:"flex justify-center",children:n.en})]})}function M(){var e=Object(i.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(!1),r=Object(d.a)(a,2),s=r[0],j=r[1],o=x();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[Object(m.jsx)("div",{className:"w-1/3",children:Object(m.jsx)(y.a,{placeholder:"Select collection...",options:o.index,onChange:function(e){c(o.data[e.value])}})}),Object(m.jsxs)("div",{className:"flex items-center cursor-pointer",children:[Object(m.jsx)(C.a,{checked:s,className:"mr-4",id:"blindMode",icons:!1,onChange:function(e){j(e.target.checked)}}),Object(m.jsx)("label",{htmlFor:"blindMode",children:"Blind mode"})]})]}),0===t.length&&Object(m.jsx)("div",{className:"text-3xl italic text-center text-gray-400",children:"Please, select collection to learn"}),Object(m.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:t.map((function(e,n){return Object(m.jsx)(F,{data:e,blind:s},n)}))})]})}function T(){var e=Object(s.f)();return Object(m.jsx)("header",{className:"border-b shadow-lg",children:Object(m.jsxs)("div",{className:"container mx-auto flex px-4 py-5",children:[Object(m.jsx)("div",{className:"mr-12",children:Object(m.jsx)(j.b,{to:"/",children:"\u6b63\u89e3"})}),Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:"flex",children:[Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(j.b,{to:"/",className:l()("font-semibold",{"text-red-500":"/"===e.pathname}),children:"Home"})}),Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(j.b,{to:"/learning",className:l()("font-semibold",{"text-red-500":"/learning"===e.pathname}),children:"Learning"})}),Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(j.b,{to:"/training",className:l()("font-semibold",{"text-red-500":"/training"===e.pathname}),children:"Training"})})]})})]})})}var H=function(){return Object(m.jsx)(O,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(T,{}),Object(m.jsx)("div",{className:"container mx-auto px-4",children:Object(m.jsx)("main",{className:"py-16",children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{exact:!0,path:"/",children:Object(m.jsx)(f,{})}),Object(m.jsx)(s.a,{exact:!0,path:"/training",children:Object(m.jsx)(w,{})}),Object(m.jsx)(s.a,{exact:!0,path:"/learning",children:Object(m.jsx)(M,{})})]})})})]})})},A=(t(73),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))});r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),A(console.log)}},[[74,1,2]]]);
//# sourceMappingURL=main.38cf1530.chunk.js.map