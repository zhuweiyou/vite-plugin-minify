var u=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var n=(i,e,t)=>e in i?u(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,o=(i,e)=>{for(var t in e||(e={}))m.call(e,t)&&n(i,t,e[t]);if(r)for(var t of r(e))l.call(e,t)&&n(i,t,e[t]);return i};import{minify as p}from"html-minifier-terser";function y(i){return{name:"vite-plugin-minify",enforce:"post",apply:"build",transformIndexHtml:e=>p(e,o({removeComments:!0,collapseWhitespace:!0,collapseBooleanAttributes:!0,removeAttributeQuotes:!1,removeEmptyAttributes:!0,minifyCSS:!0,minifyJS:!0,minifyURLs:!0},i))}}export{y as ViteMinifyPlugin};
//# sourceMappingURL=index.mjs.map