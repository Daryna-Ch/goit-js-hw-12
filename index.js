import{a as v,S as p,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const I="47534092-804b13b479cbd901190151ed2",B="https://pixabay.com/api/";async function h(t,o=1){const n={key:I,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15},{data:e}=await v.get(B,{params:n});if(!e.hits.length)throw new Error("No images found");return e}const P=new p(".gallery a");function y(t){const o=document.getElementById("gallery"),l=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:L,comments:E,downloads:w})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${n}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${i}</p>
            <p><b>Views:</b> ${L}</p>
            <p><b>Comments:</b> ${E}</p>
            <p><b>Downloads:</b> ${w}</p>
          </div>
        </li>`).join("");o.innerHTML=l,P.refresh()}const O=document.getElementById("search-form"),$=document.getElementById("search-input"),g=document.getElementById("gallery"),C=document.getElementById("loader"),s=document.createElement("button");new p(".gallery a");let c="",a=1;const u=15;let f=0;s.textContent="Load more";s.classList.add("hidden");g.parentNode.appendChild(s);O.addEventListener("submit",async t=>{if(t.preventDefault(),c=$.value.trim(),!c){d.error({title:"Error",message:"Please enter a search term!"});return}a=1,g.innerHTML="",m(!0),s.classList.add("hidden");try{const o=await h(c,a,u);f=o.totalHits,y(o.hits),a*u<f?s.classList.remove("hidden"):b()}catch(o){d.error({title:"Error",message:o.message})}finally{m(!1)}});s.addEventListener("click",async()=>{a+=1,m(!0);try{const t=await h(c,a,u);y(t.hits),a*u>=f?(s.classList.add("hidden"),b()):x()}catch(t){d.error({title:"Error",message:t.message})}finally{m(!1)}});function m(t){C.classList.toggle("hidden",!t)}function b(){d.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function x(){const{height:t}=g.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
