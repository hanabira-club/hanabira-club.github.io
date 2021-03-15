(this.webpackJsonpf=this.webpackJsonpf||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"name":"Hiragana","code":"h","group":"ABC","data":[{"jp":"\u3042","en":"a"},{"jp":"\u304b","en":"ka"},{"jp":"\u3055","en":"sa"},{"jp":"\u305f","en":"ta"},{"jp":"\u306a","en":"na"},{"jp":"\u306f","en":"ha"},{"jp":"\u307e","en":"ma"},{"jp":"\u3084","en":"ya"},{"jp":"\u3089","en":"ra"},{"jp":"\u308f","en":"wa"},{"jp":"\u3093","en":"n"},{"jp":"\u3044","en":"i"},{"jp":"\u304d","en":"ki"},{"jp":"\u3057","en":"shi"},{"jp":"\u3061","en":"chi"},{"jp":"\u306b","en":"ni"},{"jp":"\u3072","en":"hi"},{"jp":"\u307f","en":"mi"},{"jp":"\u308a","en":"ri"},{"jp":"\u3046","en":"u"},{"jp":"\u304f","en":"ku"},{"jp":"\u3059","en":"su"},{"jp":"\u3064","en":"tsu"},{"jp":"\u306c","en":"nu"},{"jp":"\u3075","en":"fu"},{"jp":"\u3080","en":"mu"},{"jp":"\u3086","en":"yu"},{"jp":"\u308b","en":"ru"},{"jp":"\u3048","en":"e"},{"jp":"\u3051","en":"ke"},{"jp":"\u305b","en":"se"},{"jp":"\u3066","en":"te"},{"jp":"\u306d","en":"ne"},{"jp":"\u3078","en":"he"},{"jp":"\u3081","en":"me"},{"jp":"\u308c","en":"re"},{"jp":"\u304a","en":"o"},{"jp":"\u3053","en":"ko"},{"jp":"\u305d","en":"so"},{"jp":"\u3068","en":"to"},{"jp":"\u306e","en":"no"},{"jp":"\u307b","en":"ho"},{"jp":"\u3082","en":"mo"},{"jp":"\u3088","en":"yo"},{"jp":"\u308d","en":"ro"},{"jp":"\u3092","en":"wo"}]}')},39:function(e){e.exports=JSON.parse('{"name":"Katakana","code":"k","group":"ABC","data":[{"jp":"\u30a2","en":"a"},{"jp":"\u30ab","en":"ka"},{"jp":"\u30b5","en":"sa"},{"jp":"\u30bf","en":"ta"},{"jp":"\u30ca","en":"na"},{"jp":"\u30cf","en":"ha"},{"jp":"\u30de","en":"ma"},{"jp":"\u30e4","en":"ya"},{"jp":"\u30e9","en":"ra"},{"jp":"\u30ef","en":"wa"},{"jp":"\u30f3","en":"n"},{"jp":"\u30a4","en":"i"},{"jp":"\u30ad","en":"ki"},{"jp":"\u30b7","en":"shi"},{"jp":"\u30c1","en":"chi"},{"jp":"\u30cb","en":"ni"},{"jp":"\u30d2","en":"hi"},{"jp":"\u30df","en":"mi"},{"jp":"\u30ea","en":"ri"},{"jp":"\u30a6","en":"u"},{"jp":"\u30af","en":"ku"},{"jp":"\u30b9","en":"su"},{"jp":"\u30c4","en":"tsu"},{"jp":"\u30cc","en":"nu"},{"jp":"\u30d5","en":"fu"},{"jp":"\u30e0","en":"mu"},{"jp":"\u30e6","en":"yu"},{"jp":"\u30eb","en":"ru"},{"jp":"\u30a8","en":"e"},{"jp":"\u30b1","en":"ke"},{"jp":"\u30bb","en":"se"},{"jp":"\u30c6","en":"te"},{"jp":"\u30cd","en":"ne"},{"jp":"\u30d8","en":"he"},{"jp":"\u30e1","en":"me"},{"jp":"\u30ec","en":"re"},{"jp":"\u30aa","en":"o"},{"jp":"\u30b3","en":"ko"},{"jp":"\u30bd","en":"so"},{"jp":"\u30c8","en":"to"},{"jp":"\u30ce","en":"no"},{"jp":"\u30db","en":"ho"},{"jp":"\u30e2","en":"mo"},{"jp":"\u30e8","en":"yo"},{"jp":"\u30ed","en":"ro"},{"jp":"\u30f2","en":"wo"}]}')},40:function(e){e.exports=JSON.parse('{"name":"Numbers","code":"k_numbers","group":"Kanji","data":[{"jp":"\u4e00","onyomi":"ichi, itsu","kunyomi":"hito(tsu), hito","en":"One"},{"jp":"\u4e8c","onyomi":"ni","kunyomi":"futa(tsu), futa","en":"Two"},{"jp":"\u4e09","onyomi":"san","kunyomi":"mit(tsu), mi","en":"Three"},{"jp":"\u56db","onyomi":"shi","kunyomi":"yo(tsu), yo, yon","en":"Four"},{"jp":"\u4e94","onyomi":"go","kunyomi":"itsu(tsu), itsu","en":"Five"},{"jp":"\u516d","onyomi":"roku","kunyomi":"mut(tsu), mu","en":"Six"},{"jp":"\u4e03","onyomi":"shichi","kunyomi":"nana(tsu), nana","en":"Seven"},{"jp":"\u516b","onyomi":"hachi","kunyomi":"yat(tsu), ya","en":"Eight"},{"jp":"\u4e5d","onyomi":"kyuu, ku","kunyomi":"kokono(tsu), kokono","en":"Nine"},{"jp":"\u5341","onyomi":"juu, ji","kunyomi":"tou, to","en":"Ten"},{"jp":"\u767e","onyomi":"hyaku","kunyomi":"","en":"Hundred"},{"jp":"\u5343","onyomi":"sen","kunyomi":"chi","en":"Thousand"},{"jp":"\u4e07","onyomi":"man, ban","kunyomi":"","en":"Ten thousand"}]}')},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(15),a=n.n(s),l=n(6),r=n(16),j=n(7),o=n.n(j),d=n(13),u=n(5),b=n(38),x=n(39),h=n(40),m=n(1),p=c.a.createContext();var O=function(){return Object(i.useContext)(p)},f=function(e){var t=e.children,n=Object(i.useState)([]),c=Object(u.a)(n,2),s=c[0],a=c[1];return Object(i.useEffect)((function(){a(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){var n=e.index.findIndex((function(e){return e.label===t.group}));return-1===n?e.index.push({label:t.group,options:[{label:t.name,value:t.code}]}):e.index[n].options.push({label:t.name,value:t.code}),e.data[t.code]=t.data,e}),{index:[],data:{}})}([b,x,h]))}),[]),Object(m.jsx)(p.Provider,{value:s,children:t})};var g=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u6b63\u89e3 (Seikai) | Home page"})}),Object(m.jsx)("h1",{className:"mb-8 text-7xl text-center text-indigo-800",children:"\u6b63\u89e3 (Seikai)"}),Object(m.jsx)("p",{className:"mb-4",children:"Seikai is the simple and fast web application for learning and practicing your japanese language!"}),Object(m.jsx)("div",{className:"flex flex-col md:flex-row items-stretch w-full rounded-xl overflow-hidden",children:[{to:"/learning",text:"Start learn kana and kanji"},{to:"/training",text:"Practice"},{to:"/testing",text:"Test your knowledge"}].map((function(e,t){return Object(m.jsx)(r.b,{to:e.to,className:o()("flex justify-center items-center w-full px-1 py-8 bg-blue-100 hover:bg-blue-200 text-3xl text-center text-blue-800",{"border-t md:border-l md:border-t-0 border-white":t}),children:e.text},t)}))})]})},v=n(20),y=n(41),w=n.n(y);n(70);function N(e){var t=e.data,n=e.blind;return Object(m.jsxs)("div",{className:"group w-full px-2 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-900 cursor-pointer transition-all duration-300",children:[Object(m.jsx)("div",{className:o()({"opacity-0":n},"group-hover:opacity-100 flex justify-center text-8xl m-4 transition-all duration-300"),style:{willChange:"opacity"},children:t.jp}),(t.onyomi||t.kunyomi)&&Object(m.jsxs)("div",{className:"py-2 border-t-2 border-b-2 border-white",children:[Object(m.jsxs)("div",{children:["Onyomi: ",Object(m.jsx)("b",{children:t.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]}),Object(m.jsxs)("div",{children:["Kunyomi: ",Object(m.jsx)("b",{children:t.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]}),Object(m.jsx)("div",{className:"py-1 text-center",children:Object(m.jsx)("b",{children:t.en})})]})}function k(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),a=Object(u.a)(s,2),l=a[0],r=a[1],j=O();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u6b63\u89e3 (Seikai) | Learning"})}),Object(m.jsxs)("div",{className:"w-full md:w-1/3 mx-auto",children:[Object(m.jsxs)("div",{className:"flex flex-col justify-between items-center mb-8",children:[Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(v.a,{placeholder:"Select collection...",options:j.index,onChange:function(e){c(j.data[e.value])}})}),Object(m.jsxs)("div",{className:"flex items-center py-3 cursor-pointer",children:[Object(m.jsx)(w.a,{checked:l,className:"mr-4",id:"blindMode",icons:!1,onChange:function(e){r(e.target.checked)}}),Object(m.jsx)("label",{htmlFor:"blindMode",children:"Blind mode"})]})]}),0===n.length&&Object(m.jsx)("div",{className:"text-3xl italic text-center text-gray-400",children:"Please, select collection to learn"}),Object(m.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:n.map((function(e,t){return Object(m.jsx)(N,{data:e,blind:l},t)}))})]})]})}var S=n(101),C=n(99);function F(e){var t=e.data,n=void 0===t?null:t,i=e.checkAnswerHandler,c=e.dir,s=void 0===c?"row":c;return null===n?Object(m.jsx)("div",{className:"w-full text-center",children:"No data provided for card"}):Object(m.jsxs)("div",{className:"border border-white w-full rounded-xl overflow-hidden",style:{height:"500px"},children:[Object(m.jsx)("div",{className:o()("flex justify-center items-center bg-purple-100 text-purple-800",{"h-2/3":"row"===s,"h-1/3":"col"===s}),children:n.riddle}),Object(m.jsx)("div",{className:o()("grid border-t border-white",{"grid-flow-col auto-cols-fr h-1/3":"row"===s,"grid-flow-row auto-rows-fr h-2/3":"col"===s}),children:n.options.map((function(e,t){return Object(m.jsx)("div",{className:o()("flex justify-center items-center bg-indigo-100 hover:bg-indigo-200 text-indigo-900 cursor-pointer",{"border-l border-white":t>0&&"row"===s},{"border-t border-white":t>0&&"col"===s}),onMouseUp:function(){return i(t===n.indexOfCorrect,t)},children:e},Math.random().toString())}))})]})}function E(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}return e}function M(e,t){if(0===e.length)return null;if(Array.isArray(t)){var n=e[Math.floor(Math.random()*e.length)];return-1===t.indexOf(n)?n:M(e,t)}return e[Math.floor(Math.random()*e.length)]}var T=n(42),H=n(43),A=function(){function e(t,n){Object(T.a)(this,e),this.picks=t,this.mode=n,this.modeRiddle=n.split("-")[0],this.modeOptions=n.split("-")[1],this.riddle={},this.options=[],this.indexOfCorrect=-1,this.createData()}return Object(H.a)(e,[{key:"createData",value:function(){switch(this.modeRiddle){case"jp":this.riddle={jp:this.picks[0].jp};break;case"en":this.riddle={en:this.picks[0].en,onyomi:this.picks[0].onyomi,kunyomi:this.picks[0].kunyomi};break;default:this.riddle={}}switch(this.modeOptions){case"jp":this.options=E(this.picks.map((function(e,t){return{isCorrect:!t,jp:e.jp}})));break;case"en":this.options=E(this.picks.map((function(e,t){return{isCorrect:!t,en:e.en,onyomi:e.onyomi,kunyomi:e.kunyomi}})));break;default:this.options=[]}this.indexOfCorrect=this.options.findIndex((function(e){return e.isCorrect}))}},{key:"exportResultsCardElements",value:function(){var e,t;switch(this.mode){case"jp-en":e=Object(m.jsx)("span",{className:"text-5xl",children:this.riddle.jp}),t=this.options.map((function(e,t){return Object(m.jsxs)("div",{className:"w-full px-2 py-1",children:[Object(m.jsx)("b",{children:e.en}),(e.onyomi||e.kunyomi)&&Object(m.jsxs)("span",{className:"text-sm",children:["\xa0\xa0|\xa0\xa0 Onyomi:\xa0",Object(m.jsx)("b",{children:e.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})}),"\xa0\xa0|\xa0\xa0 Kunyomi:\xa0",Object(m.jsx)("b",{children:e.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]})}));break;case"en-jp":e=Object(m.jsxs)("div",{className:"w-full px-4 py-1",children:[Object(m.jsx)("div",{className:"text-xl",children:Object(m.jsx)("b",{children:this.riddle.en})}),(this.riddle.onyomi||this.riddle.kunyomi)&&Object(m.jsxs)("p",{children:["Onyomi:\xa0",Object(m.jsx)("b",{children:this.riddle.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})}),Object(m.jsx)("br",{}),"Kunyomi:\xa0",Object(m.jsx)("b",{children:this.riddle.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]}),t=this.options.map((function(e,t){return Object(m.jsx)("span",{className:"text-5xl",children:e.jp})}))}return{riddle:e,options:t,indexOfCorrect:this.indexOfCorrect}}},{key:"exportTrainingCardElements",value:function(){var e,t;switch(this.mode){case"jp-en":e=Object(m.jsx)("div",{className:"flex items-center h-32 text-8xl",children:this.riddle.jp}),t=this.options.map((function(e,t){return Object(m.jsxs)("div",{className:"w-full px-4 py-1",children:[Object(m.jsx)("b",{children:e.en}),(e.onyomi||e.kunyomi)&&Object(m.jsxs)("p",{className:"text-sm",children:["Onyomi:\xa0",Object(m.jsx)("b",{children:e.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})}),Object(m.jsx)("br",{}),"Kunyomi:\xa0",Object(m.jsx)("b",{children:e.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]})}));break;case"en-jp":e=Object(m.jsxs)("div",{className:"w-full px-4 py-1",children:[Object(m.jsx)("div",{className:"text-3xl text-center",children:Object(m.jsx)("b",{children:this.riddle.en})}),(this.riddle.onyomi||this.riddle.kunyomi)&&Object(m.jsxs)("p",{children:["Onyomi:\xa0",Object(m.jsx)("b",{children:this.riddle.onyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})}),Object(m.jsx)("br",{}),"Kunyomi:\xa0",Object(m.jsx)("b",{children:this.riddle.kunyomi||Object(m.jsx)(m.Fragment,{children:"\u2014"})})]})]}),t=this.options.map((function(e,t){return Object(m.jsx)("div",{className:"flex items-center h-20 text-5xl",children:e.jp})}))}return{riddle:e,options:t,indexOfCorrect:this.indexOfCorrect}}}]),e}();function J(){var e=Object(i.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(0),a=Object(u.a)(s,2),l=a[0],r=a[1],j=Object(i.useState)("jp-en"),o=Object(u.a)(j,2),b=o[0],x=o[1],h=Object(i.useState)(2),p=Object(u.a)(h,2),f=p[0],g=p[1],y=Object(i.useState)([]),w=Object(u.a)(y,2),N=w[0],k=w[1],E=Object(i.useState)(null),T=Object(u.a)(E,2),H=T[0],J=T[1],K=O();return Object(i.useEffect)((function(){if(N.length>0){for(var e=[M(N)],t=0;t<f-1;t++)e.push(M(N,e));var n=new A(e,b).exportTrainingCardElements();J(n)}}),[n,N,f,b]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u6b63\u89e3 (Seikai) | Training"})}),Object(m.jsxs)("div",{className:"w-full md:w-1/2 lg:w-1/3 mx-auto",children:[Object(m.jsx)("div",{className:"mb-4",children:Object(m.jsxs)(S.a,{value:b,exclusive:!0,onChange:function(e,t){return x(t)},"aria-label":"difficulty",className:"w-full",children:[Object(m.jsx)(C.a,{value:"jp-en","aria-label":"japanese mode",className:"w-full",children:"\u65e5\u672c\u8a9e"}),Object(m.jsx)(C.a,{value:"en-jp","aria-label":"english mode",className:"w-full",children:"English"})]})}),Object(m.jsx)("div",{className:"mb-4",children:Object(m.jsxs)(S.a,{value:f,exclusive:!0,onChange:function(e,t){return g(t)},"aria-label":"difficulty",className:"w-full",children:[Object(m.jsx)(C.a,{value:2,"aria-label":"easy",className:"w-full",children:"Easy"}),Object(m.jsx)(C.a,{value:3,"aria-label":"medium",className:"w-full",children:"Medium"}),Object(m.jsx)(C.a,{value:4,"aria-label":"hard",className:"w-full",children:"Hard"})]})}),Object(m.jsx)("div",{className:"mb-8",children:Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(v.a,{placeholder:"Select collection...",options:K.index,onChange:function(e){k(K.data[e.value])}})})}),Object(m.jsx)("div",{className:"mb-8",children:Object(m.jsxs)("div",{className:"table mx-auto px-2 py-1 bg-blue-100 rounded-md text-blue-700",children:["Score: ",Object(m.jsxs)("b",{children:[n," / ",l]})]})}),null===H&&Object(m.jsx)("div",{className:"text-3xl italic text-center text-gray-400",children:"Please, select collection to practice"}),null!==H&&Object(m.jsx)("div",{className:"flex justify-center",children:Object(m.jsx)("div",{className:"w-full",children:Object(m.jsx)(F,{dir:"jp-en"===b?"col":"row",data:H,checkAnswerHandler:function(e){c(n+1),e&&r(l+1)}})})})]})]})}var K=n(32),D=n(100);function P(e){var t=e.cards,n=void 0===t?[]:t,i=e.answers,c=void 0===i?[]:i,s=e.dir,a=void 0===s?"row":s;return Object(m.jsx)("div",{className:"w-full border border-white rounded-xl overflow-hidden",children:n.map((function(e,t){var n=A.prototype.exportResultsCardElements.call(e),i=n.riddle,s=n.options,l=n.indexOfCorrect;return Object(m.jsxs)("div",{className:o()("flex flex-wrap w-full text-indigo-900",{"border-t-4 border-white":t,"bg-indigo-100":t%2===0,"bg-indigo-200":t%2===1}),children:[Object(m.jsx)("div",{className:o()("flex justify-center items-center w-full h-20 md:h-auto",{"md:w-1/2":"row"===a,"md:w-1/3":"col"===a}),children:i}),Object(m.jsx)("div",{className:o()("grid w-full border-t md:border-t-0 md:border-l border-white",{"grid-flow-col auto-cols-fr md:w-1/2":"row"===a,"grid-flow-row auto-rows-fr md:w-2/3":"col"===a}),children:s.map((function(e,n){return Object(m.jsx)("div",{className:o()("flex justify-center items-center w-full h-20 md:h-auto",{"border-l border-white":n&&"row"===a,"border-t border-white":n&&"col"===a,"bg-green-200 text-green-700":l===n,"bg-red-200 text-red-700":c[t]===n&&l!==n}),children:e},n)}))})]},t)}))})}function B(){var e=Object(i.useState)("jp-en"),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(2),a=Object(u.a)(s,2),l=a[0],r=a[1],j=Object(i.useState)([]),o=Object(u.a)(j,2),b=o[0],x=o[1],h=Object(i.useState)([]),p=Object(u.a)(h,2),f=p[0],g=p[1],y=Object(i.useState)(null),w=Object(u.a)(y,2),N=w[0],k=w[1],E=Object(i.useState)([]),T=Object(u.a)(E,2),H=T[0],J=T[1],B=Object(i.useState)(null),I=Object(u.a)(B,2),L=I[0],R=I[1],q=Object(i.useState)([]),Q=Object(u.a)(q,2),U=Q[0],V=Q[1],Y=Object(i.useState)([]),_=Object(u.a)(Y,2),z=_[0],G=_[1],W=Object(i.useState)(null),X=Object(u.a)(W,2),Z=X[0],$=X[1],ee=Object(i.useState)(0),te=Object(u.a)(ee,2),ne=te[0],ie=te[1],ce=Object(i.useState)(!0),se=Object(u.a)(ce,2),ae=se[0],le=se[1],re=Object(i.useState)(!1),je=Object(u.a)(re,2),oe=je[0],de=je[1],ue=Object(i.useState)(!1),be=Object(u.a)(ue,2),xe=be[0],he=be[1],me=O();return Object(i.useEffect)((function(){if(oe){for(var e=[],t=0;t<N;t++)e.push(M(f,e));J(e),$(0)}}),[oe,N,f]),Object(i.useEffect)((function(){if(oe){for(var e=[H[Z]],t=0;t<l-1;t++)e.push(M(f,e));var i=new A(e,n),c=i.exportTrainingCardElements();R(c),V((function(e){return[].concat(Object(K.a)(e),[i])}))}}),[Z,H,l,f,n]),Object(i.useEffect)((function(){f.length<N&&k(null)}),[f,N]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u6b63\u89e3 (Seikai) | Testing"})}),xe&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"w-full md:w-1/2 lg:w-1/3 mx-auto mb-8",children:[Object(m.jsxs)("div",{className:"mb-8",children:[Object(m.jsx)("div",{className:"text-center text-xl",children:"Your score:"}),Object(m.jsxs)("div",{className:"text-center text-6xl text-indigo-600",children:[ne," / ",H.length]})]}),Object(m.jsx)(D.a,{variant:"outlined",color:"primary",className:"w-full",onClick:function(){le(!0),de(!1),he(!1),R(null),V([]),G([]),$(null),ie(0)},children:Object(m.jsx)("span",{className:"text-xl",children:"Try again"})})]}),Object(m.jsx)("h2",{className:"text-3xl text-center mb-4",children:"Details"}),Object(m.jsxs)("div",{className:"table mx-auto mb-4 px-2 py-1 bg-blue-100 rounded-md text-blue-700",children:[Object(m.jsxs)("p",{children:["Mode:\xa0",Object(m.jsx)("b",{children:{"jp-en":"Japanese to English","en-jp":"English to Japanese"}[n]})]}),Object(m.jsxs)("p",{children:["Difficulty:\xa0",Object(m.jsx)("b",{children:{2:"Easy",3:"Medium",4:"Hard"}[l]})]}),Object(m.jsxs)("p",{children:["Collections:\xa0",Object(m.jsx)("b",{children:b.reduce((function(e,t){return e.push(t.label),e}),[]).join(", ")})]}),Object(m.jsxs)("p",{children:["Number of qustions:\xa0",Object(m.jsx)("b",{children:N})]})]}),Object(m.jsx)(P,{dir:"jp-en"===n?"col":"row",cards:U,answers:z})]}),oe&&Object(m.jsxs)("div",{className:"w-full md:w-1/2 lg:w-1/3 mx-auto",children:[Object(m.jsxs)("p",{className:"mb-4 text-2xl text-center",children:["Question No ",Z+1]}),null!==L&&Object(m.jsx)(F,{dir:"jp-en"===n?"col":"row",data:L,checkAnswerHandler:function(e,t){G((function(e){return[].concat(Object(K.a)(e),[t])})),e&&ie(ne+1),Z<H.length-1?$(Z+1):(de(!1),he(!0))}})]}),ae&&Object(m.jsxs)("div",{className:"w-full md:w-1/2 lg:w-1/3 mx-auto",children:[Object(m.jsx)("p",{className:"text-sm mb-1",children:"Mode"}),Object(m.jsx)("div",{className:"flex justify-center mb-4",children:Object(m.jsxs)(S.a,{value:n,exclusive:!0,onChange:function(e,t){return c(t)},"aria-label":"difficulty",className:"w-full",children:[Object(m.jsx)(C.a,{value:"jp-en","aria-label":"japanese mode",className:"w-full",children:"\u65e5\u672c\u8a9e"}),Object(m.jsx)(C.a,{value:"en-jp","aria-label":"english mode",className:"w-full",children:"English"})]})}),Object(m.jsx)("p",{className:"text-sm mb-1",children:"Difficulty"}),Object(m.jsx)("div",{className:"flex justify-center mb-4",children:Object(m.jsxs)(S.a,{value:l,exclusive:!0,onChange:function(e,t){return r(t)},"aria-label":"difficulty",className:"w-full",children:[Object(m.jsx)(C.a,{value:2,"aria-label":"easy",className:"w-full",children:"Easy"}),Object(m.jsx)(C.a,{value:3,"aria-label":"medium",className:"w-full",children:"Medium"}),Object(m.jsx)(C.a,{value:4,"aria-label":"hard",className:"w-full",children:"Hard"})]})}),Object(m.jsx)("p",{className:"text-sm mb-1",children:"Collections"}),Object(m.jsx)("div",{className:"flex justify-center items-center mb-4",children:Object(m.jsx)(v.a,{className:"w-full",isMulti:!0,closeMenuOnSelect:!1,placeholder:"Select collection...",options:me.index,defaultValue:b,onChange:function(e){x(e),g(e.reduce((function(e,t){return e.concat(me.data[t.value])}),[]))}})}),Object(m.jsx)("p",{className:"text-sm mb-1",children:"Number of questions"}),Object(m.jsx)("div",{className:"flex justify-center mb-8",children:Object(m.jsxs)(S.a,{value:N,exclusive:!0,onChange:function(e,t){return k(t)},"aria-label":"number of questions",className:"w-full",children:[Object(m.jsx)(C.a,{value:5,"aria-label":"5",className:"w-full",disabled:f.length<5,children:Object(m.jsx)("b",{className:"text-xl",children:"5"})}),Object(m.jsx)(C.a,{value:15,"aria-label":"15",className:"w-full",disabled:f.length<15,children:Object(m.jsx)("b",{className:"text-xl",children:"15"})}),Object(m.jsx)(C.a,{value:25,"aria-label":"30",className:"w-full",disabled:f.length<25,children:Object(m.jsx)("b",{className:"text-xl",children:"30"})}),Object(m.jsx)(C.a,{value:50,"aria-label":"50",className:"w-full",disabled:f.length<50,children:Object(m.jsx)("b",{className:"text-xl",children:"50"})})]})}),Object(m.jsx)(D.a,{variant:"outlined",color:"secondary",className:"w-full",onClick:function(){le(!1),de(!0)},disabled:0===b.length||null===N,children:Object(m.jsx)("span",{className:"text-xl",children:"Start testing"})})]})]})}function I(){var e=Object(l.f)();return Object(m.jsx)("header",{className:"border-b shadow-lg",children:Object(m.jsxs)("div",{className:"container mx-auto flex px-4 py-5",children:[Object(m.jsx)("div",{className:"mr-8",children:Object(m.jsx)(r.b,{to:"/",children:"\u6b63\u89e3"})}),Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:"flex",children:[Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(r.b,{to:"/learning",className:o()("font-semibold",{"text-red-500":"/learning"===e.pathname}),children:"Learning"})}),Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(r.b,{to:"/training",className:o()("font-semibold",{"text-red-500":"/training"===e.pathname}),children:"Training"})}),Object(m.jsx)("li",{className:"mr-6",children:Object(m.jsx)(r.b,{to:"/testing",className:o()("font-semibold",{"text-red-500":"/testing"===e.pathname}),children:"Testing"})})]})})]})})}var L=function(){return Object(m.jsxs)(f,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u6b63\u89e3 (Seikai)"})}),Object(m.jsxs)(r.a,{children:[Object(m.jsx)(I,{}),Object(m.jsx)("div",{className:"container mx-auto px-4",children:Object(m.jsx)("main",{className:"py-8",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(g,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/learning",children:Object(m.jsx)(k,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/training",children:Object(m.jsx)(J,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/testing",children:Object(m.jsx)(B,{})})]})})})]})]})},R=(n(85),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))});a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),R(console.log)}},[[86,1,2]]]);
//# sourceMappingURL=main.9feaa8f9.chunk.js.map