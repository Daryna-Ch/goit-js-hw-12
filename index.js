import{a as B,S as p,i as m}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const C="47534092-804b13b479cbd901190151ed2",P="https://pixabay.com/api/";async function y(r,t=1){const n={key:C,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},{data:e}=await B.get(P,{params:n});if(!e.hits.length)throw new Error("No images found");return e}new p(".gallery a");function L(r){const t=document.getElementById("gallery"),c=r.map(({webformatURL:n,largeImageURL:e,tags:s,likes:a,views:I,comments:v,downloads:w})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${n}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${I}</p>
            <p><b>Comments:</b> ${v}</p>
            <p><b>Downloads:</b> ${w}</p>
          </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",c)}const O=document.getElementById("search-form"),$=document.getElementById("search-input"),f=document.getElementById("gallery"),x=document.getElementById("loader"),o=document.createElement("button"),h=document.getElementById("moreButton");let b=new p(".gallery a"),d="",i=1;const u=15;let g=0;o.textContent="Load more";o.classList.add("hidden");f.parentNode.appendChild(o);O.addEventListener("submit",async r=>{if(r.preventDefault(),d=$.value.trim(),!d){m.error({title:"Error",message:"Please enter a search term!"});return}i=1,f.innerHTML="",l(!0),o.classList.add("hidden"),h.classList.add("hidden");try{const t=await y(d,i,u);g=t.totalHits,L(t.hits),b.refresh(),i*u<g?o.classList.remove("hidden"):E()}catch(t){m.error({title:"Error",message:t.message})}finally{l(!1)}});o.addEventListener("click",async()=>{i+=1,l(!0,"more");try{const r=await y(d,i,u);L(r.hits),b.refresh(),H(),i*u>=g?(o.classList.add("hidden"),h.classList.add("hidden"),E()):l(!1,"more")}catch(r){m.error({title:"Error",message:r.message}),l(!1,"more")}});function l(r,t="main"){t==="main"?x.classList.toggle("hidden",!r):t==="more"&&(h.classList.toggle("hidden",!r),o.classList.toggle("hidden",r))}function E(){m.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function H(){if(!f.firstElementChild)return;const{height:t}=f.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map