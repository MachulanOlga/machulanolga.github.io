"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[550],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return P},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],f=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(f,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=o(e,m);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,s({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=o(e,w);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var C,L,k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:k},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set,N=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=o(e,x),v=i.width,y=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,w),E=b.style,k=b.className,S=o(b,T),N=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,v,y);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=N.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(_)):L&&I.has(_)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=r(s({isLoading:!0,isLoaded:I.has(_),image:i},h)),I.has(_)||(e=requestAnimationFrame((function(){N.current&&(t=n(N.current,_,I,c,f,g,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(_)&&L&&(N.current.innerHTML=L(s({isLoading:I.has(_),isLoaded:I.has(_),image:i},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},S,{style:s({},E,c,{backgroundColor:d}),className:k+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));_.propTypes=S,_.displayName="GatsbyImage";var O,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:k,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(O=_,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,A);return n&&console.warn(n),a?r.createElement(O,s({image:a},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=R},3808:function(e,t,a){var r=a(7294),n=a(7059);t.Z=function(e){var t,i=e.styles;return console.log(i),r.createElement("section",{className:"wrapper "+i.wrapper},r.createElement("div",{className:"title-and-description "+i.titleAndDescription},r.createElement("h1",null,"Enable rock-solid uploads at lightspeed"),r.createElement("p",null,"Our uploading API rests on a geographically distributed network of servers. Like a CDN in reverse, the API makes sure uploads always go the fastest route possible. The service won’t skip a beat with huge files, multiple uploads, or spotty connections.")),r.createElement("div",{className:"features "+i.features},r.createElement("ul",null,r.createElement("li",null," Accelerated uploading "),r.createElement("li",null," Uploads from URL "),r.createElement("li",null," Malware protection "),r.createElement("li",null," Signed uploads "),r.createElement("li",null," Platform-side MIME-type filtering "),r.createElement("li",null," Up to 5 TB file size "))),r.createElement("div",{class:"media",className:"media "+(null!==(t=i.media)&&void 0!==t?t:"")},r.createElement("div",{class:"avatar"},r.createElement("div",null,r.createElement("div",null,r.createElement(n.S,{src:"../images/avatar.png",loading:"eager",formats:["auto","webp","avif"],alt:"User avatar",__imageData:a(8913)})))),r.createElement("div",{class:"media-content"},"In-house file infrastructure? No thank you.")))}},8913:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/f2e748873b2c93fe40d1f5e99a3d8a12/f31ef/avatar.png","srcSet":"/static/f2e748873b2c93fe40d1f5e99a3d8a12/ebf64/avatar.png 10w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/ca121/avatar.png 20w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/f31ef/avatar.png 40w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/static/f2e748873b2c93fe40d1f5e99a3d8a12/bda00/avatar.avif 10w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/a3b0e/avatar.avif 20w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/bcb70/avatar.avif 40w","type":"image/avif","sizes":"(min-width: 40px) 40px, 100vw"},{"srcSet":"/static/f2e748873b2c93fe40d1f5e99a3d8a12/bd5c1/avatar.webp 10w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/264f2/avatar.webp 20w,\\n/static/f2e748873b2c93fe40d1f5e99a3d8a12/e73fe/avatar.webp 40w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":40}')}}]);
//# sourceMappingURL=0f083a08718274a8717e30ff101f008b413b626c-ff0bbb930328cde405cb.js.map