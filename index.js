/* empty css                      */import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="https://pixabay.com/api/",h="47526493-0201b9f5d9dd403f56de0598a";function d(s){const r=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function g(s){return s.map(({webformatURL:r,largeImageURL:t,tags:l,likes:e,views:o,comments:i,downloads:f})=>`<li class="gallery-item>
            <a class="gallery-link" href="${t}">
                <img class="gallery-image" src="${r}" alt="${l}" width="360" height="150"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan>${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan>${o}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan>${i}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan>${f}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const p=document.querySelector(".group-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";p.addEventListener("submit",y);function y(s){s.preventDefault();let r=s.target.elements.query.value.trim();if(console.log(s.target.elements),console.log(r),c.innerHTML=" ",!r){a.show({backgroundColor:"#EF4040",title:"",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}n.style.display="inline-block",d(r).then(t=>{console.log(t),console.log(t.hits.length),console.log(t.hits),t.hits.length===0&&a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.insertAdjacentHTML("beforeend",g(t.hits)),n.style.display="none"}).catch(t=>{console.log(t.message)}).finally(()=>s.target.reset())}new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
