webpackJsonp([17],{"9r6S":function(s,t){},gXSL:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),d=e.n(a),r=e("b3wP"),i=e("qwAB"),o=e("cZ5f"),n={name:"address-list",data:function(){return{addressList:[],goEdit:!0}},components:{AddressHeader:r.a,Scroll:i.a},created:function(){document.title=this.$route.meta.title,this.getAddressList(),this.saveParams()},methods:{getAddressList:function(){var s=this;o.d().then(function(t){t.code&&"00"===t.code?s.addressList=t.result:t.code&&"01"===t.code?tool.toWeiXinLogin(window.location.href):s.$toastBox.showToastBox(t.message)})},goEditAddress:function(s){this.$router.push({path:"/addressEdit",query:{addressId:s}})},saveParams:function(){this.$route.query.pageName||window.localStorage.setItem("params",d()(this.$route.query))},checkAddress:function(s){if("{}"!=window.localStorage.getItem("params")){var t=JSON.parse(window.localStorage.getItem("params"));t.addressId=s,this.$router.push({path:"/purchaseNow",query:t}),window.localStorage.removeItem("params")}},historyBack:function(){if("{}"!=window.localStorage.getItem("params")){var s=JSON.parse(window.localStorage.getItem("params"));this.$router.push({path:"/purchaseNow",query:s}),window.localStorage.removeItem("params")}else window.history.back(-1)}}},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"address-list"},[a("address-header",{staticStyle:{"z-index":"999","background-color":"#fff"},attrs:{"line-style":"background:#fff",title:"我的收货地址",goEdit:s.goEdit,goEditAddress:s.goEditAddress},on:{historyBack:s.historyBack}}),s._v(" "),a("scroll",{ref:"addressScroll",staticClass:"address-scroll"},[a("div",[a("div",{ref:"addressWrapper",staticClass:"address-wrapper"},s._l(s.addressList,function(t){return a("div",{key:t.id,staticClass:"address-item",on:{click:function(e){return s.checkAddress(t.id)}}},[a("div",{staticClass:"address-item-detailInfo"},[a("div",{staticClass:"address-item-allAddress"},[a("div",{staticClass:"address-item-userInfo"},[a("span",{staticClass:"address-item-username"},[s._v(s._s(t.realname))]),s._v(" "),a("span",{staticClass:"address-item-phone"},[s._v(s._s(t.mobile))])]),s._v(" "),"Y"==t.isDefault?a("span",{staticClass:"isDefault"},[s._v("默认")]):s._e(),s._v("\n                "+s._s(t.province)+" "+s._s(t.city)+" "+s._s(t.district)+" "+s._s(t.town)+" "+s._s(t.address)+"\n              ")]),s._v(" "),a("div",{staticClass:"address-item-edit",on:{click:function(e){return e.stopPropagation(),s.goEditAddress(t.id)}}},[s._v("编辑")])])])}),0),s._v(" "),s.addressList.length<1?a("div",[a("div",{staticClass:"no-address"},[a("div",{staticClass:"no-address-content fadeIn"},[a("img",{attrs:{src:e("sauq"),alt:"no address"}}),s._v(" "),a("p",{staticClass:"no-address-text"},[s._v("您还没有添加收货地址喔~")])])])]):s._e()])])],1)},staticRenderFns:[]};var l=e("VU/8")(n,c,!1,function(s){e("9r6S")},"data-v-4074c819",null);t.default=l.exports},sauq:function(s,t,e){s.exports=e.p+"static/img/no-address.18e7797.png"}});
//# sourceMappingURL=17.d0979b36cef2ef40d91a.js.map