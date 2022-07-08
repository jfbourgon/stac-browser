"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[913,731],{1351:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.thumbnail&&t.showThumbnail?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),e("b-card-text",[e("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?e("b-card-text",[t._l(t.fileFormats,(function(i){return e("b-badge",{key:i,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(i)))])})),t.isDeprecated?e("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},a=[],n=(i(6699),i(629)),r=i(3636),o=i(9898),l={name:"Item",components:{StacLink:r["default"]},props:{item:{type:Object,required:!0}},data(){return{showThumbnail:!1}},computed:{...(0,n.rn)(["crossOriginMedia"]),...(0,n.Se)(["getStac"]),data(){return this.item instanceof o.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,i)=>i.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof o.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){t&&(this.showThumbnail=!0),this.item instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},c=l,h=i(1001),p=(0,h.Z)(c,s,a,!1,null,null,null),d=p.exports},1724:function(t,e,i){i.d(e,{Z:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"items mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():e("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():e("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?e("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[e("b-icon-search"),t._v(" Filter ")],1):t._e(),e("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?e("ItemFilter",t._b({attrs:{stac:t.stac,value:t.filters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),e("section",{staticClass:"list"},[t.loading?e("Loading",{attrs:{fill:"",top:""}}):t._e(),t.chunkedItems.length>0?e("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return e("Item",{key:t.href,attrs:{item:t}})})),1):e("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v("No items found for the given filters.")]:[t._v("No items available for this collection.")]],2)],1),t.showPagination?e("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},a=[],n=i(1351),r=i(7024),o=function(){var t=this,e=t._self._c;return e("b-button-group",{class:t.classes},[e("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),e("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),e("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},l=[],c={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},h=c,p=i(1001),d=(0,p.Z)(h,o,l,!1,null,null,null),m=d.exports,u=i(1688),f=i(8019),g=i(8661),v=i(9898),b=i(2510),w={name:"Items",components:{BCollapse:u.k,BIconSearch:f.Lln,Item:n["default"],ItemFilter:()=>Promise.all([i.e(353),i.e(449),i.e(981),i.e(529),i.e(731)]).then(i.bind(i,3529)),Loading:r.Z,Pagination:m,SortButtons:()=>i.e(313).then(i.bind(i,2313))},mixins:[(0,b.ZP)(!0)],props:{items:{type:Array,required:!0},loading:{type:Boolean,default:!1},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===g.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>v.Z.getDisplayTitle(t).localeCompare(v.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&g.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},y=w,I=(0,p.Z)(y,s,a,!1,null,"169072a6",null),_=I.exports},2019:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search d-flex flex-column"},[t.root?t.supportsSearch?e("b-row",[e("b-col",{staticClass:"left"},[e("ItemFilter",t._b({attrs:{stac:t.root,title:"",value:t.filters},on:{input:t.setFilters}},"ItemFilter",t.filterComponentProps,!1))],1),e("b-col",{staticClass:"right"},[null===t.loading?e("b-alert",{attrs:{variant:"info",show:""}},[t._v("Please modify the search criteria.")]):!0===t.loading?e("Loading"):0===t.apiItems.length?e("b-alert",{attrs:{variant:"warning",show:""}},[t._v("No items found for the given filters.")]):[e("div",{attrs:{id:"search-map"}},[e("Map",{attrs:{stac:t.root,stacLayerData:t.itemCollection,scrollWheelZoom:""},on:{mapClicked:t.mapClicked,viewChanged:t.resetSelectedItem}})],1),e("Items",{attrs:{stac:t.root,items:t.apiItems,api:!0,allowFilter:!1,pagination:t.itemPages,loading:t.apiItemsLoading},on:{paginate:t.paginateItems}})]],2)],1):e("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Item Search is not supported by the API.")]):e("Loading",{attrs:{stretch:""}}),t.selectedItem?e("b-popover",{key:t.selectedItem.key,attrs:{placement:"left",triggers:"manual",show:null!==t.selectedItem,target:t.selectedItem.target,boundary:"search-map",container:"search-map"}},[e("section",{staticClass:"items"},[e("b-card-group",{staticClass:"count-1",attrs:{columns:""}},[e("Item",{attrs:{item:t.selectedItem.item}})],1)],1),e("div",{staticClass:"text-center"},[e("b-button",{attrs:{target:"_blank",variant:"danger"},on:{click:t.resetSelectedItem}},[t._v(" Close ")])],1)]):t._e()],1)},a=[],n=i(1724),r=i(629),o=i(8661),l=i(2510),c=i(3529),h=i(7024),p=i(4505);const d="Search";var m={name:"Search",components:{BPopover:p.x,ItemFilter:c["default"],Item:()=>Promise.resolve().then(i.bind(i,1351)),Items:n.Z,Loading:h.Z,Map:()=>i.e(46).then(i.bind(i,2046))},mixins:[(0,l.ZP)(!1)],props:{loadRoot:{type:String,default:null}},data(){return{loading:null,filters:{},selectedItem:null}},computed:{...(0,r.rn)(["apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter","apiItemsLoading"]),...(0,r.Se)(["root","searchLink","supportsSearch","fromBrowserPath"]),itemCollection(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=o.ZP.addFiltersToLink(this.apiItemsLink,this.apiItemsFilter)),t}},watch:{supportsSearch:{immediate:!0,handler(){this.supportsSearch&&this.showPage()}}},created(){if(this.loadRoot&&!this.root){let t=this.fromBrowserPath(this.loadRoot);this.$store.commit("config",{catalogUrl:t})}},methods:{async setFilters(t,e=!1){this.filters=t,e?(this.$store.commit("resetApiItems"),this.loading=null):await this.filterItems(t)},showPage(){this.$store.commit("showPage",{title:d}),this.$store.commit("setApiItemsLink",this.searchLink)},async paginateItems(t){try{let e=await this.$store.dispatch("loadApiItems",{link:t,show:!0});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading the list of STAC Items failed.")}},async filterItems(t){this.loading=!0;try{let e=await this.$store.dispatch("loadApiItems",{link:this.searchLink,show:!0,filters:t});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading a filtered list of STAC Items failed.")}finally{this.loading=!1}},handleResponse(t){t&&this.$store.commit("showPage",{title:d,url:t.config.url})},resetSelectedItem(){this.selectedItem&&this.selectedItem.oldStyle&&this.selectedItem.layer.setStyle(this.selectedItem.oldStyle),this.selectedItem=null},mapClicked(t,e){this.resetSelectedItem(),"Feature"===t.type&&(this.selectedItem={item:t.data,target:e.originalEvent.srcElement,layer:e.layer,key:e.layer._leaflet_id},e.layer&&(this.selectedItem.oldStyle=Object.assign({},e.layer.options),e.layer.setStyle(Object.assign({},e.layer.options,{color:"#dc3545"}))))}}},u=m,f=i(1001),g=(0,f.Z)(u,s,a,!1,null,"33f3b186",null),v=g.exports},1688:function(t,e,i){i.d(e,{k:function(){return M}});var s,a=i(144),n=i(4689),r="show",o=i(3935),l=i(3294),c=i(2299),h=i(494),p=i(1440),d=i(8415),m=i(4602),u=i(7040),f=i(451),g=i(3727),v=i(8596),b=i(8280),w=i(9558),y=function(t){(0,p.A_)(t,"height",0),(0,p.bz)((function(){(0,p.nq)(t),(0,p.A_)(t,"height","".concat(t.scrollHeight,"px"))}))},I=function(t){(0,p.jo)(t,"height")},_=function(t){(0,p.A_)(t,"height","auto"),(0,p.A_)(t,"display","block"),(0,p.A_)(t,"height","".concat((0,p.Zt)(t).height,"px")),(0,p.nq)(t),(0,p.A_)(t,"height",0)},k=function(t){(0,p.jo)(t,"height")},S={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},C={enter:y,afterEnter:I,leave:_,afterLeave:k},O={appear:(0,f.pi)(c.U5,!1)},P=a.ZP.extend({name:n.gt,functional:!0,props:O,render:function(t,e){var i=e.props,s=e.data,a=e.children;return t("transition",(0,w.b)(s,{props:S,on:C},{props:i}),a)}});function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){j(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var $=(0,d.gA)(n.gr,"toggle"),A=(0,d.gA)(n.gr,"request-state"),L=(0,d.J3)(n.gr,"accordion"),E=(0,d.J3)(n.gr,"state"),Z=(0,d.J3)(n.gr,"sync-state"),T=(0,m.l)("visible",{type:c.U5,defaultValue:!1}),q=T.mixin,N=T.props,D=T.prop,R=T.event,B=(0,f.y2)((0,u.GE)(F(F(F({},g.N),N),{},{accordion:(0,f.pi)(c.N0),appear:(0,f.pi)(c.U5,!1),isNav:(0,f.pi)(c.U5,!1),tag:(0,f.pi)(c.N0,"div")})),n.gr),M=a.ZP.extend({name:n.gr,mixins:[g.t,q,b.Z,v.E],props:B,data:function(){return{show:this[D],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(s={},j(s,D,(function(t){t!==this.show&&(this.show=t)})),j(s,"show",(function(t,e){t!==e&&this.emitState()})),s),created:function(){this.show=this[D]},mounted:function(){var t=this;this.show=this[D],this.listenOnRoot($,this.handleToggleEvent),this.listenOnRoot(L,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(A,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o.Qg&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){(0,d.tU)(t,window,"resize",this.handleResize,l.IJ),(0,d.tU)(t,window,"orientationchange",this.handleResize,l.IJ)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(l.l0)},onAfterEnter:function(){this.transitioning=!1,this.$emit(l.AS)},onLeave:function(){this.transitioning=!0,this.$emit(l.yM)},onAfterLeave:function(){this.transitioning=!1,this.$emit(l.v6)},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(R,t),this.emitOnRoot(E,i,t),e&&t&&this.emitOnRoot(L,i,e)},emitSync:function(){this.emitOnRoot(Z,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=(0,p.pv)(t,r);(0,p.IV)(t,r);var i="block"===(0,p.yD)(t).display;return e&&(0,p.cn)(t,r),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===(0,p.yD)(this.$el).display&&(!(0,p.wB)(e,".nav-link,.dropdown-item")&&!(0,p.oq)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var i=this.accordion,s=this.show;if(i&&i===e){var a=t===this.safeId();(a&&!s||!a&&s)&&this.toggle()}},handleResize:function(){this.show="block"===(0,p.yD)(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(h.Pq,this.slotScope));return t(P,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},2510:function(t,e,i){i(6699);var s=i(629);const a="http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core",n="http://www.opengis.net/spec/cql2/1.*/conf/cql2-text",r="http://www.opengis.net/spec/cql2/1.*/conf/cql2-json",o="https://api.stacspec.org/v1.*/item-search#sort",l="https://api.stacspec.org/v1.*/ogcapi-features#sort",c="https://api.stacspec.org/v1.*/item-search#filter*",h="http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter";e["ZP"]=t=>({computed:{...(0,s.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(a)},canFilterCql(){return this.supportsConformance(t?h:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(n)&&t.push("Text"),this.supportsConformance(r)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})}}]);
//# sourceMappingURL=913.dfba9557.js.map