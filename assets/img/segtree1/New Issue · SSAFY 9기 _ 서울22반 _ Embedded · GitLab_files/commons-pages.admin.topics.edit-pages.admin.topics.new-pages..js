(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{Gapp:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return j}));n("uHfJ"),n("R0RX"),n("JHu5"),n("3R5X"),n("XUYm"),n("WmlO"),n("W9Nl");var o=n("6oy4"),i=n.n(o),s=n("79X9"),r=n("oj/M");const a=/^(?<indent>\s*)(?<leader>((?<isUl>[*+-])|(?<isOl>\d+\.))( \[([xX~\s])\])?\s)(?<content>.)?/,l=/^((\s{0,3}-+\s*-+\s*-+\s*[\s-]*)|(\s{0,3}\*+\s*\*+\s*\*+\s*[\s*]*))$/;let c=!1;function u(t,e){return`${t}\n${e}\n${t}`}function d(t,e){let n=t.substring(e.selectionEnd);return n=n.replace(/^\n/,""),n=n.split("\n"),n[0]}function f(t){const e=t.value,{selectionStart:n,selectionEnd:o}=t;let i="\n"===e[n]?n-1:n;i=e.lastIndexOf("\n",i)+1;let s=o===n?o:o-1;s=e.indexOf("\n",s),s<0&&(s=e.length);return{lines:e.substring(i,s).split("\n"),selectionStart:n,selectionEnd:o,startPos:i,endPos:s}}function h(t,e,n,o,i,s){let r=Math.max(o,e+i),a=Math.max(o,n+s);e===n?a=r:e===o&&(r=o),t.setSelectionRange(r,a)}function p(t){return{start:{row:(e=t.getSelection()).startLineNumber,column:e.startColumn},end:{row:e.endLineNumber,column:e.endColumn}};var e}function g(t){let e,n,o,i,{textArea:s,text:a,tag:l,cursorOffset:c,blockTag:f,selected:h="",wrap:g,select:m,editor:v}=t,x=!1,w=!1,b=!1;if(h=h.toString(),v){const t=p(v);e=t.start,n=t.end}if("[{text}](url)"===l&&URL)try{const t=new URL(h);"null"===t.origin&&null!==t.origin||(l="[text]({text})",m="text")}catch(t){}0===h.indexOf("\n")&&(w=!0,h=h.replace(/\n+/,"")),s?s.selectionEnd-s.selectionStart>h.replace(/\n$/,"").length&&(x=!0,h=h.replace(/\n$/,"")):v&&e.row!==n.row&&(x=!0,h=h.replace(/\n$/,""));const S=h.split("\n");v&&!g?(o=v.getValue().split("\n")[e.row],/^\s*$/.test(o)&&(b=!0)):s&&!g&&(o=s.value.substr(0,s.selectionStart).lastIndexOf("\n"),/^\s*$/.test(s.value.substring(o,s.selectionStart))&&(b=!0));const k=s&&0===s.selectionStart||v&&0===e.column&&0===e.row,C=g||b||k?"":"\n";return i=S.length>1&&(!g||null!=f&&""!==f)?null!=f&&""!==f?v?function(t,e,n,o){const i=t.split("\n"),s=p(o);if(i[s.start.row-1]===e&&i[s.end.row+1]===e){if(null!==e){const t=i[s.end.row+1],e=new Range(i[s.start.row-1],0,s.end.row+1,t.length);o.getSelection().setSelectionRange(e)}return n}return u(e,n)}(a,f,h,v):function(t,e,n,o){return function(t,e){let n=t.substring(0,e.selectionStart);n=n.split("\n");const o=n[n.length-2];return void 0===o?"":o}(t,e)===n&&d(t,e)===n?(null!=n&&(e.selectionStart=e.selectionStart-(n.length+1),e.selectionEnd=e.selectionEnd+(n.length+1)),o):u(n,o)}(a,s,f,h):S.map((function(t){return l.indexOf("{text}")>-1?l.replace("{text}",t):0===t.indexOf(l)?String(t.replace(l,"")):String(l)+t})).join("\n"):l.indexOf("{text}")>-1?l.replace("{text}",(function(){return h.replace(/\\n/g,"\n").replace(/%br/g,"\\n")})):String(C)+l+h+(g?l:""),w&&(i="\n"+i),x&&(i+="\n"),v?v.replaceSelectedText(i,m):Object(r.t)(s,i),function(t){let e,{textArea:n,tag:o,cursorOffset:i,positionBetweenTags:s,removedLastNewLine:r,select:a,editor:l,editorSelectionStart:c,editorSelectionEnd:u}=t;if(!n||n.setSelectionRange){if(a&&a.length>0){if(n){const t=n.selectionStart-(o.length-o.indexOf(a)),e=t+a.length;return n.setSelectionRange(t,e)}if(l)return void l.selectWithinSelection(a,o)}if(n){if(n.selectionStart===n.selectionEnd)return e=s?n.selectionStart-o.length:n.selectionStart,r&&(e-=1),i&&(e-=i),n.setSelectionRange(e,e)}else l&&c.row===u.row&&s&&l.moveCursor(-1*o.length)}}({textArea:s,tag:l.replace("{text}",h),cursorOffset:c,positionBetweenTags:g&&0===h.length,removedLastNewLine:x,select:m,editor:v,editorSelectionStart:e,editorSelectionEnd:n})}function m(t){let{textArea:e,tag:n,cursorOffset:o,blockTag:s,wrap:r,select:a,tagContent:l}=t;const c=i()(e);e=c.get(0);const u=c.val(),d=function(t,e){return t.substring(e.selectionStart,e.selectionEnd)}(u,e)||l;return c.focus(),g({textArea:e,text:u,tag:n,cursorOffset:o,blockTag:s,selected:d,wrap:r,select:a})}function v(t,e){if(!gon.markdown_automatic_lists)return;if("Enter"!==t.key)return;if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;if(e.selectionStart!==e.selectionEnd)return;if(c)return;const n=f(e).lines[0],o=n.match(a);if(o){const{leader:i,indent:s,content:r,isOl:c}=o.groups;if(!r)return void(e.selectionStart=e.selectionStart-o[0].length);let u;if(c){u=function(t,e){var n;const{indent:o,leader:i}=t.groups,{indent:s,isOl:r}=null!==(n=null==e?void 0:e.groups)&&void 0!==n?n:{},[a,l=""]=i.split("."),c=r&&s===o?0:1;return`${o}${parseInt(a,10)+c}.${l}`}(o,d(e.value,e).match(a))}else{if(n.match(l))return;u=`${s}${i}`}u=u.replace(/\[[x~]\]/i,"[ ]"),t.preventDefault(),m({tag:u,textArea:e,blockTag:"",wrap:!1,select:"",tagContent:""})}}function x(t){var e,n;null!==(e=(n=i()(this)).atwho)&&void 0!==e&&e.call(n,"isSelecting")||(v(t,this),function(t,e){if(!gon.markdown_surround_selection)return;if(t.metaKey||t.ctrlKey)return;if(e.selectionStart===e.selectionEnd)return;const n={"*":"**{text}**",_:"_{text}_","`":"`{text}`","'":"'{text}'",'"':'"{text}"',"[":"[{text}]","{":"{{text}}","(":"({text})","<":"<{text}>"}[t.key];n&&(t.preventDefault(),m({tag:n,textArea:e,blockTag:"",wrap:!0,select:"",tagContent:""}))}(t,this))}function w(){c=!0}function b(){c=!1}function S(t){const e=t.closest(".md-area").find("textarea");switch(t.data("mdCommand")){case"indentLines":!function(t){const e=t.get(0),{lines:n,selectionStart:o,selectionEnd:i,startPos:s,endPos:a}=f(e),l=[];let c=0;e.focus(),e.setSelectionRange(s,a),n.forEach((function(t){t=" ".repeat(2)+t,c+=2,l.push(t)}));const u=l.join("\n");Object(r.t)(e,u),h(e,o,i,s,2,c)}(e);break;case"outdentLines":!function(t){const e=t.get(0),{lines:n,selectionStart:o,selectionEnd:i,startPos:s,endPos:a}=f(e),l=[];let c=0,u=-1,d=0;e.focus(),e.setSelectionRange(s,a),n.forEach((function(t){if(d=0,t.length>0){for(;d<2&&" "===t[d];)d+=1;d>0&&(t=t.slice(d),c+=d)}-1===u&&(u=d),l.push(t)}));const p=l.join("\n");c>0&&Object(r.t)(e,p),h(e,o,i,s,-u,-c)}(e);break;default:return m({textArea:e,tag:t.data("mdTag"),cursorOffset:t.data("mdCursorOffset"),blockTag:t.data("mdBlock"),wrap:!t.data("mdPrepend"),select:t.data("mdSelect"),tagContent:t.attr("data-md-tag-content")})}}function k(t){i()(".markdown-area",t).on("keydown",x).on("compositionstart",w).on("compositionend",b).each((function(){s.default.initMarkdownEditorShortcuts(i()(this),S)}));return i()(".js-md",t).off("click").on("click",(function(){return S(i()(this))}))}function C(t){i()(".js-md").off("click").on("click",(function(e){const{mdTag:n,mdBlock:o,mdPrepend:s,mdSelect:r}=i()(e.currentTarget).data();g({tag:n,blockTag:o,wrap:!s,select:r,selected:t.getSelectedText(),text:t.getValue(),editor:t}),t.focus()}))}function j(t){return i()(".markdown-area",t).off("keydown",x).off("compositionstart",w).off("compositionend",b).each((function(){s.default.removeMarkdownEditorShortcuts(i()(this))})),i()(".js-md",t).off("click")}},TOl7:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),e.a=function(t,e){const n=document.querySelector(t),o=document.querySelector(e);if(!n||!o)return;const i=n.closest("form");n.addEventListener("click",(function(){o.click()})),o.addEventListener("change",(function(){i.querySelector(".js-filename").textContent=o.value.replace(/^.*[\\\/]/,"")}))};const o=function(t){let e;return t&&(e=t.name),e},i=function(t){const e=t.name?t.name:"image.png";return/^[\w.\-+]+\.(png|jpg|jpeg|gif|bmp|tiff|ico|webp)$/.test(e)?e:"image.png"}},uY7R:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));n("WmlO"),n("3R5X"),n("W9Nl"),n("JHu5"),n("XUYm");var o=n("XtuB"),i=n("6oy4"),s=n.n(i),r=n("xhFg"),a=n("oj/M"),l=n("A1CF"),c=n.n(l),u=(n("uHfJ"),n("R0RX"),n("ylB9"),n("XexO"),n("ujLG"),n("HaUQ"),n("vP7+")),d=n.n(u),f=(n("QQrm"),n("TOl7")),h=n("vRHk"),p=n("t9l/");n("h8Et");class g{constructor(t){this.data=t,this.columnWidths=[],this.rows=[],this.tableFound=this.parseTable()}isTable(){return this.tableFound}convertToTableMarkdown(){var t=this;this.calculateColumnWidths();const e=this.rows.map((function(e){return`| ${e.map((function(e,n){return t.formatColumn(e,n)})).join(" | ")} |`}));return e.splice(1,0,this.generateHeaderBreak()),e.join("\n")}parseTable(){if(!this.data.types.includes("text/html")||!this.data.types.includes("text/plain"))return!1;const t=this.data.getData("text/html");this.doc=(new DOMParser).parseFromString(t,"text/html");if(1!==this.doc.querySelectorAll("table:not(.diff-wrap-lines)").length)return!1;const e=this.data.getData("text/plain").trim().split(/[\n\u0085\u2028\u2029]|\r\n?/g);return this.doc.querySelectorAll("tr").length===e.length&&(this.rows=e.map((function(t){return t.split("\t")})),this.normalizeRows(),!!this.columnCountsMatch())}normalizeRows(){const t=this.rows.map((function(t){return t.length})),e=Math.max(...t);this.rows.forEach((function(t){for(;t.length<e;)t.push("")}))}calculateColumnWidths(){var t=this;this.columnWidths=this.rows[0].map((function(e,n){return function(t,e){return Math.max(...t.map((function(t){return t[e].length})))}(t.rows,n)}))}columnCountsMatch(){const t=this.rows[0].length;let e=0;return this.doc.querySelectorAll("table tr").forEach((function(t){e=Math.max(t.cells.length,e)})),t===e}formatColumn(t,e){return t+Array(this.columnWidths[e]-t.length+1).join(" ")}generateHeaderBreak(){var t=this;return`|${this.columnWidths.map((function(e,n){return Array(t.columnWidths[n]+3).join("-")})).join("|")}|`}}var m=n("mphk"),v=n("AFSh");function x(t){return t&&"string"!=typeof t?t.message:t}d.a.autoDiscover=!1;var w=n("Gapp");class b{constructor(t){var e=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.form=t,this.textarea=this.form.find("textarea.js-gfm-input"),this.enableGFM={...r.b,...n};const i=gl.GfmAutoComplete&&gl.GfmAutoComplete.dataSources||{};Object.keys(this.enableGFM).forEach((function(t){"emojis"===t||i[t]||(e.enableGFM[t]=!1)})),this.destroy(),this.setupForm(o),this.form.data("glForm",this)}destroy(){this.clearEventListeners(),this.autoComplete&&this.autoComplete.destroy(),this.formDropzone&&this.formDropzone.destroy(),this.form.data("glForm",null)}setupForm(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this.form.is(":not(.gfm-form)")||t;this.form.removeClass("js-new-note-form"),e&&(this.form.find(".div-dropzone").remove(),this.form.addClass("gfm-form"),Object(a.l)(this.form.find(".js-note-text"),this.form.find(".js-comment-button, .js-note-new-discussion")),this.autoComplete=new r.a(gl.GfmAutoComplete&&gl.GfmAutoComplete.dataSources),this.autoComplete.setup(this.form.find(".js-gfm-input"),this.enableGFM),this.formDropzone=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{parallelUploads:2};const n='<div class="div-dropzone-hover"></div>',o=Object(a.M)("paperclip","div-dropzone-icon s24"),i=t.find(".attaching-file-message"),r=t.find(".button-cancel-uploading-files"),l=t.find(".retry-uploading-link"),u=t.find(".uploading-progress"),w=t.find(".uploading-error-container"),b=t.find(".uploading-error-message"),S=t.find(".uploading-progress-container"),k=t.data("uploads-path")||window.uploads_path||null,C=gon.max_file_size||10,j=t.find(".js-gfm-input");let y,E,O,z,A,T;j.wrap('<div class="div-dropzone"></div>'),j.on("paste",(function(t){return y(t)}));const R=j.closest(".md-area"),M=t.find(".div-dropzone");if(M.parent().addClass("div-dropzone-wrapper"),M.append(n),M.find(".div-dropzone-hover").append(o),!k)return M.addClass("js-invalid-dropzone"),null;const F=M.dropzone({url:k,dictDefaultMessage:"",clickable:!0,paramName:"file",maxFilesize:C,uploadMultiple:!1,headers:v.a.headers,previewContainer:!1,...e,dragover:function(){R.addClass("is-dropzone-hover"),t.find(".div-dropzone-hover").css("opacity",.7)},dragleave:function(){R.removeClass("is-dropzone-hover"),t.find(".div-dropzone-hover").css("opacity",0)},drop:function(){R.removeClass("is-dropzone-hover"),t.find(".div-dropzone-hover").css("opacity",0),j.focus()},success(t,e){const n=this.getQueuedFiles().length+this.getUploadingFiles().length>=1;E(e.link.markdown,n),O(e.link.url)},error:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(p.a)("Attaching the file failed."),n=arguments.length>2?arguments[2]:void 0;const o=x(e||n.responseText);w.removeClass("hide"),b.html(o),r.addClass("hide")},totaluploadprogress(t){z(this.files,i),u.text(Math.round(t)+"%")},sending:function(){w.addClass("hide"),S.removeClass("hide"),r.removeClass("hide")},removedfile:function(){r.addClass("hide"),S.addClass("hide"),w.addClass("hide")},queuecomplete:function(){s()(".dz-preview").remove(),s()(".markdown-area").trigger("input"),S.addClass("hide"),r.addClass("hide")}}),D=s()(F[0]).children("textarea");r.on("click",(function(t){t.preventDefault(),t.stopPropagation(),d.a.forElement(M.get(0)).removeAllFiles(!0)})),l.on("click",(function(t){const e=d.a.forElement(t.target.closest(".js-main-target-form").querySelector(".div-dropzone")),n=e.files;t.preventDefault(),e.removeAllFiles(!0),n.map((function(t){const n=t;return n.status===d.a.ERROR&&(n.status=void 0,n.accepted=void 0),e.addFile(n)}))})),y=function(t){const e=t.originalEvent,{clipboardData:n}=e;if(n&&n.items){const o=new g(n);if(o.isTable()){t.preventDefault();const e=o.convertToTableMarkdown();E(e)}else if(!T(e)){[...n.files].forEach((function(e){if(-1!==e.type.indexOf("image")){t.preventDefault();const n=246,o=Object(f.b)(e)||"image.png",i=Object(h.y)(o,n);E(`{{${i}}}`),A(e,i)}}))}}},T=function(t){return[...t.clipboardData.items].some((function(t){return"text/plain"===t.type}))},E=function(t,e){let n=t;e&&(n+="\n\n");const o=D.get(0),i=o.selectionStart,r=o.selectionEnd,a=s()(D).val().length,l=s()(D).val().substring(0,i),c=s()(D).val().substring(r,a);return s()(D).val(l+n+c),o.setSelectionRange(i+n.length,r+n.length),o.style.height=o.scrollHeight+"px",j.get(0).dispatchEvent(new Event("input")),j.trigger("input")},O=function(e){s()(t).append(`<input type="hidden" name="files[]" value="${c()(e)}">`)};const $=function(){return S.removeClass("hide")},L=function(){return S.addClass("hide")},H=function(t){w.removeClass("hide"),b.html(t)},W=function(t,e){const n=s()(D),o=n.get(0),i=o.selectionStart,r=o.selectionEnd,a=`{{${t}}}`;n.val((function(t,n){return n.replace(a,e)})),o.setSelectionRange(i-a.length+e.length,r-a.length+e.length),n.trigger("change")};function G(t){t.preventDefault(),s()(this).closest(".gfm-form").find(".div-dropzone").click(),j.focus()}A=function(t,e){const n=new FormData;n.append("file",t,e),$(),m.a.post(k,n).then((function(t){let{data:n}=t;const o=n.link.markdown;W(e,o),L()})).catch((function(t){H(t.response.data.message),L()}))},z=function(t,e){const n=t.filter((function(t){return"uploading"===t.status||"queued"===t.status})).length,o=Object(p.f)("Attaching a file","Attaching %d files",n);e.text(o+" -")},t.find(".markdown-selector").click(G);const P=t.find(".js-attach-file-button");return P.length&&P.get(0).addEventListener("click",G),M.get(0)?d.a.forElement(M.get(0)):null}(this.form,{parallelUploads:1}),this.form.is(":not(.js-no-autosize)")&&Object(o.a)(this.textarea)),this.addEventListeners(),Object(w.b)(this.form),this.form.show(),this.isAutosizeable&&this.setupAutosize(),!0===this.textarea.data("autofocus")&&this.textarea.focus()}setupAutosize(){var t=this;this.textarea.off("autosize:resized").on("autosize:resized",this.setHeightData.bind(this)),this.textarea.off("mouseup.autosize").on("mouseup.autosize",this.destroyAutosize.bind(this)),setTimeout((function(){Object(o.a)(t.textarea),t.textarea.css("resize","vertical")}),0)}setHeightData(){this.textarea.data("height",this.textarea.outerHeight())}destroyAutosize(){const t=this.textarea.outerHeight();this.textarea.data("height")!==t&&(o.a.destroy(this.textarea),this.textarea.data("height",t),this.textarea.outerHeight(t),this.textarea.css("max-height",window.outerHeight))}clearEventListeners(){this.textarea.off("focus"),this.textarea.off("blur"),Object(w.c)(this.form)}addEventListeners(){this.textarea.on("focus",(function(){s()(this).closest(".md-area").addClass("is-focused")})),this.textarea.on("blur",(function(){s()(this).closest(".md-area").removeClass("is-focused")}))}get supportsQuickActions(){return Boolean(this.textarea.data("supports-quick-actions"))}}}}]);
//# sourceMappingURL=commons-pages.admin.topics.edit-pages.admin.topics.new-pages.groups.milestones.edit-pages.groups.mil-0035b382.59acf9d9.chunk.js.map