webpackJsonp([50],{1010:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=l(7),r=a(n),o=l(3),d=a(o),u=l(4),s=a(u),i=l(6),f=a(i),c=l(5),p=a(c),m=l(1),h=a(m),v=l(2),y=a(v),w=l(202),E=a(w),x=l(14),C=a(x),b=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l};if("undefined"!=typeof window){var g=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||g}var _={xs:"480px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"},O=function(e){function t(l){(0,s["default"])(this,t);var a=(0,f["default"])(this,e.call(this,l));a.responsiveHandler=function(e){a.setState({below:e.matches}),a.state.collapsed!==e.matches&&a.setCollapsed(e.matches,"responsive")},a.setCollapsed=function(e,t){"collapsed"in a.props||a.setState({collapsed:e});var l=a.props.onCollapse;l&&l(e,t)},a.toggle=function(){var e=!a.state.collapsed;a.setCollapsed(e,"clickTrigger")},a.belowShowChange=function(){a.setState({belowShow:!a.state.belowShow})};var n=void 0;"undefined"!=typeof window&&(n=window.matchMedia),n&&l.breakpoint&&l.breakpoint in _&&(a.mql=n("(max-width: "+_[l.breakpoint]+")"));var r=void 0;return r="collapsed"in l?l.collapsed:l.defaultCollapsed,a.state={collapsed:r,below:!1},a}return(0,p["default"])(t,e),t.prototype.componentWillReceiveProps=function(e){"collapsed"in e&&this.setState({collapsed:e.collapsed})},t.prototype.componentDidMount=function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql))},t.prototype.componentWillUnmount=function(){this.mql&&this.mql.removeListener(this.responsiveHandler)},t.prototype.render=function(){var e,t=this.props,l=t.prefixCls,a=t.className,n=t.collapsible,o=t.reverseArrow,u=t.trigger,s=t.style,i=t.width,f=t.collapsedWidth,c=b(t,["prefixCls","className","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),p=(0,E["default"])(c,["collapsed","defaultCollapsed","onCollapse","breakpoint"]),m=this.state.collapsed?f:i,v=0===f||"0"===f?h["default"].createElement("span",{onClick:this.toggle,className:l+"-zero-width-trigger"},h["default"].createElement(C["default"],{type:"bars"})):null,w={expanded:o?h["default"].createElement(C["default"],{type:"right"}):h["default"].createElement(C["default"],{type:"left"}),collapsed:o?h["default"].createElement(C["default"],{type:"left"}):h["default"].createElement(C["default"],{type:"right"})},x=this.state.collapsed?"collapsed":"expanded",g=w[x],_=null!==u?v||h["default"].createElement("div",{className:l+"-trigger",onClick:this.toggle},u||g):null,O=(0,d["default"])({},s,{flex:"0 0 "+m+"px",width:m+"px"}),S=(0,y["default"])(a,l,(e={},(0,r["default"])(e,l+"-collapsed",!!this.state.collapsed),(0,r["default"])(e,l+"-has-trigger",!!u),(0,r["default"])(e,l+"-below",!!this.state.below),(0,r["default"])(e,l+"-zero-width",0===m||"0"===m),e));return h["default"].createElement("div",(0,d["default"])({className:S},p,{style:O}),this.props.children,n||this.state.below&&v?_:null)},t}(h["default"].Component);t["default"]=O,O.__ANT_LAYOUT_SIDER=!0,O.defaultProps={prefixCls:"ant-layout-sider",collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:64,style:{}},e.exports=t["default"]},1011:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1012),r=a(n),o=l(1010),d=a(o);r["default"].Sider=d["default"],t["default"]=r["default"],e.exports=t["default"]},1012:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e){return function(t){return function(l){function a(){return(0,i["default"])(this,a),(0,c["default"])(this,l.apply(this,arguments))}return(0,m["default"])(a,l),a.prototype.render=function(){var l=e.prefixCls;return v["default"].createElement(t,(0,u["default"])({prefixCls:l},this.props))},a}(v["default"].Component)}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(7),o=a(r),d=l(3),u=a(d),s=l(4),i=a(s),f=l(6),c=a(f),p=l(5),m=a(p),h=l(1),v=a(h),y=l(2),w=a(y),E=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l},x=function(e){function t(){return(0,i["default"])(this,t),(0,c["default"])(this,e.apply(this,arguments))}return(0,m["default"])(t,e),t.prototype.render=function(){var e=this.props,t=e.prefixCls,l=e.className,a=e.children,n=E(e,["prefixCls","className","children"]),r=void 0;v["default"].Children.forEach(a,function(e){e&&e.type&&e.type.__ANT_LAYOUT_SIDER&&(r=!0)});var d=(0,w["default"])(l,t,(0,o["default"])({},t+"-has-sider",r));return v["default"].createElement("div",(0,u["default"])({className:d},n),a)},t}(v["default"].Component),C=n({prefixCls:"ant-layout"})(x),b=n({prefixCls:"ant-layout-header"})(x),g=n({prefixCls:"ant-layout-footer"})(x),_=n({prefixCls:"ant-layout-content"})(x);C.Header=b,C.Footer=g,C.Content=_,t["default"]=C,e.exports=t["default"]},1013:[1791,1298],1100:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(l(1013),l(1011)),r=a(n),o=l(1),d=a(o),u=l(1335),s=(a(u),r["default"].Header),i=r["default"].Footer,f=r["default"].Sider,c=r["default"].Content,p=function(){return d["default"].createElement("div",null,d["default"].createElement(r["default"],null,d["default"].createElement(s,null,"Header"),d["default"].createElement(c,null,"Content"),d["default"].createElement(i,null,"Footer")),d["default"].createElement(r["default"],null,d["default"].createElement(s,null,"Header"),d["default"].createElement(r["default"],null,d["default"].createElement(f,null,"Sider"),d["default"].createElement(c,null,"Content")),d["default"].createElement(i,null,"Footer")),d["default"].createElement(r["default"],null,d["default"].createElement(s,null,"Header"),d["default"].createElement(r["default"],null,d["default"].createElement(c,null,"Content"),d["default"].createElement(f,null,"Sider")),d["default"].createElement(i,null,"Footer")),d["default"].createElement(r["default"],null,d["default"].createElement(f,null,"Sider"),d["default"].createElement(c,null,d["default"].createElement(s,null,"Header"),d["default"].createElement(c,null,"Content"),d["default"].createElement(i,null,"Footer"))))};t["default"]=p,e.exports=t["default"]},1298:10,1335:10});