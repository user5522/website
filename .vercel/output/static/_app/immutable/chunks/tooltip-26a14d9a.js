const b=(o,y)=>{var g;let i,{text:n,textClass:L,paddingClass:v,width:u,background:h}=y,c,s;const d=()=>n||s,r=!!((g=d())!=null&&g.tagName);function m(t){var e;t.stopPropagation(),i=!1,(e=t.target.querySelector(".js-tooltip"))==null||e.remove(),clearTimeout(c),c=setTimeout(()=>{i||j(t)},200)}const j=t=>{t.type==="mouseenter"&&(!s||s!=null&&s.tagName)&&setTimeout(()=>{const e=d();let l=document.createElement("span");l.classList.add("js-tooltip","invisible","scale-null","origin-top-left","animated","delay-200","text-sm","pointer-events-auto","tooltip","font-semibold","flex","absolute","z-50","top-full",u?"w-"+u:null),l.innerHTML=`
            <span
              style="width: max-content"
              class="js-tooltip-content flex shadow-md rounded-full origin-top z-50 
              ${h||"bg-dark"} text-whiter ${v||"p-3"} ${L||""}">
              ${e!=null&&e.tagName?"":s||n}
            </span>
          `,t.target.appendChild(l),e!=null&&e.tagName&&(e.classList.remove("hidden"),e.classList.add("flex"),t.target.querySelector(".js-tooltip-content").appendChild(e)),setTimeout(()=>{var a,f;(a=t.target.querySelector(".js-tooltip"))==null||a.classList.remove("invisible","scale-null"),(f=t.target.querySelector(".js-tooltip"))==null||f.classList.add("visible","scale-full")},50)})},p=t=>{var e,l;(e=t.target.querySelector(".js-tooltip"))==null||e.classList.add("scale-null"),(l=t.target.querySelector(".js-tooltip"))==null||l.classList.remove("delay-200","visible","scale-full"),i=!0,setTimeout(()=>{var a;(a=t.target.querySelector(".js-tooltip"))==null||a.remove()},200)};return o.addEventListener("mouseenter",m,r),o.addEventListener("mouseleave",p,r),{update:({text:t})=>{s=t;const e=o.querySelector(".js-tooltip-content");e&&(e==null?void 0:e.innerText)!==t&&(e.innerText=t)},destroy(){o.removeEventListener("mouseover",m,r),o.removeEventListener("mouseout",p,r)}}};export{b as t};
