var n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var m=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,p=(t,e)=>{for(var i in e||(e={}))l.call(e,i)&&m(t,i,e[i]);if(u)for(var i of u(e))c.call(e,i)&&m(t,i,e[i]);return t};var b=(t,e)=>{for(var i in e)n(t,i,{get:e[i],enumerable:!0})},g=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!l.call(t,r)&&r!==i&&n(t,r,{get:()=>e[r],enumerable:!(o=a(e,r))||o.enumerable});return t};var v=t=>g(n({},"__esModule",{value:!0}),t);var x={};b(x,{ViteMinifyPlugin:()=>s,default:()=>d});module.exports=v(x);var f=require("html-minifier-terser");function s(t){return{name:"vite-plugin-minify",enforce:"post",apply:"build",transformIndexHtml:e=>(0,f.minify)(e,p({removeComments:!0,collapseWhitespace:!0,collapseBooleanAttributes:!0,removeAttributeQuotes:!1,removeEmptyAttributes:!0,minifyCSS:!0,minifyJS:!0,minifyURLs:!0},t))}}var d=s;0&&(module.exports={ViteMinifyPlugin});
//# sourceMappingURL=index.js.map