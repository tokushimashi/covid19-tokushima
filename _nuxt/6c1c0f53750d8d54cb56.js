(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{505:function(t,e,n){var content=n(604);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("e15d7c20",content,!0,{sourceMap:!1})},506:function(t,e,n){var content=n(606);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2110844c",content,!0,{sourceMap:!1})},507:function(t,e,n){var content=n(609);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("4df3ab54",content,!0,{sourceMap:!1})},603:function(t,e,n){"use strict";var r=n(505);n.n(r).a},604:function(t,e,n){(e=n(10)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},605:function(t,e,n){"use strict";var r=n(506);n.n(r).a},606:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},607:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/4/20","url":"https://www.pref.tokushima.lg.jp/ippannokata/kendozukuri/doro/5035953/","text":"新型コロナウイルス感染症に関する主な公共交通機関の状況（令和2年4月20日時点）"},{"date":"2020/4/20","url":"https://www.pref.tokushima.lg.jp/ippannokata/kurashi/chihososei/5035053/","text":"川口ダム自然エネルギーミュージアムの臨時休館について"},{"date":"2020/4/20","url":"https://www.pref.tokushima.lg.jp/ippannokata/kurashi/chihososei/5035853/","text":"長安口ダム資料館の臨時休館について"},{"date":"2020/4/20","url":"https://www.pref.tokushima.lg.jp/ippannokata/kyoiku/kanko/5036612/","text":"徳島県立産業観光交流センター（アスティとくしま）及び徳島県立出島野鳥公園の県外からのご利用について"},{"date":"2020/4/18","url":"https://www.pref.tokushima.lg.jp/flair/center/riyou/5036601/","text":"県立男女共同参画交流センターの県外からのご利用について"}]}')},608:function(t,e,n){"use strict";var r=n(507);n.n(r).a},609:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-af5960b0]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-af5960b0]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-af5960b0]{padding:4px 8px}}",""]),t.exports=e},617:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(494),l=r.a.extend({props:{title:{type:String,required:!0},icon:{type:String,required:!0},date:{type:String,required:!0}},computed:{formattedDate:function(){return Object(o.b)(this.date)}}}),d=(n(603),n(14)),c=n(47),m=n.n(c),h=n(142),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null),f=component.exports;m()(component,{VIcon:h.a});var w=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),x=(n(605),Object(d.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null)),v=x.exports;m()(x,{VIcon:h.a});var _=n(472),k=n(607),N=n(519),C=n(517),W=n(521),y=n(520),j=n(515),z=n(516),D=r.a.extend({components:{PageHeader:f,WhatsNew:v,ConfirmedCasesDetailsCard:j.a,ConfirmedCasesNumberCard:N.a,ConfirmedCasesAttributesCard:z.a,TestedNumberCard:C.a,TelephoneAdvisoryReportsNumberCard:W.a,ConsultationDeskReportsNumberCard:y.a},data:function(){var data={Data:_,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("徳島県内の最新感染動向"),date:_.lastUpdate},newsItems:k.newsItems};return data},head:function(){return{title:this.$t("徳島県内の最新感染動向")}}}),I=(n(608),n(467)),$=Object(d.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card")],1)],1)}),[],!1,null,"af5960b0",null);e.default=$.exports;m()($,{VRow:I.a})}}]);