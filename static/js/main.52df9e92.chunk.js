(this["webpackJsonpbc24-goit-react-hw-01-components"]=this["webpackJsonpbc24-goit-react-hw-01-components"]||[]).push([[0],[,,function(e,a,t){e.exports={profile:"Profile_profile__2bPxP",description:"Profile_description__1ikB4",name:"Profile_name__2vvVA",tag:"Profile_tag__3hWR0",location:"Profile_location__3LpsD",avatar:"Profile_avatar__1WGop",stats:"Profile_stats__2xGeK",quantity:"Profile_quantity__2Oixs",label:"Profile_label__o23t8"}},function(e,a,t){e.exports={label:"Statistics_label__2XW8R",statistics:"Statistics_statistics__2fSSJ",statList:"Statistics_statList__2ydSg",item:"Statistics_item__3nQKb",percentage:"Statistics_percentage__h9EvG"}},function(e,a,t){e.exports={"friends-list":"FriendList_friends-list__34fGQ",item:"FriendList_item__sH-pz",online:"FriendList_online___avlD",offline:"FriendList_offline__2C0pk",avatar:"FriendList_avatar__2NQyu",name:"FriendList_name__20N8z"}},,,,function(e,a,t){e.exports={transactionHistory:"Transaction_transactionHistory__jDJiP"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t(1),s=t.n(i),n=t(7),r=t.n(n),o=t(2),d=t.n(o),l=t(5),b=t.n(l),u=function(e){var a=e.props;return Object.entries(a).map((function(e,a){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:d.a.label,children:e[0]}),Object(c.jsx)("span",{className:d.a.quantity,children:e[1]})]},a)}))};u.protoType={props:b.a.objectOf(b.a.shape({followers:b.a.number.isRequired,views:b.a.number.isRequired,likes:b.a.number.isRequired})).isRequired};var m=u,p=function(e){var a=e.items,t=a.avatar,i=a.name,s=a.tag,n=a.location,r=a.stats;return Object(c.jsxs)("div",{className:d.a.profile,children:[Object(c.jsxs)("div",{className:d.a.description,children:[Object(c.jsx)("img",{src:t,width:"250",alt:"user avatar",className:"avatar"}),Object(c.jsx)("p",{className:d.a.name,children:i}),Object(c.jsxs)("p",{className:d.a.tag,children:["@",s]}),Object(c.jsx)("p",{className:d.a.location,children:n})]}),Object(c.jsx)("ul",{className:d.a.stats,children:Object(c.jsx)(m,{props:r})})]})},j=t(3),f=t.n(j),h=function(e){var a=e.items,t=a.label,i=a.percentage;return Object(c.jsxs)("li",{className:f.a.item,style:{backgroundColor:"rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),")")},children:[Object(c.jsx)("span",{className:f.a.label,children:t}),Object(c.jsxs)("span",{className:f.a.percentage,children:[i,"%"]})]})},_=function(e){var a=e.title,t=e.stats;return Object(c.jsxs)("section",{className:f.a.statistics,children:[a&&Object(c.jsx)("h2",{className:f.a.title,children:a}),Object(c.jsx)("ul",{className:f.a.statList,children:t.map((function(e){return Object(c.jsx)(h,{items:e},e.id)}))})]})},y=t(4),O=t.n(y),x=function(e){var a=e.items,t=a.avatar,i=a.name,s=a.isOnline;return Object(c.jsxs)("li",{className:O.a.item,children:[s?Object(c.jsx)("span",{className:O.a.online}):Object(c.jsx)("span",{className:O.a.offline}),Object(c.jsx)("img",{className:O.a.avatar,src:t,alt:i,width:"48"}),Object(c.jsx)("p",{className:O.a.name,children:i})]})},v=function(e){var a=e.props;return Object(c.jsx)("ul",{className:O.a["friends-list"],children:a.map((function(e){return Object(c.jsx)(x,{items:e},e.id)}))})},w=function(e){var a=e.items,t=a.type,i=a.amount,s=a.currency;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:s})]})},g=t(8),N=t.n(g),P=function(e){var a=e.items;return Object(c.jsxs)("table",{className:N.a.transactionHistory,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Currency"})]})}),Object(c.jsx)("tbody",{children:a.map((function(e){return Object(c.jsx)(w,{items:e},e.id)}))})]})},L=t(9),S=t(10),J=t(11),M=t(12),k=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{items:L}),Object(c.jsx)(_,{title:"Upload stats",stats:S}),Object(c.jsx)(v,{props:J}),Object(c.jsx)(P,{items:M})]})};t(20);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.52df9e92.chunk.js.map