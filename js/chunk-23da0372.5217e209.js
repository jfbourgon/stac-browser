(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23da0372"],{2056:function(t,e,s){"use strict";s("fe5a")},"4d1d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"assets mb-4"},[t.displayTitle?s("h2",[t._v(t._s(t.displayTitle))]):t._e(),s("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(e,i){return s("Asset",{key:t.getId(i),attrs:{asset:e,expand:t.expand,context:t.context,definition:t.definition,shown:t.shown.includes(i),id:i},on:{show:t.show}})})),1)])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-card",{staticClass:"asset",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.uid,expression:"uid"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"asset",squared:""}},[s("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[t.expanded?s("b-icon-chevron-down"):s("b-icon-chevron-right")],1),t._v(" "+t._s(t.asset.title||t.id)+" "),Array.isArray(t.asset.roles)?s("div",{staticClass:"badges ml-1"},[t._l(t.asset.roles,(function(e){return s("b-badge",{key:e,staticClass:"role ml-1 mb-1",attrs:{variant:"data"===e?"primary":"secondary"}},[t._v(t._s(e))])})),t.shown?s("b-badge",{staticClass:"shown ml-1 mb-1",attrs:{variant:"success",title:"This is the asset currently shown"}},[s("b-icon-eye")],1):t._e()],2):t._e()])],1),s("b-collapse",{attrs:{id:t.uid,accordion:"assets",role:"tabpanel"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[s("b-card-body",[s("b-card-title",[t._v(t._s(t.fileFormat))]),t.href?s("b-button-group",{staticClass:"actions"},[t.isGdalVfs?s("CopyButton",{attrs:{variant:"outline-primary",copyText:t.href}},[t._v(" "+t._s(t.buttonText)+" ")]):s("b-button",{attrs:{href:t.href,target:"_blank",variant:"outline-primary"}},[s("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1),t.canShow&&t.shown?s("b-button",{staticClass:"inactive",attrs:{pressed:!0,variant:"outline-primary"}},[s("b-icon-check"),t._v(" Currently shown ")],1):t.canShow?s("b-button",{attrs:{variant:"outline-primary"},on:{click:t.show}},[s("b-icon-eye"),t._v(" Show ")],1):t._e()],1):t._e(),t.asset.description?s("b-card-text",{staticClass:"mt-4"},[s("Description",{attrs:{description:t.asset.description,compact:!0}})],1):t._e(),s("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)],1)],1)},r=[],o=s("5530"),c=(s("d3b7"),s("3ca3"),s("ddb0"),s("caad"),s("2532"),s("2ca0"),s("ac1f"),s("466d"),s("a15b"),s("5843")),l=s("7386"),u=s("6057");const d={COG:["image/tiff; application=geotiff; profile=cloud-optimized","image/vnd.stac.geotiff; cloud-optimized=true"],GEOTIFF:["application/geotiff","image/tiff; application=geotiff;","image/tiff; application=geotiff; profile=cloud-optimized","image/vnd.stac.geotiff; cloud-optimized=true"],JPG:["image/jpeg","image/jpg"],PNG:["image/png"]};var f=s("2f62"),h=s("160f"),p=s("9a30"),b=s("2a32"),m=s("025e"),y={name:"Asset",components:{BCollapse:c["a"],BIconCheck:l["g"],BIconChevronDown:l["h"],BIconChevronRight:l["i"],BIconDownload:l["l"],BIconEye:l["n"],CopyButton:function(){return s.e("chunk-2d0da6a6").then(s.bind(null,"6c03"))},Description:h["a"],Metadata:p["a"]},props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},definition:{type:Boolean,default:!1},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data:function(){return{expanded:!1,ignore:["href","title","description","type","roles","table:storage_options","xarray:open_kwargs","xarray:storage_options"]}},created:function(){"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=!1},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(f["c"])(["url"])),Object(f["b"])(["tileRendererType","getRequestUrl"])),{},{uid:function(){return(this.definition?"item-def-":"asset-")+String(this.id)},isThumbnail:function(){return Array.isArray(this.asset.roles)&&this.asset.roles.includes("thumbnail")},canShow:function(){if("string"!==typeof this.asset.type)return!1;if("server"===this.tileRendererType&&this.asset.type.toLowerCase().startsWith("image/"))return!0;if(this.isGdalVfs&&"client"===this.tileRendererType)return!1;if(!this.isBrowsable)return!1;for(var t in d)if(d[t].includes(this.asset.type))return!0;return!1},fileFormat:function(){return this.asset.type?u["Formatters"].formatMediaType(this.asset.type):null},protocol:function(){if("string"===typeof this.href&&this.href){var t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowsable:function(){return"http"===this.protocol||"https"===this.protocol},isGdalVfs:function(){return m["a"].isGdalVfsUri(this.asset.href)},href:function(){if("string"!==typeof this.asset.href)return null;var t=null;return this.context instanceof b["a"]&&(t=this.context.getAbsoluteUrl()),this.getRequestUrl(this.asset.href,t)},from:function(){var t="Amazon S3",e="Microsoft Azure",s="Google Cloud",i="FTP",a="Alibaba Cloud";switch(this.protocol){case"s3":return t;case"abfs":case"abfss":return e;case"gcs":return s;case"ftp":return i}if(this.isGdalVfs){var n=this.asset.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);if(n)switch(n[1]){case"s3":return t;case"az":case"adls":return e;case"gs":return s;case"oss":return a}}return""},buttonText:function(){var t=[this.isGdalVfs?"Copy GDAL VFS URL":"Download"];return this.from&&!this.isBrowsable&&(t.push(this.isGdalVfs?"for":"from"),t.push(this.from)),t.join(" ")}}),methods:{show:function(){var t=Object.assign({},this.asset);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)}}},g=y,v=(s("2056"),s("2877")),w=Object(v["a"])(g,n,r,!1,null,null,null),x=w.exports,_={name:"Assets",components:{Asset:x},props:{assets:{type:Object,required:!0},shown:{type:Array,default:function(){return[]}},context:{type:Object,default:null},definition:{type:Boolean,default:!1},title:{type:String,default:null}},computed:{displayTitle:function(){return null===this.title?this.definition?"Assets in Items":"Assets":this.title},expand:function(){return!this.definition&&(!(1!==m["a"].size(this.assets)||!this.stac||!this.stac.isItem())||null)}},methods:{getId:function(t){return(this.definition?"item-def-":"asset-")+String(t)},show:function(t,e,s){this.$emit("showAsset",t,e,s)}}},C=_,A=Object(v["a"])(C,i,a,!1,null,null,null);e["default"]=A.exports},fe5a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-23da0372.5217e209.js.map