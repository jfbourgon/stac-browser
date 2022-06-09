(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[701,463],{463:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!t.data,deprecated:t.data&&t.data.deprecated},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?a("b-card-text",{staticClass:"intro"},[t.data.deprecated?a("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?a("b-card-text",{staticClass:"datetime"},[a("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],n=a(4367),r=a(629),o=a(8217),l=a(7387),c=a(6525),d=a.n(c),u=a(5834),p={name:"Catalog",components:{StacLink:o["default"]},filters:{stripCommonmark:function(t){return d()(t)}},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data:function(){return{thumbnailVisible:!1}},computed:(0,n.Z)((0,n.Z)((0,n.Z)({},(0,r.rn)(["crossOriginMedia","cardViewMode"])),(0,r.Se)(["getStac"])),{},{isList:function(){return"list"===this.cardViewMode},data:function(){return this.catalog instanceof l.Z?this.catalog:this.getStac(this.catalog.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent:function(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){var s=this.data.extent.temporal.interval[0];if(Array.isArray(s)&&("string"===typeof s[0]||"string"===typeof s[1]))return u.Formatters.formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}}),methods:{load:function(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof l.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},m=p,h=a(1001),f=(0,h.Z)(m,s,i,!1,null,null,null),g=f.exports},1059:function(t,e,a){"use strict";a.d(e,{Z:function(){return S}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[t._v(" Items "),t.api?t._e():[t._v("("+t._s(t.items.length)+")")],t.api?t._e():a("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),t.api?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2 ml-3",attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[a("ItemFilter",{attrs:{stac:t.stac,sort:t.canSort,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return a("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):a("p",[t._v("Sorry, no items found.")]),t.api?a("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],n=a(4367),r=(a(1539),a(8783),a(3948),a(9653),a(2707),a(7042),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?a("b-card-text",[t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),t.isDeprecated?a("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)}),o=[],l=(a(9826),a(7327),a(1249),a(2479),a(6699),a(2023),a(629)),c=a(8217),d=a(7387),u={name:"Item",components:{StacLink:c["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:function(){return[]}}},data:function(){return{showThumbnail:!1}},computed:(0,n.Z)((0,n.Z)((0,n.Z)({},(0,l.rn)(["crossOriginMedia"])),(0,l.Se)(["getStac"])),{},{cardProps:function(){var t=this,e={};return Array.isArray(this.selected)&&this.selected.find((function(e){return t.data.equals(e)}))&&(e["border-variant"]="danger"),e},data:function(){return this.item instanceof d.Z?this.item:this.getStac(this.item.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent:function(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats:function(){return this.data?Object.values(this.data.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type})).map((function(t){return t.type})).filter((function(t,e,a){return a.indexOf(t)===e})):[]},isDeprecated:function(){return this.data instanceof d.Z&&Boolean(this.data.properties.deprecated)}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.item instanceof d.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=u,m=a(1001),h=(0,m.Z)(p,r,o,!1,null,null,null),f=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},b=[],v={name:"Pagination",props:{pagination:{type:Object,default:function(){return{}}},placement:{type:String,default:"bottom"}},computed:{classes:function(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate:function(t){this.$emit("paginate",t,this.placement)}}},_=v,y=(0,m.Z)(_,g,b,!1,null,null,null),C=y.exports,w=a(1688),k=a(2466),x=a(7637),I=a(9245),M={name:"Items",components:{BCollapse:w.k,BIconSearch:k.Lln,Item:f,ItemFilter:function(){return Promise.all([a.e(150),a.e(489),a.e(282)]).then(a.bind(a,8282))},Pagination:C,SortButtons:function(){return a.e(703).then(a.bind(a,4703))}},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:function(){return{}}},pagination:{type:Object,default:function(){return{}}},chunkSize:{type:Number,default:90},selected:{type:Array,default:function(){return[]}}},data:function(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:(0,n.Z)((0,n.Z)({},(0,l.Se)(["supportsConformance"])),{},{hasMore:function(){return this.items.length>this.shownItems},chunkedItems:function(){var t=this.items;return 0!==this.sort&&(t=t.slice(0).sort((function(t,e){return d.Z.getDisplayTitle(t).localeCompare(d.Z.getDisplayTitle(e))})),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},canSort:function(){return this.supportsConformance(I.K)}}),watch:{filters:{deep:!0,handler:function(t){this.$emit("filterItems",t)}}},methods:{showMore:function(){this.shownItems+=this.chunkSize},paginate:function(t,e){"bottom"===e&&this.$refs.topPagination&&x.Z.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},$=M,A=(0,m.Z)($,s,i,!1,null,null,null),S=A.exports},8408:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return q}});var s=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{class:(t={cc:!0},t[e.data.type.toLowerCase()]=!0,t.mixed=e.hasCatalogs&&e.hasItems,t.empty=!e.hasCatalogs&&!e.hasItems,t)},[s("b-row",[s("b-col",{staticClass:"meta"},[s("section",{staticClass:"intro"},[s("h2",[e._v("Description")]),e.data.deprecated?s("DeprecationNotice",{attrs:{data:e.data}}):e._e(),e.data["anon:warning"]?s("AnonymizedNotice",{attrs:{warning:e.data["anon:warning"]}}):e._e(),e.data.description?s("ReadMore",{attrs:{lines:10}},[s("Description",{attrs:{description:e.data.description}})],1):e._e(),Array.isArray(e.data.keywords)&&e.data.keywords.length>0?s("Keywords",{attrs:{keywords:e.data.keywords}}):e._e(),e.isCollection?s("section",{staticClass:"metadata mb-4"},[e.licenses?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("License")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.licenses)}})],1):e._e(),e.temporalExtents?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("Temporal Extents")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.temporalExtents)}})],1):e._e()],1):e._e()],1),e.isCollection||e.thumbnails.length>0?s("section",{staticClass:"mb-4"},[s("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[s("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.isCollection?s("b-tab",{attrs:{title:"Map","no-body":""}},[s("Map",{attrs:{stac:e.data,stacLayerData:e.selectedAsset},on:{mapClicked:e.mapClicked,mapChanged:e.mapChanged}})],1):e._e(),e.thumbnails.length>0?s("b-tab",{attrs:{title:"Preview","no-body":""}},[s("Thumbnails",{attrs:{thumbnails:e.thumbnails}})],1):e._e()],1)],1)],1):e._e(),e.hasAssets?s("Assets",{attrs:{assets:e.assets,context:e.data,shown:e.shownAssets},on:{showAsset:e.showAsset}}):e._e(),e.hasItemAssets&&!e.hasItems?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e(),e.hasProviders?s("Providers",{attrs:{providers:e.data.providers}}):e._e(),s("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:e.data.type,data:e.data,ignoreFields:e.ignoredMetadataFields}}),e.additionalLinks.length>0?s("Links",{attrs:{title:"Additional resources",links:e.additionalLinks}}):e._e()],1),e.hasCatalogs?s("b-col",{staticClass:"catalogs-container"},[s("Catalogs",{attrs:{catalogs:e.catalogs,hasMore:e.hasMoreCollections},on:{loadMore:e.loadMoreCollections}})],1):e._e(),e.hasItems?s("b-col",{staticClass:"items-container"},[s("Items",{attrs:{stac:e.data,items:e.items,api:e.isApi,apiFilters:e.apiItemsFilter,pagination:e.itemPages},on:{paginate:e.paginateItems,filterItems:e.filterItems}}),e.hasItemAssets?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e()],1):e._e()],1)],1)},i=[],n=a(7906),r=a(6198),o=a(4367),l=(a(1539),a(8783),a(3948),a(7042),a(629)),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"catalogs mb-4"},[a("h2",[t._v(" Catalogs "),t.hasMore?t._e():[t._v("("+t._s(t.catalogs.length)+")")],a("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():a("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),a(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.sortedCatalogs,(function(t){return a("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},d=[],u=(a(2707),a(463)),p=a(7387),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{attrs:{title:"Sort",size:"sm"}},[a("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[a("b-icon-bricks"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("Tiles")])],1),a("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[a("b-icon-list-task"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},h=[],f=a(2466),g={id:"SortButtons",components:{BIconBricks:f.S3S,BIconListTask:f.WPR},props:{value:{type:String,default:"cards"}},methods:{toggle:function(t){this.value!==t&&this.$emit("input",t)}}},b=g,v=a(1001),_=(0,v.Z)(b,m,h,!1,null,null,null),y=_.exports,C={components:{ViewButtons:y},computed:{cardsComponent:function(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps:function(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get:function(){return this.$store.state.cardViewMode},set:function(t){this.$store.commit("config",{cardViewMode:t})}}}},w={name:"Catalogs",components:{Catalog:u["default"],SortButtons:function(){return a.e(703).then(a.bind(a,4703))}},mixins:[C],props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data:function(){return{sort:0}},computed:{sortedCatalogs:function(){var t=this.catalogs;return this.hasMore||0===this.sort||(t=t.slice(0).sort((function(t,e){return p.Z.getDisplayTitle(t).localeCompare(p.Z.getDisplayTitle(e))})),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&this.$emit("loadMore")}}},k=w,x=(0,v.Z)(k,c,d,!1,null,null,null),I=x.exports,M=a(1808),$=a(1059),A=a(6129),S=a(3819),Z=a(8907),L=a.n(Z),T=a(81),P=a(5834),F=a(2996),O=a(1015),B=a(7637),E={name:"Catalog",components:{AnonymizedNotice:function(){return a.e(467).then(a.bind(a,467))},Assets:function(){return a.e(383).then(a.bind(a,3272))},BTabs:F.M,BTab:O.L,Catalogs:I,DeprecationNotice:function(){return a.e(196).then(a.bind(a,3196))},Description:M.Z,Items:$.Z,Keywords:function(){return a.e(155).then(a.bind(a,6155))},Links:A.Z,Map:function(){return a.e(81).then(a.bind(a,6081))},Metadata:S.Z,Providers:function(){return a.e(867).then(a.bind(a,9867))},ReadMore:L(),Thumbnails:function(){return a.e(400).then(a.bind(a,3400))}},mixins:[T.Z],data:function(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,l.rn)(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"])),(0,l.Se)(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"])),{},{licenses:function(){return this.isCollection&&this.data.license?P.Formatters.formatLicense(this.data.license,null,null,this.data):null},hasProviders:function(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents:function(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){var t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),P.Formatters.formatTemporalExtents(t)}return null},hasItemAssets:function(){var t;return B.Z.size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages:function(){var t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=B.Z.addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi:function(){return Boolean(this.apiItemsLink)},hasItems:function(){return this.items.length>0||this.isApi},hasCatalogs:function(){return this.catalogs.length>0}}),methods:{loadMoreCollections:function(){this.$store.dispatch("loadNextApiCollections",{show:!0})},paginateItems:function(t){var e=this;return(0,r.Z)((0,n.Z)().mark((function a(){return(0,n.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:t,show:!0});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading the list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},filterItems:function(t){var e=this;return(0,r.Z)((0,n.Z)().mark((function a(){return(0,n.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:e.apiItemsLink,show:!0,filters:t});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading a filtered list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},mapClicked:function(t){console.log(t)}}},D=E,N=(0,v.Z)(D,s,i,!1,null,null,null),q=N.exports},6525:function(t){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(s){return console.error(s),t}return a}},9245:function(t,e,a){"use strict";a.d(e,{K:function(){return s}});var s="https://api.stacspec.org/v1.*/item-search#sort"}}]);
//# sourceMappingURL=catalog-legacy.b9e6a8c6.js.map