function NetPerf(){function c(r){var u,l=[],p=['"i":30000,"v":3'],o,a,y,s,h,v,c;if(l.push(p),u=[],r=='u')e?(u.push('0'),u.push('1')):(u.push('1'),u.push('0'));else if(r=='l')u.push('0'),u.push('0'),e=!0;else return;for(o=null,y=f.length,s=0;s<y;s++)h=window.performance.timing[f[s]],o==null?o=h:(a=h>0?h-o:-1,u.push(a));if(u.push('"'+n.encodeJsonStringLiteral(document.URL)+'"'),u.push(n.edgeInfo.isEdge?"1":"0"),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.ds)+'"'),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.f.toString())+'"'),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.cid)+'"'),v=[],n.edgeInfo.prop)for(c in n.edgeInfo.prop)n.edgeInfo.prop.hasOwnProperty(c)&&v.push(c+'='+n.edgeInfo.prop[c]);u.push('"'+n.encodeJsonStringLiteral(v.join(t))+'"'),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.wl)+'"'),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.tid)+'"'),u.push('"'+n.encodeJsonStringLiteral(n.edgeInfo.ipv)+'"'),l.push('"f":['+u.join(t)+']'),i.push('{'+l.join(t)+'}')}function l(r){var f=window.performance.getEntriesByType==null?null:window.performance.getEntriesByType('resource'),a,o,e,h,c,v,y,s,l;if(f==null&&(f=window.performance.webkitGetEntriesByType==null?null:window.performance.webkitGetEntriesByType('resource')),f!=null){if(n.numberOfResourcesQueued>f.length&&(n.numberOfResourcesQueued=0),n.numberOfResourcesQueued==f.length)return;for(a=0,e=n.numberOfResourcesQueued;e<f.length;e++)if(o=f[e],o.name.indexOf(n.endpoint)==-1){a=1;break}for(e=n.numberOfResourcesQueued;e<f.length&&a==1;e++){if(h=[],e>1e3||r=='u'&&e+n.numberOfResourcesQueued>20)break;for(o=f[e],c=[],v=['"i":30001,"v":0'],h.push(v),y=u.length,s=0;s<y;s++)l=Math.floor(o[u[s]]),(o[u[s]]==null||isNaN(l))&&(l='-1'),c.push(l);c.push('"'+n.encodeJsonStringLiteral(o.name)+'"'),h.push('"f":['+c.join(t)+']'),i.push('{'+h.join(t)+'}')}n.numberOfResourcesQueued=f.length}}function s(){for(var n=[],t=0;t<36;t++)n[t]=(Math.random()*16|0).toString(16);return n[14]='4',n[8]=n[13]=n[18]=n[23]='-',n[19]=(n[19]&3|8).toString(16),n.join('')}function a(t){var i;if(!(t.length<=0)&&(i=n.endpoint,i!=null&&!(i.length<=0)))try{var o=document.URL,u=i.substr(0,i.indexOf('//')+2),f=i.substr(i.indexOf('//')+2),e=u+f+'{'+s()+'}',r=n.xhr;"withCredentials"in r&&(r.open('POST',e,!0),r.setRequestHeader("Content-Type",'application/vnd.ms-nexus-telemetrydata-v1+json'),r.send(t))}catch(h){return}}function r(r){var u,f;o||c(r),l(r),i.length>0&&(u=[],u.push('"s":"'+n.encodeJsonStringLiteral(n.sid)+'"'),u.push('"r":['+i.join(t)+']'),f='{'+u.join(t)+'}',a(f),o=!0,i=[])}function h(n,t,i){window.addEventListener?addEventListener(n,t,i):attachEvent("on"+n,t)}var v;this.endpoint,this.sid,this.xhr,this.edgeInfo,this.numberOfResourcesQueued=0,this.pageLoadDelay=0,this.resourceDelay=0;var n=this,i=[],f=['navigationStart','unloadEventStart','unloadEventEnd','redirectStart','redirectEnd','fetchStart','domainLookupStart','domainLookupEnd','connectStart','secureConnectionStart','connectEnd','requestStart','responseStart','responseEnd','domLoading','domInteractive','domContentLoadedEventStart','domContentLoadedEventEnd','domComplete','loadEventStart','loadEventEnd'],u=['startTime','redirectStart','redirectEnd','fetchStart','domainLookupStart','domainLookupEnd','connectStart','secureConnectionStart','connectEnd','requestStart','responseStart','responseEnd','duration'],t=',',e=!1,o=!1;this.wireUpEvents=function(){var i,t;try{if(i=window.performance,!i)return;if(t=i.timing,!t)return;t.loadEventStart==0&&t.loadEventEnd==0?h("load",function(){window.setTimeout(r,n.pageLoadDelay,"l")},!1):t.loadEventStart>0&&t.loadEventEnd==0?window.setTimeout(r,n.pageLoadDelay,"l"):r("l"),window.setInterval(r,n.resourceDelay,"l"),h("beforeunload",function(){r("u")},!1)}catch(u){}},this.getEdgeInfo=function(){var n="",t=window.NetPerfData&&window.NetPerfData.Edge?NetPerfData.Edge:{isEdge:!1,wl:n,ds:n,f:[n],sid:n,cid:n,tid:n,ipv:n,prop:{}};return{isEdge:t.isEdge?!0:!1,ds:t.ds||n,wl:t.wl||n,f:t.f||[n],sid:t.sid||n,cid:t.cid||n,tid:t.tid||n,ipv:t.ipv||n,prop:t.prop||{}}},this.getEndPoint=function(){return window.netPerfEndpointUrl},this.getXMLHttpRequestObject=function(){return new XMLHttpRequest},this.getSessionId=function(n){var t;return t=n==undefined||n.sid==undefined||n.sid==""?s():n.sid},this.encodeJsonStringLiteral=function(n){return n=n||"",n.replace(/\\/g,"\\\\").replace(/\"/g,"\\\"").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")},v=null}var netPerfObj=new NetPerf;netPerfObj.edgeInfo=netPerfObj.getEdgeInfo(),netPerfObj.endpoint=netPerfObj.getEndPoint(),netPerfObj.sid=netPerfObj.encodeJsonStringLiteral(netPerfObj.getSessionId(netPerfObj.edgeInfo)),netPerfObj.xhr=netPerfObj.getXMLHttpRequestObject(),netPerfObj.pageLoadDelay=1,netPerfObj.resourceDelay=3e4,netPerfObj.wireUpEvents()