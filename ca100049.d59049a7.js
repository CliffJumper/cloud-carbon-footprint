(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{111:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=t,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return n?o.a.createElement(b,i(i({ref:r},l),{},{components:n})):o.a.createElement(b,i({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),c=(n(0),n(111)),a={id:"run-with-docker",title:"Run with Docker"},i={unversionedId:"run-with-docker",id:"run-with-docker",isDocsHomePage:!1,title:"Run with Docker",description:"If you would like to run with Docker, you'll need install docker and docker-compose:",source:"@site/docs/RunWithDocker.md",slug:"/run-with-docker",permalink:"/docs/run-with-docker",version:"current",sidebar:"tryNowSidebar",previous:{title:"Azure",permalink:"/docs/azure"},next:{title:"Running the CLI",permalink:"/docs/running-the-cli"}},u=[],l={toc:u};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"If you would like to run with Docker, you'll need install docker and docker-compose:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker ",Object(c.b)("inlineCode",{parentName:"li"},"brew install --cask docker")),Object(c.b)("li",{parentName:"ul"},"docker-compose (should be bundled with Docker if you installed it on a Mac)")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"docker-compose up\ncd packages/api\nyarn docker:start //creates a docker container named ccf_base\nyarn docker:setup //install dependencies\n")))}p.isMDXComponent=!0}}]);