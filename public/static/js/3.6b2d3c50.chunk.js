(this["webpackJsonpiron-worklog-client"]=this["webpackJsonpiron-worklog-client"]||[]).push([[3],{99:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return d})),n.d(e,"getFCP",(function(){return S})),n.d(e,"getFID",(function(){return k})),n.d(e,"getLCP",(function(){return F})),n.d(e,"getTTFB",(function(){return C}));var i,r,a,o,u=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},f=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,e,n){var i;return function(){e.value>=0&&(n||m.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},d=function(t,e){var n,i=u("CLS",0),r=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},a=c("layout-shift",r);a&&(n=p(t,i,e),f((function(){a.takeRecords().map(r),n()})),s((function(){i=u("CLS",0),n=p(t,i,e)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){f((function(t){var e=t.timeStamp;v=e}),!0)},g=function(){return v<0&&(v=l(),h(),s((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},S=function(t,e){var n,i=g(),r=u("FCP"),a=function(t){"first-contentful-paint"===t.name&&(f&&f.disconnect(),t.startTime<i.timeStamp&&(r.value=t.startTime,r.entries.push(t),m.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=p(t,r,e),o&&a(o),s((function(i){r=u("FCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))})))},y={passive:!0,capture:!0},w=new Date,E=function(t,e){i||(i=e,r=t,a=new Date,b(removeEventListener),L())},L=function(){if(r>=0&&r<a-w){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},T=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){E(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(e,t):E(e,t)}},b=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,y)}))},k=function(t,e){var n,a=g(),d=u("FID"),v=function(t){t.startTime<a.timeStamp&&(d.value=t.processingStart-t.startTime,d.entries.push(t),m.add(d),n())},l=c("first-input",v);n=p(t,d,e),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&s((function(){var a;d=u("FID"),n=p(t,d,e),o=[],r=-1,i=null,b(addEventListener),a=v,o.push(a),L()}))},F=function(t,e){var n,i=g(),r=u("LCP"),a=function(t){var e=t.startTime;e<i.timeStamp&&(r.value=e,r.entries.push(t)),n()},o=c("largest-contentful-paint",a);if(o){n=p(t,r,e);var d=function(){m.has(r)||(o.takeRecords().map(a),o.disconnect(),m.add(r),n())};["keydown","click"].forEach((function(t){addEventListener(t,d,{once:!0,capture:!0})})),f(d,!0),s((function(i){r=u("LCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))}))}},C=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(n.value=n.delta=e.responseStart,n.value<0)return;n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.6b2d3c50.chunk.js.map