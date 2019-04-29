"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var network,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_scatterjsCore=require("scatterjs-core"),isAvailable=!1;"undefined"!=typeof window&&("undefined"==typeof window.lynxMobile?window.addEventListener("lynxMobileLoaded",function(){return isAvailable=!0}):isAvailable=!0);var pollExistence=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c,d=arguments;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=0<d.length&&void 0!==d[0]?d[0]:null,c=1<d.length&&void 0!==d[1]?d[1]:0,a.abrupt("return",new Promise(function(a){return b||(b=a),isAvailable?b(!0):5<c?b(!1):void setTimeout(function(){return pollExistence(b,c+1)},100)}));case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),hashHex=function(a){for(var b,c="",d=new DataView(a),e=0;e<d.byteLength;e+=4)b="00000000",c+=("00000000"+d.getUint32(e).toString(16)).slice(-8);return c},sha256=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=new TextEncoder("utf-8").encode(b),a.t0=hashHex,a.next=4,crypto.subtle.digest("SHA-256",c);case 4:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 6:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),ScatterLynx=/*#__PURE__*/function(a){function b(a){var c;if((0,_classCallCheck2.default)(this,b),c=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.EOS,_scatterjsCore.PluginTypes.WALLET_SUPPORT)),!a)return console.error("Lynx Plugin: You must pass in an eosjs version. Either ({Api, JsonRpc}) for eosjs2 or (Eos) for eosjs1"),(0,_possibleConstructorReturn2.default)(c);// eosjs2
if(c.name="Lynx",c.isEosjs2=!1,a.hasOwnProperty("JsonRpc"))c.eosjs=a,c.isEosjs2=!0;else{if("function"!=typeof a)throw new Error("Lynx Plugin: Invalid eosjs. Please use 16.0.9 or 20+");c.eosjs=a}return c}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"init",value:function d(a,b,c){this.context=a,this.holderFns=b,this.socketSetters=c}},{key:"connect",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(c){var d;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,pollExistence();case 2:d=a.sent,d&&(!b.holderFns.get().wallet&&(b.holderFns.get().wallet=b.name),c(!0));case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"runAfterInterfacing",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.methods()[_scatterjsCore.WALLET_METHODS.getIdentity](),b={sendApiRequest:function b(a){return c.methods()[a.type](a.payload)}},this.socketSetters.map(function(a){return a(b)}),a.abrupt("return",!0);case 4:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"methods",value:function c(){var a,b=this;return a={},(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.isConnected,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.disconnect,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.isPaired,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getIdentity,function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var c,d,e,f,g,h;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,window.lynxMobile.requestSetAccountName();case 2:if(c=a.sent,c){a.next=5;break}return a.abrupt("return",null);case 5:return a.next=7,window.lynxMobile.requestSetAccount(c);case 7:if(d=a.sent,d){a.next=10;break}return a.abrupt("return",null);case 10:return e=d.account.permissions.find(function(a){return"active"===a.perm_name}),f=e.required_auth.keys[0].key,g=[{name:d.account.account_name,authority:e.perm_name,publicKey:f,blockchain:_scatterjsCore.Blockchains.EOS,isHardware:!1,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}],h={name:g[0].name,accounts:g,publicKey:f},b.context.identity=h,a.abrupt("return",h);case 16:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.forgetIdentity,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.context.identity=null,a.abrupt("return",!0);case 2:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,"identityFromPermissions",function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",b.context.identity);case 1:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getIdentityFromPermissions,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",b.context.identity);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getArbitrarySignature,function(a,b){var c=_scatterjsCore.SocketService.getOrigin();return window.lynxMobile.requestArbitrarySignature({data:b,whatFor:"".concat(c," is requesting an arbitrary signature")})}),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.authenticate,function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c,d,e,f,g=arguments;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<g.length&&void 0!==g[1]?g[1]:null,d=2<g.length&&void 0!==g[2]?g[2]:null,e=_scatterjsCore.SocketService.getOrigin(),c=c?c:e,a.t0=sha256,a.next=7,sha256(c);case 7:return a.t1=a.sent,a.next=10,sha256(b);case 10:return a.t2=a.sent,a.t3=a.t1+a.t2,a.next=14,(0,a.t0)(a.t3);case 14:return f=a.sent,a.abrupt("return",window.lynxMobile.requestArbitrarySignature({data:f,whatFor:"".concat(e," wants to authenticate your public key")}));case 16:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.requestSignature,function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(c){var d,e,f,g,h,i,j,k,l,m,n;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d=c.abis,e=c.transaction,f=c.network,"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"===f.chainId){a.next=3;break}throw new Error("Lynx only supports mainnet.");case 3:if(!b.isEosjs2){a.next=14;break}return h=new b.eosjs.JsonRpc(_scatterjsCore.Network.fromJson(f).fullhost()),i={rpc:h},Object.keys(b.eosjs).map(function(a){"JsonRpc"===a||"Api"===a||(i[a]=b.eosjs[a])}),j=new b.eosjs.Api(i),e.abis.map(function(a){var b=a.account_name,c=a.abi;return j.cachedAbis.set(b,{rawAbi:c,abi:j.rawAbiToJson(c)})}),a.next=11,j.deserializeTransactionWithActions(e.serializedTransaction);case 11:g=a.sent,a.next=26;break;case 14:return k=new b.eosjs({httpEndpoint:_scatterjsCore.Network.fromJson(f).fullhost(),chainId:f.chainId}),l={},m=e.actions.map(function(a){return a.account}).reduce(function(a,b){return a.includes(b)||a.push(b),a},[]),a.next=19,Promise.all(m.map(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.contract(b);case 2:l[b]=a.sent.fc;case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()));case 19:return a.next=21,Promise.all(e.actions.map(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c,d,e,f,g;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.account,d=l[c],e=d.abi.actions.find(function(a){return a.name===b.name}).type,f=d.fromBuffer(e,b.data),g=d.abi.actions.find(function(a){return a.name===b.name}),k.fc.abiCache.abi(c,d.abi),a.abrupt("return",{data:f,account:b.account,name:b.name,authorization:b.authorization});case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()));case 21:a.t0=a.sent,g={actions:a.t0},n=Object.assign({},e),delete n.actions,g=Object.assign(g,n);case 26:return a.abrupt("return",window.lynxMobile.requestSignature(g));case 27:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.requestTransfer,function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=d.contract,f=d.symbol,g=d.memo,h=d.decimals;return e||(e="eosio.token"),f||(f="EOS"),window.lynxMobile.transfer({contract:e,symbol:f,toAccount:b,amount:c,memo:g})}),a}}]),b}(_scatterjsCore.Plugin);exports.default=ScatterLynx,"undefined"!=typeof window&&(window.ScatterLynx=ScatterLynx);