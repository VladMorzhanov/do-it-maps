webpackJsonp([10],{"./app/components/Popular/index.js":function(e,o,n){"use strict";function r(e){return i(p,{},void 0,c,i("p",{onClick:function(){return e.changePopularType(a.r)},className:e.popularType===a.r?"active":null},void 0,"Pharmacies"),i("p",{onClick:function(){return e.changePopularType(a.p)},className:e.popularType===a.p?"active":null},void 0,"Gas Stations"),i("p",{onClick:function(){return e.changePopularType(a.t)},className:e.popularType===a.t?"active":null},void 0,"Schools"),i("p",{onClick:function(){return e.changePopularType(a.s)},className:e.popularType===a.s?"active":null},void 0,"Restaurants"))}Object.defineProperty(o,"__esModule",{value:!0});var t=n("./node_modules/react/react.js"),l=(n.n(t),n("./node_modules/styled-components/dist/styled-components.es.js")),a=n("./app/containers/Home/constants.js"),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t){var l=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&l)for(var i in l)void 0===n[i]&&(n[i]=l[i]);else n||(n=l||{});if(1===a)n.children=t;else if(a>1){for(var p=Array(a),c=0;c<a;c++)p[c]=arguments[c+3];n.children=p}return{$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),p=l.a.div.withConfig({displayName:"Popular__PopularWrapper"})(["display: flex;flex-direction: column;align-items: center;  width: 100%;height: auto;background-color:#7dbeff;border-top: 1px solid #000;h2{font-family: Helvetica, sans-serif;background-color:#5271c9;margin: 0;width: 100%;color: #ffffff;font-size: 22px;  height: 40px;line-height: 40px;  padding-left: 20px;border-bottom: 1px solid #000;}p{border-bottom: 1px solid #000;background-color:#7dbeff;font-weight: 600; font-family: Helvetica, sans-serif;width: 100%;font-size: 16px;padding-left: 20px;height: 40px;line-height: 45px;  margin: 0;color: #ffffff;cursor:pointer;transition: 200ms all ease;&.active{background-color:#5d78de;}&:hover{background-color:#5d78de;}}"]),c=i("h2",{},void 0,"Popular places");o.default=r}});