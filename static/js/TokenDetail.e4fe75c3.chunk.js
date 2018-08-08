webpackJsonp([14],{1109:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,l){try{var u=t[r](l),o=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current,account:e.app.account}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=a(i),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(0),m=a(d),p=n(7),h=n(428),E=a(h),b=n(10),y=n(14),v=n(1881),g=n(31),w=n(19),k=n(26),_=n(418),N=n(232),T=a(N),O=n(36),x=n(1178),S=n(11),C=n(88),j=a(C),P=function(e){function t(){var e=this;l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.loadToken=function(){var t=r(s.default.mark(function t(a){var r,l,u;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0,token:{name:a}}),e.next=3,p.Client.getToken(a);case 3:return r=e.sent,e.next=6,p.Client.getTokenHolders(a);case 6:l=e.sent,u=l.total,n.setState({loading:!1,token:r,tabs:[{id:"transactions",icon:"fa fa-exchange-alt",path:"",label:m.default.createElement("span",null,(0,b.tu)("token_transfers")),cmp:function(){return m.default.createElement(T.default,{filter:{token:a}})}},{id:"holders",icon:"fa fa-user",path:"/holders",label:m.default.createElement("span",null,u," ",(0,b.tu)("token_holders")),cmp:function(){return m.default.createElement(v.TokenHolders,{filter:{token:a},token:{totalSupply:r.totalSupply}})}}]});case 9:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.buyTokens=function(e){var t=n.state.buyAmount,a=n.props,r=a.currentWallet;if(!a.wallet.isOpen)return void n.setState({alert:m.default.createElement(j.default,{warning:!0,title:"Open wallet",onConfirm:function(){return n.setState({alert:null})}},"Open a wallet to participate")});var l=t*(e.price/O.ONE_TRX);r.balance/O.ONE_TRX<l?n.setState({alert:m.default.createElement(j.default,{warning:!0,title:(0,b.tu)("insufficient_trx"),onConfirm:function(){return n.setState({alert:null})}},(0,b.tu)("not_enough_trx_message"))}):n.setState({alert:m.default.createElement(j.default,{info:!0,showCancel:!0,confirmBtnText:(0,b.tu)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnText:(0,b.tu)("cancel"),cancelBtnBsStyle:"default",title:(0,b.tu)("buy_confirm_message_0"),onConfirm:function(){return n.confirmTransaction(e)},onCancel:function(){return n.setState({alert:null})}},(0,b.tu)("buy_confirm_message_1"),m.default.createElement("br",null),t," ",e.name," ",(0,b.t)("for")," ",t*(e.price/O.ONE_TRX)," TRX?")})},n.submit=function(){var t=r(s.default.mark(function t(a){var r,l,u,o,c;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props,l=r.account,u=r.currentWallet,o=n.state.buyAmount,e.next=4,p.Client.participateAsset(u.address,a.ownerAddress,a.name,o*a.price)(l.key);case 4:if(!(c=e.sent)){e.next=10;break}return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:c,buyAmount:0}),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.confirmTransaction=function(){var t=r(s.default.mark(function t(a){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({alert:m.default.createElement(j.default,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:"One moment please.."},"Requesting tokens...")}),e.next=3,n.submit(a);case 3:if(!e.sent){e.next=7;break}n.setState({alert:m.default.createElement(j.default,{success:!0,title:"Transaction Confirmed",onConfirm:function(){return n.setState({alert:null})}},"Successfully received ",a.name," tokens")}),e.next=8;break;case 7:n.setState({alert:m.default.createElement(j.default,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},"Something went wrong...")});case 8:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.isBuyValid=function(){return n.state.buyAmount>0},n.state={loading:!0,token:{},tabs:[],buyAmount:0,alert:null},n}return o(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadToken(decodeURI(e.params.name))}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.name!==e.match.params.name&&this.loadToken(decodeURI(t.params.name))}},{key:"render",value:function(){var e=this,t=this.props,n=t.match,a=(t.wallet,this.state),r=a.token,l=a.tabs,u=a.loading,o=a.buyAmount,c=a.alert;return m.default.createElement("main",{className:"container header-overlap"},c,u?m.default.createElement("div",{className:"card"},m.default.createElement(k.TronLoader,null,(0,b.tu)("loading_token")," ",r.name)):m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-sm-12"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement(E.default,{value:r.name,className:"float-right"}),m.default.createElement("h5",{className:"card-title"},r.name),m.default.createElement("p",{className:"card-text"},r.description)),m.default.createElement("table",{className:"table m-0"},m.default.createElement("tbody",null,m.default.createElement("tr",null,m.default.createElement("th",{style:{width:250}},(0,b.tu)("website"),":"),m.default.createElement("td",null,m.default.createElement(w.ExternalLink,{url:r.url}))),m.default.createElement("tr",null,m.default.createElement("th",{style:{width:250}},(0,b.tu)("total_supply"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedNumber,{value:r.totalSupply}))),r.frozen.length>0&&m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("Frozen Supply"),":"),m.default.createElement("td",null,r.frozen.map(function(e,t){return m.default.createElement("div",{key:t},e.amount," ",(0,b.tu)("can_be_unlocked"),"\xa0",m.default.createElement(y.FormattedRelative,{value:(0,_.getTime)((0,_.addDays)(new Date(r.startTime),e.days))}))}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("issuer"),":"),m.default.createElement("td",null,m.default.createElement(w.AddressLink,{address:r.ownerAddress}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("start_date"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedDate,{value:r.startTime})," ",m.default.createElement(y.FormattedTime,{value:r.startTime}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("end_date"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedDate,{value:r.endTime})," ",m.default.createElement(y.FormattedTime,{value:r.endTime}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("token_holders"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedNumber,{value:r.nrOfTokenHolders}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("nr_of_Transfers"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedNumber,{value:r.totalTransactions}))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("progress"),":"),m.default.createElement("td",null,m.default.createElement("div",{className:"progress mt-1"},m.default.createElement("div",{className:"progress-bar bg-success",style:{width:100-r.percentage+"%"}})))),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("price"),":"),m.default.createElement("td",null,m.default.createElement(y.FormattedNumber,{value:r.price/O.ONE_TRX})," TRX")),m.default.createElement("tr",null,m.default.createElement("th",null,(0,b.tu)("participate"),":"),m.default.createElement("td",null,m.default.createElement("div",{className:"input-group"},0!==r.remaining&&m.default.createElement(x.NumberField,{className:"form-control",value:o,max:r.remaining,min:1,onChange:function(t){return e.setState({buyAmount:t})}}),m.default.createElement("div",{className:"input-group-append"},m.default.createElement("button",{className:"btn btn-success",type:"button",disabled:!this.isBuyValid(),onClick:function(){return e.buyTokens(r)}},"Participate")))))))),m.default.createElement("div",{className:"card mt-3"},m.default.createElement("div",{className:"card-header"},m.default.createElement("ul",{className:"nav nav-tabs card-header-tabs"},l.map(function(e){return m.default.createElement("li",{key:e.id,className:"nav-item"},m.default.createElement(g.NavLink,{exact:!0,to:n.url+e.path,className:"nav-link text-dark"},m.default.createElement("i",{className:e.icon+" mr-2"}),e.label))}))),m.default.createElement("div",{className:"card-body p-0"},m.default.createElement(g.Switch,null,l.map(function(e){return m.default.createElement(g.Route,{key:e.id,exact:!0,path:n.url+e.path,render:function(){return m.default.createElement(e.cmp,null)}})})))))))}}]),t}(m.default.Component),F={};t.default=(0,S.connect)(c,F)((0,y.injectIntl)(P))},1178:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.NumberField=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(c),s=n(18);t.NumberField=function(e){function t(){var e,n,a,u;r(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onChange=function(e){var t=a.props,n=t.onChange,r=t.decimals,l=void 0===r?6:r,u=t.min,o=void 0===u?null:u,c=t.max,i=void 0===c?null:c;if(n){var f=e.target.value;f=parseFloat(f),isNaN(f)?f="":(f=(0,s.round)(f,l),null!==o&&(f=f>o?f:o),null!==i&&(f=f>i?i:f)),n(f)}},a.onKeyDownCheck=function(e){if("E"===String.fromCharCode(e.which))return e.preventDefault(),!1},u=n,l(a,u)}return u(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.onChange,a(e,["onChange"]));return i.default.createElement("input",Object.assign({type:"text",onKeyDown:this.onKeyDownCheck,onChange:this.onChange},t))}}]),t}(i.default.Component)},1881:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,l){try{var u=t[r](l),o=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TokenHolders=void 0;var c=n(4),i=a(c),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(0),m=a(d),p=n(47),h=n(60),E=a(h),b=n(10),y=n(14),v=n(19),g=n(7);t.TokenHolders=function(e){function t(e){var n=this;l(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChange=function(e,t){a.loadTokenHolders(e,t)},a.loadTokenHolders=function(){var e=r(i.default.mark(function e(){var t,r,l,u,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.filter,a.setState({loading:!0}),e.next=4,g.Client.getTokenHolders(t.token,{sort:"-balance",limit:c,start:(o-1)*c,count:!0});case 4:r=e.sent,l=r.addresses,u=r.total,a.setState({page:o,addresses:l,total:u,loading:!1});case 8:case"end":return e.stop()}},e,n)}));return function(){return e.apply(this,arguments)}}(),a.state={filter:{},addresses:[],page:0,total:0,pageSize:25},a}return o(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadTokenHolders()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.token,n=this.state,a=n.addresses,r=n.page,l=n.total,u=n.pageSize,o=n.loading;return o||0!==a.length?m.default.createElement(p.StickyContainer,null,m.default.createElement(p.Sticky,null,function(t){var n=t.style;return m.default.createElement("div",{style:s({zIndex:100},n),className:"card-body bg-white py-3 border-bottom"},m.default.createElement(E.default,{onChange:e.onChange,total:l,loading:o,pageSize:u,page:r}))}),m.default.createElement("table",{className:"table table-hover m-0 border-top-0"},m.default.createElement("thead",{className:"thead-dark"},m.default.createElement("tr",null,m.default.createElement("th",{style:{width:125}},(0,b.tu)("address")),m.default.createElement("th",{style:{width:125}},(0,b.tu)("quantity")),m.default.createElement("th",{style:{width:125}},(0,b.tu)("percentage")))),m.default.createElement("tbody",null,a.map(function(e,n){return m.default.createElement("tr",{key:n},m.default.createElement("td",null,m.default.createElement(v.AddressLink,{address:e.address})),m.default.createElement("td",{className:"text-nowrap"},m.default.createElement(y.FormattedNumber,{value:e.balance}),"\xa0"),m.default.createElement("td",{className:"text-nowrap"},m.default.createElement(y.FormattedNumber,{value:e.balance/t.totalSupply*100,minimumFractionDigits:4,maximumFractionDigits:4})," %"))})))):m.default.createElement("div",{className:"p-3 text-center"},(0,b.tu)("no_holders_found"))}}]),t}(m.default.Component)}});
//# sourceMappingURL=TokenDetail.e4fe75c3.chunk.js.map