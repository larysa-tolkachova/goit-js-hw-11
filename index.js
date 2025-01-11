/* empty css                      */import{i as n,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="47526493-0201b9f5d9dd403f56de0598a";function u(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${o}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:l,likes:e,views:t,comments:i,downloads:a})=>`<li class="gallery-item>
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${o}" alt="${l}" width="360" height="150"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan>${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan>${t}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan>${i}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan>${a}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const g=document.querySelector(".group-form"),p=document.querySelector(".gallery");document.querySelector(".loader");g.addEventListener("submit",d);function d(s){s.preventDefault();let o=s.target.elements.query.value.trim();if(console.log(s.target.elements),console.log(o),!o){n.show({backgroundColor:"#EF4040",title:"",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}u(o).then(r=>{console.log(r),console.log(r.hits.length),console.log(r.hits),r.hits.length===0&&n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.insertAdjacentHTML("beforeend",h(r.hits)),o=""}).catch(r=>{console.log(r.message)})}new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
