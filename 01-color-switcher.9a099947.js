let t=null;const e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),d=document.querySelector("body");d.style.textAlign="center",e.style.cssText="padding: 10px 20px; margin-right: 10px; text-transform: uppercase",r.style.cssText="padding: 10px 20px; text-transform: uppercase",r.setAttribute("disabled","disabled"),e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),t=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled","disabled"),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.9a099947.js.map