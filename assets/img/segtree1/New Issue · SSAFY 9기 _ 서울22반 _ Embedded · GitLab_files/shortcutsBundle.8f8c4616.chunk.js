(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{"79X9":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return j}));var o=i("yBQT"),n=i.n(o),s=(i("WmlO"),i("3R5X"),i("W9Nl"),i("N8nX"),i("c5nz"),i("OZcL"),i("x5O4"),i("lxnW"),i("5sVn"),i("4xRc"),i("LM9r"),i("51O6"),i("une/"),i("Kypc"),i("yt6R"),i("6v3E"),i("RsOv"),i("JHu5"),i("XUYm"),i("h8Et"),i("6oy4")),r=i.n(s),c=i("O6x3"),d=i.n(c),a=i("q+nE"),u=i("oj/M"),l=i("xILg"),b=i("yYHy"),p=i("uw3E"),f=i("SPw5");const g=d.a.prototype.stopCallback;d.a.prototype.stopCallback=function(e,t,i){return-1===Object(p.sb)(p.pb).indexOf(i)&&g.call(this,e,t,i)};function h(e){const t=e.closest(".md-area").find(".js-md"),i=new Map;return t.each((function(){const e=r()(this),t=e.data("md-shortcuts");null!=t&&t.length&&i.set(e,t)})),i}class j{constructor(){this.onToggleHelp=this.onToggleHelp.bind(this),this.helpModalElement=null,this.helpModalVueInstance=null,d.a.bind(Object(p.sb)(p.ob),this.onToggleHelp),d.a.bind(Object(p.sb)(p.lb),j.focusSearch),d.a.bind(Object(p.sb)(p.c),this.focusFilter.bind(this)),d.a.bind(Object(p.sb)(p.qb),j.onTogglePerfBar),d.a.bind(Object(p.sb)(p.E),j.hideAppearingContent),d.a.bind(Object(p.sb)(p.nb),j.onToggleCanary);const e=document.body.dataset.findFile;d.a.bind(Object(p.sb)(p.D),(function(){return Object(l.a)(".shortcuts-todos")})),d.a.bind(Object(p.sb)(p.d),(function(){return Object(l.a)(".dashboard-shortcuts-activity")})),d.a.bind(Object(p.sb)(p.y),(function(){return Object(l.a)(".dashboard-shortcuts-issues")})),d.a.bind(Object(p.sb)(p.z),(function(){return Object(l.a)(".dashboard-shortcuts-merge_requests")})),d.a.bind(Object(p.sb)(p.B),(function(){return Object(l.a)(".dashboard-shortcuts-review_requests")})),d.a.bind(Object(p.sb)(p.A),(function(){return Object(l.a)(".dashboard-shortcuts-projects")})),d.a.bind(Object(p.sb)(p.x),(function(){return Object(l.a)(".dashboard-shortcuts-groups")})),d.a.bind(Object(p.sb)(p.e),(function(){return Object(l.a)(".dashboard-shortcuts-milestones")})),d.a.bind(Object(p.sb)(p.C),(function(){return Object(l.a)(".dashboard-shortcuts-snippets")})),d.a.bind(Object(p.sb)(p.pb),j.toggleMarkdownPreview),null!=e&&d.a.bind(Object(p.sb)(p.j),(function(){Object(b.O)(e)})),r()(document).on("click.more_help",".js-more-help-button",(function(e){r()(this).remove(),e.preventDefault()})),r()(".js-shortcuts-modal-trigger").off("click").on("click",this.onToggleHelp),Object(f.c)()&&Object(f.a)()}onToggleHelp(e){var t=this;null!=e&&e.preventDefault&&e.preventDefault(),this.helpModalElement&&this.helpModalVueInstance?(this.helpModalVueInstance.$destroy(),this.helpModalElement.remove(),this.helpModalElement=null,this.helpModalVueInstance=null):(this.helpModalElement=document.createElement("div"),document.body.append(this.helpModalElement),this.helpModalVueInstance=new a.default({el:this.helpModalElement,components:{ShortcutsHelp:function(){return Promise.all([i.e(38),i.e(715),i.e(828)]).then(i.bind(null,"58ZD"))}},render:function(e){return e("shortcuts-help",{on:{hidden:t.onToggleHelp}})}}))}static onTogglePerfBar(e){e.preventDefault();Object(u.F)(Object(u.m)("perf_bar_enabled"))?Object(u.L)("perf_bar_enabled","false",{path:"/"}):Object(u.L)("perf_bar_enabled","true",{path:"/"}),Object(b.D)()}static onToggleCanary(e){e.preventDefault();const t=Object(u.F)(Object(u.m)("gitlab_canary"));Object(u.L)("gitlab_canary",(!t).toString(),{expires:365,path:"/"}),Object(b.D)()}static toggleMarkdownPreview(e){const t=r()(e.target),i=t.closest("form");t.hasClass("js-note-text")&&r()(".js-md-preview-button",i).focus(),r()(document).triggerHandler("markdown-preview:toggle",[e])}focusFilter(e){this.filterInput||(this.filterInput=r()("input[type=search]",".nav-controls")),this.filterInput.focus(),e.preventDefault()}static focusSearch(e){r()("#search").focus(),e.preventDefault&&e.preventDefault()}static hideAppearingContent(e){document.querySelectorAll(".tooltip, .popover").forEach((function(e){e.style.display="none"})),e.preventDefault&&e.preventDefault()}static initMarkdownEditorShortcuts(e,t){const i=h(e),o=new d.a(e[0]);e.data("local-mousetrap-instance",o),i.forEach((function(e,i){o.bind(e,(function(e){e.preventDefault(),t(i)}))}));const s=n()([...i.values()]),r=d.a.prototype.stopCallback;o.stopCallback=function(e,t,i){return!s.includes(i)&&r.call(this,e,t,i)}}static removeMarkdownEditorShortcuts(e){const t=e.data("local-mousetrap-instance");t&&h(e).forEach((function(e){t.unbind(e)}))}}},"7lWn":function(e,t){!function(e){var t=e.prototype.stopCallback;e.prototype.stopCallback=function(e,i,o){return!!this.paused||t.call(this,e,i,o)},e.prototype.pause=function(){this.paused=!0},e.prototype.unpause=function(){this.paused=!1},e.init()}(Mousetrap)},SPw5:function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return c}));var o=i("O6x3"),n=i.n(o);i("7lWn");const s=function(){try{return"true"===localStorage.getItem("shortcutsDisabled")}catch(e){return!1}};function r(){localStorage.setItem("shortcutsDisabled",!1),n.a.unpause()}function c(){localStorage.setItem("shortcutsDisabled",!0),n.a.pause()}},uw3E:function(e,t,i){"use strict";i.d(t,"ob",(function(){return d})),i.d(t,"A",(function(){return a})),i.d(t,"x",(function(){return u})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return b})),i.d(t,"C",(function(){return p})),i.d(t,"lb",(function(){return f})),i.d(t,"c",(function(){return g})),i.d(t,"y",(function(){return h})),i.d(t,"z",(function(){return j})),i.d(t,"B",(function(){return m})),i.d(t,"D",(function(){return y})),i.d(t,"qb",(function(){return O})),i.d(t,"E",(function(){return K})),i.d(t,"nb",(function(){return v})),i.d(t,"a",(function(){return k})),i.d(t,"O",(function(){return T})),i.d(t,"mb",(function(){return w})),i.d(t,"P",(function(){return S})),i.d(t,"F",(function(){return G})),i.d(t,"Z",(function(){return D})),i.d(t,"pb",(function(){return M})),i.d(t,"b",(function(){return C})),i.d(t,"hb",(function(){return E})),i.d(t,"ib",(function(){return I})),i.d(t,"kb",(function(){return R})),i.d(t,"gb",(function(){return q})),i.d(t,"jb",(function(){return F})),i.d(t,"fb",(function(){return P})),i.d(t,"q",(function(){return z})),i.d(t,"f",(function(){return L})),i.d(t,"r",(function(){return B})),i.d(t,"i",(function(){return H})),i.d(t,"j",(function(){return W})),i.d(t,"g",(function(){return A})),i.d(t,"t",(function(){return N})),i.d(t,"s",(function(){return Y})),i.d(t,"k",(function(){return _})),i.d(t,"Y",(function(){return V})),i.d(t,"l",(function(){return U})),i.d(t,"o",(function(){return J})),i.d(t,"m",(function(){return X})),i.d(t,"p",(function(){return Z})),i.d(t,"h",(function(){return Q})),i.d(t,"n",(function(){return $})),i.d(t,"u",(function(){return ee})),i.d(t,"w",(function(){return te})),i.d(t,"v",(function(){return ie})),i.d(t,"db",(function(){return oe})),i.d(t,"cb",(function(){return ne})),i.d(t,"eb",(function(){return se})),i.d(t,"ab",(function(){return re})),i.d(t,"bb",(function(){return ce})),i.d(t,"H",(function(){return de})),i.d(t,"I",(function(){return ae})),i.d(t,"G",(function(){return ue})),i.d(t,"K",(function(){return le})),i.d(t,"L",(function(){return be})),i.d(t,"U",(function(){return pe})),i.d(t,"W",(function(){return fe})),i.d(t,"T",(function(){return ge})),i.d(t,"V",(function(){return he})),i.d(t,"X",(function(){return je})),i.d(t,"S",(function(){return me})),i.d(t,"Q",(function(){return ye})),i.d(t,"R",(function(){return Oe})),i.d(t,"M",(function(){return Ke})),i.d(t,"N",(function(){return ve})),i.d(t,"J",(function(){return ke})),i.d(t,"rb",(function(){return Ce})),i.d(t,"sb",(function(){return Ee}));var o=i("odYa"),n=i.n(o),s=i("xqp2"),r=i("t9l/");const c=n()((function(){let e={};if(s.a.canUseLocalStorage())try{e=JSON.parse(localStorage.getItem("gl-keyboard-shortcuts-customizations")||"{}")}catch(e){}return e})),d={id:"globalShortcuts.toggleKeyboardShortcutsDialog",description:Object(r.a)("Toggle keyboard shortcuts help dialog"),defaultKeys:["?"]},a={id:"globalShortcuts.goToYourProjects",description:Object(r.a)("Go to your projects"),defaultKeys:["shift+p"]},u={id:"globalShortcuts.goToYourGroups",description:Object(r.a)("Go to your groups"),defaultKeys:["shift+g"]},l={id:"globalShortcuts.goToActivityFeed",description:Object(r.a)("Go to the activity feed"),defaultKeys:["shift+a"]},b={id:"globalShortcuts.goToMilestoneList",description:Object(r.a)("Go to the milestone list"),defaultKeys:["shift+l"]},p={id:"globalShortcuts.goToYourSnippets",description:Object(r.a)("Go to your snippets"),defaultKeys:["shift+s"]},f={id:"globalShortcuts.startSearch",description:Object(r.a)("Start search"),defaultKeys:["s","/"]},g={id:"globalShortcuts.focusFilterBar",description:Object(r.a)("Focus filter bar"),defaultKeys:["f"]},h={id:"globalShortcuts.goToYourIssues",description:Object(r.a)("Go to your issues"),defaultKeys:["shift+i"]},j={id:"globalShortcuts.goToYourMergeRequests",description:Object(r.a)("Go to your merge requests"),defaultKeys:["shift+m"]},m={id:"globalShortcuts.goToYourReviewRequests",description:Object(r.a)("Go to your review requests"),defaultKeys:["shift+r"]},y={id:"globalShortcuts.goToYourTodoList",description:Object(r.a)("Go to your To-Do list"),defaultKeys:["shift+t"]},O={id:"globalShortcuts.togglePerformanceBar",description:Object(r.a)("Toggle the Performance Bar"),defaultKeys:["p b"]},K={id:"globalShortcuts.hideAppearingContent",description:Object(r.a)("Hide tooltips or popovers"),defaultKeys:["esc"]},v={id:"globalShortcuts.toggleCanary",description:Object(r.a)("Toggle GitLab Next"),defaultKeys:["g x"]},k={id:"editing.boldText",description:Object(r.a)("Bold text"),defaultKeys:["mod+b"],customizable:!1},T={id:"editing.italicText",description:Object(r.a)("Italic text"),defaultKeys:["mod+i"],customizable:!1},w={id:"editing.strikethroughText",description:Object(r.a)("Strikethrough text"),defaultKeys:["mod+shift+x"],customizable:!1},S={id:"editing.linkText",description:Object(r.a)("Link text"),defaultKeys:["mod+k"],customizable:!1},G={id:"editing.indentLine",description:Object(r.a)("Indent line"),defaultKeys:["mod+]"],customizable:!1},D={id:"editing.outdentLine",description:Object(r.a)("Outdent line"),defaultKeys:["mod+["],customizable:!1},M={id:"editing.toggleMarkdownPreview",description:Object(r.a)("Toggle Markdown preview"),defaultKeys:["ctrl+shift+p","command+shift+p"]},x={id:"editing.editRecentComment",description:Object(r.a)("Edit your most recent comment in a thread (from an empty textarea)"),defaultKeys:["up"]},C={id:"wiki.editWikiPage",description:Object(r.a)("Edit wiki page"),defaultKeys:["e"]},E={id:"repositoryGraph.scrollLeft",description:Object(r.a)("Scroll left"),defaultKeys:["left","h"]},I={id:"repositoryGraph.scrollRight",description:Object(r.a)("Scroll right"),defaultKeys:["right","l"]},R={id:"repositoryGraph.scrollUp",description:Object(r.a)("Scroll up"),defaultKeys:["up","k"]},q={id:"repositoryGraph.scrollDown",description:Object(r.a)("Scroll down"),defaultKeys:["down","j"]},F={id:"repositoryGraph.scrollToTop",description:Object(r.a)("Scroll to top"),defaultKeys:["shift+up","shift+k"]},P={id:"repositoryGraph.scrollToBottom",description:Object(r.a)("Scroll to bottom"),defaultKeys:["shift+down","shift+j"]},z={id:"project.goToOverview",description:Object(r.a)("Go to the project's overview page"),defaultKeys:["g p"]},L={id:"project.goToActivityFeed",description:Object(r.a)("Go to the project's activity feed"),defaultKeys:["g v"]},B={id:"project.goToReleases",description:Object(r.a)("Go to releases"),defaultKeys:["g r"]},H={id:"project.goToFiles",description:Object(r.a)("Go to files"),defaultKeys:["g f"]},W={id:"project.goToFindFile",description:Object(r.a)("Go to find file"),defaultKeys:["t"]},A={id:"project.goToCommits",description:Object(r.a)("Go to commits"),defaultKeys:["g c"]},N={id:"project.goToRepoGraph",description:Object(r.a)("Go to repository graph"),defaultKeys:["g n"]},Y={id:"project.goToRepoCharts",description:Object(r.a)("Go to repository charts"),defaultKeys:["g d"]},_={id:"project.goToIssues",description:Object(r.a)("Go to issues"),defaultKeys:["g i"]},V={id:"project.newIssue",description:Object(r.a)("New issue"),defaultKeys:["i"]},U={id:"project.goToIssueBoards",description:Object(r.a)("Go to issue boards"),defaultKeys:["g b"]},J={id:"project.goToMergeRequests",description:Object(r.a)("Go to merge requests"),defaultKeys:["g m"]},X={id:"project.goToJobs",description:Object(r.a)("Go to jobs"),defaultKeys:["g j"]},Z={id:"project.goToMetrics",description:Object(r.a)("Go to metrics"),defaultKeys:["g l"]},Q={id:"project.goToEnvironments",description:Object(r.a)("Go to environments"),defaultKeys:["g e"]},$={id:"project.goToKubernetes",description:Object(r.a)("Go to kubernetes"),defaultKeys:["g k"]},ee={id:"project.goToSnippets",description:Object(r.a)("Go to snippets"),defaultKeys:["g s"]},te={id:"project.goToWiki",description:Object(r.a)("Go to wiki"),defaultKeys:["g w"]},ie={id:"project.goToWebIDE",description:Object(r.a)("Open in Web IDE"),defaultKeys:["."]},oe={id:"projectFiles.moveSelectionUp",description:Object(r.a)("Move selection up"),defaultKeys:["up"]},ne={id:"projectFiles.moveSelectionDown",description:Object(r.a)("Move selection down"),defaultKeys:["down"]},se={id:"projectFiles.openSelection",description:Object(r.a)("Open Selection"),defaultKeys:["enter"]},re={id:"projectFiles.goBack",description:Object(r.a)("Go back (while searching for files)"),defaultKeys:["esc"]},ce={id:"projectFiles.goToFilePermalink",description:Object(r.a)("Go to file permalink (while viewing a file)"),defaultKeys:["y"]},de={id:"issuables.commentReply",description:Object(r.a)("Comment/Reply (quoting selected text)"),defaultKeys:["r"]},ae={id:"issuables.editDescription",description:Object(r.a)("Edit description"),defaultKeys:["e"]},ue={id:"issuables.changeLabel",description:Object(r.a)("Change label"),defaultKeys:["l"]},le={id:"issuesMRs.changeAssignee",description:Object(r.a)("Change assignee"),defaultKeys:["a"]},be={id:"issuesMRs.changeMilestone",description:Object(r.a)("Change milestone"),defaultKeys:["m"]},pe={id:"mergeRequests.nextFileInDiff",description:Object(r.a)("Next file in diff"),defaultKeys:["]","j"]},fe={id:"mergeRequests.previousFileInDiff",description:Object(r.a)("Previous file in diff"),defaultKeys:["[","k"]},ge={id:"mergeRequests.goToFile",description:Object(r.a)("Go to file"),defaultKeys:["mod+p","t"],customizable:!1},he={id:"mergeRequests.nextUnresolvedDiscussion",description:Object(r.a)("Next unresolved discussion"),defaultKeys:["n"]},je={id:"mergeRequests.previousUnresolvedDiscussion",description:Object(r.a)("Previous unresolved discussion"),defaultKeys:["p"]},me={id:"mergeRequests.copySourceBranchName",description:Object(r.a)("Copy source branch name"),defaultKeys:["b"]},ye={id:"mergeRequestCommits.nextCommit",description:Object(r.a)("Next commit"),defaultKeys:["c"]},Oe={id:"mergeRequestCommits.previousCommit",description:Object(r.a)("Previous commit"),defaultKeys:["x"]},Ke={id:"issues.nextDesign",description:Object(r.a)("Next design"),defaultKeys:["right"]},ve={id:"issues.previousDesign",description:Object(r.a)("Previous design"),defaultKeys:["left"]},ke={id:"issues.closeDesign",description:Object(r.a)("Close design"),defaultKeys:["esc"]},Te={id:"webIDE.goToFile",description:Object(r.a)("Go to file"),defaultKeys:["mod+p"]},we={id:"webIDE.commit",description:Object(r.a)("Commit (when editing commit message)"),defaultKeys:["mod+enter"],customizable:!1},Se={id:"metrics.expandPanel",description:Object(r.a)("Expand panel"),defaultKeys:["e"],customizable:!1},Ge={id:"metrics.viewLogs",description:Object(r.a)("View logs"),defaultKeys:["l"],customizable:!1},De={id:"metrics.downloadCSV",description:Object(r.a)("Download CSV"),defaultKeys:["d"],customizable:!1},Me={id:"metrics.copyLinkToChart",description:Object(r.a)("Copy link to chart"),defaultKeys:["c"],customizable:!1},xe={id:"metrics.showAlerts",description:Object(r.a)("Alerts"),defaultKeys:["a"],customizable:!1},Ce=[{id:"globalShortcuts",name:Object(r.a)("Global Shortcuts"),keybindings:[d,a,u,l,b,p,f,g,h,j,m,y,O,K]},{id:"editing",name:Object(r.a)("Editing"),keybindings:[k,T,w,S,M,x]},{id:"wiki",name:Object(r.a)("Wiki"),keybindings:[C]},{id:"repositoryGraph",name:Object(r.a)("Repository Graph"),keybindings:[E,I,R,q,F,P]},{id:"project",name:Object(r.a)("Project"),keybindings:[z,L,B,H,W,A,N,Y,_,V,U,J,X,Z,Q,$,ee,te,ie]},{id:"projectFiles",name:Object(r.a)("Project Files"),keybindings:[oe,ne,se,re,ce]},{id:"issuables",name:Object(r.a)("Epics, issues, and merge requests"),keybindings:[de,ae,ue]},{id:"issuesMRs",name:Object(r.a)("Issues and merge requests"),keybindings:[le,be]},{id:"mergeRequests",name:Object(r.a)("Merge requests"),keybindings:[pe,fe,ge,he,je,me]},{id:"mergeRequestCommits",name:Object(r.a)("Merge request commits"),keybindings:[ye,Oe]},{id:"issues",name:Object(r.a)("Issues"),keybindings:[Ke,ve,ke]},{id:"webIDE",name:Object(r.a)("Web IDE"),keybindings:[Te,we]},{id:"metrics",name:Object(r.a)("Metrics"),keybindings:[Se,Ge,De,Me,xe]},{id:"misc",name:Object(r.a)("Miscellaneous"),keybindings:[v]}],Ee=function(e){return function(e){return!("customizable"in e)||Boolean(e.customizable)}(e)&&c()[e.id]||e.defaultKeys}}}]);
//# sourceMappingURL=shortcutsBundle.8f8c4616.chunk.js.map