/*! Powered by kodbox;hash:7e3a58df8115c8eb4c4c [2022/05/09 21:52:13] */
!function(s){function t(t){for(var e,n,i=t[0],o=t[1],r=0,a=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&a.push(d[n][0]),d[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(u&&u(t);a.length;)a.shift()()}var n={},d={"1":0};function c(t){if(n[t])return n[t].exports;var e=n[t]={"i":t,"l":!1,"exports":{}};return s[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(o){var t=[],n=d[o];if(0!==n)if(n)t.push(n[2]);else{var e=new Promise(function(t,e){n=d[o]=[t,e]});t.push(n[2]=e);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=function u(t){return c.p+""+({"4":"vendor"}[t]||t)+".js?v=7e3a58df"}(o);var a=new Error;i=function(t){r.onerror=r.onload=null,clearTimeout(s);var e=d[o];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+o+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,e[1](a)}d[o]=undefined}};var s=setTimeout(function(){i({"type":"timeout","target":r})},12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(t)},c.m=s,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{"enumerable":!0,"get":n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(t,"__esModule",{"value":!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{"enumerable":!0,"value":e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var e=window["webpackJsonp"]=window["webpackJsonp"]||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var u=i;c(c.s=626)}({"18":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),window.Promise||(window.Promise=Promise);var i="./static/";if(window.API_HOST){var o=API_HOST.split("/");o.pop(),i=o.join("/")+"/static/"}window.API_URL=function(t,e){var n=window.API_HOST,i="&";return _.isNull(e)||_.isUndefined(e)?n+(t||""):(-1==n.indexOf("?")&&(i="?"),Cookie.accessToken&&(e+="&accessToken="+Cookie.accessToken),n+(t||"")+i+(e||""))},window.API_URL_TRUE=function(t){var e=(t=t||window.location.href).replace(API_URL(),"").replace(G.kod.APP_HOST,"").replace("?","&");return G.kod.APP_HOST+"?"+e};var r=window.STATIC_PATH||i;n.p=r+"app/dist/";var a=n.e(4).then(function(t){n(519),n(520),n(521),n(522),n(103),n(109),n(523),n(524),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(110),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(540),n(541),n(542),n(543),n(544),window.Pinyin=n(545)["default"],n(546),n(547),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(107),n(108),n(106),n(556),n(557),n(558),n(559),n(560),n(104),n(105),n(561),window.Backbone.$=$,window.Events=Backbone.Events,u()}.bind(null,n))["catch"](n.oe),s=Date.now(),u=function u(){var n=seajs.use;seajs.use=function(){var t=_.toArray(arguments),i=function i(t){var e=_.get(window,"G.kod.version",""),n=_.get(window,"G.kod.build","");return!(e=1==_.get(window,"G.kod.ENV_DEV")?s:e+"."+n)||_.includes(t,"&v=")||_.includes(t,"?v=")?t:_.includes(t,"?")?t:(_.endsWith(t,".htm")||_.endsWith(t,".html")||_.endsWith(t,".css")||_.endsWith(t,".json")||_.endsWith(t,".js")||(t+=".js"),t+"?v="+e)},e=t[0];_.isString(e)?t[0]=i(e):_.isArray(e)&&(t[0]=_.map(e,function(t){return i(t)})),n.apply(seajs,t)},window._ktime=dateFormat(!1,"dhi"),window.requireAsync=seajs.use,window.requirePromise=function(t){var e=$.Deferred();return seajs.use(t,e.resolve),e}};(function m(){if("development"==window.lessENV){var i=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e){var n=Array.prototype.slice.call(arguments,0);return e.match(/\.less$/)&&(n[1]=e+"?_t="+s),i.apply(this,n)}}})();var d=function d(){var t=window.STATIC_PATH_ALL||i;requireAsync([t+"style/lib/alifont/iconfont.css",t+"style/lib/font-icon/style.css"])},c=function c(){var t=API_URL("user/view/plugins","v="+time());return requirePromise(t)},l=function l(){Events.trigger("user.optionLoadBefore");var t=API_URL("user/view/options","v="+time());return requirePromise("text!"+t).then(function(t){if(t&&((t=JSON.parse(t))&&t.code&&t.data)){window.G=_.extend(window.G||{},t.data);var e=G.kod.staticPath,n=API_URL();if(!_.startsWith(e,"http")){if(_.startsWith(e,"/"))e=$.parseUrl(n).origin+e;else e=n.substr(0,_.lastIndexOf(n,"/"))+"/"+e;e=e.replace("/./","/")}window.STATIC_PATH_ALL=window.STATIC_PATH_ALL||G.kod.APP_HOST+"static/",window.STATIC_PATH=e,window.VENDER_PATH=window.STATIC_PATH+"app/vender/",window.API_HOST=G.kod.appApi,$.dialog.defaults.path=window.STATIC_PATH+"app/vender/artDialog-icon/",requireAsync(window.STATIC_PATH+"style/lib/alifont/iconfont.js"),d(),Events.trigger("user.optionLoadAfter")}})},f=function f(){var t=API_URL("user/view/lang","v="+time());return requirePromise("text!"+t).then(function(t){if(t){try{t=JSON.parse(t)}catch(e){return p(t)}t&&t.code&&t.data&&(window.LNG=_.extend(window.LNG||{},_.get(t,"data.list")),window.G.lang=_.get(t,"data.lang"),LNG.find=function(n){var i={};return _.each(LNG,function(t,e){_.includes(t,n)&&(i[e]=t)}),i},LNG.set=function(t){t&&_.isObject(t)&&_.extend(LNG,t)},LNG.make=function(t){var e=_.toArray(arguments),n=LNG[t];if(!n)return t;for(var i=1;i<e.length;i++)n=n.replace(/(%d|%s)/,e[i]);return n},LNG.space='<i class="char-space"></i>',LNG.logo=function(t){var e=window.G.system.options||{},n="image"==e.systemNameType,i=e.systemLogo,o=STATIC_PATH+"images/common/logo.png";_.includes(["zh-CN","zh-TW"],G.lang)||(o=STATIC_PATH+"images/common/logo-en.png");var r=G.kod.companyInfo||!1;if(r&&"text"==r.logoType&&r.logoText)return'<span class="logo-text">'+r.logoText+"</span>";var a=function a(t){return'<img src="'+t+'" onerror="this.src=\''+o+"'\"/>"},s=function s(t){return'<span class="logo-text">'+t+"</span>"};if("copyright"!=t)return"login"==t?n?a(i):s(e.systemName):a(i);var u=LNG["common.copyright.name"];return"A"==window.G.kod.versionType&&LNG["common.oemCompany"]!=window.md5(_.get(window,"G.kod.channel",""))&&(i=o,u="kodbox"),n?a(i):s(u)})}})},p=function p(t){Tips.close("System error!",!1);var e=$.dialog.list["xhrErrorDialog"];e=e||$.dialog({"id":"xhrErrorDialog","padding":0,"width":"55%","height":"60%","fixed":!0,"resize":!0,"title":"System Error","content":""});var n='\n\t\t<div class="ajaxError">\n\t\t<div class="content-preview">\n\t\t<style>\n\t\t.ajaxError{\n\t\t\toverflow:auto;padding:20px 5%;color:#555;font-size:13px;line-height:1.5em;\n\t\t\tfont-family:"Lantinghei SC","Hiragino Sans GB","Microsoft Yahei",Helvetica,arial,sans-serif;\n\t\t}\n\t\t.ajaxError #msgbox{margin:0;}\n\t\t.error-tips{padding:5px 0 10px;border-bottom:1px solid #eee;margin-bottom:10px;font-size: 14px;}\n\t\t.content-preview{\n\t\t\tborder: 1px solid #fff1f0;padding:5px 20px 10px 20px;\n\t\t\tbackground: #fff9f9;border-radius:4px;margin-bottom:50px;\n\t\t}\n\t\t</style>\n\t\t<h3 style="color:#f04134" >System Error!</h3>'+htmlSafe(t)+"\n\t\t</div></div>";$.iframeHtml(e.$main.find(".aui-content"),n)},h=function h(){return a.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.5)}).then(c).then(function(){NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(f).then(function(){NProgress.done(),$("body > .loading-body").fadeOut(1e3,function(){$(this).remove()})})},w=function w(){return window.API_HOST?a.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(f).then(function(){NProgress.done()}):a.then()};e.loadMain=h,e.loadApi=w,e.loadOption=l,e.loadLang=f,e.loadPlugin=c},"49":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e["default"]=function(){i(),o(),r(),s(),u(),Events.trigger("windowReady");var t=document.createEvent("CustomEvent");t.initCustomEvent("kodReadyView",!0,!0,{"source":window}),document.dispatchEvent(t)};var i=function i(){if($.fn.perfectScroll){var t=function t(){$(".perfectScroll").perfectScroll()};$(window).bind("resize",t),$(window).bind("scoller",t)}},o=function o(){if(!$.isWindowTouch()&&$.fn.poshytip){var t=$("[title]");t.poshytip({"className":"ptips-skin","liveEvents":!0,"slide":!1,"alignTo":"cursor","alignX":"right","alignY":"bottom","showAniDuration":150,"hideAniDuration":200,"offsetY":10,"offsetX":20,"showTimeout":function(){$(".ptips-skin").length;var t=1500;return $(this).attr("title-timeout")&&(t=parseInt($(this).attr("title-timeout"))),t},"content":function(t){if(!($(this).hasClass("context-menu-active")||$(this).is(":focus")||t.hasClass("disable")||t.hasClass("disable-title"))){t.addClass("yellow");var e=$(this).data("title.poshytip");if($(this).attr("title-data")){var n=$($(this).attr("title-data"));e=n.is("input")||n.is("textarea")?n.val():n.html()}return-1==(e=e||"").indexOf("<")&&-1==e.indexOf(">")&&(e=e.replace(/\n/g,"<br/>")),e}}}),$(document).bind("keydown keyup mousedown mouseup click",function(){$.fn.poshytip&&($(t).poshytip("clearTimeouts").poshytip("hide"),$(".ptips-skin").remove())}),$("input,textarea").live("focus",function(){$.fn.poshytip&&($(t).poshytip("hide"),$(".ptips-skin").remove())})}},r=function r(){window.API_HOST&&(template.defaults.cache=!0,template.defaults.minimize=!1,template.defaults.compileDebug=!1)},a=function a(){if(!$.isWindowTouch()){var t=[".menuBar .menu-item",".menu-group-submenu .menu-item-sub",".menuBar .menu-dropdown-user > .ripple-item",".setting-menu-left .menu-item-content",".admin-menu-left .menu-item-content"].join(",");$.hoverAnimate({"el":t,"delegate":"body"})}},s=function s(){var t="a,button,.ripple-item,.context-menu-item,.kui-btn,.btn,.button";if($.isWindowTouch()&&(t="a,button,.ripple-item,.kui-btn,.btn,.button"),loadRipple(t,".disable-ripple,.disabled,.disable,.ztree,.not-selectable"),a(),$(window).bind("resize",function(){Events.trigger("window.resize")}),$("body").delegate(".password-view","mousedown touchstart",function(t){var e=$(this),n=e.parent().children('input[type="password"]');if(1==n.length){var i=$(n.get(0)).prop("outerHTML");i=i.replace(/type\s*=\s*("|')?password("|')?/i,'type="text"');var o=$(i).insertAfter(n);n.addClass("hidden"),e.addClass("active"),o.val(n.val()),$($("input[type='text']").get(0)),$(window).one("mouseup touchend",function(){n.removeClass("hidden"),e.removeClass("active"),o.remove()})}}),$("body").delegate("img,a","dragstart",function(t){return stopPP(t)}),window.API_HOST){$("body").delegate("[link-href]","click",function(t){return u(t,"")}),$("body").delegate("a","click",function(t){"#"==$(this).attr("href")&&t.preventDefault()}),$("body").delegate("[link-href]","mouseup",function(t){if(2==t.which)return u(t,"_blank")});var u=function u(t,e){var n=$(t.currentTarget),i=n.attr("link-href")||"#",o=(e=e||n.attr("target"),_.startsWith(i,"http://")||_.startsWith(i,"https://")),r=i;if(!o){if(i.startsWith("/")||i.startsWith("./"))return 2==t.which||"_blank"==e?window.open(r):void(window.location.href=i);r=$.parseUrl().urlPath+("#"==i?"":"#"+i)}if(n.attr("dialog-open")||"dialog"==e){var a=n.find(".font-icon").prop("outerHTML")||"",s=htmlSafe(a+n.text());return core.openDialog(r,"",s)}if(!o)return 2==t.which||"_blank"==e?window.open(r):void Router.go(i);"_blank"==e?window.open(r):window.location.href=r}}},u=function u(){$.fn.tabCurrent=function(){var t=$(this);if(!t||0==t.length)return this;var e=t.parent(),n=t.outerWidth(),i=t.offset().left-e.offset().left,o=e.children(".tab-item-bar");if(0==o.length)return this;o.data("initTab")||(o.data("initTab",1),o.addClass("no-animate opacity-hidden"),setTimeout(function(){o.removeClass("opacity-hidden"),e.children(".tab-item").filter(".active").tabCurrent()},10),setTimeout(function(){e.children(".tab-item").filter(".active").tabCurrent(),o.removeClass("no-animate")},300)),n=1*t.width(),i+=(t.outerWidth()-n)/2;var r=e.offset().top+e.outerHeight(),a=t.offset().top+t.outerHeight(),s={"width":n+"px","left":i+"px","transform":"translate3d(0px,-"+Math.abs(r-a+1)+"px, 0px)"};o.css(s),e.children(".tab-item").removeClass("active"),t.addClass("active");var u=e.parent().children(".tab-group-pan").children(".tab-content");if(0!=u.length){var d=t.attr("tab-name").replace(/'/g,"\\'"),c=u.filter(":visible"),l=u.filter("."+d);c.switchTo(l),t.trigger("tab-select")}return this},$(document).delegate(".tab-group-line .tab-item","click",function(){$(this).tabCurrent()});var t=_.debounce(function(){$(".tab-group-line .tab-item.active").each(function(){$(this).tabCurrent()})},50);$(window).bind("resize",t),$.isWindowTouch()&&d()},d=function d(){}},"626":function(t,e,n){t.exports=n(627)},"627":function(t,e,n){"use strict";var i=n(18),o=function r(t){return t&&t.__esModule?t:{"default":t}}(n(49));(0,i.loadApi)().then(function(){(0,o["default"])()})}});