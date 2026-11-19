const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const hues=[["#7fb4ff","#14388f"],["#bfe0ff","#0a1a45"],["#3d8bff","#050d24"],["#9fd0ff","#1c3f9e"],["#5b9bff","#0a1a45"]];
const IMG=[];
const PICS={
 "bridal_and_occasion": "bridal and occasion.png",
 "bridal_hairstyle": "bridal hairstyle.png",
 "colour_transformations": "colour transformations.png",
 "curly": "curly.png",
 "fades": "fades.png",
 "hair_spa_and_treatments": "hair spa and treatments.png",
 "hair_transformation": "hair transformation.png",
 "haircut_and_styling": "haircut and styling.png",
 "hiar_colouring": "hiar colouring.png",
 "layered_styles": "layered styles.png",
 "mens_grooming": "mens grooming.png",
 "mens_haircut": "mens haircut.png",
 "modern_womens_styles": "modern womens styles.png",
 "Studio": "Studio.png",
 "before": "curly.png",
 "after": "curly.png"
};
const HB=[`<path d="M50 32C26 32 24 56 24 76c0 18-8 28-14 40 12 6 24 0 28-12h24c4 12 16 18 28 12-6-12-14-22-14-40 0-20-2-44-26-44Z"/>`,`<path d="M50 32C28 32 28 56 28 80h44c0-24 0-48-22-48Z"/>`,`<circle cx="32" cy="48" r="13"/><circle cx="68" cy="48" r="13"/><circle cx="50" cy="34" r="16"/><circle cx="26" cy="68" r="11"/><circle cx="74" cy="68" r="11"/><circle cx="40" cy="38" r="12"/><circle cx="60" cy="38" r="12"/>`,`<circle cx="50" cy="20" r="12"/><path d="M31 62C30 36 40 32 50 32s20 4 19 30Z"/>`,``,`<path d="M50 32C28 32 26 54 24 80c-1 14-6 24-12 36 10 2 20-4 24-14l4-16h20l4 16c4 10 14 16 24 14-6-12-11-22-12-36-2-26-4-48-26-48Z"/>`,`<path d="M50 32C32 32 30 52 30 70h40c0-18-2-38-20-38Z"/><path d="M62 70c6 8 2 14 8 20s2 14 8 24" fill="none" stroke="#3d8bff" stroke-width="7" stroke-linecap="round"/>`,``];
const HF=[`<path d="M30 62C30 40 42 36 50 36s20 4 20 26c-8-8-14-14-20-16-6 2-12 8-20 16Z"/>`,`<path d="M30 60C30 40 42 35 50 35s20 5 20 25c-10-4-14-12-20-14-6 2-10 10-20 14Z"/>`,``,`<circle cx="50" cy="7" r="3" fill="#fff"/>`,`<path d="M31 56C30 38 40 34 50 34s20 4 19 22c-4-8-10-12-19-12s-15 4-19 12Z"/>`,`<path d="M29 62C28 40 44 34 56 38c10 4 14 12 14 24-6-8-10-14-18-16-8 2-16 8-22 16Z"/>`,`<path d="M30 60C30 40 42 35 50 35s20 5 20 25c-10-4-14-12-20-14-6 2-10 10-20 14Z"/>`,`<path d="M31 56C28 34 44 24 62 30c8 4 8 14 6 26-2-8-6-12-18-12s-16 4-19 12Z"/><path d="M32 66c2 14 8 20 18 20s16-6 18-20c-6 6-12 8-18 8s-12-2-18-8Z" fill="#2a5fc9"/>`];
const hair=v=>`<svg viewBox="0 0 100 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%"><path d="M6 130C9 104 30 97 50 97s41 7 44 33Z" fill="#9cc2ff" fill-opacity=".35"/><g fill="#3d8bff" fill-opacity=".92">${HB[v]}</g><rect x="43" y="82" width="14" height="18" rx="6" fill="#cfe2ff" fill-opacity=".55"/><ellipse cx="50" cy="62" rx="19" ry="24" fill="#e3eeff" fill-opacity=".85"/><g fill="#6aa8ff">${HF[v]}</g></svg>`;
const pic=(i,l,v,k)=>PICS[k]?`<img class="pi" src="${PICS[k]}" alt="${(l||k).replace(/_/g," ")}" loading="lazy" draggable="false">`:IMG.length?`<img src="${IMG[i%IMG.length]}" alt="${l}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:hair(v);
const ph=(i,l,v,k)=>{const h=hues[i%5];return `<div class="ph" style="--c1:${h[0]};--c2:${h[1]};--a:${60+i*37}deg;--x:${20+(i*23)%60}%">${pic(i,l,v,k)}${l?`<span>${l}</span>`:""}</div>`};
const SV=[["Haircuts & styling","Precision cuts shaped to your face and finished with a blow-dry.","from ₹800"],["Hair colouring","Balayage, global colour and glossing with bond-protecting formulas.","from ₹2,500"],["Hair spa & treatments","Deep conditioning, keratin and scalp therapy to restore shine.","from ₹1,500"],["Bridal hairstyles","Trial and wedding-day styling, with on-location service available.","from ₹6,000"],["Men’s grooming","Fades, beard shaping and hot-towel finishes.","from ₹500"],["Hair transformations","A full consultation, cut and colour in one planned session.","from ₹4,500"]];
const PR=[[["Women’s cut & blow-dry","₹1,200"],["Men’s cut","₹500"],["Kids’ cut","₹400"],["Blow-dry & styling","₹800"]],[["Root touch-up","₹2,500"],["Global colour","₹3,500"],["Balayage","₹6,500"],["Gloss treatment","₹1,800"]],[["Deep conditioning","₹1,500"],["Scalp therapy","₹2,200"],["Keratin smoothing","₹5,500"]],[["Bridal trial","₹3,000"],["Wedding-day styling","₹6,000"],["Guest styling","₹1,800"]],[["Fade cut","₹600"],["Beard shaping","₹300"],["Hot-towel shave","₹400"],["Cut + beard","₹800"]],[["Consultation","₹500"],["Cut + colour package","₹4,500"],["Full makeover","₹9,000"]]];
$("#svc").innerHTML=SV.map((s,i)=>`<article class="card rv" style="--d:${i*.08}s"><div class="img">${ph(i,"",[1,0,5,3,4,2][i],["haircut_and_styling","hiar_colouring","hair_spa_and_treatments","bridal_hairstyle","mens_grooming","hair_transformation"][i])}</div><div class="body"><h3>${s[0]}</h3><p>${s[1]}</p><ul class="pl">${PR[i].map(r=>`<li><span>${r[0]}</span><b>${r[1]}</b></li>`).join("")}</ul></div></article>`).join("");
$("select[name=s]").innerHTML=SV.map(s=>`<option>${s[0]}</option>`).join("");
const G=["Modern women’s styles","Men’s haircuts","Fades","Layered styles","Curly styles","Colour transformations","Bridal & occasion"];
$("#gal").innerHTML=G.map((g,i)=>`<div class="slide">${ph(i+1,g,[0,7,4,5,2,1,3][i],["modern_womens_styles","mens_haircut","fades","layered_styles","curly","colour_transformations","bridal_and_occasion"][i])}</div>`).join("");
const P=[["Layers","Layered"],["Fade","Men"],["Balayage","Colour"],["Bridal updo","Bridal"],["Curls","Layered"],["Curly crop","Men"]];
const asp=["3/4","1/1","4/5","3/5"];
$(".filters").innerHTML=["All","Layered","Colour","Men","Bridal"].map((f,i)=>`<button aria-pressed="${!i}" data-f="${f}">${f}</button>`).join("");
$("#mas").innerHTML=P.map((p,i)=>`<figure data-c="${p[1]}" style="aspect-ratio:${asp[i%4]}">${ph(i+2,p[0],[5,4,0,3,2,7,1,6][i],["layered_styles","mens_haircut","colour_transformations","bridal_and_occasion","curly","fades"][i])}</figure>`).join("");
$(".filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;$$(".filters button").forEach(x=>x.setAttribute("aria-pressed",x===b));$$("#mas figure").forEach(f=>f.hidden=!(b.dataset.f==="All"||f.dataset.c===b.dataset.f))};
const R=[["Ananya R.","Best balayage I have had. The colour grew out softly, no harsh line."],["Karan M.","Booked a fade before an interview. Clean, sharp and exactly what I described."],["Priya S.","They handled my bridal trial and wedding morning calmly. My hair held all night."],["Meera D.","The scalp treatment fixed months of dryness. Worth every rupee."]];
$("#rev").innerHTML=R.map(r=>`<figure class="tcard"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote style="margin-top:.8rem">“${r[1]}”</blockquote><figcaption class="who"><span class="av" aria-hidden="true">${r[0][0]}</span>${r[0]}</figcaption></figure>`).join("");
/* scrollers */
$$(".scroller").forEach(s=>{let d=0,x=0,l=0,m=0;s.onpointerdown=e=>{if(e.pointerType!=="mouse")return;d=1;m=0;x=e.clientX;l=s.scrollLeft;s.classList.add("drag")};
addEventListener("pointermove",e=>{if(!d)return;m=Math.abs(e.clientX-x);s.scrollLeft=l-(e.clientX-x)});
addEventListener("pointerup",()=>{if(d){d=0;s.classList.remove("drag")}})});
$$(".arrows button").forEach(b=>b.onclick=()=>{const s=$("#"+b.dataset.t);s.scrollBy({left:b.dataset.dir*(s.firstElementChild.offsetWidth+19),behavior:"smooth"})});
/* before-after */
const ba=$("#ba");$("input",ba).oninput=e=>ba.style.setProperty("--p",e.target.value+"%");
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv").forEach(e=>io.observe(e));
/* header, menu */
const hd=$("header");addEventListener("scroll",()=>hd.classList.toggle("solid",scrollY>30),{passive:true});
const bg=$(".burger"),lk=$("#links");bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o)};lk.onclick=e=>{if(e.target.tagName==="A"){lk.classList.remove("open");bg.setAttribute("aria-expanded",false)}};
/* parallax */
if(!rm){const ds=$$(".deco>[data-p]");let t=0;addEventListener("scroll",()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;ds.forEach(d=>d.style.translate=`0 ${scrollY*d.dataset.p*.4}px`)})},{passive:true});
$$(".mag").forEach(b=>{b.onmousemove=e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`};b.onmouseleave=()=>b.style.transform=""})}
/* booking */
const th=$(".theme"),root=document.documentElement;
const setT=l=>{root.dataset.theme=l?"light":"dark";th.setAttribute("aria-pressed",l);th.setAttribute("aria-label",l?"Switch to dark theme":"Switch to light theme")};
try{setT(localStorage.getItem("th")==="light")}catch(e){setT(false)}
th.onclick=()=>{const l=root.dataset.theme!=="light";setT(l);try{localStorage.setItem("th",l?"light":"dark")}catch(e){}};
/* coverflow, depth of field, Motion */
const cf=$("#gal"),sl=$$(".slide",cf),fg=$$("#mas figure");
const frame=()=>{if(rm)return;
sl.forEach(s=>{const o=Math.max(-1.6,Math.min(1.6,(s.offsetLeft+s.offsetWidth/2-cf.scrollLeft-cf.clientWidth/2)/s.offsetWidth)),a=Math.abs(o);
s.style.transform=`perspective(900px) rotateY(${-o*38}deg) scale(${1-a*.12})`;s.style.setProperty("--ox",o.toFixed(2));s.style.zIndex=10-Math.round(a*3);s.style.opacity=1-a*.25});
fg.forEach(g=>{if(g.hidden)return;const q=g.getBoundingClientRect(),d=Math.abs(q.top+q.height/2-innerHeight/2)/(innerHeight/2);g.style.setProperty("--b",Math.max(0,Math.min(5,(d-.7)*9))+"px")})};
let fr=0;const tick=()=>{if(fr)return;fr=requestAnimationFrame(()=>{fr=0;frame()})};
addEventListener("scroll",tick,{passive:true});addEventListener("resize",tick);cf.addEventListener("scroll",tick,{passive:true});
$(".filters").addEventListener("click",()=>setTimeout(frame,0));frame();
const M=window.Motion;
if(M&&!rm){try{const{animate,scroll}=M;
scroll(animate(".hero .wrap",{opacity:[1,0],y:[0,-70]}),{target:$(".hero"),offset:["start start","end start"]});
$$(".arrows button,.theme").forEach(b=>b.addEventListener("pointerdown",()=>animate(b,{scale:[.88,1]},{type:"spring",stiffness:500,damping:14})))}catch(e){}}
/* services motion */
const cards=$$("#svc .card");
if(!rm){
cards.forEach(c=>{const im=$(".img",c);
c.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");
im.style.transform=`perspective(700px) rotateX(${(.5-y)*8}deg) rotateY(${(x-.5)*10}deg)`});
c.addEventListener("pointerleave",()=>{im.style.transform=""})});
if(M){try{const{animate,inView,stagger}=M;
cards.forEach(c=>{const im=$(".img",c),li=$$(".pl li",c);
im.style.clipPath="inset(0 0 100% 0)";li.forEach(l=>l.style.opacity=0);
inView(c,()=>{animate(im,{clipPath:["inset(0 0 100% 0)","inset(0 0 0% 0)"]},{duration:.9,ease:[.2,.8,.2,1]});
animate(li,{opacity:[0,1],x:[-18,0]},{delay:stagger(.08,{startDelay:.35}),duration:.6})},{amount:.35})})}catch(e){$$("#svc .img").forEach(i=>i.style.clipPath="");$$("#svc .pl li").forEach(l=>l.style.opacity="")}}}
$$(".portrait .ph").forEach((p,i)=>p.insertAdjacentHTML("afterbegin",pic(i,"",i?3:0,i?"Studio":"bridal_and_occasion")));
$$(".ba .ph").forEach((p,i)=>p.insertAdjacentHTML("afterbegin",pic(0,"",0,i?"after":"before")));
/* lightbox zoom */
const lb=document.createElement("div");lb.className="lb";lb.innerHTML='<img alt=""><button type="button" aria-label="Close">×</button>';document.body.append(lb);
let dx=0;addEventListener("pointerdown",e=>dx=e.clientX);
document.addEventListener("click",e=>{if(e.target.closest(".lb")){lb.classList.remove("on");return}
const t=e.target.closest(".slide,#mas figure,.card .img");if(!t||Math.abs(e.clientX-dx)>6)return;const im=t.querySelector(".pi");if(!im)return;lb.firstChild.src=im.src;lb.firstChild.alt=im.alt;lb.classList.add("on")});
addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});
/* falling particles */
const cv=$("#fall");
if(!rm&&cv){const cx=cv.getContext("2d"),dpr=Math.min(devicePixelRatio||1,2);let W=innerWidth,H=innerHeight;
const mk=t=>({x:Math.random()*W,y:t?-10:Math.random()*H,r:Math.random()*1.2+.5,v:Math.random()*.6+.25,d:Math.random()*.4-.2,o:Math.random()*.2+.1});
const fit=()=>{W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0)};
fit();addEventListener("resize",fit);
const ps=Array.from({length:Math.round(Math.min(14,W/90))},()=>mk(0));
const loop=()=>{cx.clearRect(0,0,W,H);const lt=document.documentElement.dataset.theme==="light";
cx.fillStyle=lt?"#1f63e0":"#bfe0ff";cx.shadowColor=lt?"rgba(31,99,224,.6)":"rgba(61,139,255,.9)";cx.shadowBlur=4;
ps.forEach(p=>{p.y+=p.v;p.x+=p.d+Math.sin(p.y/60)*.15;if(p.y>H+10||p.x<-10||p.x>W+10)Object.assign(p,mk(1));cx.globalAlpha=p.o;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fill()});
requestAnimationFrame(loop)};loop()}
/* scroll rotation */
if(!rm){const sp=$$(".spin>svg"),hd2=$$(".deco>[data-p]");let rt=0;
const spin=()=>{rt=0;const y=scrollY;sp.forEach(s=>s.style.rotate=y*s.dataset.r+"deg");hd2.forEach(d=>d.style.rotate=y*d.dataset.p*.35+"deg")};
addEventListener("scroll",()=>{if(!rt)rt=requestAnimationFrame(spin)},{passive:true});spin()}
const f=$("#bf"),msg=$(".msg",f);f.d.min=new Date().toISOString().slice(0,10);
const text=()=>`Hello Empire, I’d like to book ${f.s.value} on ${f.d.value||"a date to be confirmed"} at ${f.t.value}. Name: ${f.n.value}. Phone: ${f.p.value}.`;
const ok=()=>{if(!f.n.value.trim()||!f.p.value.trim()||!f.d.value){msg.textContent="Add your name, phone number and a preferred date to continue.";return 0}return 1};
f.onsubmit=e=>{e.preventDefault();if(ok())msg.textContent=`Thank you, ${f.n.value.split(" ")[0]}. We’ve noted ${f.s.value} on ${f.d.value} at ${f.t.value} and will confirm by phone.`};
$("#wa").onclick=()=>{if(ok())open("https://wa.me/919999999999?text="+encodeURIComponent(text()),"_blank","noopener")};
/* scroll rotate + parallax on photos */
if(!rm){
const fx=$$(".portrait,.card .img,#mas figure,.ba");
fx.forEach((e,i)=>{e.classList.add("fx");e.style.setProperty("--dir",i%2?1:-1)});
const vis=new Set();let q=0;
const upd=()=>{q=0;const h=innerHeight;vis.forEach(e=>{const r=e.getBoundingClientRect();
const p=Math.max(-1,Math.min(1,(r.top+r.height/2-h/2)/(h/2+r.height/2)));e.style.setProperty("--sp",p.toFixed(3))})};
const req=()=>{if(!q)q=requestAnimationFrame(upd)};
const fio=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target));req()},{rootMargin:"20% 0px"});
fx.forEach(e=>fio.observe(e));
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);
}