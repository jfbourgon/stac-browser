(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog","chunk-4134b42c"],{"188f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[t._v(" Items "),t.api?t._e():[t._v("("+t._s(t.items.length)+")")],t.api?t._e():a("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),t.api?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2 ml-3",attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[a("ItemFilter",{attrs:{stac:t.stac,sort:t.canSort,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return a("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):a("p",[t._v("Sorry, no items found.")]),t.api?a("Pagination",{attrs:{pagination:t.pagination,placement:"bottom"},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],n=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("a9e3"),a("4e82"),a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!this.data},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0?a("b-card-text",t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),1):t._e()],1)],1)}),o=[],l=(a("7db0"),a("4de4"),a("d81d"),a("07ac"),a("caad"),a("2532"),a("2f62")),c=a("b701"),u=a("2a32"),d={name:"Item",components:{StacLink:c["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:function(){return[]}}},data:function(){return{showThumbnail:!1}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(l["c"])(["crossOriginMedia"])),Object(l["b"])(["getStac"])),{},{cardProps:function(){var t=this,e={};return Array.isArray(this.selected)&&this.selected.find((function(e){return t.data.equals(e)}))&&(e["border-variant"]="danger"),e},data:function(){return this.item instanceof u["a"]?this.item:this.getStac(this.item.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent:function(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats:function(){return this.data?Object.values(this.data.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type})).map((function(t){return t.type})).filter((function(t,e,a){return a.indexOf(t)===e})):[]}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.item instanceof u["a"]||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},m=d,p=(a("83d2"),a("2877")),h=Object(p["a"])(m,r,o,!1,null,null,null),b=h.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},g=[],v={name:"Pagination",props:{pagination:{type:Object,default:function(){return{}}},placement:{type:String}},computed:{classes:function(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate:function(t){this.$emit("paginate",t,this.placement)}}},_=v,y=Object(p["a"])(_,f,g,!1,null,null,null),C=y.exports,k=a("5843"),w=a("7386"),x=a("025e"),I=a("d722"),O={name:"Items",components:{BCollapse:k["a"],BIconSearch:w["w"],Item:b,ItemFilter:function(){return Promise.all([a.e("chunk-45b1a3e6"),a.e("chunk-02bd5aca")]).then(a.bind(null,"5f67"))},Pagination:C,SortButtons:function(){return a.e("chunk-2d0d7a16").then(a.bind(null,"7843"))}},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:function(){return{}}},pagination:{type:Object,default:function(){return{}}},chunkSize:{type:Number,default:90},selected:{type:Array,default:function(){return[]}}},data:function(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["supportsConformance"])),{},{hasMore:function(){return this.items.length>this.shownItems},chunkedItems:function(){var t=this.items;return 0!==this.sort&&(t=t.slice(0).sort((function(t,e){return u["a"].getDisplayTitle(t).localeCompare(u["a"].getDisplayTitle(e))})),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},canSort:function(){return this.supportsConformance(I["a"])}}),watch:{filters:{deep:!0,handler:function(t){this.$emit("filterItems",t)}}},methods:{showMore:function(){this.shownItems+=this.chunkSize},paginate:function(t,e){"bottom"===e&&this.$refs.topPagination&&x["a"].scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},M=O,$=Object(p["a"])(M,s,i,!1,null,null,null);e["a"]=$.exports},"1c02":function(t,e,a){"use strict";a("c737")},"247d":function(t,e,a){"use strict";a.r(e);var s=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{class:(t={cc:!0},t[e.data.type.toLowerCase()]=!0,t.mixed=e.hasCatalogs&&e.hasItems,t)},[s("b-row",[s("b-col",{staticClass:"meta"},[s("section",{staticClass:"intro"},[s("h2",[e._v("Description")]),e.data.deprecated?s("DeprecationNotice",{attrs:{data:e.data}}):e._e(),e.data["anon:warning"]?s("AnonymizedNotice",{attrs:{warning:e.data["anon:warning"]}}):e._e(),e.data.description?s("ReadMore",{attrs:{lines:10}},[s("Description",{attrs:{description:e.data.description}})],1):e._e(),Array.isArray(e.data.keywords)&&e.data.keywords.length>0?s("Keywords",{attrs:{keywords:e.data.keywords}}):e._e(),e.isCollection?s("section",{staticClass:"metadata mb-4"},[e.licenses?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("License")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.licenses)}})],1):e._e(),e.temporalExtents?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("Temporal Extents")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.temporalExtents)}})],1):e._e()],1):e._e()],1),e.isCollection||e.thumbnails.length>0?s("section",{staticClass:"mb-4"},[s("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[s("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.isCollection?s("b-tab",{attrs:{title:"Map","no-body":""}},[s("Map",{attrs:{stac:e.data,stacLayerData:e.selectedAsset},on:{mapClicked:e.mapClicked,mapChanged:e.mapChanged}})],1):e._e(),e.thumbnails.length>0?s("b-tab",{attrs:{title:"Preview","no-body":""}},[s("Thumbnails",{attrs:{thumbnails:e.thumbnails}})],1):e._e()],1)],1)],1):e._e(),e.hasAssets?s("Assets",{attrs:{assets:e.assets,context:e.data,shown:e.shownAssets},on:{showAsset:e.showAsset}}):e._e(),e.hasItemAssets&&!e.hasItems?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e(),e.hasProviders?s("Providers",{attrs:{providers:e.data.providers}}):e._e(),s("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:e.data.type,data:e.data,ignoreFields:e.ignoredMetadataFields}}),e.additionalLinks.length>0?s("Links",{attrs:{title:"Additional resources",links:e.additionalLinks}}):e._e()],1),e.hasCatalogs?s("b-col",{staticClass:"catalogs-container"},[s("Catalogs",{attrs:{catalogs:e.catalogs,hasMore:e.hasMoreCollections},on:{loadMore:e.loadMoreCollections}})],1):e._e(),e.hasItems?s("b-col",{staticClass:"items-container"},[s("Items",{attrs:{stac:e.data,items:e.items,api:e.isApi,apiFilters:e.apiItemsFilter,pagination:e.itemPages},on:{paginate:e.paginateItems,filterItems:e.filterItems}}),e.hasItemAssets?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e()],1):e._e()],1)],1)},i=[],n=a("1da1"),r=a("5530"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("fb6a"),a("2f62")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"catalogs mb-4"},[a("h2",[t._v(" Catalogs "),t.hasMore?t._e():[t._v("("+t._s(t.catalogs.length)+")")],a("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():a("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),a(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.sortedCatalogs,(function(t){return a("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},c=[],u=(a("4e82"),a("556b")),d=a("2a32"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{attrs:{title:"Sort",size:"sm"}},[a("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[a("b-icon-bricks"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("Tiles")])],1),a("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[a("b-icon-list-task"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},p=[],h=a("7386"),b={id:"SortButtons",components:{BIconBricks:h["f"],BIconListTask:h["v"]},props:{value:{type:String,default:"cards"}},methods:{toggle:function(t){this.value!==t&&this.$emit("input",t)}}},f=b,g=a("2877"),v=Object(g["a"])(f,m,p,!1,null,null,null),_=v.exports,y={components:{ViewButtons:_},computed:{cardsComponent:function(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps:function(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get:function(){return this.$store.state.cardViewMode},set:function(t){this.$store.commit("config",{cardViewMode:t})}}}},C={name:"Catalogs",mixins:[y],components:{Catalog:u["default"],SortButtons:function(){return a.e("chunk-2d0d7a16").then(a.bind(null,"7843"))}},props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data:function(){return{sort:0}},computed:{sortedCatalogs:function(){var t=this.catalogs;return this.hasMore||0===this.sort||(t=t.slice(0).sort((function(t,e){return d["a"].getDisplayTitle(t).localeCompare(d["a"].getDisplayTitle(e))})),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&this.$emit("loadMore")}}},k=C,w=Object(g["a"])(k,l,c,!1,null,null,null),x=w.exports,I=a("160f"),O=a("188f"),M=a("81d3"),$=a("9a30"),A=a("c6de"),j=a.n(A),L=a("e977"),S=a("6057"),T=a("f902"),P=a("6190"),F=a("025e"),B={name:"Catalog",mixins:[L["a"]],components:{AnonymizedNotice:function(){return a.e("chunk-2d0b2cd9").then(a.bind(null,"2654"))},Assets:function(){return a.e("chunk-23da0372").then(a.bind(null,"4d1d"))},BTabs:T["a"],BTab:P["a"],Catalogs:x,DeprecationNotice:function(){return a.e("chunk-6a274042").then(a.bind(null,"46fb"))},Description:I["a"],Items:O["a"],Keywords:function(){return a.e("chunk-2d0dda00").then(a.bind(null,"81d5"))},Links:M["a"],Map:function(){return a.e("chunk-6a4a1c02").then(a.bind(null,"a0be"))},Metadata:$["a"],Providers:function(){return a.e("chunk-5a311a50").then(a.bind(null,"647b"))},ReadMore:j.a,Thumbnails:function(){return a.e("chunk-6a44677d").then(a.bind(null,"a100"))}},data:function(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["c"])(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"])),Object(o["b"])(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"])),{},{licenses:function(){return this.isCollection&&this.data.license?S["Formatters"].formatLicense(this.data.license,null,null,this.data):null},hasProviders:function(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents:function(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){var t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),S["Formatters"].formatTemporalExtents(t)}return null},hasItemAssets:function(){var t;return F["a"].size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages:function(){var t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=F["a"].addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi:function(){return Boolean(this.apiItemsLink)},hasItems:function(){return this.items.length>0||this.isApi},hasCatalogs:function(){return this.catalogs.length>0}}),methods:{loadMoreCollections:function(){this.$store.dispatch("loadNextApiCollections",{show:!0})},paginateItems:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:t,show:!0});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading the list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},filterItems:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:e.apiItemsLink,show:!0,filters:t});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading a filtered list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},mapClicked:function(t){console.log(t)}}},E=B,N=(a("1c02"),Object(g["a"])(E,s,i,!1,null,null,null));e["default"]=N.exports},"556b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!this.data},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&t.data.description?a("b-card-text",{staticClass:"intro"},[t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")]):t._e(),t.temporalExtent?a("b-card-text",{staticClass:"datetime"},[t._v(t._s(t._f("shortTemporalExtent")(t.temporalExtent)))]):t._e()],1)],1)},i=[],n=a("5530"),r=a("2f62"),o=a("b701"),l=a("2a32"),c=a("b5c1"),u=a.n(c),d=a("6057"),m={name:"Catalog",components:{StacLink:o["default"]},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data:function(){return{thumbnailVisible:!1}},filters:{stripCommonmark:function(t){return u()(t)},shortTemporalExtent:function(t){return d["Formatters"].formatTemporalExtent(t,!0)}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["c"])(["crossOriginMedia","cardViewMode"])),Object(r["b"])(["getStac"])),{},{isList:function(){return"list"===this.cardViewMode},data:function(){return this.catalog instanceof l["a"]?this.catalog:this.getStac(this.catalog.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent:function(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){var s=this.data.extent.temporal.interval[0];if(s[0]||s[1])return this.data.extent.temporal.interval[0]}return null}}),methods:{load:function(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof l["a"]||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},p=m,h=(a("b18e"),a("2877")),b=Object(h["a"])(p,s,i,!1,null,null,null);e["default"]=b.exports},"83d2":function(t,e,a){"use strict";a("96a9")},8665:function(t,e,a){},"96a9":function(t,e,a){},b18e:function(t,e,a){"use strict";a("8665")},b5c1:function(t,e){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(s){return console.error(s),t}return a}},c737:function(t,e,a){},d722:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s="https://api.stacspec.org/v1.*/item-search#sort"}}]);
//# sourceMappingURL=catalog.8b95638b.js.map