/* empty css                      */import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",h="47526493-0201b9f5d9dd403f56de0598a";function d(s){const o=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function p(s){return s.map(({webformatURL:o,largeImageURL:t,tags:l,likes:e,views:r,comments:i,downloads:f})=>`<li class="gallery-item>
            <a class="gallery-link" href="${t}">
                <img class="gallery-image" src="${o}" alt="${l}" width="360" height="152"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${r}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${i}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${f}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const g=document.querySelector(".group-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});g.addEventListener("submit",F);function F(s){s.preventDefault();let o=s.target.elements.query.value.trim();if(c.innerHTML=" ",!o){a.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}n.style.display="inline-block",d(o).then(t=>{console.log(t),console.log(t.hits.length),console.log(t.hits),t.hits.length===0&&a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),c.insertAdjacentHTML("beforeend",p(t.hits)),y.refresh(),n.style.display="none"}).catch(t=>{console.log(t.message)}).finally(()=>s.target.reset())}
//# sourceMappingURL=index.js.map
