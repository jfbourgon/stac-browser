(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog~item"],{"160f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"styled-description",class:{compact:t.compact},domProps:{innerHTML:t._s(t.markup(t.description))}})},a=[],s=n("e7d1"),r={name:"Description",props:{description:{type:String,default:""},compact:{type:Boolean,default:!1},allowHTML:{type:Boolean,default:!1}},methods:{markup:function(t){if("string"!==typeof t)return"";var e=new s["Parser"],n=new s["HtmlRenderer"]({safe:!this.allowHTML,smart:!0}),i=e.parse(t);return n.render(i)}}},o=r,c=(n("1719"),n("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},1719:function(t,e,n){"use strict";n("e7a4")},"191c":function(t,e,n){},"4e92":function(t,e,n){"use strict";n("191c")},5843:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var i,a=n("2b0e"),s=n("c637"),r="show",o=n("e863"),c=n("0056"),l=n("a723"),u=n("9b76"),d=n("906c"),f=n("6b77"),h=n("58f2"),b=n("d82f"),p=n("cf75"),v=n("90ef"),m=n("602d"),g=n("8c18"),O=n("b42e"),y=function(t){Object(d["D"])(t,"height",0),Object(d["z"])((function(){Object(d["v"])(t),Object(d["D"])(t,"height","".concat(t.scrollHeight,"px"))}))},j=function(t){Object(d["y"])(t,"height")},w=function(t){Object(d["D"])(t,"height","auto"),Object(d["D"])(t,"display","block"),Object(d["D"])(t,"height","".concat(Object(d["i"])(t).height,"px")),Object(d["v"])(t),Object(d["D"])(t,"height",0)},T=function(t){Object(d["y"])(t,"height")},x={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},k={enter:y,afterEnter:j,leave:w,afterLeave:T},_={appear:Object(p["c"])(l["g"],!1)},C=a["a"].extend({name:s["r"],functional:!0,props:_,render:function(t,e){var n=e.props,i=e.data,a=e.children;return t("transition",Object(O["a"])(i,{props:x,on:k},{props:n}),a)}});function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=Object(f["d"])(s["q"],"toggle"),L=Object(f["d"])(s["q"],"request-state"),A=Object(f["e"])(s["q"],"accordion"),B=Object(f["e"])(s["q"],"state"),D=Object(f["e"])(s["q"],"sync-state"),N=Object(h["a"])("visible",{type:l["g"],defaultValue:!1}),I=N.mixin,M=N.props,z=N.prop,H=N.event,R=Object(p["d"])(Object(b["l"])(S(S(S({},v["b"]),M),{},{accordion:Object(p["c"])(l["r"]),appear:Object(p["c"])(l["g"],!1),isNav:Object(p["c"])(l["g"],!1),tag:Object(p["c"])(l["r"],"div")})),s["q"]),F=a["a"].extend({name:s["q"],mixins:[v["a"],I,g["a"],m["a"]],props:R,data:function(){return{show:this[z],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(i={},P(i,z,(function(t){t!==this.show&&(this.show=t)})),P(i,"show",(function(t,e){t!==e&&this.emitState()})),i),created:function(){this.show=this[z]},mounted:function(){var t=this;this.show=this[z],this.listenOnRoot(E,this.handleToggleEvent),this.listenOnRoot(A,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(L,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(f["c"])(t,window,"resize",this.handleResize,c["R"]),Object(f["c"])(t,window,"orientationchange",this.handleResize,c["R"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(c["M"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(c["N"])},onLeave:function(){this.transitioning=!0,this.$emit(c["u"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(c["t"])},emitState:function(){var t=this.show,e=this.accordion,n=this.safeId();this.$emit(H,t),this.emitOnRoot(B,n,t),e&&t&&this.emitOnRoot(A,n,e)},emitSync:function(){this.emitOnRoot(D,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(d["o"])(t,r);Object(d["x"])(t,r);var n="block"===Object(d["k"])(t).display;return e&&Object(d["b"])(t,r),n},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(d["k"])(this.$el).display&&(!Object(d["u"])(e,".nav-link,.dropdown-item")&&!Object(d["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var n=this.accordion,i=this.show;if(n&&n===e){var a=t===this.safeId();(a&&!i||!a&&i)&&this.toggle()}},handleResize:function(){this.show="block"===Object(d["k"])(this.$el).display}},render:function(t){var e=this.appear,n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["e"],this.slotScope));return t(C,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},6190:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var i,a,s=n("2b0e"),r=n("c637"),o=n("0056"),c=n("a723"),l=n("9b76"),u=n("d82f"),d=n("cf75"),f=n("90ef"),h=n("8c18"),b=n("ce2a");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g="active",O=o["V"]+g,y=Object(d["d"])(Object(u["l"])(v(v({},f["b"]),{},(i={},m(i,g,Object(d["c"])(c["g"],!1)),m(i,"buttonId",Object(d["c"])(c["r"])),m(i,"disabled",Object(d["c"])(c["g"],!1)),m(i,"lazy",Object(d["c"])(c["g"],!1)),m(i,"noBody",Object(d["c"])(c["g"],!1)),m(i,"tag",Object(d["c"])(c["r"],"div")),m(i,"title",Object(d["c"])(c["r"])),m(i,"titleItemClass",Object(d["c"])(c["e"])),m(i,"titleLinkAttributes",Object(d["c"])(c["n"])),m(i,"titleLinkClass",Object(d["c"])(c["e"])),i))),r["ab"]),j=s["a"].extend({name:r["ab"],mixins:[f["a"],h["a"]],inject:{bvTabs:{default:function(){return{}}}},props:y,data:function(){return{localActive:this[g]&&!this.disabled}},computed:{_isTab:function(){return!0},tabClasses:function(){var t=this.localActive,e=this.disabled;return[{active:t,disabled:e,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(a={},m(a,g,(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(O,this.localActive))})),m(a,"disabled",(function(t,e){if(t!==e){var n=this.bvTabs.firstTab;t&&this.localActive&&n&&(this.localActive=!1,n())}})),m(a,"localActive",(function(t){this.$emit(O,t)})),a),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(l["x"])&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,n=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(b["a"],{props:{mode:"out-in",noFade:this.computedNoFade}},[n])}})},"6d40":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("d82f");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));Object(i["a"])(this,t.Defaults,this.constructor.Defaults,n,{type:e}),Object(i["d"])(this,{type:Object(i["k"])(),cancelable:Object(i["k"])(),nativeEvent:Object(i["k"])(),target:Object(i["k"])(),relatedTarget:Object(i["k"])(),vueTarget:Object(i["k"])(),componentId:Object(i["k"])()});var s=!1;this.preventDefault=function(){this.cancelable&&(s=!0)},Object(i["e"])(this,"defaultPrevented",{enumerable:!0,get:function(){return s}})}return r(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()},"81d3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"links mb-4"},[t.title?n("h2",[t._v(t._s(t.title))]):t._e(),n("ul",t._l(t.links,(function(e,i){return n("li",{key:i},[n("StacLink",{attrs:{data:e,fallbackTitle:function(){return t.fallbackTitle(e)}}})],1)})),0)])},a=[],s=(n("99af"),n("b701")),r=n("197d"),o=n("025e"),c={name:"Links",components:{StacLink:s["default"]},props:{title:{type:String,default:null},links:{type:Array,default:function(){return[]}}},methods:{fallbackTitle:function(t){var e=t.rel;e in r["links"].rel.mapping&&(e=r["links"].rel.mapping[e]);var n=o["a"].titleForHref(t.href);return"".concat(e," (").concat(n,")")}}},l=c,u=n("2877"),d=Object(u["a"])(l,i,a,!1,null,null,null);e["a"]=d.exports},"9a30":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.formattedData.length>0?n("section",{staticClass:"metadata"},[t.formattedData.length>0&&t.title?n("h2",[t._v(t._s(t.title))]):t._e(),t.formattedData.length>0?n("b-card-group",{class:"count-"+t.formattedData.length,attrs:{columns:""}},t._l(t.formattedData,(function(e){return n("b-card",{key:e.extension,staticClass:"metadata-card",attrs:{"no-body":""}},[n("b-card-title",[e.extension?n("div",{domProps:{innerHTML:t._s(e.label)}}):[t._v(t._s(t.commmonMetadataTitle))]],2),t._l(e.properties,(function(e,i){return n("b-row",{key:i},[n("b-col",{staticClass:"label",attrs:{md:"3",title:i},domProps:{innerHTML:t._s(e.label)}}),n("b-col",{staticClass:"value",attrs:{md:"9"},domProps:{innerHTML:t._s(e.formatted)}})],1)}))],2)})),1):t._e()],1):t._e()},a=[],s=(n("2ca0"),n("caad"),n("2532"),n("d3b7"),n("159b"),n("c740"),n("4e82"),n("6057")),r=n.n(s),o={name:"Metadata",props:{data:{type:Object,required:!0},type:{type:String,required:!0},context:{type:Object,default:null},ignoreFields:{type:Array,default:function(){return[]}},title:{type:String,default:"Metadata"},commmonMetadataTitle:{type:String,default:"General"}},computed:{formattedData:function(){var t=this,e=function(e){return!e.startsWith("_")&&!t.ignoreFields.includes(e)};switch(this.type){case"Asset":return r.a.formatAsset(this.data,this.context,e);case"Link":return r.a.formatLink(this.data,this.context,e);case"Item":return r.a.formatItemProperties(this.data,e);case"Collection":case"Catalog":var n=r.a.formatCollection(this.data,e),i=r.a.formatSummaries(this.data,e);return i.forEach((function(t){var e=n.findIndex((function(e){return t.extension===e.extension}));-1!==e?Object.assign(n[e].properties,t.properties):n.push(t)})),n.sort((function(t,e){return t.label.localeCompare(e.label)}));default:return[]}}}},c=o,l=(n("4e92"),n("2877")),u=Object(l["a"])(c,i,a,!1,null,null,null);e["a"]=u.exports},c6de:function(t,e){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({2350:function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"===typeof btoa){var s=i(a),r=a.sources.map((function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"}));return[n].concat(r).concat([s]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var s=this[a][0];"number"===typeof s&&(i[s]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"===typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},"499e":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var s=e[a],r=s[0],o=s[1],c=s[2],l=s[3],u={id:t+":"+a,css:o,media:c,sourceMap:l};i[r]?i[r].parts.push(u):n.push(i[r]={id:r,parts:[u]})}return n}n.r(e),n.d(e,"default",(function(){return b}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,l=!1,u=function(){},d=null,f="data-vue-ssr-id",h="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,n,a){l=n,d=a||{};var r=i(t,e);return p(r),function(e){for(var n=[],a=0;a<r.length;a++){var o=r[a],c=s[o.id];c.refs--,n.push(c)}e?(r=i(t,e),p(r)):r=[];for(a=0;a<n.length;a++){c=n[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}}function p(t){for(var e=0;e<t.length;e++){var n=t[e],i=s[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(m(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(h){var a=c++;i=o||(o=v()),e=O.bind(null,i,a,!1),n=O.bind(null,i,a,!0)}else i=v(),e=y.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function O(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var s=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function y(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute(f,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4d93":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".text-overflow-content[data-v-72c03b2a]{--nlines:3;--lineHeight:1.5;max-height:calc(var(--nlines)*var(--lineHeight));overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.text-overflow[data-v-72c03b2a]{position:relative}.no-overflow .text-overflow-content[data-v-72c03b2a]{max-height:100%;overflow:visible}.no-overflow .button-read-more[data-v-72c03b2a],.no-overflow .hide-text[data-v-72c03b2a]{display:none}.read-more-button[data-v-72c03b2a]{cursor:pointer;display:block;position:relative;border-top:1px solid #dbdbdb;height:.1em;margin:2em auto;width:95%;text-align:center}.read-more-button span[data-v-72c03b2a]{background:#fff;color:#b5b5b5;display:inline-block;font-size:.75em;padding:.4em .8em;-webkit-transform:translateY(-1.1em);transform:translateY(-1.1em);text-align:center}.hide-text[data-v-72c03b2a]{--nlines:6;--lineHeight:1.5;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(90%,#fff),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);width:100%;height:calc(var(--nlines)*var(--lineHeight));position:absolute;-webkit-transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)));transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)))}.hide-text[data-v-72c03b2a],.read-more-button[data-v-72c03b2a]{-webkit-transition:opacity .3s ease,margin .3s ease;transition:opacity .3s ease,margin .3s ease;opacity:1}.expanded .hide-text[data-v-72c03b2a],.expanded .read-more-button[data-v-72c03b2a]:not(.show-less){opacity:0;margin-top:0;margin-bottom:0;pointer-events:none}",""])},6099:function(t,e,n){var i=n("4d93");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("499e").default;a("e6468484",i,!0,{sourceMap:!1,shadowMode:!1})},"6b0e":function(t,e,n){"use strict";var i=n("6099"),a=n.n(i);a.a},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(i){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},fb15:function(t,e,n){"use strict";var i;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=i[1]));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-overflow",class:{expanded:t.expanded,"no-overflow":t.inMaxRange}},[n("div",{ref:"to",staticClass:"text-overflow-content"},[t._t("default")],2),t.noShadow?t._e():n("div",{ref:"ht",staticClass:"hide-text"}),t.noButton?t._e():n("div",{staticClass:"button-read-more",on:{click:t.toggle}},[t._t("more",[n("div",{staticClass:"read-more-button",class:{"show-less":!t.noLess}},[n("span",[t._v(t._s(t.expanded?t.textLess:t.text))])])],{open:t.expanded})],2)])},s=[],r={name:"vue-read-more-smooth",props:{lines:{type:Number,default:3},gLines:{type:Number,default:null},maxLines:{type:Number,default:null},text:{type:String,default:"Read more"},textLess:{type:String,default:"Read less"},noLess:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1},open:{type:Boolean,default:null},noButton:{type:Boolean,default:!1},noShadow:{type:Boolean,default:!1}},data(){return{readmore:!1,expanded:!1,inMaxRange:!1,localMaxLines:1}},watch:{open(t){t!==this.expanded&&this.toggle(!t)}},created(){this.lines&&!this.maxLines?this.localMaxLines=this.lines+1:this.localMaxLines=this.maxLines-1,!0===this.open&&(this.expanded=!0)},mounted(){const t=this.getLineHeight(this.$refs.to);this.lines&&this.$refs.to.style.setProperty("--nlines",this.lines);let e=2;this.gLines?e=this.gLines:this.lines>12?e=4:this.lines>6&&(e=3),this.$refs.ht&&this.$refs.ht.style.setProperty("--nlines",e),!0===this.open&&this.$refs.to.style.setProperty("max-height","100%"),setTimeout(()=>{this.readmore=this.$refs.to.offsetHeight<this.$refs.to.scrollHeight,this.$refs.to.scrollHeight<=this.localMaxLines*t&&(this.inMaxRange=!0),this.$refs.to.style.setProperty("--lineHeight",t+"px"),this.$refs.ht&&this.$refs.ht.style.setProperty("--lineHeight",t+"px"),!0===this.open&&this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px")})},methods:{toggle(t){const e="boolean"===typeof t?t:this.expanded;e?this.noLess||(this.$refs.to.style.removeProperty("max-height"),this.expanded=!1,this.$emit("update:open",!1)):(this.expanded=!0,this.$emit("update:open",!0),this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px"))},getLineHeight(t){let e=document.createElement(t.children[0].nodeName);const n=getComputedStyle(t.children[0]);e.setAttribute("style","position:absolute;left:-999em;margin:0px;padding:0px;font-family:"+n.fontFamily+";font-size:"+n.fontSize),e.innerHTML="test",e=document.body.appendChild(e);const i=e.clientHeight;return e.parentNode.removeChild(e),i}}},o=r;n("6b0e");function c(t,e,n,i,a,s,r,o){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var l=c(o,a,s,!1,null,"72c03b2a",null),u=l.exports;e["default"]=u}})["default"]},c740:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,s=n("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},e7a4:function(t,e,n){},e977:function(t,e,n){"use strict";var i=n("5530"),a=(n("caad"),n("2532"),n("d81d"),n("025e")),s=n("2f62");e["a"]={data:function(){return{shownAssetsOnMap:[],shownBandsOnMap:[],tab:null,selectedAsset:null,selectedAssetKey:null}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["thumbnails","hasAssets","assets"])),{},{shownAssets:function(){if(0===this.tab)return this.shownAssetsOnMap;if(1===this.tab||null===this.tab&&this.thumbnails.length>0){var t=[];for(var e in this.assets){var n=this.assets[e];this.thumbnails.includes(n)&&t.push(e)}return t}return[]}}),methods:{showAsset:function(t,e,n){n?this.tab=1:(this.tab=0,this.selectedAsset=t,this.selectedAssetKey=e),this.$refs.tabs&&a["a"].scrollTo(this.$refs.tabs.$el)},mapChanged:function(t){a["a"].isObject(t)?(a["a"].size(t.assets)>0&&(this.selectedAssetKey?this.shownAssetsOnMap=[this.selectedAssetKey]:this.shownAssetsOnMap=t.assets.map((function(t){return t.key}))),a["a"].size(t.bands)>0&&(this.shownBandsOnMap=t.bands)):(this.shownBandsOnMap=[],this.shownAssetsOnMap=[])}}}},f902:function(t,e,n){"use strict";n.d(e,"a",(function(){return G}));var i=n("2b0e"),a=n("2f79"),s=n("c637"),r=n("e863"),o=n("0056"),c=n("9bfa"),l=n("a723"),u=n("9b76"),d=n("2326"),f=n("6d40"),h=n("906c"),b=n("6b77"),p=n("6c06"),v=n("7b1e"),m=n("3c21"),g=n("a8c8"),O=n("58f2"),y=n("3a58"),j=n("d82f"),w=n("686b");function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t,e,n){if(t=t?t.$el||t:null,!Object(h["r"])(t))return null;if(Object(w["b"])("observeDom"))return null;var i=new h["a"]((function(t){for(var n=!1,i=0;i<t.length&&!n;i++){var a=t[i],s=a.type,r=a.target;("characterData"===s&&r.nodeType===Node.TEXT_NODE||"attributes"===s||"childList"===s&&(a.addedNodes.length>0||a.removedNodes.length>0))&&(n=!0)}n&&e()}));return i.observe(t,x({childList:!0,subtree:!0},n)),i},C=n("cf75"),$=n("8515"),S=n("90ef"),P=n("8c18"),E=n("aa59"),L=n("b42e");function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B,D=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},N=Object(C["d"])({align:Object(C["c"])(l["r"]),cardHeader:Object(C["c"])(l["g"],!1),fill:Object(C["c"])(l["g"],!1),justified:Object(C["c"])(l["g"],!1),pills:Object(C["c"])(l["g"],!1),small:Object(C["c"])(l["g"],!1),tabs:Object(C["c"])(l["g"],!1),tag:Object(C["c"])(l["r"],"ul"),vertical:Object(C["c"])(l["g"],!1)},s["S"]),I=i["a"].extend({name:s["S"],functional:!0,props:N,render:function(t,e){var n,i=e.props,a=e.data,s=e.children,r=i.tabs,o=i.pills,c=i.vertical,l=i.align,u=i.cardHeader;return t(i.tag,Object(L["a"])(a,{staticClass:"nav",class:(n={"nav-tabs":r,"nav-pills":o&&!r,"card-header-tabs":!c&&u&&r,"card-header-pills":!c&&u&&o&&!r,"flex-column":c,"nav-fill":!c&&i.fill,"nav-justified":!c&&i.justified},A(n,D(l),!c&&l),A(n,"small",i.small),n)}),s)}});function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){H(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=Object(O["a"])("value",{type:l["k"]}),F=R.mixin,U=R.props,q=R.prop,K=R.event,W=function(t){return!t.disabled},V=i["a"].extend({name:s["gb"],inject:{bvTabs:{default:function(){return{}}}},props:{controls:Object(C["c"])(l["r"]),id:Object(C["c"])(l["r"]),noKeyNav:Object(C["c"])(l["g"],!1),posInSet:Object(C["c"])(l["k"]),setSize:Object(C["c"])(l["k"]),tab:Object(C["c"])(),tabIndex:Object(C["c"])(l["k"])},methods:{focus:function(){Object(h["d"])(this.$refs.link)},handleEvent:function(t){if(!this.tab.disabled){var e=t.type,n=t.keyCode,i=t.shiftKey;"click"===e||"keydown"===e&&n===c["j"]?(Object(b["f"])(t),this.$emit(o["e"],t)):"keydown"!==e||this.noKeyNav||(-1!==[c["k"],c["h"],c["g"]].indexOf(n)?(Object(b["f"])(t),i||n===c["g"]?this.$emit(o["o"],t):this.$emit(o["B"],t)):-1!==[c["c"],c["i"],c["d"]].indexOf(n)&&(Object(b["f"])(t),i||n===c["d"]?this.$emit(o["w"],t):this.$emit(o["z"],t)))}}},render:function(t){var e=this.id,n=this.tabIndex,i=this.setSize,a=this.posInSet,s=this.controls,r=this.handleEvent,o=this.tab,c=o.title,l=o.localActive,d=o.disabled,f=o.titleItemClass,h=o.titleLinkClass,b=o.titleLinkAttributes,p=t(E["a"],{staticClass:"nav-link",class:[{active:l&&!d,disabled:d},h,l?this.bvTabs.activeNavItemClass:null],props:{disabled:d},attrs:z(z({},b),{},{id:e,role:"tab",tabindex:n,"aria-selected":l&&!d?"true":"false","aria-setsize":i,"aria-posinset":a,"aria-controls":s}),on:{click:r,keydown:r},ref:"link"},[this.tab.normalizeSlot(u["x"])||c]);return t("li",{staticClass:"nav-item",class:[f],attrs:{role:"presentation"}},[p])}}),J=Object(j["i"])(N,["tabs","isNavBar","cardHeader"]),Y=Object(C["d"])(Object(j["l"])(z(z(z(z({},S["b"]),U),J),{},{activeNavItemClass:Object(C["c"])(l["e"]),activeTabClass:Object(C["c"])(l["e"]),card:Object(C["c"])(l["g"],!1),contentClass:Object(C["c"])(l["e"]),end:Object(C["c"])(l["g"],!1),lazy:Object(C["c"])(l["g"],!1),navClass:Object(C["c"])(l["e"]),navWrapperClass:Object(C["c"])(l["e"]),noFade:Object(C["c"])(l["g"],!1),noKeyNav:Object(C["c"])(l["g"],!1),noNavStyle:Object(C["c"])(l["g"],!1),tag:Object(C["c"])(l["r"],"div")})),s["fb"]),G=i["a"].extend({name:s["fb"],mixins:[S["a"],F,P["a"]],provide:function(){return{bvTabs:this}},props:Y,data:function(){return{currentTab:Object(y["b"])(this[q],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(B={},H(B,q,(function(t,e){if(t!==e){t=Object(y["b"])(t,-1),e=Object(y["b"])(e,0);var n=this.tabs[t];n&&!n.disabled?this.activateTab(n):t<e?this.previousTab():this.nextTab()}})),H(B,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(n,i){i!==t||n.disabled?n.localActive=!1:(n.localActive=!0,e=i)})),this.$emit(K,e)})),H(B,"tabs",(function(t,e){var n=this;Object(m["a"])(t.map((function(t){return t[a["a"]]})),e.map((function(t){return t[a["a"]]})))||this.$nextTick((function(){n.$emit(o["d"],t.slice(),e.slice())}))})),H(B,"registeredTabs",(function(){this.updateTabs()})),B),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){Object(d["a"])(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var n=function(){t.$nextTick((function(){Object(h["z"])((function(){t.updateTabs()}))}))};this.$_observer=_(this.$refs.content,n,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(r["g"]&&t.length>0){var n=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Object(h["B"])(n,this.$el).map((function(t){return t.id})).filter(p["a"])}return Object($["a"])(t,(function(t,n){return e.indexOf(t.safeId())-e.indexOf(n.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var n=this.currentTab;n>=t.length?e=t.indexOf(t.slice().reverse().find(W)):t[n]&&!t[n].disabled&&(e=n)}e<0&&(e=t.indexOf(t.find(W))),t.forEach((function(t,n){t.localActive=n===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,n=this.tabs,i=!1;if(t){var a=n.indexOf(t);if(a!==e&&a>-1&&!t.disabled){var s=new f["a"](o["a"],{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(s.type,a,e,s),s.defaultPrevented||(this.currentTab=a,i=!0)}}return i||this[q]===e||this.$emit(K,e),i},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(W))},focusButton:function(t){var e=this;this.$nextTick((function(){Object(h["d"])(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Object(v["d"])(e)&&t&&t.$emit&&!t.disabled&&t.$emit(o["e"],e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(W);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Object(g["a"])(this.currentTab,0),n=this.tabs.slice(0,e).reverse().find(W);this.activateTab(n)&&t&&(this.focusButton(n),this.emitTabClick(n,t))},nextTab:function(t){var e=Object(g["a"])(this.currentTab,-1),n=this.tabs.slice(e+1).find(W);this.activateTab(n)&&t&&(this.focusButton(n),this.emitTabClick(n,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(W);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,n=this.align,i=this.card,s=this.end,r=this.fill,c=this.firstTab,l=this.justified,d=this.lastTab,f=this.nextTab,h=this.noKeyNav,b=this.noNavStyle,p=this.pills,v=this.previousTab,m=this.small,g=this.tabs,O=this.vertical,y=g.find((function(t){return t.localActive&&!t.disabled})),j=g.find((function(t){return!t.disabled})),w=g.map((function(n,i){var s,r=n.safeId,l=null;return h||(l=-1,(n===y||!y&&n===j)&&(l=null)),t(V,{props:{controls:r?r():null,id:n.controlledBy||(r?r("_BV_tab_button_"):null),noKeyNav:h,posInSet:i+1,setSize:g.length,tab:n,tabIndex:l},on:(s={},H(s,o["e"],(function(t){e.clickTab(n,t)})),H(s,o["o"],c),H(s,o["B"],v),H(s,o["z"],f),H(s,o["w"],d),s),key:n[a["a"]]||i,ref:"buttons",refInFor:!0})})),T=t(I,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:r,justified:l,align:n,tabs:!b&&!p,pills:!b&&p,vertical:O,small:m,cardHeader:i&&!O},ref:"nav"},[this.normalizeSlot(u["v"])||t(),w,this.normalizeSlot(u["u"])||t()]);T=t("div",{class:[{"card-header":i&&!O&&!s,"card-footer":i&&!O&&s,"col-auto":O},this.navWrapperClass],key:"bv-tabs-nav"},[T]);var x=this.normalizeSlot()||[],k=t();0===x.length&&(k=t("div",{class:["tab-pane","active",{"card-body":i}],key:"bv-empty-tab"},this.normalizeSlot(u["h"])));var _=t("div",{staticClass:"tab-content",class:[{col:O},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[x,k]);return t(this.tag,{staticClass:"tabs",class:{row:O,"no-gutters":O&&i},attrs:{id:this.safeId()}},[s?_:t(),T,s?t():_])}})}}]);
//# sourceMappingURL=catalog~item.f08b0dff.js.map