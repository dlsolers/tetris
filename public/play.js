+function(){function e(e){return e.toString().split("").reverse().join("").match(/.{1,3}/g).join(" ").split("").reverse().join("")}function t(e,t,n){var r=n-e.length-t.length;return e+p.repeat(r>0?r:0)+t}function n(e){return document.getElementById(e)}function r(e,t){function n(){e.innerHTML="|/-\\".charAt(o)+p.repeat(t),o=++o>3?0:o}var r=e.innerHTML,o=0;t=(t||0)>0?t-1:0;var a=setInterval(n,50);return n(),function(){clearInterval(a),e.innerHTML=r}}function o(e,t,n){function r(e){(e.which||e.keyCode)===n&&t()}return e.addEventListener("keydown",r),function(){e.removeEventListener("keydown",r)}}function a(e,t){return o(e,t,13)}function i(e,t){return o(e,t,27)}function c(o,c,s){function u(){n("userboard-send").removeEventListener("click",l),n("userboard-close").removeEventListener("click",d),n("userboard").style.display="none",y(),g()}function d(){u(),s()}function l(){var e=n("name-input").value.toLocaleUpperCase();if(e&&!(e.length>10)){n("userboard-send").removeEventListener("click",l),y(),o.name=e;var t=new XMLHttpRequest;t.open("POST","https://tetris-tiurin.rhcloud.com/api/scores",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){t.readyState==XMLHttpRequest.DONE&&200==t.status&&(a(),u(),c())},t.send(Object.keys(o).map(function(e){return e+"="+o[e]}).join("&"));var a=r(n("userboard-send"));try{localStorage.setItem("tetrisName",e)}catch(e){}}}n("userboard").style.display="block",n("your-score").innerHTML=t("YOUR SCORE:",e(o.score),32);try{var f=(new Date).getTime(),v=JSON.parse(localStorage.getItem("tetrisScore"))||[];v.push({t:f,s:o.score}),localStorage.setItem("tetrisScore",JSON.stringify(v));var p=v.sort(function(e,t){return t.s-e.s})[0].s;n("your-best-score").innerHTML=t("YOUR BEST SCORE:",e(p),32)}catch(e){}try{n("name-input").value=localStorage.getItem("tetrisName")}catch(e){}n("name-input").focus(),n("userboard-send").addEventListener("click",l),n("userboard-close").addEventListener("click",d);var y=a(n("name-input"),l),g=i(document,d)}function s(o){function a(){c.style.display="none",u.removeEventListener("click",a),d(),o()}var c=n("leaderboard");if("block"!==c.style.display){c.style.display="block";var s=r(n("score-leaders"),32),u=n("leaderboard-close");u.addEventListener("click",a),u.focus();var d=i(document,a),l=new XMLHttpRequest;l.open("GET","https://tetris-tiurin.rhcloud.com/api/scores",!0),l.onload=function(r){var o=JSON.parse(r.target.response);"ok"===o.status&&(s(),n("score-leaders").innerHTML=o.scores.map(function(n){return t(n.name,e(n.score),32)}).join("<br>"))},l.send()}}function u(e){if(e.target.dataset&&e.target.dataset.key){var t=parseInt(e.target.dataset.key);TETRIS.pressKey(t),l(t),e.target.blur()}}function d(){function e(){clearInterval(n),n=0}function t(t){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||(keyCode=t.which>0?t.which:t.keyCode,n&&keyCode===r))){r=keyCode;var o=function(){TETRIS.pressKey(keyCode)};o(),e(),l(keyCode);var a={37:100,39:100,40:50};n=setInterval(o,a[keyCode]||200)}}var n,r;return TETRIS.upause(),setTimeout(function(){addEventListener("keyup",e),addEventListener("keydown",t),addEventListener("click",u)}),function(){clearInterval(n),removeEventListener("keyup",e),removeEventListener("keydown",t),removeEventListener("click",u),TETRIS.pause()}}function l(e){if(32===e)return void f(k);var t=Math.random()*b.length<<0;f(b[t])}function f(e,t){if(e&&!L){var n=m.createBufferSource();return n.buffer=e,n.connect(m.destination),t&&(n.loop=!0),n.start(0),n}}function v(e,t){function n(e){var n=new XMLHttpRequest;n.open("GET",y+e,!0),n.responseType="arraybuffer",n.onload=function(){m.decodeAudioData(n.response,t,function(e){"Error with decoding audio data"+e.err})},n.send()}e.map&&e.map(n)||n(e)}var p="&nbsp;",y="./public/",g=d();TETRIS.on({finish:function(e,t,n){g(),c({score:e,level:t,rowsHit:n},function(){s(function(){TETRIS.start(),g=d()})},function(){TETRIS.start(),g=d()})},nextFrame:function(e){e=e.replace(/[ <>]|\n\r/g,function(e){return{" ":"&nbsp;","<":"&lsaquo;",">":"&rsaquo;","\n\r":"<br>"}[e]}),n("game").innerHTML=e}}),n("leaderboard-link").addEventListener("click",function(){g(),s(function(){g=d()})});var m,k,E,T,L,b=[];try{m=new(window.AudioContext||window.webkitAudioContext),v(["key1.ogg","key2.ogg","key3.ogg","key4.ogg"],function(e){b.push(e)}),v("space.ogg",function(e){k=e}),v("ambience.ogg",function(e){T=f(E=e,!0)}),v("beep.ogg",f),n("mute-sound").addEventListener("click",function(e){L=!L,L?T&&T.stop(0):T=f(E,!0),e.target.innerHTML=L?"UNMUTE SOUND":"MUTE SOUND",e.target.blur()})}catch(e){}}();