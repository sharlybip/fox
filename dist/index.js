(()=>{"use strict";let e=1;const t=t=>(console.log("imagenes cargadas:",e),t.isIntersecting),n=t=>{const n=t.target,s=n.firstChild,c=s.dataset.src;s.src=c,e+=1,void 0!==c&&o.unobserve(n)},o=new IntersectionObserver((e=>{e.filter(t).forEach(n)})),s=document.getElementById("images"),c=document.querySelector("button"),a=document.querySelector(".delete");let r=0;c.addEventListener("click",(()=>{r+=1,console.log("Imagenes",r);const e=(()=>{const e=document.createElement("div");e.className="p-4 bg-black w-96 mx-auto ",e.height="450",e.width="342";const t=document.createElement("img");return t.className="mx-auto bg-slate-300 rounded-md",window.fetch("https://randomfox.ca/floof").then((e=>e.json())).then((e=>{t.dataset.src=`${e.image}`})),t.width="320",t.style.objectFit="cover",e.append(t),e})();var t;s.append(e),t=e,setTimeout((()=>{o.observe(t)}),1e3)})),a.addEventListener("click",(()=>{s.innerText="",r=0}))})();