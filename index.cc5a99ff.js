!function(){function e(e){return e&&e.__esModule?e.default:e}var n,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(n){var t=void 0===n?"undefined":e(o)(n);return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":e(o)(n))||function(e){return!!e&&"object"==typeof e}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(y(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=y(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var u=a.test(n);return u||l.test(n)?c(n.slice(2),u?2:8):r.test(n)?NaN:+n}n=function(e,n,t){var o,i,r,a,l,c,u=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(n){var t=o,r=i;return o=i=void 0,u=n,a=e.apply(r,t)}function b(e){return u=e,l=setTimeout(T,n),f?h(e):a}function j(e){var t=e-c;return void 0===c||t>=n||t<0||s&&e-u>=r}function T(){var e=p();if(j(e))return w(e);l=setTimeout(T,function(e){var t=n-(e-c);return s?g(t,r-(e-u)):t}(e))}function w(e){return l=void 0,d&&o?h(e):(o=i=void 0,a)}function M(){var e=p(),t=j(e);if(o=arguments,i=this,c=e,t){if(void 0===l)return b(c);if(s)return l=setTimeout(T,n),h(c)}return void 0===l&&(l=setTimeout(T,n)),a}return n=m(n)||0,y(t)&&(f=!!t.leading,r=(s="maxWait"in t)?v(m(t.maxWait)||0,n):r,d="trailing"in t?!!t.trailing:d),M.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=i=l=void 0},M.flush=function(){return void 0===l?a:w(p())},M};var h=document.querySelector("#search-box"),b=document.querySelector("ul");document.querySelector("div");h.addEventListener("input",e(n)((function(e){h.value.length>0&&(n=e.target.value,t="https://restcountries.com/v3.1/name/".concat(n.trim(),"?fields=name,capital,population,flags,languages"),fetch(t).then((function(e){return e.json()})).then((function(e){if(console.log(e),console.log(e.length),e.length>10)b.innerHTML="",alert("Too many matches found. Please enter a more specific name.");else if(e.length>2&&e.length<=10){b.innerHTML="";var n=!0,t=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var a=i.value,l='<li><image src="'.concat(a.flags.svg,'" alt="flag of').concat(a.name.official,'" width="40px">').concat(a.name.official,"</li>\n          ");b.insertAdjacentHTML("afterbegin",l)}}catch(e){t=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(t)throw o}}}else{e.length=1,b.innerHTML="",console.log("one country");var c=!0,u=!1,f=void 0;try{for(var s,d=e[Symbol.iterator]();!(c=(s=d.next()).done);c=!0){var v=s.value,g='<li><image src="'.concat(v.flags.svg,'" alt="flag of').concat(v.name.official,'" width="40px">').concat(v.name.official,"</li>\n          <li>capital: ").concat(v.capital.join(", "),"</li>\n          <li>population: ").concat(v.population,"</li>\n          <li>languages: ").concat(Object.values(v.languages).join(", "),"</li>");b.insertAdjacentHTML("afterbegin",g)}}catch(e){u=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(u)throw f}}}})).catch((function(e){console.log(e),b.innerHTML="",alert("Oops, there is no country with that name")})),console.log(h.value),console.log(h.value.length));var n,t;b.innerHTML=""}),1300))}();
//# sourceMappingURL=index.cc5a99ff.js.map