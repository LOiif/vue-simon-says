(function(){var t={102:function(t,e,i){var s={"./1.wav":656,"./2.wav":551,"./3.wav":43,"./4.wav":583};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=102},864:function(t,e,i){"use strict";var s=i(144),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"game"},[i("div",{staticClass:"game__wrapper"},[i("h1",{staticClass:"title"},[t._v("Simon Game")]),i("div",{staticClass:"container"},[i("button",{staticClass:"sound",on:{click:t.muteButtonClickHandler}}),i("game-board",{ref:"board",attrs:{"can-click":t.canClick},on:{click:t.clickBoard}}),i("div",{staticClass:"game-info"},[t.isGameOver?t._e():i("p",{staticClass:"score"},[t._v("Счет: "+t._s(t.score))]),t.isGameOver?i("p",{staticClass:"game-over"},[t._v("Игра окончена")]):t._e(),t.isGameOver?i("p",{staticClass:"total-score"},[t._v("Набрано очков: "+t._s(t.resultScore))]):t._e(),t.isGameStart||t.isGameOver?i("button",{staticClass:"start-button",attrs:{type:"button"},on:{click:t.restartGame}},[t._v("Restart")]):i("button",{staticClass:"start-button",attrs:{type:"button"},on:{click:t.startGame}},[t._v(" Start ")]),i("radio-group",{staticClass:"difficulty",attrs:{title:"Сложность","difficulty-options":t.difficultyOptions,"selected-difficulty":t.selectedDifficulty},on:{select:t.selectDifficulty}})],1)],1)])])])},n=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"board"},[i("div",{staticClass:"board__item board__item_red",class:{"can-click":t.canClick},attrs:{"data-section":1},on:{click:t.clickItem}}),i("div",{staticClass:"board__item board__item_blue",class:{"can-click":t.canClick},attrs:{"data-section":2},on:{click:t.clickItem}}),i("div",{staticClass:"board__item board__item_green",class:{"can-click":t.canClick},attrs:{"data-section":3},on:{click:t.clickItem}}),i("div",{staticClass:"board__item board__item_yellow",class:{"can-click":t.canClick},attrs:{"data-section":4},on:{click:t.clickItem}})])},r=[],o={name:"GameBoard",methods:{clickItem(t){const e=t.target.dataset.section;this.canClick&&this.$emit("click",e)}},props:{canClick:{type:Boolean}}},l=o,u=i(1),d=(0,u.Z)(l,c,r,!1,null,"4875e6d6",null),f=d.exports;class m{static randomNum(t,e=1){return Math.floor(Math.random()*t+e)}static playSound(t){let e=i(102)(`./${t}.wav`);const s=new Audio(e);s.play()}static lightSections(t,e){setTimeout((()=>{t.classList.add("active")}),1),setTimeout((()=>{t.classList.remove("active")}),e)}}var v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"options"},[i("h2",{staticClass:"options__title"},[t._v(t._s(t.title))]),i("ul",{staticClass:"options__list"},t._l(t.difficultyOptions,(function(e,s){return i("li",{staticClass:"options__item"},[i("label",{staticClass:"options__label"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],key:e.value+s,staticClass:"visually-hidden",attrs:{type:"radio",name:"difficulty"},domProps:{value:e.value,checked:t._q(t.difficulty,e.value)},on:{change:[function(i){t.difficulty=e.value},function(e){return t.$emit("select",e.target.value)}]}}),i("span",{staticClass:"options__radio-indicator"}),t._v(" "+t._s(e.name)+" ")])])})),0)])},h=[],p={name:"DifficultyOption",data(){return{difficulty:this.selectedDifficulty}},props:{title:{type:String,require:!0},difficultyOptions:{type:Object,require:!0},selectedDifficulty:{type:String,require:!0}}},_=p,y=(0,u.Z)(_,v,h,!1,null,"3f846cfe",null),k=y.exports;const C={easy:{name:"Легко",value:"easy",duration:1500},normal:{name:"Нормально",value:"normal",duration:1e3},hard:{name:"Сложно",value:"hard",duration:400}};var b={name:"App",components:{RadioGroup:k,GameBoard:f},data:()=>({score:0,iteration:0,resultScore:0,sequence:[],isGameStart:!1,isGameOver:!1,canClick:!1,difficultyOptions:C,selectedDifficulty:"easy",isMute:!1}),methods:{clickBoard(t){this.isGameStart&&this.canClick&&(this.isMute||m.playSound(t),+t===this.sequence[this.iteration].num?this.iteration===this.sequence.length-1?this.nextLevel():this.iteration++:this.endGame())},selectDifficulty(t){this.selectedDifficulty=t},muteButtonClickHandler(t){t.target.classList.toggle("mute"),this.isMute=!this.isMute},startGame(){this.isGameStart=!0,this.isGameOver=!1,this.nextLevel(),this.score=0},nextLevel(){this.canClick=!1,this.iteration=0,this.score++;const t=m.randomNum(4),e=Array.from(this.$refs.board.$el.children).find((e=>+e.dataset.section===+t));this.sequence.push({num:t,el:e}),this.animate()},endGame(){this.resultScore=this.score,this.score=0,this.sequence=[],this.iteration=0,this.isGameStart=!1,this.canClick=!1,this.isGameOver=!0},restartGame(){this.endGame(),this.startGame()},animate(){let t=0;const e=setInterval((()=>{this.canClick=!1,m.lightSections(this.sequence[t].el,this.difficultyOptions[this.selectedDifficulty].duration),this.isMute||m.playSound(this.sequence[t].num),++t,t>=this.sequence.length&&(clearInterval(e),this.canClick=!0)}),this.difficultyOptions[this.selectedDifficulty].duration+100)}}},O=b,g=(0,u.Z)(O,a,n,!1,null,null,null),w=g.exports;s.Z.config.productionTip=!1,s.Z.config.devtools=!0,new s.Z({render:function(t){return t(w)}}).$mount("#app")},656:function(t,e,i){"use strict";t.exports=i.p+"media/1.97a127c5.wav"},551:function(t,e,i){"use strict";t.exports=i.p+"media/2.9ba60992.wav"},43:function(t,e,i){"use strict";t.exports=i.p+"media/3.4f654bfc.wav"},583:function(t,e,i){"use strict";t.exports=i.p+"media/4.69999d1f.wav"}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,n){if(!s){var c=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],n=t[u][2];for(var r=!0,o=0;o<s.length;o++)(!1&n||c>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[o])}))?s.splice(o--,1):(r=!1,n<c&&(c=n));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,a,n]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/vue-simon-says/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,c=s[0],r=s[1],o=s[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(o)var u=o(i)}for(e&&e(s);l<c.length;l++)n=c[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},s=self["webpackChunkvue_simon_says"]=self["webpackChunkvue_simon_says"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(864)}));s=i.O(s)})();
//# sourceMappingURL=app.9482792b.js.map