(this.webpackJsonp=this.webpackJsonp||[]).push([[21],{"580c":function(e,t){var n={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+n[e]}},"7wPF":function(e,t){e.exports=/<%-([\s\S]+?)%>/g},A4KP:function(e,t,n){var a=n("s2Ra"),s=n("T5M9"),r=n("m2qY"),i=s((function(e,t){try{return a(e,void 0,t)}catch(e){return r(e)?e:new Error(e)}}));e.exports=i},T1XL:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));const a={project_id:"projectId",group_id:"groupId",skip_ldap:"skipLdap",todo_filter:"todoFilter",todo_state_filter:"todoStateFilter",current_user:"showCurrentUser",author_id:"authorId",skip_users:"skipUsers",states:"states"},s=["active","blocked"]},VVgp:function(e,t,n){var a=n("A1CF"),s={escape:n("7wPF"),evaluate:n("ejHb"),interpolate:n("h1XE"),variable:"",imports:{_:{escape:a}}};e.exports=s},"YOf/":function(e,t,n){var a=n("79w4"),s=Object.prototype,r=s.hasOwnProperty;e.exports=function(e,t,n,i){return void 0===e||a(e,s[n])&&!r.call(i,n)?t:e}},ZRbW:function(e,t,n){var a=n("Iwy8"),s=n("/e4I");e.exports=function(e,t){return e&&e.length?s(e,a(t,2)):[]}},ejHb:function(e,t){e.exports=/<%([\s\S]+?)%>/g},h1XE:function(e,t){e.exports=/<%=([\s\S]+?)%>/g},hnH5:function(e,t,n){var a=n("8RB9"),s=n("ZTWp"),r=n("LrAm"),i=s((function(e,t,n,s){a(t,r(t),e,s)}));e.exports=i},lb6a:function(e,t,n){var a=n("hnH5"),s=n("A4KP"),r=n("0fyf"),i=n("YOf/"),l=n("580c"),o=n("m2qY"),u=n("kTp2"),d=n("x/yk"),c=n("h1XE"),f=n("VVgp"),p=n("MfoV"),g=/\b__p \+= '';/g,m=/\b(__p \+=) '' \+/g,v=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/[()=,{}\[\]\/\s]/,b=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_=/($^)/,w=/['\n\r\u2028\u2029\\]/g,j=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var y=f.imports._.templateSettings||f;n&&u(e,t,n)&&(t=void 0),e=p(e),t=a({},t,y,i);var x,S,$=a({},t.imports,y.imports,i),O=d($),U=r($,O),C=0,k=t.interpolate||_,R="__p += '",E=RegExp((t.escape||_).source+"|"+k.source+"|"+(k===c?b:_).source+"|"+(t.evaluate||_).source+"|$","g"),I=j.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(E,(function(t,n,a,s,r,i){return a||(a=s),R+=e.slice(C,i).replace(w,l),n&&(x=!0,R+="' +\n__e("+n+") +\n'"),r&&(S=!0,R+="';\n"+r+";\n__p += '"),a&&(R+="' +\n((__t = ("+a+")) == null ? '' : __t) +\n'"),C=i+t.length,t})),R+="';\n";var A=j.call(t,"variable")&&t.variable;if(A){if(h.test(A))throw new Error("Invalid `variable` option passed into `_.template`")}else R="with (obj) {\n"+R+"\n}\n";R=(S?R.replace(g,""):R).replace(m,"$1").replace(v,"$1;"),R="function("+(A||"obj")+") {\n"+(A?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(x?", __e = _.escape":"")+(S?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+R+"return __p\n}";var N=s((function(){return Function(O,I+"return "+R).apply(void 0,U)}));if(N.source=R,o(N))throw N;return N}},r5Uk:function(e,t,n){"use strict";n.r(t);var a=n("ZRbW"),s=n.n(a),r=n("lb6a"),i=n.n(r),l=n("A1CF"),o=n.n(l),u=(n("WmlO"),n("3R5X"),n("W9Nl"),n("uHfJ"),n("R0RX"),n("ujLG"),n("HaUQ"),n("JHu5"),n("XUYm"),n("h8Et"),n("6oy4")),d=n.n(u),c=n("T1XL"),f=n("rl6E"),p=n("Daar"),g=n("16BQ"),m=n("mphk"),v=n("oj/M"),h=n("t9l/");n("0no1"),n("gdbl");const b=function(e,t){return Object.keys(t).reduce((function(n,a){const s=t[a];return n[a]=e[s]||null,n}),{})};function _(e,t){var n=this;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=null==t?void 0:t.toString().match(".(.+$)")[1],l=d()(t||".js-user-search");this.users=this.users.bind(this),this.usersPath="/-/autocomplete/users.json",null!=e&&(this.currentUser="object"==typeof e?e:JSON.parse(e));const{handleClick:u,states:c}=a;l.each((function(e,t){const a=n,l=d()(t),p={states:c,projectId:l.data("projectId"),groupId:l.data("groupId"),showCurrentUser:l.data("currentUser"),todoFilter:l.data("todoFilter"),todoStateFilter:l.data("todoStateFilter"),iid:l.data("iid"),issuableType:l.data("issuableType"),targetBranch:l.data("targetBranch"),authorId:l.data("authorId"),showSuggested:l.data("showSuggested")},b=l.data("nullUser"),_=l.data("nullUserDefault"),w=l.data("showMenuAbove"),j=l.data("anyUser"),y=l.data("firstUser"),x=l.data("defaultLabel"),S=l.data("issueUpdate"),$=l.closest(".selectbox"),O=$.next(".assign-to-me-link");let U=$.closest(".block");const C=l.data("abilityName");let k=U.find(".value");const R=U.find(".sidebar-collapsed-user"),E=U.find(".block-loading").addClass("gl-display-none"),I=_&&b?0:null;let A,N,D,T=l.data("selected");const L=l.data("suggestedReviewersHelpPath"),M=i()(`<div class="gl-display-flex gl-align-items-center">\n         <%- header %>\n         <a\n           title="${Object(h.g)("SuggestedReviewers|Learn about suggested reviewers")}"\n           href="${L}"\n           rel="noopener"\n           target="_blank"\n           aria-label="${Object(h.g)("SuggestedReviewers|Suggested reviewers help link")}"\n           class="gl-hover-bg-transparent! gl-p-0! has-tooltip">\n           ${Object(v.M)("question-o","gl-ml-3 gl-icon s16")}\n         </a>\n       </div>`);void 0===T&&(T=I);const F=function(){const e=l.closest(".selectbox").find(`input[name='${l.data("fieldName")}'][value=0]`);e&&e.remove();const t=l.data("currentUserInfo")||{},n=a.currentUser||{},s=l.data("fieldName"),r=t.name,o=t.id||n.id,u=i()('\n        <input type="hidden" name="<%- fieldName %>"\n          data-meta="<%- userName %>"\n          value="<%- userId %>" />\n        ')({fieldName:s,userName:r,userId:o});$?l.parent().before(u):l.after(u)};U[0]&&U[0].addEventListener("assignYourself",F);const H=function(){return $.find(`input[name="${l.data("fieldName")}"]`)},P=function(){return H().map((function(e,t){return parseInt(t.value,10)})).get()},q=function(){const e=l.data("maxSelect");if(e){const t=P();if(t.length>e){const e=t[0];l.closest(".selectbox").find(`input[name='${l.data("fieldName")}'][value=${e}]`).remove(),l.hasClass(r)?emitSidebarEvent("sidebar.removeReviewer",{id:e}):emitSidebarEvent("sidebar.removeAssignee",{id:e})}}},B=function(e,t){const n=P().filter((function(e){return 0!==e})),a=H().map((function(e,t){return{name:t.dataset.meta,value:parseInt(t.value,10)}})).filter((function(e){return 0!==e.id})).get(0);if(0===n.length)return Object(h.g)("UsersSelect|Unassigned");if(1===n.length)return a.name;if(t){const t=n.filter((function(t){return t!==e.id}));return Object(h.h)(Object(h.g)("UsersSelect|%{name} + %{length} more"),{name:e.name,length:t.length})}return Object(h.h)(Object(h.g)("UsersSelect|%{name} + %{length} more"),{name:a.name,length:n.length-1})};return O.on("click",(function(e){if(e.preventDefault(),d()(e.currentTarget).hide(),l.data("multiSelect")){F(),q();const e=l.data("currentUserInfo");l.find(".dropdown-toggle-text").text(B(e)).removeClass("is-default")}else{const e=d()(`input[name="${l.data("fieldName")}"]`);e.val(gon.current_user_id),T=e.val(),l.find(".dropdown-toggle-text").text(gon.current_user_fullname).removeClass("is-default")}})),U.on("click",".js-assign-yourself",(function(e){return e.preventDefault(),A(a.currentUser.id)})),A=function(e){const t={};return t[C]={},t[C].assignee_id=null!=e?e:null,E.removeClass("gl-display-none"),l.trigger("loading.gl.dropdown"),m.a.put(S,t).then((function(e){let t,{data:n}=e,a={};return l.trigger("loaded.gl.dropdown"),E.addClass("gl-display-none"),n.assignee?(a={name:n.assignee.name,username:n.assignee.username,avatar:n.assignee.avatar_url},t=o()(a.name)):(a={name:Object(h.g)("UsersSelect|Unassigned"),username:"",avatar:""},t=Object(h.g)("UsersSelect|Assignee")),k.html(N(a)),R.attr("title",t),Object(g.c)(R),R.html(D(a))}))},D=i()(`<% if( avatar ) { %> <a class="author-link" href="/<%- username %>"> <img width="24" class="avatar avatar-inline s24" alt="" src="<%- avatar %>"> </a> <% } else { %> ${Object(v.M)("user")} <% } %>`),N=i()(`<% if (username) { %> <a class="author-link gl-font-weight-bold" href="/<%- username %>"> <% if( avatar ) { %> <img width="32" class="avatar avatar-inline s32" alt="" src="<%- avatar %>"> <% } %> <span class="author"><%- name %></span> <span class="username"> @<%- username %> </span> </a> <% } else { %> <span class="no-value assign-yourself">\n      ${Object(h.h)(Object(h.g)("UsersSelect|No assignee - %{openingTag} assign yourself %{closingTag}"),{openingTag:'<a href="#" class="js-assign-yourself">',closingTag:"</a>"})}</span> <% } %>`),Object(f.a)(l,{showMenuAbove:w,data(e,t){var n=this;return a.users(e,p,(function(a){(n.instance||n.options.instance).options.processData(e,a,t)}))},processData(e,t,n){const a=t.filter((function(e){return!e.type}));let r,i,o,u,d,c,f=a;if(l.hasClass("js-multiselect")&&0===e.length){const e=H(),t=s()(e,(function(e){return e.value})).filter((function(e){const t=parseInt(e.value,10);return!f.find((function(e){return e.id===t}))&&0!==t})).map((function(e){const t=parseInt(e.value,10),{avatarUrl:n,avatar_url:a,name:s,username:r,canMerge:i}=e.dataset;return{avatar_url:n||a||gon.default_avatar_url,id:t,name:s,username:r,can_merge:Object(v.F)(i)}}));f=a.concat(t)}if(0===e.length){if(c=0,y)for(i=0,o=f.length;i<o;i+=1)if(d=f[i],d.username===y){f.splice(i,1),f.unshift(d);break}if(b&&(c+=1,f.unshift({beforeDivider:!0,name:Object(h.g)("UsersSelect|Unassigned"),id:0})),j&&(c+=1,u=j,!0===u&&(u=Object(h.g)("UsersSelect|Any User")),r={beforeDivider:!0,name:u,id:null},f.unshift(r)),c&&f.splice(c,0,{type:"divider"}),l.hasClass("js-multiselect")){const e=P().filter((function(e){return 0!==e}));if(l.data("showSuggested")){const t=this.suggestedUsers(f);t.length&&(f=f.filter((function(t){return!t.suggested||t.suggested&&-1!==e.indexOf(t.id)})),f.splice(c+1,0,...t))}if(e.length>0){l.data("dropdownHeader")&&(c+=1,f.splice(c,0,{type:"header",content:l.data("dropdownHeader")}));const t=f.filter((function(t){return-1!==e.indexOf(t.id)})).sort((function(e,t){return e.name>t.name}));f=f.filter((function(t){return-1===e.indexOf(t.id)})),t.forEach((function(e){c+=1,f.splice(c,0,e)})),f.splice(c+1,0,{type:"divider"})}}}n(f),w&&l.data("deprecatedJQueryDropdown").positionMenuAbove()},suggestedUsers(e){const t=P().filter((function(e){return 0!==e})),n=e.filter((function(e){return e.suggested&&-1===t.indexOf(e.id)}));if(!n.length)return[];return[{type:"header",content:M({header:l.data("suggestedReviewersHeader")})},...n,{type:"header",content:l.data("allMembersHeader")}]},filterable:!0,filterRemote:!0,search:{fields:["name","username"]},selectable:!0,fieldName:l.data("fieldName"),toggleLabel(e,t,n){const a=n.filterInput.val();if(this.multiSelect&&""===a){const e=n.filteredFullData(),t=n.parseData.bind(n);this.processData(a,e,t)}return this.multiSelect?B(e,d()(t).hasClass("is-active")):e&&"id"in e&&d()(t).hasClass("is-active")?(l.find(".dropdown-toggle-text").removeClass("is-default"),e.text?e.text:e.name):(l.find(".dropdown-toggle-text").addClass("is-default"),x)},defaultLabel:x,hidden(){var e,t;l.hasClass("js-multiselect")&&(l.hasClass(r)?(null!==(e=window.gon)&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.realtimeReviewers&&(l.data("deprecatedJQueryDropdown").clearMenu(),l.closest(".selectbox").children('input[type="hidden"]').remove()),emitSidebarEvent("sidebar.saveReviewers")):emitSidebarEvent("sidebar.saveAssignees"));l.data("alwaysShowSelectbox")||($.hide(),U=$.closest(".block"),k=U.find(".value"),k.css("display",""))},multiSelect:l.hasClass("js-multiselect"),inputMeta:l.data("inputMeta"),clicked(e){const{$el:t,e:n,isMarking:a}=e,s=e.selectedObj;if(Object(g.b)(t),l.hasClass("js-multiselect")){const e=t.hasClass("is-active"),n=l.closest(".selectbox").find(`input[name='${l.data("fieldName")}'][value!=0]`);if(q(),s.beforeDivider&&"unassigned"===s.name.toLowerCase())n.each((function(e,t){t.remove()})),l.hasClass(r)?emitSidebarEvent("sidebar.removeAllReviewers"):emitSidebarEvent("sidebar.removeAllAssignees");else if(e){l.hasClass(r)?emitSidebarEvent("sidebar.addReviewer",s):emitSidebarEvent("sidebar.addAssignee",s);const e=l.closest(".selectbox").find(`input[name='${l.data("fieldName")}'][value=0]`);e&&e.remove()}else 0===n.length&&this.addInput(l.data("fieldName"),0,{}),l.hasClass(r)?emitSidebarEvent("sidebar.removeReviewer",s):emitSidebarEvent("sidebar.removeAssignee",s);P().find((function(e){return e===gon.current_user_id}))?O.hide():O.show()}const i=d()("body").attr("data-page"),o="projects:issues:index"===i,c=i==i&&"projects:merge_requests:index"===i;if(l.hasClass("js-filter-bulk-update")||l.hasClass("js-issuable-form-dropdown")){n.preventDefault();const e=s.id!==T;return T=e?s.id:I,void(T===gon.current_user_id?d()(".assign-to-me-link").hide():d()(".assign-to-me-link").show())}if(u)n.preventDefault(),u(s,a);else{if(l.hasClass("js-filter-submit")&&(o||c))return Issuable.filterResults(l.closest("form"));if(l.hasClass("js-filter-submit"))return l.closest("form").submit();if(!l.hasClass("js-multiselect")){const e=l.closest(".selectbox").find(`input[name='${l.data("fieldName")}']`).val();return A(e)}}l.data("maxSelect")&&P().length===l.data("maxSelect")&&l.dropdown("toggle")},id:e=>e.id,opened(e){const t=d()(e.currentTarget),n=P();function a(e){t.find(`li[data-user-id="${e}"] .dropdown-menu-user-link`).addClass("is-active")}t.find(".is-active").removeClass("is-active"),n.length>0?P().forEach((function(e){return a(e)})):a(T)},updateLabel:l.data("dropdownTitle"),renderRow(e){const t=e.username?"@"+e.username:"",n=e.avatar_url?e.avatar_url:gon.default_avatar_url;let s=!1;if(this.multiSelect){s=P().find((function(t){return e.id===t}));const{fieldName:t}=this;l.closest(".selectbox").find(`input[name='${t}'][value='${e.id}']`).length&&(s=!0)}else s=e.id===T;let i="";return null!=e.beforeDivider?o()(e.name):i=`<img src='${n}' class='avatar avatar-inline gl-m-0!' width='32' />`,a.renderRow(p.issuableType,e,s,t,i,r)}})}))}window.emitSidebarEvent=window.emitSidebarEvent||d.a.noop,_.prototype.users=function(e,t,n){const a=this.buildUrl(this.usersPath),s={search:e,active:!0,...b(t,c.b)},r="merge_request"===t.issuableType,i=!t.issuableType&&t.iid&&t.targetBranch,l=!t.issuableType&&!t.iid&&t.targetBranch;return(r||i||l)&&(s.merge_request_iid=t.iid||null,s.approval_rules=!0),r&&t.showSuggested&&(s.show_suggested=!0),l&&(s.target_branch=t.targetBranch||null),m.a.get(a,{params:s}).then((function(e){let{data:t}=e;n(t)}))},_.prototype.buildUrl=function(e){return null!=gon.relative_url_root&&(e=gon.relative_url_root.replace(/\/$/,"")+e),e},_.prototype.renderRow=function(e,t,n,a,s,r){const i="merge_request"!==e||t.can_merge?"":Object(h.a)("Cannot merge"),l=`${!0===n?"is-active":""} ${i?"has-tooltip":""}`,u=i?`data-container="body" data-placement="left" data-title="${i}"`:"",d=t.suggested?"data-user-suggested="+t.suggested:"",c=null!=t&&t.availability&&Object(p.a)(t.availability)?Object(h.h)(Object(h.a)("%{name} (Busy)"),{name:t.name}):t.name;return`\n    <li data-user-id=${t.id} ${d}>\n      <a href="#" class="dropdown-menu-user-link gl-display-flex! gl-align-items-center ${l}" ${u}>\n        ${this.renderRowAvatar(e,t,s)}\n        <span class="gl-display-flex gl-flex-direction-column gl-overflow-hidden">\n          <strong class="dropdown-menu-user-full-name gl-font-weight-bold">\n            ${o()(c)}\n          </strong>\n          ${a?`<span class="dropdown-menu-user-username gl-text-gray-400">${o()(a)}</span>`:""}\n          ${this.renderApprovalRules(r,t.applicable_approval_rules)}\n        </span>\n      </a>\n    </li>\n  `},_.prototype.renderRowAvatar=function(e,t,n){if(t.beforeDivider)return n;return`<span class="gl-relative gl-mr-3">\n    ${n}\n    ${"merge_request"!==e||t.can_merge?"":Object(v.M)("warning-solid","s12 merge-icon")}\n  </span>`},_.prototype.renderApprovalRules=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=t.length;if(null==e||!e.includes("reviewer")||!n)return"";const[a]=t,s=Object(h.h)(Object(h.a)("(+%{count}&nbsp;rules)"),{count:n}),r=n>1?`<span class="gl-ml-2">${s}</span>`:"",i="code_owner"===a.rule_type?Object(h.a)("Code Owner"):o()(a.name);return`<div class="gl-display-flex gl-font-sm">\n    <span class="gl-text-truncate" title="${i}">${i}</span>\n    ${r}\n  </div>`};t.default=_}}]);
//# sourceMappingURL=21.e98652ab.chunk.js.map