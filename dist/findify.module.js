import{useRef as t,useState as e,useEffect as n}from"react";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r={autocomplete:"change:suggestions",recommendation:"change:items",search:"change:items","smart-collection":"change:items"},i=function(){return new Promise(function(t){return(window.findifyCallbacks=window.findifyCallbacks||[]).push(function(e){return t(e)})})};export default function(c){var a=c.type,s=c.config,u=void 0===s?{}:s,l=c.options,f=void 0===l?{}:l,g=c.history,m=c.widgetKey,d=void 0===m?Math.random().toString(36).substring(7):m,h=t(null),p=e(!1),y=p[0],v=p[1],w=e(!1),b=w[0],P=w[1];return n(function(){if(h.current){var t=void 0;return function(){try{Promise.resolve(i()).then(function(e){t=e,g&&(t.utils.history=g);var n=function(t,e,n,o){return"recommendation"!==t?o:n.getIn(["features","recommendations","#"+(o.slot||e.getAttribute("id"))]).mergeDeep(o)}(a,h.current,t.config,o({widgetKey:d,disableAutoRequest:!0},u));t.widgets.attach(h.current,"smart-collection"===a?"search":a,n);var i=t.widgets.get(d),c=o({},i.config.get("meta")&&i.config.get("meta").toJS()||{},f);"recommendation"===a&&(c.slot=u.slot,c.type=u.type||n.get("type")),"smart-collection"===a&&(c.slot=u.slot||t.utils.collectionPath()),i.agent.defaults(c).on("error",function(){return P(!0)}).on(r[a],function t(e){var n=e[0];return window.requestAnimationFrame(function(){i.agent.off(t),n.size||P(!0),v(!0)})}),["search","smart-collection"].includes(a)&&i.agent.applyState(t.utils.getQuery())})}catch(t){return Promise.reject(t)}}(),function(){console.log("detach",d),t.widgets.detach(d)}}},[h]),[h,y,b]}export{i as waitForFindify};
//# sourceMappingURL=findify.module.js.map
