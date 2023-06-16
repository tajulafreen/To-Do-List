(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81),s=n.n(r),a=n(645),i=n.n(a)()(s());i.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n}\n\n.main-section {\n  margin-top: 10%;\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  height: max-content;\n  border: 1px solid rgb(171, 165, 165);\n  padding: 5px;\n  gap: 2%;\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid rgb(120, 115, 115);\n}\n\n.heading {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.bi-arrow-repeatt {\n  width: 25px;\n  height: 25px;\n  margin-top: 4%;\n  align-items: center;\n}\n\n.form-section {\n  display: flex;\n  padding-top: 15px;\n  border-bottom: 1px solid rgb(120, 115, 115);\n}\n\n.add {\n  width: 100%;\n  height: 30px;\n}\n\n.bi-arrow-repeatt,\n.btn-add {\n  border-radius: 7px;\n}\n\n.task-list {\n  list-style-type: none;\n  padding: 0;\n}\n\n.clear-btn {\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n}\n\nli {\n  height: 40px;\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgb(120, 115, 115);\n  padding-bottom: 5px;\n}\n\nli:last-child {\n  border: none;\n}\n\n.form-check-input {\n  margin-right: 25px;\n}\n\n.task-description {\n  font-size: 18px;\n  align-items: center;\n  margin-top: 9px;\n  width: 90%;\n}\n\n.delete-btn {\n  padding-top: 5px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=s(f,r);r.byIndex=o,t.splice(o,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=r(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var o=n(a[i]);t[o].references--}for(var c=r(e,s),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),s=n.n(r),a=n(569),i=n.n(a),o=n(565),c=n.n(o),d=n(216),l=n.n(d),p=n(589),u=n.n(p),f=n(424),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class m{constructor(e,t=!1,n){this.description=e,this.completed=t,this.index=n}}class v{static getTasks(){return JSON.parse(localStorage.getItem("tasks"))}static saveTasks(e){localStorage.setItem("tasks",JSON.stringify(e))}}const g=new class{constructor(){this.tasks=v.getTasks()||[]}addTask(e){const t=new m(e,!1,this.tasks.length+1);this.tasks.push(t),this.saveTasks()}deleteTask(e){this.tasks.splice(e,1),this.updateTaskIndexes(),this.saveTasks()}updateTask(e,t,n){const r=this.tasks[e];r.description=t,r.completed=n,this.saveTasks()}updateTaskIndexes(){for(let e=0;e<this.tasks.length;e+=1)this.tasks[e].index=e+1}saveTasks(){v.saveTasks(this.tasks)}renderTasks(e){e.innerHTML="";for(let t=0;t<this.tasks.length;t+=1){const n=this.tasks[t],r=document.createElement("li"),s=document.createElement("input");s.type="checkbox",s.checked=n.completed,s.addEventListener("change",(()=>{this.updateTask(t,n.description,s.checked)}));const a=document.createElement("input");a.type="text",a.value=n.description,a.addEventListener("change",(()=>{this.updateTask(t,a.value,n.completed)}));const i=document.createElement("button");i.innerHTML='<i class="bi bi-trash"></i>',i.addEventListener("click",(()=>{this.deleteTask(t),this.renderTasks(e)})),r.appendChild(s),r.appendChild(a),r.appendChild(i),e.appendChild(r)}}},x=document.getElementById("task-list"),y=document.getElementById("add"),b=document.getElementById("edit");g.renderTasks(x),document.querySelector(".form-section").addEventListener("submit",(e=>{e.preventDefault();const t=y.value.trim();""!==t&&(g.addTask(t),g.renderTasks(x),y.value="")})),document.querySelector(".edit-task-form").addEventListener("submit",(e=>{e.preventDefault();const t=b.value.trim();if(""!==t){const e=document.querySelector(".selected").dataset.index;g.updateTask(e,t,!1),g.renderTasks(x),b.value="",document.querySelector(".selected").classList.remove("selected")}}))})()})();